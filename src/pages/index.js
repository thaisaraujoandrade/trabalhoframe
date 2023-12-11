import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import styles from '../styles/Pages.module.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title> Princesas - Home </title>
      </Head>
      <Navbar />
      <div className={styles.home}>
        <h1 className='titulo'> Princesas </h1>
        <main id={styles.main}>
          <p className='desc1'> 
          O termo geralmente se refere a jovens mulheres reais ou personagens de contos de fadas que possuem status real. As princesas são frequentemente associadas a histórias mágicas, castelos e eventos que giram em torno de sua vida como realeza.

          Além do significado literal, o conceito de “princesas” também pode ter conotações culturais e sociais. Muitas culturas incorporaram a figura da princesa nos seus mitos, lendas e contos populares, e estas histórias muitas vezes transmitem mensagens sobre bravura, amor, resiliência ou moralidade.
          <a href='/objetos'> Conheça todas as princesas!!</a>
          </p>
          <img className="img1" src='img1.jpg' alt='Princesas' />

        </main>

        

      </div>

      <Footer />
    </div>
  )
}