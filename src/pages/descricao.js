import React from 'react';
import styles from '../styles/Pages.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';


function Descricao({ descricoes }) {

    return (
        <div>
        <Navbar />
        <div className={styles.nomes}>
           
            {descricoes.map((descricao, index) => (
                <div  href='/profile/[id]' as={`/profile/${index}`}>
                    <div key={descricao.id}> 
                    <p> {descricao.nome} </p> 
                    <p> {descricao.usuario} </p> 
                    <p> {descricao.descricao} </p> 
                    </div>
                </div>
            ))}
            
        </div>
        </div>

    )

}
export const getServerSideProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=princesa')
    const repo = await res.json()
    const descricoes = await repo;
    return {
        props: { descricoes }
    }
})
export default Descricao;


