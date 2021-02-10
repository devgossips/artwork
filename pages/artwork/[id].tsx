import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import randomstring from 'randomstring';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Layout from 'components/Layout';
import EditArtworkHeader from 'components/edit-artwork-page/EditArtworkHeader';
import ButtonSelectGroup from 'components/ButtonSelectGroup';
import ValueSlider from 'components/ValueSlider';
import { getAllArtworkIds, getArtwork } from 'lib/artwork';
import styles from './EditArtworkPage.module.scss';
import dynamic from 'next/dynamic';
import _ from 'lodash';
import ToggleSwitch from 'components/ToggleSwitch';

const Doodle = dynamic(() => import('components/Doodle'), {
  ssr: false,
});

const ColorPicker = dynamic(() => import('components/ColorPicker'), {
  ssr: false,
});

export default function EditArtworkPage({ artwork }) {
  const [palette, setPalette] = useState(
    artwork.hasOwnProperty('palette') ? artwork.palette : []
  );
  const [optionValues, setOptionValues] = useState(
    _.cloneDeep(artwork.options.map((o) => o.default))
  );
  const [styleCode, setStyleCode] = useState('');
  const [doodleCode, setDoodleCode] = useState('');
  const [seed, setSeed] = useState('0000');
  const doodleRef = React.createRef();
  const router = useRouter();
  const isScreenXS = useMediaQuery('(max-width: 747.99px)');
  const width = isScreenXS ? 240 : 360;
  const height = width * 1.5;

  useEffect(() => {
    if (
      router.query.hasOwnProperty('palette') &&
      router.query.palette.length === artwork.palette.length &&
      !_.isEqual(palette, router.query.palette)
    ) {
      setPalette(router.query.palette);
    }

    artwork.options.forEach((option, optionIndex) => {
      if (router.query.hasOwnProperty(option.id)) {
        const queryVal = router.query[option.id];

        if (typeof option.default === 'string') {
          setOptionByIndex(optionIndex, queryVal);
        } else if (typeof option.default === 'number') {
          setOptionByIndex(optionIndex, Number(queryVal));
        } else if (typeof option.default === 'boolean') {
          setOptionByIndex(optionIndex, queryVal === 'true');
        }
      }
    });

    if (router.query.hasOwnProperty('seed') && seed !== router.query.seed) {
      setSeed(router.query.seed as string);
    }
  }, [router.query]);

  useEffect(() => {
    updateDoodleCode();
  }, [isScreenXS, palette, optionValues]);

  // Update URL query parameters if necessary
  useEffect(() => {
    if (_.isEqual(router.query, { id: router.query.id })) {
      return;
    }

    const newQuery = Object.assign({}, router.query, {
      palette,
      seed,
    });

    artwork.options.forEach((o, idx) => {
      newQuery[o.id] = String(optionValues[idx]);
    });

    if (!_.isEqual(router.query, newQuery)) {
      router.replace({
        pathname: router.pathname,
        query: newQuery,
      });
    }
  }, [seed, palette, optionValues]);

  const setOptionByIndex = (index: number, value: any) => {
    setOptionValues((prev) => {
      const newValues = _.clone(prev);
      newValues[index] = value;

      return newValues;
    });
  };

  const randomizeSeed = () => {
    setSeed(randomstring.generate({ length: 4 }));
  };

  const exportArtwork = async () => {
    let result = await (doodleRef.current as any).export({
      scale: Math.ceil(3000 / width),
      download: true,
    });
  };

  const getColorsStyleCode = (colors) => {
    let colorStyleVariables = '';

    colors.forEach((color, idx) => {
      colorStyleVariables += `--color${idx}: ${color};\n`;
    });

    return colorStyleVariables;
  };

  const updateDoodleCode = () => {
    let newStyleCode = artwork.code.style;
    let newDoodleCode = artwork.code.doodle;

    artwork.options.forEach((option, index) => {
      switch (option.type) {
        case 'ButtonSelectGroup':
        case 'Slider':
          newStyleCode = newStyleCode
            .split(option.replace)
            .join(optionValues[index]);

          newDoodleCode = newDoodleCode
            .split(option.replace)
            .join(optionValues[index]);

          break;
        case 'ToggleSwitch':
          if (optionValues[index]) {
            newStyleCode = newStyleCode.split(option.replace).join(option.code);
            newDoodleCode = newDoodleCode
              .split(option.replace)
              .join(optionValues[index]);
          } else {
            newStyleCode = newStyleCode.split(option.replace).join('');
            newDoodleCode = newDoodleCode.split(option.replace).join('');
          }
          break;
        default:
          break;
      }
    });

    newDoodleCode = newDoodleCode.split('${width}').join(String(width) + 'px');
    newDoodleCode = newDoodleCode
      .split('${height}')
      .join(String(height) + 'px');

    newStyleCode = getColorsStyleCode(palette) + newStyleCode;

    setStyleCode(newStyleCode);
    setDoodleCode(newDoodleCode);
  };

  const getOptionControlComponent = (
    option: any,
    optionIndex: number
  ): React.ReactNode => {
    const controlValue = optionValues[optionIndex];
    const onChange = (value) => setOptionByIndex(optionIndex, value);

    let componentJsx = null;

    switch (option.type) {
      case 'ButtonSelectGroup':
        componentJsx =
          option.options && option.options.length > 0 ? (
            <ButtonSelectGroup
              options={option.options}
              value={controlValue}
              onChange={onChange}
            />
          ) : null;
        break;
      case 'Slider':
        componentJsx = (
          <div className={styles.valueSliderWrapper}>
            <ValueSlider
              min={option.min}
              max={option.max}
              step={option.step}
              value={controlValue}
              onChange={onChange}
            />
          </div>
        );
        break;
      case 'ToggleSwitch':
        componentJsx = (
          <ToggleSwitch isChecked={controlValue} onChange={onChange} />
        );
        break;
      default:
        break;
    }

    return componentJsx ? (
      <div key={option.id} className={styles.optionBox}>
        <h3>{option.displayName}</h3>
        {componentJsx}
      </div>
    ) : null;
  };

  return (
    <Layout>
      <Head>
        <title>Customize {artwork.name}</title>
      </Head>

      <div className={styles.pageWrapper}>
        <EditArtworkHeader onRedraw={randomizeSeed} onExport={exportArtwork} />

        <main className={styles.editArtworkSection}>
          <div
            className={styles.previewWrapper}
            style={{
              backgroundColor: palette.length > 0 ? palette[0] : 'transparent',
            }}
          >
            <div className={styles.doodleFrame}>
              <Doodle
                name={artwork.slug}
                seed={seed}
                styleCode={styleCode}
                doodleCode={doodleCode}
                doodleRef={doodleRef}
              />
            </div>
          </div>

          <div className={styles.optionsWrapper}>
            <div className={styles.options}>
              {palette.length > 0 && (
                <div className={styles.optionBox}>
                  <h3>Palette</h3>
                  <div className="colors">
                    {palette.map((hex, index) => (
                      <ColorPicker
                        key={'color' + index}
                        index={index}
                        handleColorChange={(color) => {
                          const colorHEXAString = color.toHEXA().toString();

                          setPalette((prevPalette) => {
                            const newPalette = _.clone(prevPalette);
                            newPalette[index] = colorHEXAString;

                            return newPalette;
                          });
                        }}
                        color={hex}
                      />
                    ))}
                  </div>
                </div>
              )}

              {artwork.options.map((option, optionIndex) =>
                getOptionControlComponent(option, optionIndex)
              )}
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}

export const getStaticPaths = async () => {
  const questionIds = await getAllArtworkIds();
  const paths = questionIds.map((questionId) => ({
    params: {
      id: questionId,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const artwork = await getArtwork(params.id);

  return {
    props: {
      artwork,
    },
  };
};
