/* import Header from "./components/Header"; */
/* import Image from "next/image"; */
import styles from "../styles/Home.module.css";
/* import Logo from "../img/Logo.png" */
/* import styled from "styled-components";
const Header = styled.div`
  font-size: 20px;
  font-weight: bold;
`; */


export default function Home() {
  return (
    <div className={styles.wrapper}>
      <section className={styles.header_section}>
        <div className={styles.container}>
          <div className={styles.header_left}>
            <div className="logo_container">
               <img src={require("../img/Logo.png")} className={styles.header_logo}/>
            
              <span className={styles.logo_text}>ПЕНЗГИДРОМАШ</span>
            </div>
            <nav className={styles.navmenu_left}>
              <ul className={styles.navmenu_left_list}>
                <li className={styles.navmenu_left_item}>
                  <a href="#">Главная</a>
                  </li>
                <li className={styles.navmenu_left_item}><span className={styles.vector_left}>></span></li>
                <li className={styles.navmenu_left_item}><a href="">Компания</a></li>
              </ul>
            </nav>
            <h1 className={styles.title_left}>Компания</h1>
<div className={styles.line_left}>
  <p className={styles.line_text}>Основная сфера деятельности «ПензГидромаш» — создание систем для нефтяной, газовой, химической и нефтехимической сфер промышленности. </p>
</div>

          </div>
          

          
          <div className={styles.header_right}></div>
          <nav className={styles.nav_right}></nav>
        </div>
      </section>
      {/*   <div className={styles.container}>
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{" "}
            <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{" "}
            <span className={styles.logo}>
              <Image
                src="/vercel.svg"
                alt="Vercel Logo"
                width={72}
                height={16}
              />
            </span>
          </a>
        </footer>
      </div> */}
    </div>
  );
}
