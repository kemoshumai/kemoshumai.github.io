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

        <div className={styles.title}>
          <img src="/vrchat_tools.png" alt="VRChatギミック" />
          <p>作ったVRChatギミック集</p>

          <div className={styles.made}>
            <h3>Twitter for SuRroom</h3>
            <p>SuRroomの中で任意のアカウントのツイートが見れる機能です。</p>
            <p>同一インスタンス内のほかのユーザーに同期されるほか、 後から来た人(LateJoiner)にも同期されます。 </p>
            <p>ただし、最近のTwitterAPIの動向により公開を終了しています。 </p>
            <blockquote className="twitter-tweet"><p lang="ja" dir="ltr">SurRoomで自分のツイッター見てる <a href="https://t.co/LJwEGzSE5E">https://t.co/LJwEGzSE5E</a> <a href="https://t.co/WM1WtlmJ5F">pic.twitter.com/WM1WtlmJ5F</a></p>&mdash; けもシューマイ (@kemoshumai) <a href="https://twitter.com/kemoshumai/status/1619700011943751682?ref_src=twsrc%5Etfw">January 29, 2023</a></blockquote>
          </div>

          <div className={styles.made}>
            <h3>SAS - Sleeping Auto Shift</h3>
            <p>インスタンス内のフレンドの起床を検知し鳴るアラームです。</p>
            <p>フレンドへの負担ゼロで、フレンドと一緒の時間に起きることができます。</p>
            <p><strong>現在このギミックはモジュラーアバターに移行する作業をしています。現行のバージョンはレガシーとなります、必ずバックアップを取ったうえで、MAに移行してください。</strong></p>
            <img src="FohkHJ2aMAAvnZU.jpg" alt="" />
            <div className={styles.linkbutton}>
              <div className={styles.top_left}></div>
              <div className={styles.bottom_right}></div>
              <a href={"https://kemoshumai.booth.pm/items/4530388"}>商品ページへ(無料)</a>
            </div>
          </div>

          <div className={styles.made}>
            <h3>Shumai Auto Copy</h3>
            <p>VRChatのカメラで写真を撮ると撮った写真を自動でクリップボードにコピーしてくれるアプリです。</p>
            <p>VRChat公式でやる方法を探しても見つからなかったので自分で作りました。公式の機能として欲しいくらいです。</p>
            <p>Rustで書いたからか、結構処理が低負荷で、常駐しても違和感ないので気に入ってます。とりあえず入れとくべき。</p>
            <img src="53a1487f-36fc-41d3-8356-c8a2b8f3b685.png" alt="" />
            <div className={styles.linkbutton}>
              <div className={styles.top_left}></div>
              <div className={styles.bottom_right}></div>
              <a href={"https://kemoshumai.booth.pm/items/5214867"}>商品ページへ(無料)</a>
            </div>
          </div>

          <div className={styles.made}>
            <h3>Shumai Pad v2</h3>
            <p>音声認識してVRChatのChatboxで表示するアプリです。</p>
            <p>旧式のシューマイパッドにも対応しています。</p>
            <div className={styles.linkbutton}>
              <div className={styles.top_left}></div>
              <div className={styles.bottom_right}></div>
              <a href={"https://kemoshumai.booth.pm/items/4668625"}>商品ページへ(無料)</a>
            </div>
          </div>

          <div className={styles.made}>
            <h3>Shumai Pad</h3>
            <p>無言勢でも会話ができる端末を作りました。</p>
            <p>これを発表した当時はまだChatboxなんてものVRChatには無かったので、すごい技術だったんですけどね...(今はChatboxが出てきちゃいましたから...)</p>
            <blockquote className="twitter-tweet"><p lang="ja" dir="ltr">無言勢でも会話ができる端末を作りました。<br />音声認識で動作します。<br />二番煎じだったらｺﾞﾒﾝﾅｻｲ。 <a href="https://t.co/U1cnm5BHyE">pic.twitter.com/U1cnm5BHyE</a></p>&mdash; けもシューマイ (@kemoshumai) <a href="https://twitter.com/kemoshumai/status/1474002587926282240?ref_src=twsrc%5Etfw">December 23, 2021</a></blockquote>
          </div>

        </div>

        <div className={styles.title}>
          <img src="/kemoshumair.png" alt="KEMOSHUMAIR" />
          <p>カメラ用自作レンズ</p>

          <div className={styles.made}>
            <h3>Kemonof</h3>
            <p>3Dプリンタ製カメラレンズ自作第一弾です。</p>
            <p>レンズ自体は他製品から取り出して作り、鏡筒とマウントを合わせることで作ります。</p>
            <p>作例はこんな感じ</p>
            <img src="DSC_0059.JPG" alt="" />
            <img src="DSC_0126.JPG" alt="" />
            <p>良く言えばオールドレンズ、悪く言えば価格相応ですね。</p>
            <p>ちなみに同じカメラでレンズを変えるとこう。</p>
            <img src="DSC_0529.JPG" alt="" />
            <p>オールドレンズってことで許してね。</p>
            <blockquote className="twitter-tweet"><p lang="ja" dir="ltr">Kemonofの試作機できた〜！ <a href="https://t.co/fcFfhmKTTC">pic.twitter.com/fcFfhmKTTC</a></p>&mdash; けもシューマイ (@kemoshumai) <a href="https://twitter.com/kemoshumai/status/1695471583710879871?ref_src=twsrc%5Etfw">August 26, 2023</a></blockquote>
          </div>

        </div>

      </div>
      <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script> 
    </div>
  )
}