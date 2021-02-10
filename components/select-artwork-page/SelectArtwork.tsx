import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';
import styles from './SelectArtwork.module.scss';

export default function SelectArtwork() {
  return (
    <main className={styles.selectArtworkSection}>
      <div className={styles.grayBackground}>
        <Container>
          <Row>
            <Col>
              <h2>First, pick a pre-made design from our gallery.</h2>
            </Col>
          </Row>
        </Container>

        <div className="container container-fluid-on-mobile">
          <Row noGutters={true}>
            <Col md={3} sm={6}>
              <Link href="/artwork/radius?seed=0000">
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
              <Link href="/artwork/mixtape?seed=0000">
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
              <Link href="/artwork/odessa?seed=0000">
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
              <Link href="/artwork/symmetry?seed=0000">
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
              <Link href="/artwork/veil?seed=0000">
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
              <Link href="/artwork/blossom?seed=0000">
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
              <Link href="/artwork/disque?seed=0000">
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
              <Link href="/artwork/bloks?seed=0000">
                <div className={styles.galleryCard}>
                  <h4>Bloks</h4>
                  <Image
                    src="/images/thumb_bloks.png"
                    alt="Bloks"
                    width={800}
                    height={800}
                  />
                </div>
              </Link>
            </Col>
          </Row>

          <Row noGutters={true}>
            <Col md={3} sm={6}>
              <Link href="/artwork/terrain?seed=0000">
                <div className={styles.galleryCard}>
                  <h4 className={styles.white}>Terrain</h4>
                  <Image
                    src="/images/thumb_terrain.png"
                    alt="Terrain"
                    width={800}
                    height={800}
                  />
                </div>
              </Link>
            </Col>

            <Col md={3} sm={6}>
              <Link href="/artwork/trigram?seed=0000">
                <div className={styles.galleryCard}>
                  <h4 className={styles.white}>Trigram</h4>
                  <Image
                    src="/images/thumb_trigram.png"
                    alt="Trigram"
                    width={800}
                    height={800}
                  />
                </div>
              </Link>
            </Col>

            <Col md={3} sm={6}>
              <Link href="/artwork/ring?seed=0000">
                <div className={styles.galleryCard}>
                  <h4 className={styles.white}>Ring</h4>
                  <Image
                    src="/images/thumb_ring.png"
                    alt="Ring"
                    width={800}
                    height={800}
                  />
                </div>
              </Link>
            </Col>
          </Row>
        </div>
      </div>
    </main>
  );
}
