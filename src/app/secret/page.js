import styles from "./secret.module.css"

export default function Secret() {
  return (
    <div className={styles.main}>
      <h1>秘密のページへようこそ</h1>
      <p>よくここを見つけましたね！</p>
      <marquee>あなたは1000000000憶人目のお客様ですwww</marquee>
    </div>
  )
}