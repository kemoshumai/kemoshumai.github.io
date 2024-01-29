import styles from "./secret.module.css"

export default function Secret() {
  return (
    <div className={styles.main}>
      <h1>Xx 秘密のページへようこそ xX</h1>
      <p>よくここを見つけましたね！</p>
      <marquee>あなたは1000000000憶人目のお客様ですwww</marquee>
      <p>以下【記念】隠し漫画</p>
      <img className={styles.manga} src="/kakusimanga.png" alt="隠し漫画" />
      <p>以上、隠し漫画でした。</p>
      <p>よくわかんないよね...古って言われてもね...</p>
      <p>とりあえずフォントと文字色と演出を昔っぽくしてみたよ。</p>
      <p>あと足りないのは...思想の強さとか？</p>
      <p>残念ながらカウンターは付けれなかった...</p>
      <h1>古って何！</h1>
      <p>こんな感じでＯＫでしょうか(´・ω・｀)</p>
      <p>ノスタルジー？を感じてくれたら、管理人も大喜びします。</p>
      <p><span className={styles.blink}>ぬるぽ。</span></p>
      <p>BMSほか、zipの配布サイトとか</p>
      <p>Linuxのバイナリ落ちてるような個人サイトとか</p>
      <p>今でもこういう雰囲気が残っているような気がします( *´艸｀)</p>
      <p><span className={styles.blink}>ガッ</span></p>
      <p>ほんとはHTML4.1とか</p>
      <p>ホームページビルダーとかを使えば</p>
      <p>完全再現できんのかもしれないけど</p>
      <p>GitHub Pagesでホスティングするし</p>
      <p>結局Next.jsでゴリゴリ書きました。</p>
      <p>Old meets New.ってね。</p>
      <p>くるってる？それ、誉め言葉ね。</p>
      <p>いつも隣にいるミーシェちゃんにもこのページ見せたけど</p>
      <p><i>お前誰？</i>って言われたわ</p>
      <p>一般にはその程度の知名度。</p>
      <p>じゃ</p>
      <p>ノシ</p>
      <div className={styles.links}>
        <h2>相互リンク様</h2>
        <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
          <img src="tsuri_banner.png" alt="エモシューマイあります" />
        </a>
      </div>
      <p>ネタが若い。</p>
    </div>
  )
}