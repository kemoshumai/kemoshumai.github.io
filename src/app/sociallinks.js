import styles from "./sociallinks.module.css";

export default function SocialLinks() {

  const LINKS = [
    {
      img: "/kemoshumai_icon_twitter.jpg",
      alt: "Twitter",
      title: "Twitter",
      description: "主にここにいます。連絡もここによろしくおねがいします。\nくだらない投稿が多めです。",
      href: "https://twitter.com/kemoshumai"
    },
    {
      img: "/kemoshumai_icon_pixiv.jpg",
      alt: "Booth",
      title: "Booth",
      description: "作ったものはここで配布してます！",
      href: "https://kemoshumai.booth.pm/"
    },
    {
      img: "/kemoshumai_icon_github.png",
      alt: "GitHub",
      title: "GitHub",
      description: "わがソフトウェアたちの墓場。\n作ったプログラムをあげています。",
      href: "https://github.com/kemoshumai"
    },
    {
      img: "/kemoshumai_icon_soundcloud.jpg",
      alt: "SoundCloud",
      title: "SoundCloud",
      description: "音楽歴1秒のクソ雑魚がお届けする共感性羞恥ミュージック\n作った曲をあげています。",
      href: "https://soundcloud.com/user-651501765"
    },
    {
      img: "/kemoshumai_icon_soundcloud.jpg",
      alt: "YouTube",
      title: "YouTube",
      description: "たまに動画をあげます。",
      href: "https://www.youtube.com/@kemoshumai9638/featured"
    },
    {
      img: "/kemoshumai_icon_twitter.jpg",
      alt: "VRChat",
      title: "VRChat",
      description: "ここにも居ることがあります。\nSilentClubで踊ったり、プロイェクトバベルで言語学習だったり。\nShumaiPadやSASなど、VRChatで使われる私の作品もあります。",
      href: "https://vrchat.com/home/user/usr_d31ad938-a9ae-4b46-a292-4f8900bbe2e6"
    },
    {
      img: "/kemoshumai_icon_soundcloud.jpg",
      alt: "Mocha-Repository",
      title: "Mocha-Repository",
      description: "BMSリポジトリです。第二通常難易度表 四段 合格済み。",
      href: "https://mocha-repository.info/player.php?id=8657"
    },
    {
      img: "/kemoshumai_icon_mastodon.jpg",
      alt: "ますとどんちほー",
      title: "ますとどんちほー",
      description: "黒歴史です。",
      href: "https://mstdn.kemono-friends.info/@shumai"
    },
    {
      img: "/kemoshumai_icon_twitter.jpg",
      alt: "Nostr",
      title: "Nostr",
      description: "最近活動していません。連絡をいただいても返せません。",
      href: "https://iris.to/npub1pl6t59ge6gfu0hy52359huff0g8cjyd5d0qtlz3064gnjsm8m4hq6kp2ne"
    },
    {
      img: "/kemoshumai_icon_twitter.jpg",
      alt: "Misskey.io",
      title: "Misskey.io",
      description: "Twitterよりだいぶ頻度が少ないです。連絡はTwitterへ。\n避難先として使うことがあります。",
      href: "https://misskey.io/@kemoshumai"
    },
    {
      img: "/kemoshumai_icon_twitter.jpg",
      alt: "note",
      title: "note",
      description: "Twitterじゃ書ききれないことを書いてるよ。",
      href: "https://note.com/kemoshumai"
    }
  ];

  return (
    <div className={styles.main}>
      <h2>LINKS</h2>
      <p>フォローってボタンでつながれるらしいですよ</p>
      {
        LINKS.map(link=>
          <div className={styles.link_card_wrapper} key={link.title}>
            
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              <div className={styles.link_card}>
                <div className={styles.title}>
                  <img src={link.img} alt={link.alt} />
                  <h3>{link.title}</h3>
                </div>
                <p>{link.description}</p>
              </div>
            </a>

          </div>
        )
      }
      <p>以上！</p>
    </div>
  )
}