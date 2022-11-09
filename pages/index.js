import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shahrul</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Click below
        </h1>

        <div className={styles.grid}>
          <a href="./test1" className={styles.card}>
            <h2>Challenge 1 &rarr;</h2>
            <p>Infinite Loading</p>
          </a>

          <a href="./test2a" className={styles.card}>
            <h2>Challenge 2 &rarr;</h2>
            <p>Animation 60mb</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
