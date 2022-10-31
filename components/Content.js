import styles from './content.module.css'

export default function Content(props) {
  return (
    <div className={styles.container}>
        {props.children}
    </div>
  )
}
