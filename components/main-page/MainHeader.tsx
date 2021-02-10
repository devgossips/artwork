import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Link as ScrollLink, Events as ScrollEvents } from 'react-scroll';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { motion, AnimatePresence } from 'framer-motion';
import { Col, Container, Row } from 'react-bootstrap';
import MenuButton from 'components/main-page/MenuButton';
import styles from './MainHeader.module.scss';

const MainPageNavigation = () => (
  <ul className={styles.pageNavigation}>
    <li>
      <ScrollLink to="section-how-it-works" smooth={true} duration={500}>
        How it works
      </ScrollLink>
    </li>

    <li>
      <ScrollLink to="section-browse-artwork" smooth={true} duration={600}>
        Browse artwork
      </ScrollLink>
    </li>

    <li>
      <ScrollLink to="section-example-uses" smooth={true} duration={700}>
        Example uses
      </ScrollLink>
    </li>
  </ul>
);

const SelectArtworkLinkButton = () => {
  return (
    <Link href="/select-artwork/">
      <a className={styles.actionBtn}>Make your art</a>
    </Link>
  );
};

export default function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isScreenDesktop = useMediaQuery('(min-width: 992px)');

  useEffect(() => {
    if (isScreenDesktop && isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isScreenDesktop]);

  useEffect(() => {
    ScrollEvents.scrollEvent.register('begin', (to, element) => {
      setIsMenuOpen(false);
    });

    return () => {
      ScrollEvents.scrollEvent.remove('begin');
    };
  }, []);

  return (
    <>
      {isMenuOpen && (
        <div
          className={styles.backdrop}
          onClick={(e) => {
            e.preventDefault();

            setIsMenuOpen(false);
          }}
        />
      )}

      <header className={styles.headerSection}>
        <Container>
          <Row className="align-items-center">
            <Col md={3} xs={4}>
              <Link href="/">
                <a className={styles.logoImageWrapper}>
                  <Image
                    src="/images/logo_tabbied_v3.svg"
                    alt="Tabbied"
                    layout="fixed"
                    width={52}
                    height={52}
                  />
                </a>
              </Link>
            </Col>

            <Col md={6} className="d-none d-md-block">
              <div className="align-center">
                <MainPageNavigation />
              </div>
            </Col>

            <Col md={3} xs={8}>
              <div className="align-right">
                <a
                  href="https://www.producthunt.com/posts/tabbied?utm_source=badge-top-post-badge&utm_medium=badge&utm_souce=badge-tabbied"
                  style={{
                    background:
                      'url("https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=279660&theme=light&period=daily") no-repeat center center',
                    display: 'inline-block',
                    width: '238px',
                    height: '49px',
                    lineHeight: 0,
                    marginTop: '10px',
                  }}
                  target="_blank"
                />
              </div>
            </Col>

            {/* <Col md={3} className="d-none d-md-block">
              <div className="align-right">
                <SelectArtworkLinkButton />
              </div>
            </Col>

            <Col xs={6} className="d-md-none">
              <div className={styles.menuBtnWrapper}>
                <MenuButton
                  isOpen={isMenuOpen}
                  onClick={() => {
                    setIsMenuOpen((v) => !v);
                  }}
                />
              </div>
            </Col> */}
          </Row>
        </Container>
        {/* 
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className={styles.mobileMenu}
              initial="closed"
              animate="open"
              exit={{
                height: 0,
                opacity: 0,
              }}
              variants={{
                open: {
                  height: 'auto',
                  opacity: 1,
                },
                closed: { height: 0, opacity: 0 },
              }}
            >
              <MainPageNavigation />

              <div className={styles.actionBtnWrapper}>
                <SelectArtworkLinkButton />
              </div>
            </motion.div>
          )}
        </AnimatePresence> */}
      </header>
    </>
  );
}
