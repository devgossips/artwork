import { useRef } from 'react';
import 'css-doodle';

export default function ExportTest() {
  const doodleRef = useRef();

  const exportArtwork = async () => {
    let result = await doodleRef.current.export({
      scale: 15.5,
      download: true,
    });
  };

  return (
    <div>
      <h1>iOS Export Test</h1>
      <style>
        {`
          css-doodle#export-test {
            --color0: #000000;

            --rule: (
              :doodle {
                grid-gap: 1px;
                @grid: 1x13;
                @size: 10em 15em;
              }

              background: #fff;

              :container {
                background: var(--color0);
              }
              
            )
          }
        `}
      </style>
      <css-doodle
        id="export-test"
        seed="0000"
        use="var(--rule)"
        ref={doodleRef}
      />

      <button onClick={exportArtwork}>Export</button>
    </div>
  );
}
