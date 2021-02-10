import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import styles from './MakeYourArt.module.scss';

export default function MakeYourArt() {
  return (
    <div className={styles.makeYourArtSection}>
      <Container>
        <Row>
          <Col>
            <div className={styles.center}>
              <div className={styles.messageWrapper}>
                <p className={styles.message}>
                  Create your beautiful design in under a minute.
                </p>
              </div>

              <Link href="/select-artwork">
                <a className={styles.actionBtn}>Make your art</a>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
