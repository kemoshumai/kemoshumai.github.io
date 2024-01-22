import styles from "./contect.module.css";

export default function Contact(){
  return (
    <div className={styles.main}>
      <h2>CONTACT</h2>
      <div>
        <div className={styles.info}>
          <p>Twitter(新X)のDMに連絡をください。</p>
          <ul>
            <li>X: <a href="https://twitter.com/kemoshumai">@kemoshumai</a></li>
          </ul>
        </div>
        <img src="/medical_contact_lens.png" alt="コンタクトレンズ" className={styles.contactlens} />
      </div>
    </div>
  );
}