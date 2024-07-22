import Image from 'next/image';
import '../app/globals.css';
import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { Underdog } from 'next/font/google';


export default function Home() {
  return (
    <div className={styles.body}>
      <header className={styles.header}>
        <div className={styles.hero}>
          <Image src="/assets/images/College Building_01.jpg" alt="Pune Institute of Computer Technology" layout="fill" objectFit="cover" style={{opacity: 0.7}}/>
          <nav className={styles.nav}>
          <a href="#"><FontAwesomeIcon icon={faSearch} /> SEARCH</a>
          <a href="#">NOTICES</a>
          <a href="#">ABOUT</a>
          <a href="#">DEPARTMENTS</a>
          <a href="#">PLACEMENTS</a>
          <a href="#">ADMISSIONS</a>
          <a href="https://portal.vmedulife.com/public/auth/#/login/pict-pune">MIS LOGIN</a>
          </nav>
          <div className={styles.logo}>
          <Image src="/assets/images/pict_logo.png" alt="PICT Logo" fill/>
          </div>
          <div className={styles.heroContent}>
            <h1>PUNE INSTITUTE OF COMPUTER TECHNOLOGY</h1>
          </div>
          <div className={styles.carousel}>
            <div className={styles.slide}><span></span></div>
            <div className={styles.slide}><span></span></div>
            <div className={styles.slide}><span></span></div>
            <div className={styles.slide}><span></span></div>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.eventsHeader}>
          <Image src="/assets/images/events.png" alt="Events" width={300} height={100} />
        </div>
        <div className={styles.events}>
          <div className={styles.event}>
            <Image src="/assets/images/pic1.png" alt="Distinguished Alumni Visit" width={300} height={200} />
            <p>Distinguished Alumni Visit</p>
          </div>
          <div className={styles.event}>
            <Image src="/assets/images/pic2.png" alt="Impetus & Concepts" width={300} height={200} />
            <p>Impetus & Concepts</p>
            <a href="#">Join Event </a>
          </div>
          <div className={styles.event}>
            <Image src="/assets/images/pic3.png" alt="PICT MUN" width={300} height={200} />
            <p>PICT MUN</p>
          </div>
        </div>
      </main>
      <div className={styles.notice}>
          Notices and announcements
      </div>
    </div>
  );
}
