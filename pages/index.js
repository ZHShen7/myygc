import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/Footer'
import Content from '../components/Content'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>主页</title>
      </Head>
      <Content></Content>
      <Footer active={'homepage'}></Footer>
    </div>
  )
}