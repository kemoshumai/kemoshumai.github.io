import About from './about'
import JumboHeader from './jumboheader'
import styles from './page.module.css'
import SocialLinks from './sociallinks'

export default function Home() {
  return (
    <div className={styles.main}>
      <section>
        <JumboHeader />
      </section>
      <section>
        <About />
      </section>
      <section>
        <SocialLinks />
      </section>
    </div>
  )
}
