import JumboHeader from './jumboheader'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.main}>
      <section>
        <JumboHeader />
      </section>
    </div>
  )
}
