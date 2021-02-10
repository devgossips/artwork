import styles from './ToggleSwitch.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type ToggleSwitchPropTypes = {
  isChecked: boolean;
  onChange: (checked) => void;
};

export default function ToggleSwitch({
  isChecked,
  onChange,
}: ToggleSwitchPropTypes) {
  return (
    <div>
      <label
        className={cx('toggleSwitch', {
          isChecked,
        })}
      >
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => {
            onChange(e.target.checked);
          }}
          className={styles.toggleCheckbox}
        />
      </label>
    </div>
  );
}
