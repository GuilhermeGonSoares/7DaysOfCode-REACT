import React from 'react';
import Menu from '../components/Menu';
import SignatureNewsletter from '../components/SignatureNewsletter';
import style from './HomePage.module.scss';
import fundoAmarelo from '../assets/img/Vector.png';
import imageHero from '../assets/img/imagem-hero.png';

function HomePage() {
  return (
    <main className={style.container}>
      <img className={style.fundoAmarelo} src={fundoAmarelo} alt="" />
      <Menu />
      <div className={style.news}>
        <div>
          <SignatureNewsletter />
        </div>
        <div className={style.hero}>
          <img src={imageHero} alt="" />
        </div>
      </div>
    </main>
  );
}

export default HomePage;
