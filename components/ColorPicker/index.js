import React, { useEffect } from 'react';
import Pickr from '@simonwep/pickr';
import '@simonwep/pickr/dist/themes/monolith.min.css';

export default function ColorPicker({ index, color, handleColorChange }) {
  const pickerClassName = `color-picker-${index}`;

  const colorChangeCallback = (color, instance) => {
    handleColorChange(color);
  };

  useEffect(() => {
    // Simple example, see optional options for more configuration.
    const pickr = Pickr.create({
      el: `.${pickerClassName}`,
      theme: 'monolith',
      default: color,
      defaultRepresentation: 'HEX',
      swatches: [],
      components: {
        // Main components
        preview: true,
        hue: true,
        opacity: true,

        // Input / output Options
        interaction: {
          hex: false,
          rgba: false,
          hsva: false,
          input: true,
          clear: false,
          save: true,
        },
      },
    });

    pickr.on('save', colorChangeCallback);

    return () => {
      // pickr.off('save', colorChangeCallback);
      pickr.destroyAndRemove();
    };
  }, []);

  return (
    <>
      <div className={`${pickerClassName} color-picker`} />
    </>
  );
}
