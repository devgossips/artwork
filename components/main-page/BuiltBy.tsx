import { Container, Row, Col } from 'react-bootstrap';
import Image from 'next/image';
import styles from './BuiltBy.module.scss';

export default function BuiltBy() {
  return (
    <div className={styles.builtBySection}>
      <Container>
        <Row>
          <Col
            md={{
              span: 6,
              order: 1,
            }}
            sm={{
              span: 12,
              order: 2,
            }}
          >
            <div className={styles.imageWrapper}>
              <Image
                src="/images/built_by_people.png"
                alt="Built by Sy Hong and Ye Joo Park"
                width={688}
                height={661}
              />
            </div>
          </Col>

          <Col
            md={{
              span: 5,
              offset: 1,
              order: 2,
            }}
            sm={{
              span: 12,
              offset: 0,
              order: 1,
            }}
          >
            <div className={styles.textHeader}>
              <span className={styles.subheading}>Creators of Tabbied</span>
              <h3 className="section-title">Built by pattern geeks</h3>
            </div>
            <div className={styles.textContent}>
              <p>
                We aim to build simple design tools that energize your
                creativity. Tabbied was initially developed as a tool for making
                wall art, but we quickly realized that it could be used for many
                other purposes. We’re very excited to see what you can make
                using out platform.
              </p>

              <p>
                We also like to give a special thanks to{' '}
                <a href="http://yuanchuan.dev/">Chuan Yuan</a>. He is the
                creator of <a href="https://css-doodle.com/">CSS-Doodle</a>, a
                web component we use to draw our patterns. Thanks to all the
                supporters of both CSS-Doodle and Tabbied. You are inspiring us
                to keep on making.
              </p>

              <p className={styles.people}>
                <span className={styles.names}>
                  <a href="https://www.syunghong.com/">Sy</a> &amp;{' '}
                  <a href="https://www.behance.net/yejoopark">Park</a>
                </span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
