import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import styles from '../../styles/Pages.module.css';
export default function Profile({ user = {} }) {
    return (
        <div className={styles.nomes}>
            <Navbar ></Navbar>
            <h2>{user.nome}</h2>
            <p>{user.usuario}</p>
            <p>{user.descricao}</p>
            <Footer></Footer>
        </div>
        
    )
    
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=princesa')
    const repo = await res.json()
    const user = await repo[context.params.id];
    return {
        props: { user }
    }
})

export async function getStaticPaths() {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=princesa')
    const repo = await res.json()
    const users = await repo;
    const paths = users.map((user, index) => {
        return { params: { id: String(index) } };
    });
    return {
        paths,
        fallback: false,
    };
}
