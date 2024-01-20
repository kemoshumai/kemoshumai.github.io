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

          <div className={styles.made}>
            <h3>KEMONI II</h3>
            <p>より本格的なコントローラーです。</p>
            <p>遅延が改善されたほか、BLE-MIDIによりPCに接続することで実際のDJソフトを動かすことができる多機能コントローラーです。</p>
            <p>だいたい8000円くらいで作れます。 </p>
            <blockquote className="twitter-tweet"><p lang="ja" dir="ltr">家がゲーセンなんだけど <a href="https://t.co/Z5CqWeWPsx">pic.twitter.com/Z5CqWeWPsx</a></p>&mdash; けもシューマイ (@kemoshumai) <a href="https://twitter.com/kemoshumai/status/1631956359884472326?ref_src=twsrc%5Etfw">March 4, 2023</a></blockquote>
            <blockquote className="twitter-tweet"><p lang="ja" dir="ltr">左下の映像だけならな...... <a href="https://t.co/KQRYHPLPNo">pic.twitter.com/KQRYHPLPNo</a></p>&mdash; けもシューマイ (@kemoshumai) <a href="https://twitter.com/kemoshumai/status/1631706858871488512?ref_src=twsrc%5Etfw">March 3, 2023</a></blockquote>
          </div>

          <div className={styles.made}>
            <h3>OTG</h3>
            <p>半日(12時間)で作った音ゲーです。</p>
            <p>VRChatでよく見るミラーボタンをタイミング良く押します。</p>
            <p>現在非公開</p>
            <blockquote className="twitter-tweet"><p lang="ja" dir="ltr">無理でしょこの量のボタンは！！！！ <a href="https://t.co/CXss2PODCD">pic.twitter.com/CXss2PODCD</a></p>&mdash; けもシューマイ (@kemoshumai) <a href="https://twitter.com/kemoshumai/status/1595429140475576320?ref_src=twsrc%5Etfw">November 23, 2022</a></blockquote>
          </div>

          <div className={styles.made}>
            <h3>Tsuilkbeat OTG</h3>
            <p>OTGの次回作です。今後に期待。</p>
          </div>

        </div>

      </div>
      <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script> 
    </div>
  )
}