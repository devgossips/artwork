import { Element } from 'react-scroll';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './ExampleUses.module.scss';

export default function ExampleUsesSection() {
  return (
    <Element name="section-example-uses">
      <div className={styles.exampleUsesSection}>
        <Container>
          <Row>
            <Col>
              <span className={styles.subheading}>Example uses</span>
              <h3 className="section-title">Use it for just about anything</h3>
            </Col>
          </Row>
        </Container>

        <Container className="container-fluid-on-mobile">
          <Row noGutters={true}>
            <Col md={4} sm={6}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/uses_wall_art.jpg"
                  alt="Wall Art"
                  width={748}
                  height={808}
                />
              </div>
            </Col>

            <Col md={4} sm={6}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/uses_notebook.jpg"
                  alt="Stationery"
                  width={748}
                  height={808}
                />
              </div>
            </Col>

            <Col md={4} sm={6}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/uses_tshirt.jpg"
                  alt="Tshirt"
                  width={748}
                  height={808}
                />
              </div>
            </Col>

            <Col md={4} sm={6}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/uses_packaging.jpg"
                  alt="Packaging"
                  width={748}
                  height={808}
                />
              </div>
            </Col>

            <Col md={8}>
              <div className={styles.imageWrapper}>
                <Image
                  src="/images/uses_devices.jpg"
                  alt="Devices"
                  width={779}
                  height={421}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Element>
  );
}
