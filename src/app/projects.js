import Link from "next/link";
import styles from "./projects.module.css";

export default function Projects(){
  return (
    <div className={styles.main}>
      <h2>PROJECTS</h2>
      <div className={styles.project}>
        <div className={styles.title}>
          <img src="/KEMONI II.webp" alt="KEMONI" />
          <p>KEMONI - 音ゲーに関してのいろいろ</p>
          <div className={styles.made}>
            <h3>初代KEMONI</h3>
            <p>ボタンから自作した、ビートマニアが遊べそうな専用コントローラーです。だいたい2000円くらいで作ることができます。</p>
            <blockquote className="twitter-tweet"><p lang="ja" dir="ltr">激安で作った割にはだいぶ良い感じ～～～！！ <a href="https://t.co/vrqbTqBTx6">pic.twitter.com/vrqbTqBTx6</a></p>&mdash; けもシューマイ (@kemoshumai) <a href="https://twitter.com/kemoshumai/status/1594330827907031041?ref_src=twsrc%5Etfw">November 20, 2022</a></blockquote>
            <div className={styles.linkbutton}>
              <div className={styles.top_left}></div>
              <div className={styles.bottom_right}></div>
              <Link href={""}>KEMONIの詳細はこちら</Link>
            </div>
          </div>
        </div>
      </div>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
    </div>
  )
}