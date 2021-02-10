import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footerSection}>
      <Container>
        <Row>
          <Col
            lg={{
              span: 4,
              offset: 1,
            }}
            md={{
              span: 5,
            }}
          >
            <h5>ARTWORK</h5>

            <p>
              Copyright 2021.{' '}
              <Link href="/terms-of-service">
                <a>Terms of Service</a>
              </Link>{' '}
              <Link href="/privacy-policy">
                <a>Privacy Policy</a>
              </Link>
            </p>
          </Col>

          <Col
            lg={{
              span: 4,
              offset: 2,
            }}
            md={{
              span: 5,
              offset: 2,
            }}
          >
            <h5>About Us</h5>

            <p>
              Artwork lets you easily create timeless and beautifully generated
              patterns or artwork to use for wall art, websites, print materials
              and more.
            </p>
            <p>
              This free tool was built by{' '}
              <a href="http://github.com/devgossips">Sagnik Sahoo</a>.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
