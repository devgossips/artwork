import styles from './ButtonSelectGroup.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type ButtonSelectGroupPropTypes = {
  options: Array<string>;
  value: string;
  onChange: (value: string) => void;
};

export default function ButtonSelectGroup({
  options,
  value,
  onChange: handleSelect,
}: ButtonSelectGroupPropTypes) {
  return (
    <div className={styles.buttonSelectGroup}>
      {options.map((option) => (
        <div
          key={option}
          className={cx('option', {
            selected: value === option,
          })}
          onClick={() => {
            handleSelect(option);
          }}
        >
          {option}
        </div>
      ))}
    </div>
  );
}
