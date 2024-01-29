"use client";
import { useRouter } from "next/navigation";
import styles from "./easteregg.module.css";

export default function EasterEgg() {

  const router = useRouter();

  return (
    <div className={styles.main}>
      <div className={styles.hidden}>
        <p>ぐわーーーーーーー！！！！！！！！！！！！！！！あーーーも！！！！</p>
        <p>けもシューマイです。こんちゃ。</p>
        <p>古のホームページとかってね、トラウマがいろいろあると思うんですけど、</p>
        <p>けもシューマイは優しくて素晴らしい天才ミーシェちゃんなのでそんなことしませんよ…ふふふ</p>
        <p>反転しないと見えないとかどんだけ古典的なネタだよって感じしますが</p>
        <p>しょうがないんだもん！！！！お前ら俺がNext.js使ってガチの隠しりんく作ったりしたら一生見つけてくんないだろ！！！</p>
        <p>エロねぇんだわこっちには！！！</p>
        <p>エロナイヨ(藁)</p>
        <p>なんかめぼしい欲しい絵ありますとかそんなご利益なしにガチ隠し探すバカがいるかってんだ！！！！！しかも令和に！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！</p>
        <p>どこかの古のインターネット好きノスおじしかいないだろうよ</p>
        <p>もし見てたらあれやろあれ、相互バナー</p>
        <p>個人サイトホスティングなんてナウでヤングな子しないから</p>
        <p>BBS作ってキリ番報告させようかな。Twitterでいいですけど...</p>
        <p>見つけたらTwitterで報告とかあれば自己満足が満たされます</p>
        <p>匂わせも良いですね</p>
        <p>いいんだよ別に？グロリンク貼ってトラウマにしてあげてもいいんだが、私が優しくて命拾いしたな。</p>
        <p>まああの、なんていうんですか、今風に言うならイースターエッグ？を色々用意してるので</p>
        <p>ぜひ踏んでってください</p>
        <p>パスワードは分かるはずです。管理人の推し(カタカナ8文字)です。</p>
      </div>
      <div className={styles.dots}>
        {
          [...Array(5)].map((_,i)=>(
            <div key={i}>
              {
                [...Array(20)].map((_,j)=>(
                  <div key={j} className={styles.dot} onClick={()=>{
                    if (i == 2 && j == 11) {
                      const pass = prompt('パスワード', '');
                      if (pass == "ショウジョウトキ") {// 難読化は特にしない
                        router.push("/secret");
                      }
                    }
                  }}>■</div>
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
  )
}