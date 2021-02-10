import Slider from '@material-ui/core/Slider';
import { withStyles } from '@material-ui/core/styles';

const TabbiedSlider = withStyles({
  root: {
    color: '#232529',
    height: 8,
  },
  thumb: {
    height: 20,
    width: 20,
    backgroundColor: '#fff',
    border: '3px solid currentColor',
    marginTop: -8,
    marginLeft: -10,
    '&:focus, &:hover, &$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% - 2px)',
  },
  track: {
    height: 4,
    borderRadius: 4,
  },
  rail: {
    color: '#98a0af',
    height: 4,
    borderRadius: 4,
  },
})(Slider);

type ValueSliderPropTypes = {
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v) => void;
};

export default function ValueSlider({
  min,
  max,
  step,
  value,
  onChange,
}: ValueSliderPropTypes) {
  return (
    <TabbiedSlider
      defaultValue={0.4}
      getAriaValueText={(v) => `${v}%`}
      aria-labelledby="discrete-slider"
      valueLabelDisplay="auto"
      value={value}
      onChange={(ev, val) => {
        onChange(val);
      }}
      step={step}
      marks={false}
      min={min}
      max={max}
    />
  );
}
