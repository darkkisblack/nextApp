import React from "react";
/* import Header from "./components/Header"; */
import { useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import logo from "/img/Logo.png";
import tanks from "/img/tanks.png";
import AboutImage from "/img/About_image.png";
import TransportImage from "/img/Transport.png";
/* import Logo from "../img/Logo.png" */
/* import styled from "styled-components";
const Header = styled.div`
  font-size: 20px;
  font-weight: bold;
`; */

export default function Home() {
  const [transportImageState, setTransportImageState] = useState(1);

  const changeTransportImage = (event) => {
    if (event.target) {
      console.log("навел суда");
      setTransportImageState(1);
    }
  };

  const textHover = (event) => {
    if (event.target) {
      console.log("навел суда");
      setTransportImageState(2);
    }
  };

  return (
    <div className={styles.wrapper}>
      <nav className={styles.nav_right}>
        <div className={styles.vector_down___content}>
          <a href="">
             <span className={styles.nav_vector__down}></span>
          <span className={styles.nav_vector__down_left}></span>
          <span className={styles.nav_vector__down_right}></span>
          </a>

        </div>
        <a className={styles.nav_right__burger}>
          <span></span>
          <span></span>
        </a>

        <p className={styles.nav_right__text}>Меню</p>
        <a href=''>
          <div className={styles.nav_right__text_arrow}>
            <a href='#'>Листай вниз</a>
          </div>

          <div className={styles.nav_right__arrow}>
            <span></span>
          </div>

          <span className={styles.nav_right__vector_left}></span>
          <span className={styles.nav_right__vector_right}></span>
        </a>
      </nav>
      <section className={styles.header_section.container}>
        <div className={styles.container}>
          <div className={styles.header_left}>
            <div className={styles.logo_container}>
              <div className={styles.header__logo}>
                <Image src={logo} width={39} height={38} />
              </div>

              <span className={styles.logo_text}>ПЕНЗГИДРОМАШ</span>
              <div className={styles.burger_mobile_content}>
                <span className={styles.burger_mobile_1}></span>
                <span className={styles.burger_mobile_2}></span>
              </div>
            </div>
            <div className={styles.company_info}>
              <nav className={styles.navmenu_left}>
                <ul className={styles.navmenu_left_list}>
                  <li className={styles.navmenu_left_item}>
                    <a href='#'>Главная</a>
                  </li>
                  <li className={styles.navmenu_left_item}>
                    <span className={styles.vector_left}>></span>
                  </li>
                  <li className={styles.navmenu_left_item}>
                    <a href=''>Компания</a>
                  </li>
                </ul>
              </nav>
              <div className={styles.company_info}></div>
              <h1 className={styles.title_left}>Компания</h1>
              <div className={styles.line_left}>
                <div className={styles.line}></div>
                <p className={styles.line_text}>
                  Основная сфера деятельности «ПензГидромаш» — создание систем
                  для нефтяной, газовой, химической и нефтехимической сфер
                  промышленности.{" "}
                </p>
              </div>
            </div>
          </div>

          <div className={styles.header_right}>
            <div className={styles.right_nav__image}>
              <Image src={tanks} width={320} height={250} />
            </div>

            <nav className={styles.navmenu_right}>
              <ul className={styles.navmenu_right_list}>
                <li className={styles.navmenu_right_item}>
                  <a href='#'>Компания</a>
                </li>
                <li className={styles.navmenu_right_item}>
                  <a href='#'>Продукты и услуги</a>
                </li>
                <li className={styles.navmenu_right_item}>
                  <a href=''>Проекты</a>
                </li>
                <li className={styles.navmenu_right_item}>
                  <a href='#'>Новости</a>
                </li>
                <li className={styles.navmenu_right_item}>
                  <a href='#'>Контакты</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <section className={styles.about_section.container}>
        <div className={styles.container_about}>
          <ul className={styles.container_about_title}>
            <li className={styles.about_title}>
              <h1 className={styles.about_title_text}>О нас</h1>
            </li>
            <li className={styles.about_text}>
              <p className={styles.about_text_content}>
                Наша цель — взаимовыгодное сотрудничество на основе долгосрочных
                контрактов.
                <br /> Мы представлены на рынке с 2006 года и не перестаем
                развиваться, совершенствовать качество своих услуг,
                оптимизировать затраты для снижения стоимости продукции.
              </p>
            </li>
          </ul>

          <ul className={styles.about_context}>
            <li className={styles.about_item}>
              <div className={styles.about_image}>
                <Image src={AboutImage} alt='' width={880} height={580} />
              </div>
              <div className={styles.about_content}>
                <p className={styles.about_content_item}>
                  Выполняем все работы по проектированию систем, закупке
                  необходимых материалов, производству, установке, наладке,
                  гарантийному и внегарантийному обслуживанию. Уникальный парк
                  оборудования позволяет находить решения для любых
                  производственных задач клиентов.
                </p>
                <p className={styles.about_content_item}>
                  Также мы берем на себя все сложности, связанные с
                  сертификацией нестандартного оборудования. В этом процессе
                  принимают участие инженеры и юристы с многолетним опытом
                  работы. Клиенты получают все нужные документы для того, чтобы
                  использование оборудования было полностью законным.{" "}
                </p>
                <p className={styles.about_content_item}>
                  Выпускаемая нашей компанией продукция разрешена к применению
                  Ростехнадзором. На производстве внедрен жесткий менеджмент
                  качества — по международному стандарту
                  <br /> ГОСТ Р ИСО 9001.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className={styles.transoprt_section.container}>
        <div className={styles.container_about__transport}>
          <div className={styles.container_title__transport}>
            <h1 className={styles.title_transport}>Транспорт</h1>
          </div>
          <div className={styles.transport__counter}>
            <span className={styles.transport__counter_one}>01/</span>
            <span className={styles.transport__counter_two}>02</span>
          </div>

          <ul className={styles.about_context__transport}>
            <li className={styles.about_item}>
              <div className={styles.about_image}>
                <div
                  className={
                    transportImageState == 2 ? styles.pic1 : styles.pic1__active
                  }>
                  <Image src={TransportImage} alt='' width={880} height={620} />
                </div>
                <div
                  className={
                    transportImageState == 1 ? styles.pic1 : styles.pic1__active
                  }>
                  <Image
                    src={tanks}
                    alt=''
                    width={880}
                    height={620}
                    id='pic2'
                  />
                </div>
              </div>
              <div className={styles.about_content_transport}>
                <div
                  className={styles.about_content_auto}
                  onMouseEnter={changeTransportImage}>
                  <h1 className={styles.about_content_item_title}>
                    Автотранспорт
                  </h1>
                  <p className={styles.about_transport_item}>
                    — Собственная автотранспортная компания
                  </p>
                  <p className={styles.about_transport_item}>
                    — Перевозка негабаритных и тяжеловесных грузов
                  </p>
                  <p className={styles.about_transport_item}>
                    — Доставка в любую точку России
                  </p>
                </div>
                <div
                  className={styles.about_transport_railway}
                  onMouseEnter={textHover}>
                  <h1 className={styles.about_content_item_title}>
                    Железнодорожный <br />
                    транспорт
                  </h1>
                  <p className={styles.about_transport_item}>
                    На заводе имеется ж/д ветка, заходящая в производственное
                    здание{" "}
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
