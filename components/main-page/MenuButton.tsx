import styles from './MenuButton.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

type MenuButtonProps = {
  isOpen: boolean;
  onClick: () => void;
};

export default function MenuButton({ isOpen, onClick }: MenuButtonProps) {
  return (
    <div
      className={cx('menuBtn', {
        open: isOpen,
      })}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      <div className={styles.menuIcon} />
    </div>
  );
}
