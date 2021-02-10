import { useEffect, useRef } from 'react';
import 'css-doodle';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Hero.module.scss';
import Link from 'next/link';

export default function MainHero() {
  const doodleRef = useRef();
  let doodleAutoUpdateTimer = null;

  useEffect(() => {
    doodleAutoUpdateTimer = setInterval(() => {
      doodleRef.current.update();
    }, 2000);

    return () => {
      if (doodleAutoUpdateTimer) {
        clearInterval(doodleAutoUpdateTimer);
      }
    };
  }, []);

  return (
    <div className={styles.heroSection}>
      <div className={styles.doodleBackground}>
        <div className={styles.doodleWrapper}>
          <style>
            {`
              css-doodle#hero-doodle {
                --color0:#326dc9;
                --color1:#263349;
                --color2:#41d6f4;
                --color3:#d65ea6;
                --color4:#41d6f4;
                --color5:#d65ea6;
                
                /* set custom colors and inject z-index for the specific color to use for association */
                --randomColor: @p(var(--color1), var(--color2), var(--color3), var(--color4), var(--color5));
                --rule: (
                  /*Frequency options of 0.2, 0.4, 0.6, 0.8, 1.0 */
                  @random(0.2) { 
                    background: var(--randomColor);
                    -webkit-clip-path: @pick(circle(100% at 0 0), circle(100% at 100% 0), circle(100% at 100% 100%), circle(100% at 0 100%), circle(50% at 50% 50%), circle(25% at 50% 50%), polygon(0 0, 0% 100%, 100% 100%), polygon(100% 0, 0 0, 100% 100%), polygon(100% 0, 0 0, 0 100%), polygon(100% 100%, 100% 0, 0 100%));
                    clip-path: @pick(circle(100% at 0 0), circle(100% at 100% 0), circle(100% at 100% 100%), circle(100% at 0 100%), circle(50% at 50% 50%), circle(25% at 50% 50%), polygon(0 0, 0% 100%, 100% 100%), polygon(100% 0, 0 0, 100% 100%), polygon(100% 0, 0 0, 0 100%), polygon(100% 100%, 100% 0, 0 100%));
                    overflow:hidden;
                    
                    /* On or off option for displaying box shadows */
                    -webkit-box-shadow:0 0 @pick(0, 40)px rgba(0,0,0,0.2);
                    box-shadow:0 0 @pick(0, 40)px rgba(0,0,0,0.2);
            
                    -webkit-transition: ease @rand(200ms, 600ms);
                    transition: ease @rand(200ms, 600ms);
                  }
                  @random(0.05) {
                    width:100%;
                    height:100%;
                    overflow:hidden;
                    -webkit-clip-path: @pick(circle(100% at 0 0), circle(100% at 100% 0), circle(100% at 100% 100%), circle(100% at 0 100%));
                    clip-path: @pick(circle(100% at 0 0), circle(100% at 100% 0), circle(100% at 100% 100%), circle(100% at 0 100%));
                    background: repeating-linear-gradient(
                      @pick(45deg, 135deg),
                      var(--color0),
                      var(--color0) 5%,
                      var(--color1) 5%,
                      var(--color1) 10%
                    );
            
                  }
                );
              }`}
          </style>
          <css-doodle ref={doodleRef} id="hero-doodle" use="var(--rule)">
            {`
              :doodle {
                @grid: 14x7/ 100%;
                text-align:center;
                box-sizing:border-box;
              }
              :container {
                background: var(--color0);
                overflow:hidden;
              }
            `}
          </css-doodle>
        </div>
      </div>

      <div className={styles.contentBackground} />

      <Container>
        <Row className="align-items-center">
          <Col
            lg={{
              span: 6,
              offset: 3,
            }}
            md={{
              span: 6,
              offset: 3,
            }}
            sm={{ span: 8, offset: 2 }}
            xs={{ span: 12, offset: 0 }}
          >
            <div className={styles.heroContent}>
              <p className={styles.heroText}>
                Doodle with <br className="d-md-inline d-sm-none" />
                generated patterns
              </p>

              <div className={styles.heroActions}>
                <Link href="/select-artwork/">
                  <a className={styles.actionBtn}>Make your art</a>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
