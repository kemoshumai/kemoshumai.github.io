import About from './about'
import Contact from './contact'
import Footer from './footer'
import JumboHeader from './jumboheader'
import styles from './page.module.css'
import Projects from './projects'
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
      <section>
        <Projects />
      </section>
      <section>
        <Contact />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}
