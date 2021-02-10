import { Element } from 'react-scroll';
import Link from 'next/link';
import Image from 'next/image';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './BrowseArtwork.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

export default function BrowseArtworkSection() {
  return (
    <Element name="section-browse-artwork">
      <div className={styles.browseArtworkSection}>
        <Container>
          <Row>
            <Col md={12}>
              <span className={styles.subheading}>Browse artwork</span>
              <h3 className="section-title">
                Pick a design and start doodling
              </h3>
            </Col>
          </Row>
        </Container>

        <Container className="container-fluid-on-mobile">
          <Row noGutters={true}>
            <Col md={3} sm={6}>
              <Link href={`/artwork/radius/`}>
                <div className={styles.galleryCard}>
                  <h4 className={styles.white}>Radius</h4>
                  <Image
                    src="/images/thumb_radius.png"
                    alt="Radius"
                    width={800}
                    height={800}
                  />
                </div>
              </Link>
            </Col>

            <Col md={3} sm={6}>
              <Link href={`/artwork/mixtape/`}>
                <div className={styles.galleryCard}>
                  <h4>Mixtape</h4>
                  <Image
                    src="/images/thumb_mixtape.png"
                    alt="Mixtape"
                    width={800}
                    height={800}
                  />
                </div>
              </Link>
            </Col>

            <Col md={3} sm={6}>
              <Link href={`/artwork/odessa/`}>
                <div className={styles.galleryCard}>
                  <h4 className={styles.white}>Odessa</h4>
                  <Image
                    src="/images/thumb_odessa.png"
                    alt="Odessa"
                    width={800}
                    height={800}
                  />
                </div>
              </Link>
            </Col>

            <Col md={3} sm={6}>
              <Link href={`/artwork/symmetry/`}>
                <div className={styles.galleryCard}>
                  <h4>Symmetry</h4>
                  <Image
                    src="/images/thumb_symmetry.png"
                    alt="Symmetry"
                    width={800}
                    height={800}
                  />
                </div>
              </Link>
            </Col>
          </Row>

          <Row noGutters={true}>
            <Col md={3} sm={6}>
              <Link href={`/artwork/veil/`}>
                <div className={styles.galleryCard}>
                  <h4>Veil</h4>
                  <Image
                    src="/images/thumb_veil.png"
                    alt="Veil"
                    width={800}
                    height={800}
                  />
                </div>
              </Link>
            </Col>

            <Col md={3} sm={6}>
              <Link href={`/artwork/blossom/`}>
                <div className={styles.galleryCard}>
                  <h4 className={styles.white}>Blossom</h4>
                  <Image
                    src="/images/thumb_blossom.png"
                    alt="Blossom"
                    width={800}
                    height={800}
                  />
                </div>
              </Link>
            </Col>

            <Col md={3} sm={6}>
              <Link href={`/artwork/disque/`}>
                <div className={styles.galleryCard}>
                  <h4>Disque</h4>
                  <Image
                    src="/images/thumb_disque.png"
                    alt="Disque"
                    width={800}
                    height={800}
                  />
                </div>
              </Link>
            </Col>

            <Col md={3} sm={6}>
              <Link href={`/select-artwork/`}>
                <div className={cx('galleryCard', 'actionCard')}>
                  <Image
                    src="/images/thumb_empty.png"
                    alt="View All"
                    width={800}
                    height={800}
                  />
                  <div className={styles.center}>
                    <span className={styles.text}>View All &#8594;</span>
                  </div>
                </div>
              </Link>
            </Col>
          </Row>
        </Container>
      </div>
    </Element>
  );
}
