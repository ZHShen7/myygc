import Footer from "./Footer"
import styles from './layout.module.css'
export default function Layout(props) {
    return (
        <div>
            <div className={styles.container}>{props.children}</div>
            <Footer></Footer>
        </div>
    )
}