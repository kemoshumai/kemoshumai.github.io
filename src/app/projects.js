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

        <div className={styles.title}>
          <img src="/dirty_kemoshumai.png" alt="字が汚いツイート" />
          <p>人間味の有る(擁護)文字でツイートしてみませんか？</p>

          <div className={styles.made}>
            <h3>dirty.kemoshumai.com</h3>
            <p>私の手書きフォントでツイートができるサービスです。</p>
            <p><a href="https://dirty.kemoshumai.com/">こちら</a>からアクセスできます。 </p>
            <blockquote className="twitter-tweet"><p lang="ja" dir="ltr">= 手書きフォントのつくり方(自慢) =<br /><br />印刷して、書いて、スキャンする、を3000文字繰り返します。<br />一生使わなそうな漢字も、誰が使うか分からない絵文字も全部手書きします。<br />でも、書き終わって実際にフォントになったときの達成感がすごい…！<br /><br />写真は例のあのフォントの原本 <a href="https://t.co/S1B03vu1B9">pic.twitter.com/S1B03vu1B9</a></p>&mdash; けもシューマイ (@kemoshumai) <a href="https://twitter.com/kemoshumai/status/1601234419880452097?ref_src=twsrc%5Etfw">December 9, 2022</a></blockquote>
            <p>まあどんな文字かっていうと<span className=
            {styles.dirty}>こういう文字なんですが、漢字まで全部を手書きして取り込んだので普段使いに困らないくらいのクオリティになってます。</span></p>
            <p><span className={styles.dirty}>いえーい！ぴーすぴーーす！</span></p>
            <p><span className={styles.dirty}><ruby>韮<rt>ニラ</rt></ruby>も<ruby>薔薇<rt>バラ</rt></ruby>も<ruby>玉葱<rt>たまねぎ</rt></ruby>だって収録済み！</span></p>
            <p><span className={styles.dirty}>墾田永年私財法ーーーーーっ！</span></p>
          </div>

        </div>

        <div className={styles.title}>
          <img src="/kemoshumai_no_ashu.png" alt="けもシューマイの亜種" />
          <p>「けもシューマイになれるといいですね。」</p>

          <div className={styles.made}>
            <h3>診断メーカー版</h3>
            <p>本家です。</p>
            <p>なんて説明すればいいんだろう...</p>
            <p>けもシューマイの亜種を引けるガチャ？です。143種類います。</p>
            <p>君もけもシューマイを引こう！</p>
            <blockquote className="twitter-tweet"><p lang="ja" dir="ltr">へびギョウザ<a href="https://twitter.com/hashtag/%E3%81%91%E3%82%82%E3%82%B7%E3%83%A5%E3%83%BC%E3%83%9E%E3%82%A4%E3%81%AE%E4%BA%9C%E7%A8%AE?src=hash&amp;ref_src=twsrc%5Etfw">#けもシューマイの亜種</a> <a href="https://twitter.com/hashtag/shindanmaker?src=hash&amp;ref_src=twsrc%5Etfw">#shindanmaker</a><a href="https://t.co/AdHwN10Z1M">https://t.co/AdHwN10Z1M</a></p>&mdash; けもシューマイ (@kemoshumai) <a href="https://twitter.com/kemoshumai/status/1748607808088736171?ref_src=twsrc%5Etfw">January 20, 2024</a></blockquote>
            <div className={styles.linkbutton}>
              <div className={styles.top_left}></div>
              <div className={styles.bottom_right}></div>
              <a href={"https://shindanmaker.com/1134841"}>けもシューマイの亜種を引く</a>
            </div>
          </div>

          <div className={styles.made}>
            <h3>VRChat版</h3>
            <p>亜種です。</p>
            <p>VRChat内で遊ぶことができるアバターギミックです。 </p>
            <p>MA(モジュラーアバター)もだいぶ広まったのでいつか配布したいな。需要ないけど。</p>
            <blockquote className="twitter-tweet"><p lang="ja" dir="ltr">しれっと当ててて鳥肌立った<br />おめでとう！！！ <a href="https://t.co/Lo26QWjd2P">pic.twitter.com/Lo26QWjd2P</a></p>&mdash; けもシューマイ (@kemoshumai) <a href="https://twitter.com/kemoshumai/status/1624441457900945408?ref_src=twsrc%5Etfw">February 11, 2023</a></blockquote>
          </div>

        </div>

      </div>
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script> 
    </div>
  )
}