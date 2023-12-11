import React from 'react';
import styles from '../styles/Pages.module.css';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Objetos({ users }) {
    return (

        <div className={styles.lista}>
            <Navbar />
            <h1> Lista de Princesas </h1>
            {users.map((objeto, index) => (
                <Link className="tops" href='/profile/[id]' as={`/profile/${index}`}>
                    <div key={objeto.id}> <p> {objeto.nome} </p> </div>
                </Link>

            ))}
        

            <Footer />
        </div>

    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=princesa')
    const repo = await res.json()
    const users = await repo;
    return {
        props: { users }
    }
})


