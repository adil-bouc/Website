import React, { useEffect } from "react";
import { Link } from "react-router";
import Footer from "../../components/Footer/Footer";
import Transition from "../../components/transition/Transition";
import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";
import MusicPlayer from "../../components/MusicPlayer/MusicPlayer";

import "./Home.css";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactLenis, useLenis } from "lenis/react";

const Home = () => {
  const lenis = useLenis(({ scroll }) => {});

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.create({
      trigger: ".mix-tape",
      start: "top bottom",
      end: "bottom bottom",
      onUpdate: (self) => {
        gsap.set(".strip", {
          x: self.progress * 300,
        });
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="page home">
        <section className="hero">
          <div className="hero-img">
            <ParallaxImage src="/home/hero.jpg" alt="" />
          </div>

          <div className="hero-header">
            <h1>
              JUSTON <br /> RECORDS
            </h1>
            <p>Passionnés de musique depuis leur jeunesse, Juste, Tony et Willy ont fondé Juston Records en 2006, en combinant leurs prénoms pour créer le nom du label parisien.</p>
            <div className="stickers">
              <img src="/stickers.png" alt="" />
            </div>
            <button>
              <Link to="/contact">Get in touch</Link>
            </button>
          </div>

          <div className="news-article">
            <div className="news-article-title">
              <p className="primary">
                Nouveaux Artistes 2024 : <br /> Découvrez Nos Talents
              </p>
            </div>
            <div className="news-article-info">
              <p>7.1.2024</p>
              <p>News</p>
            </div>
          </div>
        </section>

        <section className="site-intro">
          <div className="intro-col">
            <p className="primary">Empowering Creativity. Redefining Sound.</p>
            <p>Shaping the Future of Music with AI</p>

            <MusicPlayer />
          </div>
          <div className="intro-col">
            <p>L'industrie musicale évolue constamment.</p>
            <h2>
              Notre Vision <br /> Musicale
            </h2>
            <h3>Découvrir et développer les talents de demain.</h3>
            <p>
              Chez Juston Records, nous croyons en la puissance de la musique pour rassembler les gens. 
              Notre label s'engage à découvrir et développer des artistes talentueux, 
              en leur offrant un environnement créatif et professionnel pour s'épanouir.
            </p>
            <div className="intro-img">
              <div className="intro-img-wrapper">
                <ParallaxImage src="/home/site-intro.jpg" alt="" />
              </div>
            </div>
          </div>
        </section>

        <section className="cover">
          <div className="cover-img">
            <ParallaxImage src="/home/cover.jpg" alt="" />
          </div>

          <div className="cover-copy">
            <h3>Notre Engagement</h3>
            <h2>La Musique Avant Tout</h2>
            <p>
              Juston Records s'engage à promouvoir une musique authentique et de qualité. 
              Notre mission est de soutenir nos artistes dans leur développement artistique 
              tout en leur offrant une visibilité internationale.
            </p>
            <br />
            <br />
            <p>
              By working with educators, legal specialists, industry innovators,
              and policymakers, we are driving the creation of ethical standards
              and advocating for robust policies that safeguard the future of
              artistry in the age of AI.
            </p>

            <div className="cover-cta">
              <button>
                <Link to="/">Our Mission</Link>
              </button>
            </div>
          </div>
        </section>

        <section className="mix-tape">
          <p className="primary">Nos Dernières Sorties</p>
          <p>Juston Records</p>

          <h1>
            De la Production <br />
            Au Succès
          </h1>

          <div className="tape">
            <div className="strip">
              <img src="/home/strip.png" alt="" />
            </div>
            <div className="tape-img">
              <img src="/home/tape.png" alt="" />
            </div>
          </div>

          <div className="tape-info">
            <p>
              Découvrez nos dernières productions et les artistes qui font 
              la renommée de notre label.
            </p>
            <br />
            <br />
            <p>
              Juston Records accompagne ses artistes de la production à la 
              promotion, en passant par la distribution et le développement 
              de leur carrière.
            </p>

            <div className="sticker">
              <img src="/stickers-dark.png" alt="" />
            </div>
          </div>
        </section>

        <section className="latest-updates">
          <h1>Actualités</h1>
          <p className="lp-tagline">
            Découvrez les dernières actualités de nos artistes, les sorties à venir 
            et les événements Juston Records.
          </p>

          <div className="updates-page-link">
            <Link to="/">Voir Toutes les Actualités</Link>
          </div>

          <div className="articles-row">
            <div className="article">
              <div className="article-img">
                <ParallaxImage src="/updates/article1.jpg" alt="" speed={0.1} />
              </div>
              <div className="article-title">
                <h3>
                  Nouvelle Signature : L'artiste prometteur rejoint Juston Records
                </h3>
              </div>
              <div className="article-link">
                <p className="primary">
                  <Link to="/">Lire Plus</Link>
                </p>
              </div>
            </div>

            <div className="article">
              <div className="article-img">
                <ParallaxImage src="/updates/article2.jpg" alt="" speed={0.1} />
              </div>
              <div className="article-title">
                <h3>
                  Festival d'été : Retrouvez nos artistes sur scène
                </h3>
              </div>
              <div className="article-link">
                <p className="primary">
                  <Link to="/">Lire Plus</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(Home);
