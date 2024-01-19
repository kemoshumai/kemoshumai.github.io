import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles.main}>
      <div className={styles.section_edge}></div>
      <div className={styles.header}>
        <p>ハイラル平原に巣食う</p>
        <h1>けもシューマイ</h1>
      </div>
      <img className={styles.twitter_icon} src="kemoshumai_icon_twitter.jpg" alt="けもシューマイ" />
      <p>昔から何かを作ることが好きな人間。</p>
      <p>HSPから始まり、JavaScript/HTML/Python/Unity/Arduino/Rust/作曲/Blenderなどをやっています。</p>
      <p>AdobeのサブスクとJavaが苦手。</p>
      <p>いつかつよつよエンジニアになってろくろを回したい。</p>
      <div className={styles.feature_field}>
        <div>
          <h3>誕生日</h3>
          <p>3月12日(永遠の12才)</p>
        </div>
        <div>
          <h3>血液 / 星座</h3>
          <p>AB型 うお座</p>
        </div>
        <div>
          <h3>性癖</h3>
          <p><i>最重要機密</i></p>
        </div>
      </div>
    </div>
  )
}