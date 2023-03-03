import React from 'react';
import Menu from '../components/Menu';
import SignatureNewsletter from '../components/SignatureNewsletter';
import style from './HomePage.module.scss';
import fundoAmarelo from '../assets/img/Vector.png';
import imageHero from '../assets/img/imagem-hero.png';

function HomePage() {
  return (
    <main className={style.container}>
      <img className={style.img} src={fundoAmarelo} alt="" />
      <Menu />
      <SignatureNewsletter />
      <img className={style.hero} src={imageHero} alt="" />
    </main>
  );
}

export default HomePage;
