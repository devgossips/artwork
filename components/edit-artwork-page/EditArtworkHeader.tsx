import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import styles from './EditArtworkHeader.module.scss';
import classNames from 'classnames/bind';
import { BiShuffle } from 'react-icons/bi';
import { RiDownloadLine } from 'react-icons/ri';

const cx = classNames.bind(styles);

type EditArtworkHeaderPropTypes = {
  onRedraw: () => void;
  onExport: () => void;
};

export default function EditArtworkHeader({
  onRedraw,
  onExport,
}: EditArtworkHeaderPropTypes) {
  return (
    <header className={styles.header}>
      <Container>
        <Row className="align-items-center">
          <Col md={4} xs={6}>
            <Link href="/select-artwork">
              <a className={styles.backLink}>← Back to gallery</a>
            </Link>
          </Col>

          <Col md={4} className="d-none d-md-block">
            <h1 className="align-center">Make your art</h1>
          </Col>

          <Col md={4} xs={6}>
            <div className="align-right">
              <button className={cx('btn', 'btnRedraw')} onClick={onRedraw}>
                <BiShuffle className={styles.reactIcon} />
                <span className={styles.label}>Redraw</span>
              </button>
              <button className={cx('btn', 'btnExport')} onClick={onExport}>
                <RiDownloadLine className={styles.reactIcon} />
                <span className={styles.label}>Export</span>
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
