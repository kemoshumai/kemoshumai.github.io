import styles from "./sociallinks.module.css";

export default function SocialLinks() {

  const LINKS = [
    {
      img: "/kemoshumai_icon_twitter.jpg",
      alt: "Twitter",
      title: "Twitter",
      description: "主にここにいます。連絡もここによろしくおねがいします。\nくだらない投稿が多めです。"
    },
    {
      img: "/kemoshumai_icon_github.png",
      alt: "GitHub",
      title: "GitHub",
      description: "わがソフトウェアたちの墓場。\n作ったプログラムをあげています。"
    },
    {
      img: "/kemoshumai_icon_soundcloud.jpg",
      alt: "SoundCloud",
      title: "SoundCloud",
      description: "音楽歴1秒のクソ雑魚がお届けする共感性羞恥ミュージック\n作った曲をあげています。"
    },
    {
      img: "/kemoshumai_icon_soundcloud.jpg",
      alt: "YouTube",
      title: "YouTube",
      description: "たまに動画をあげます。"
    },
    {
      img: "/kemoshumai_icon_twitter.jpg",
      alt: "VRChat",
      title: "VRChat",
      description: "ここにも居ることがあります。\nSilentClubで踊ったり、プロイェクトバベルで言語学習だったり。\nShumaiPadやSASなど、VRChatで使われる私の作品もあります。"
    },
    {
      img: "/kemoshumai_icon_soundcloud.jpg",
      alt: "Mocha-Repository",
      title: "Mocha-Repository",
      description: "BMSリポジトリです。第二通常難易度表 四段 合格済み。"
    },
    {
      img: "/kemoshumai_icon_mastodon.jpg",
      alt: "ますとどんちほー",
      title: "ますとどんちほー",
      description: "黒歴史です。"
    },
    {
      img: "/kemoshumai_icon_twitter.jpg",
      alt: "Nostr",
      title: "Nostr",
      description: "最近活動していません。連絡をいただいても返せません。"
    },
    {
      img: "/kemoshumai_icon_twitter.jpg",
      alt: "Misskey.io",
      title: "Misskey.io",
      description: "Twitterよりだいぶ頻度が少ないです。連絡はTwitterへ。\n避難先として使うことがあります。"
    },
    {
      img: "/kemoshumai_icon_twitter.jpg",
      alt: "note",
      title: "note",
      description: "Twitterじゃ書ききれないことを書いてるよ。"
    }
  ];

  return (
    <div className={styles.main}>
      <h2>LINKS</h2>
      <p>フォローってボタンでつながれるらしいですよ</p>
      {
        LINKS.map(link=>
          <div className={styles.link_card_wrapper}>
            
            <div className={styles.link_card}>
              <div className={styles.title}>
                <img src={link.img} alt={link.alt} />
                <h3>{link.title}</h3>
              </div>
              <p>{link.description}</p>
            </div>

          </div>
        )
      }
      <p>以上！</p>
    </div>
  )
}