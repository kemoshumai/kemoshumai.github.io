import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.main}>
      <div className={styles.section_edge}></div>
      <h1>About</h1>
      <img className={styles.twitter_icon} src="kemoshumai_icon_twitter.jpg" alt="けもシューマイ" />
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, ipsam tempora ullam dolorum dignissimos cumque amet ad necessitatibus fugiat enim commodi? Tenetur rerum quod, repellat aliquid officiis impedit? Cupiditate, suscipit.</p>
    </div>
  )
}