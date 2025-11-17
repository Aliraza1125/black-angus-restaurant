"use client";

import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import TrustindexWidget from "../components/TrustindexWidget";
import GalleryScripts from "../components/GalleryScripts";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      <div className="breakdance">
        <section className="bde-section-769-100 bde-section">
          <div className="section-container">
            <Image
              src="/wp-content/uploads/2025/01/black-angus-logo-avec-infos.png"
              alt="Black Angus Logo Avec Infos"
              width={1871}
              height={567}
              className="bde-image2-769-101 bde-image2"
              priority
              sizes="(max-width: 1871px) 100vw, 1871px"
            />
            <h1 className="bde-heading-769-102 bde-heading">{t.mainHeading}</h1>
            <div className="bde-div-769-360 bde-div">
              <Image
                src="/wp-content/uploads/2025/06/coup-de-coeur-restoaparis-2025-v2.svg"
                alt="Coup de coeur restoaparis 2025 v2"
                width={300}
                height={300}
                className="bde-image2-769-361 bde-image2"
                loading="lazy"
                unoptimized
              />
              <Image
                src="/wp-content/uploads/2025/06/note-google-black-angus.png"
                alt="Note google black angus"
                width={500}
                height={500}
                className="bde-image2-769-363 bde-image2"
                loading="lazy"
                sizes="(max-width: 500px) 100vw, 500px"
              />
            </div>
          </div>
        </section>
        <section className="bde-section-769-126 bde-section">
          <div className="section-container">
            <div className="bde-columns-769-318 bde-columns">
              <div className="bde-column-769-319 bde-column">
                <Image
                  src="/wp-content/uploads/2025/01/formule-side-left-1.png"
                  alt="Formule Side Left 1"
                  width={729}
                  height={1791}
                  className="bde-image2-769-195 bde-image2"
                  loading="lazy"
                  sizes="(max-width: 729px) 100vw, 729px"
                />
              </div>
              <div className="bde-column-769-320 bde-column">
                <div className="bde-div-769-127 bde-div">
                  <div className="bde-div-769-359 bde-div">
                    <h2 className="bde-heading-769-128 bde-heading">
                      FORMULES
                    </h2>
                    <h2 className="bde-heading-769-358 bde-heading">
                      Midi et Soir
                    </h2>
                  </div>
                  <Image
                    src="/wp-content/uploads/2025/01/red-top-border.png"
                    alt="Red Top Border"
                    width={1265}
                    height={155}
                    className="bde-image2-769-191 bde-image2"
                    loading="lazy"
                    sizes="(max-width: 1265px) 100vw, 1265px"
                  />
                  <div className="bde-div-769-190 bde-div">
                    <h3 className="bde-heading-769-262 bde-heading">
                      Accompagné de sa salade d’accueil, frites et purée
                    </h3>
                    <div className="bde-div-769-261 bde-div">
                      <div className="bde-div-769-263 bde-div">
                        <h4 className="bde-heading-769-266 bde-heading bde-preset-b80cbe54-952c-403a-8fdd-b8057bda7e01">
                          Black Red
                        </h4>
                        <h5 className="bde-heading-769-267 bde-heading bde-preset-a58ba013-22d2-43a1-8b7d-693453589819">
                          Cœur de rumsteak Angus
                        </h5>
                      </div>
                      <div className="bde-text-769-328 bde-text formule-prix bde-preset-b082af3a-c9da-4742-b993-e6ccf27dc75e">
                        29€
                      </div>
                    </div>
                    <div className="bde-div-769-273 bde-div">
                      <div className="bde-div-769-274 bde-div">
                        <h4 className="bde-heading-769-275 bde-heading bde-preset-b80cbe54-952c-403a-8fdd-b8057bda7e01">
                          Black Lover
                        </h4>
                        <h5 className="bde-heading-769-276 bde-heading bde-preset-a58ba013-22d2-43a1-8b7d-693453589819">
                          Entrecôte Angus
                        </h5>
                      </div>
                      <div className="bde-text-769-330 bde-text formule-prix bde-preset-b082af3a-c9da-4742-b993-e6ccf27dc75e">
                        35€
                      </div>
                    </div>
                    <div className="bde-div-769-268 bde-div">
                      <div className="bde-div-769-269 bde-div">
                        <h4 className="bde-heading-769-270 bde-heading bde-preset-b80cbe54-952c-403a-8fdd-b8057bda7e01">
                          Black Prime
                        </h4>
                        <h5 className="bde-heading-769-271 bde-heading bde-preset-a58ba013-22d2-43a1-8b7d-693453589819">
                          Filet de bœuf Angus
                        </h5>
                      </div>
                      <div className="bde-text-769-329 bde-text formule-prix bde-preset-b082af3a-c9da-4742-b993-e6ccf27dc75e">
                        42€
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bde-div-769-337 bde-div">
                  <h2 className="bde-heading-769-338 bde-heading">Déjeuner</h2>
                  <Image
                    src="/wp-content/uploads/2025/01/red-top-border.png"
                    alt="Red Top Border"
                    width={1265}
                    height={155}
                    className="bde-image2-769-339 bde-image2"
                    loading="lazy"
                    sizes="(max-width: 1265px) 100vw, 1265px"
                  />
                  <div className="bde-div-769-340 bde-div">
                    <h3 className="bde-heading-769-341 bde-heading">
                      Accompagné de sa salade d’accueil et ses frites
                    </h3>
                    <div className="bde-div-769-342 bde-div">
                      <div className="bde-div-769-343 bde-div">
                        <div className="bde-div-769-357 bde-div">
                          <h4 className="bde-heading-769-344 bde-heading bde-preset-b80cbe54-952c-403a-8fdd-b8057bda7e01">
                            Black Burger
                          </h4>
                          <h5 className="bde-heading-769-345 bde-heading bde-preset-a58ba013-22d2-43a1-8b7d-693453589819">
                            Steak haché 150g Angus
                          </h5>
                        </div>
                      </div>
                      <div className="bde-text-769-346 bde-text formule-prix bde-preset-b082af3a-c9da-4742-b993-e6ccf27dc75e">
                        19€
                      </div>
                    </div>
                    <div className="bde-text-769-335 bde-text">
                      Uniquement du lundi
                      <br />
                      au vendredi de 12h à 17h,
                      <br />
                      hors jours fériés
                    </div>
                  </div>
                </div>
              </div>
              <div className="bde-column-769-321 bde-column">
                <Image
                  src="/wp-content/uploads/2025/01/formule-side-right-v2.png"
                  alt="Formule Side Right V2"
                  width={757}
                  height={1787}
                  className="bde-image2-769-209 bde-image2"
                  loading="lazy"
                  sizes="(max-width: 757px) 100vw, 757px"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bde-section-769-109 bde-section">
          <div className="section-container">
            <div className="bde-gallery-769-110 bde-gallery">
              <div
                className="ee-gallery-swiper breakdance-swiper-wrapper"
                data-swiper-id="110"
              >
                <div className="swiper">
                  <div className="ee-gallery ee-gallery--gallery-slider ee-gallery--slider ee-gallery-- ee-gallery--lightbox ee-gallery--zoom-in ee-gallery--caption- ee-gallery--caption-none ee-gallery--custom swiper-wrapper">
                    <a
                      className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                      href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-03.jpg"
                      data-sub-html="<span></span>"
                      data-category="1"
                      data-lg-size="1333-2000"
                    >
                      <figure className="ee-gallery-item-figure">
                        <Image
                          src="/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-03.jpg"
                          width={1333}
                          height={2000}
                          alt="L'entreboeuf Déc24@ninacoriton 03"
                          className="breakdance-image-object"
                          sizes="(max-width: 1333px) 100vw, 1333px"
                        />
                      </figure>
                    </a>

                    <a
                      className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                      href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-02.jpg"
                      data-sub-html="<span></span>"
                      data-category="1"
                      data-lg-size="2000-1333"
                    >
                      <figure className="ee-gallery-item-figure">
                        <Image
                          src="/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-02.jpg"
                          width={2000}
                          height={1333}
                          alt="L'entreboeuf Déc24@ninacoriton 02"
                          className="breakdance-image-object"
                          sizes="(max-width: 2000px) 100vw, 2000px"
                        />
                      </figure>
                    </a>

                    <a
                      className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                      href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-12.jpg"
                      data-sub-html="<span></span>"
                      data-category="1"
                      data-lg-size="2000-1333"
                    >
                      <figure className="ee-gallery-item-figure">
                        <Image
                          src="/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-12.jpg"
                          width={2000}
                          height={1333}
                          alt="L'entreboeuf Déc24@ninacoriton 12"
                          className="breakdance-image-object"
                          sizes="(max-width: 2000px) 100vw, 2000px"
                        />
                      </figure>
                    </a>

                    <a
                      className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                      href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-08.jpg"
                      data-sub-html="<span></span>"
                      data-category="1"
                      data-lg-size="1333-2000"
                    >
                      <figure className="ee-gallery-item-figure">
                        <Image
                          src="/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-08.jpg"
                          width={1333}
                          height={2000}
                          alt="L'entreboeuf Déc24@ninacoriton 08"
                          className="breakdance-image-object"
                          sizes="(max-width: 1333px) 100vw, 1333px"
                        />
                      </figure>
                    </a>

                    <a
                      className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                      href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-05.jpg"
                      data-sub-html="<span></span>"
                      data-category="1"
                      data-lg-size="2000-1333"
                    >
                      <figure className="ee-gallery-item-figure">
                        <Image
                          src="/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-05.jpg"
                          width={2000}
                          height={1333}
                          alt="L'entreboeuf Déc24@ninacoriton 05"
                          className="breakdance-image-object"
                          sizes="(max-width: 2000px) 100vw, 2000px"
                        />
                      </figure>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bde-columns-769-111 bde-columns">
              <div className="bde-column-769-299 bde-column">
                <div className="bde-gallery-769-301 bde-gallery">
                  <div
                    className="ee-gallery-swiper breakdance-swiper-wrapper"
                    data-swiper-id="301"
                  >
                    <div className="swiper">
                      <div className="ee-gallery ee-gallery--gallery-slider ee-gallery--slider ee-gallery-- ee-gallery--lightbox ee-gallery--zoom-in ee-gallery--caption- ee-gallery--caption-none ee-gallery--custom swiper-wrapper">
                        <a
                          className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                          href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-02.jpg"
                          data-sub-html="<span></span>"
                          data-category="1"
                          data-lg-size="2000-1333"
                        >
                          <figure className="ee-gallery-item-figure">
                            <Image
                              src="/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-02.jpg"
                              width={2000}
                              height={1333}
                              alt="L'entreboeuf Déc24@ninacoriton 02"
                              className="breakdance-image-object"
                              sizes="(max-width: 2000px) 100vw, 2000px"
                            />
                          </figure>
                        </a>

                        <a
                          className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                          href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-05.jpg"
                          data-sub-html="<span></span>"
                          data-category="1"
                          data-lg-size="2000-1333"
                        >
                          <figure className="ee-gallery-item-figure">
                            <Image
                              src="/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-05.jpg"
                              width={2000}
                              height={1333}
                              alt="L'entreboeuf Déc24@ninacoriton 05"
                              className="breakdance-image-object"
                              sizes="(max-width: 2000px) 100vw, 2000px"
                            />
                          </figure>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bde-column-769-114 bde-column">
                <div className="bde-gallery-769-115 bde-gallery">
                  <div
                    className="ee-gallery-swiper breakdance-swiper-wrapper"
                    data-swiper-id="115"
                  >
                    <div className="swiper">
                      <div className="ee-gallery ee-gallery--gallery-slider ee-gallery--slider ee-gallery-- ee-gallery--lightbox ee-gallery--zoom-in ee-gallery--caption- ee-gallery--caption-none ee-gallery--custom swiper-wrapper">
                        <a
                          className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                          href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-03.jpg"
                          data-sub-html="<span></span>"
                          data-category="1"
                          data-lg-size="1333-2000"
                        >
                          <figure className="ee-gallery-item-figure">
                            <Image
                              src="/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-03.jpg"
                              width={1333}
                              height={2000}
                              alt="L'entreboeuf Déc24@ninacoriton 03"
                              className="breakdance-image-object"
                              sizes="(max-width: 1333px) 100vw, 1333px"
                            />
                          </figure>
                        </a>

                        <a
                          className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                          href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-12.jpg"
                          data-sub-html="<span></span>"
                          data-category="1"
                          data-lg-size="2000-1333"
                        >
                          <figure className="ee-gallery-item-figure">
                            <Image
                              src="/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-12.jpg"
                              width={2000}
                              height={1333}
                              alt="L'entreboeuf Déc24@ninacoriton 12"
                              className="breakdance-image-object"
                              sizes="(max-width: 2000px) 100vw, 2000px"
                            />
                          </figure>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bde-column-769-116 bde-column">
                <div className="bde-gallery-769-117 bde-gallery">
                  <div
                    className="ee-gallery-swiper breakdance-swiper-wrapper"
                    data-swiper-id="117"
                  >
                    <div className="swiper">
                      <div className="ee-gallery ee-gallery--gallery-slider ee-gallery--slider ee-gallery-- ee-gallery--lightbox ee-gallery--zoom-in ee-gallery--caption- ee-gallery--caption-none ee-gallery--custom swiper-wrapper">
                        <a
                          className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                          href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-08.jpg"
                          data-sub-html="<span></span>"
                          data-category="1"
                          data-lg-size="1333-2000"
                        >
                          <figure className="ee-gallery-item-figure">
                            <Image
                              src="/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-08.jpg"
                              width={1333}
                              height={2000}
                              alt="L'entreboeuf Déc24@ninacoriton 08"
                              className="breakdance-image-object"
                              sizes="(max-width: 1333px) 100vw, 1333px"
                            />
                          </figure>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bde-div-769-258 bde-div">
              <Image
                src="/wp-content/uploads/2025/01/black-angus-logo-vache-head.png"
                width={1300}
                height={567}
                alt="Black Angus Logo Vache Head"
                className="bde-image2-769-259 bde-image2"
                sizes="(max-width: 1300px) 100vw, 1300px"
              />
              <Image
                src="/wp-content/uploads/2025/01/black-angus-logo-vache-back.png"
                width={1300}
                height={567}
                alt="Black Angus Logo Vache Back"
                className="bde-image2-769-260 bde-image2"
                sizes="(max-width: 1300px) 100vw, 1300px"
              />
              <Image
                src="/wp-content/uploads/2025/01/black-angus-logo-vache-derriere.png"
                width={1300}
                height={567}
                alt="Black Angus Logo Vache Derriere"
                className="bde-image2-769-278 bde-image2"
                sizes="(max-width: 1300px) 100vw, 1300px"
              />
            </div>
          </div>
        </section>
        <section className="bde-section-769-364 bde-section">
          <div className="section-container">
            <h2 className="bde-heading-769-366 bde-heading">
              {t.customerReviews}
            </h2>
            <TrustindexWidget />
          </div>
        </section>
        <section className="bde-section-769-303 bde-section">
          <div className="section-container">
            <div className="bde-columns-769-304 bde-columns">
              <div className="bde-column-769-305 bde-column">
                <div className="bde-image-769-306 bde-image">
                  <figure className="breakdance-image breakdance-image--231">
                    <div className="breakdance-image-container">
                      <div className="breakdance-image-clip">
                        <Image
                          src="/wp-content/uploads/2025/01/restaurant-black-angus-salle-1.jpg"
                          alt="Restaurant Black Angus Salle 1"
                          width={1333}
                          height={2000}
                          className="breakdance-image-object"
                          sizes="(max-width: 1333px) 100vw, 1333px"
                        />
                      </div>
                    </div>
                  </figure>
                </div>
              </div>
              <div className="bde-column-769-307 bde-column">
                <div
                  className="bde-image-769-308 bde-image"
                  data-parallax="true"
                >
                  <figure className="breakdance-image breakdance-image--233">
                    <div className="breakdance-image-container">
                      <div className="breakdance-image-clip">
                        <Image
                          src="/wp-content/uploads/2025/01/restaurant-black-angus-salle-2.jpg"
                          alt="Restaurant Black Angus Salle 2"
                          width={2000}
                          height={1333}
                          className="breakdance-image-object"
                          sizes="(max-width: 2000px) 100vw, 2000px"
                        />
                      </div>
                    </div>
                  </figure>
                </div>
                <div className="bde-image-769-309 bde-image">
                  <figure className="breakdance-image breakdance-image--234">
                    <div className="breakdance-image-container">
                      <div className="breakdance-image-clip">
                        <Image
                          src="/wp-content/uploads/2025/01/restaurant-black-angus-salle-3.jpg"
                          alt="Restaurant Black Angus Salle 3"
                          width={2000}
                          height={1333}
                          className="breakdance-image-object"
                          sizes="(max-width: 2000px) 100vw, 2000px"
                        />
                      </div>
                    </div>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bde-section-769-118 bde-section">
          <div className="section-container">
            <div className="bde-rich-text-769-119 bde-rich-text breakdance-rich-text-styles">
              <div className="abstract" style={{ textAlign: "center" }}>
                {t.aboutParagraph1}
                <br />
                <br />
              </div>
              <div className="abstract" style={{ textAlign: "center" }}>
                {t.aboutParagraph2Start}
                <strong style={{ color: "#ed1d23" }}>
                  {t.aboutParagraph2Highlight1}
                </strong>
                {t.aboutParagraph2Middle}
                <strong style={{ color: "#ed1d23" }}>
                  {t.aboutParagraph2Highlight2}
                </strong>
                {t.aboutParagraph2End}
              </div>
              <p style={{ textAlign: "center" }}>{t.aboutParagraph3}</p>
            </div>
          </div>
        </section>
        <section className="bde-section-769-210 bde-section">
          <div className="section-container">
            <div className="bde-columns-769-322 bde-columns">
              <div className="bde-column-769-323 bde-column">
                <Image
                  src="/wp-content/uploads/2025/01/cuillere-v2.png"
                  alt="Cuillere V2"
                  width={698}
                  height={386}
                  className="bde-image2-769-256 bde-image2"
                  loading="lazy"
                  sizes="(max-width: 698px) 100vw, 698px"
                />
              </div>
              <div className="bde-column-769-324 bde-column">
                <div className="bde-div-769-211 bde-div">
                  <h2 className="bde-heading-769-212 bde-heading">Desserts</h2>
                  <Image
                    src="/wp-content/uploads/2025/01/red-top-border.png"
                    alt="Red Top Border"
                    width={1265}
                    height={155}
                    className="bde-image2-769-213 bde-image2"
                    loading="lazy"
                    sizes="(max-width: 1265px) 100vw, 1265px"
                  />
                  <div className="bde-div-769-214 bde-div">
                    <div className="bde-fancy-divider-769-215 bde-fancy-divider">
                      <div className="bde-fancy-divider__wrapper">
                        <div className="bde-fancy-divider__separator"></div>
                      </div>
                    </div>
                    <div className="bde-fancy-divider-769-288 bde-fancy-divider">
                      <div className="bde-fancy-divider__wrapper">
                        <div className="bde-fancy-divider__separator"></div>
                      </div>
                    </div>
                  </div>
                  <div className="bde-div-769-216 bde-div">
                    <div className="bde-div-769-217 bde-div bde-preset-4a368af5-7b0a-4ce4-a281-47ab68badcaf">
                      <div className="bde-div-769-218 bde-div bde-preset-84071600-909e-455e-8dc7-ade8350a2e28">
                        <h3 className="bde-heading-769-279 bde-heading desserts">
                          {t.dessertSorbets2}
                        </h3>
                      </div>
                      <div className="bde-text-769-220 bde-text bde-preset-5b0b0eb6-d544-4eb3-a475-06a52e74308a">
                        6
                      </div>
                    </div>
                    <div className="bde-div-769-221 bde-div bde-preset-4a368af5-7b0a-4ce4-a281-47ab68badcaf">
                      <div className="bde-div-769-222 bde-div">
                        <h3 className="bde-heading-769-280 bde-heading desserts">
                          {t.dessertSorbets3}
                        </h3>
                      </div>
                      <div className="bde-text-769-224 bde-text bde-preset-5b0b0eb6-d544-4eb3-a475-06a52e74308a">
                        9
                      </div>
                    </div>
                    <div className="bde-div-769-225 bde-div bde-preset-4a368af5-7b0a-4ce4-a281-47ab68badcaf">
                      <div className="bde-div-769-226 bde-div bde-preset-84071600-909e-455e-8dc7-ade8350a2e28">
                        <h3 className="bde-heading-769-286 bde-heading desserts">
                          {t.dessertPearTart}
                        </h3>
                      </div>
                      <div className="bde-text-769-228 bde-text bde-preset-5b0b0eb6-d544-4eb3-a475-06a52e74308a">
                        9,5
                      </div>
                    </div>
                    <div className="bde-div-769-229 bde-div bde-preset-4a368af5-7b0a-4ce4-a281-47ab68badcaf">
                      <div className="bde-div-769-230 bde-div bde-preset-84071600-909e-455e-8dc7-ade8350a2e28">
                        <h3 className="bde-heading-769-287 bde-heading desserts">
                          {t.dessertAppleTart}
                        </h3>
                      </div>
                      <div className="bde-text-769-232 bde-text bde-preset-5b0b0eb6-d544-4eb3-a475-06a52e74308a">
                        9,5
                      </div>
                    </div>
                    <div className="bde-div-769-233 bde-div bde-preset-4a368af5-7b0a-4ce4-a281-47ab68badcaf">
                      <div className="bde-div-769-234 bde-div bde-preset-84071600-909e-455e-8dc7-ade8350a2e28">
                        <h3 className="bde-heading-769-281 bde-heading desserts">
                          {t.dessertLemonTart}
                        </h3>
                      </div>
                      <div className="bde-text-769-236 bde-text bde-preset-5b0b0eb6-d544-4eb3-a475-06a52e74308a">
                        9,5
                      </div>
                    </div>
                    <div className="bde-div-769-237 bde-div bde-preset-4a368af5-7b0a-4ce4-a281-47ab68badcaf">
                      <div className="bde-div-769-238 bde-div bde-preset-84071600-909e-455e-8dc7-ade8350a2e28">
                        <h3 className="bde-heading-769-283 bde-heading desserts">
                          {t.dessertCremeBrulee}
                        </h3>
                      </div>
                      <div className="bde-text-769-240 bde-text bde-preset-5b0b0eb6-d544-4eb3-a475-06a52e74308a">
                        9,5
                      </div>
                    </div>
                    <div className="bde-div-769-241 bde-div bde-preset-4a368af5-7b0a-4ce4-a281-47ab68badcaf">
                      <div className="bde-div-769-242 bde-div bde-preset-84071600-909e-455e-8dc7-ade8350a2e28">
                        <h3 className="bde-heading-769-284 bde-heading desserts">
                          {t.dessertBaba}
                        </h3>
                      </div>
                      <div className="bde-text-769-244 bde-text bde-preset-5b0b0eb6-d544-4eb3-a475-06a52e74308a">
                        10,5
                      </div>
                    </div>
                    <div className="bde-div-769-245 bde-div bde-preset-4a368af5-7b0a-4ce4-a281-47ab68badcaf">
                      <div className="bde-div-769-246 bde-div bde-preset-84071600-909e-455e-8dc7-ade8350a2e28">
                        <h3 className="bde-heading-769-285 bde-heading desserts">
                          {t.dessertProfiteroles}
                        </h3>
                      </div>
                      <div className="bde-text-769-248 bde-text bde-preset-5b0b0eb6-d544-4eb3-a475-06a52e74308a">
                        11
                      </div>
                    </div>
                    <div className="bde-div-769-249 bde-div bde-preset-4a368af5-7b0a-4ce4-a281-47ab68badcaf">
                      <div className="bde-div-769-250 bde-div">
                        <h3 className="bde-heading-769-282 bde-heading desserts">
                          {t.dessertChocolateCake}
                        </h3>
                        <div className="bde-text-769-252 bde-text desserts">
                          {t.dessertWaitTime}
                        </div>
                      </div>
                      <div className="bde-text-769-253 bde-text bde-preset-5b0b0eb6-d544-4eb3-a475-06a52e74308a">
                        12
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bde-button-769-254 bde-button">
                  <a
                    className="breakdance-link button-atom button-atom--custom bde-button__button"
                    href="wp-content/uploads/2025/10/BLACK_ANGUS_MENU_OCT_2025.pdf"
                    target="_self"
                    data-type="url"
                  >
                    <span className="button-atom__text">{t.fullMenuPDF}</span>
                  </a>
                </div>
              </div>
              <div className="bde-column-769-325 bde-column">
                <Image
                  src="/wp-content/uploads/2025/01/couverts.png"
                  alt="Couverts"
                  width={364}
                  height={362}
                  className="bde-image2-769-257 bde-image2"
                  loading="lazy"
                  sizes="(max-width: 364px) 100vw, 364px"
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bde-section-769-289 bde-section">
          <div className="section-container">
            <div className="bde-gallery-769-290 bde-gallery">
              <div
                className="ee-gallery-swiper breakdance-swiper-wrapper"
                data-swiper-id="290"
              >
                <div className="swiper">
                  <div className="ee-gallery ee-gallery--gallery-slider ee-gallery--slider ee-gallery-- ee-gallery--lightbox ee-gallery--zoom-in ee-gallery--caption- ee-gallery--caption-none ee-gallery--custom swiper-wrapper">
                    <a
                      className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                      href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-45.jpg"
                      data-sub-html="<span></span>"
                      data-category="1"
                      data-lg-size="2000-1333"
                    >
                      <figure className="ee-gallery-item-figure">
                        <Image
                          src="/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-45.jpg"
                          alt="L'entreboeuf Déc24@ninacoriton 45"
                          width={2000}
                          height={1333}
                          className="breakdance-image-object"
                          sizes="(max-width: 2000px) 100vw, 2000px"
                        />
                      </figure>
                    </a>

                    <a
                      className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                      href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-40.jpg"
                      data-sub-html="<span></span>"
                      data-category="1"
                      data-lg-size="2000-1333"
                    >
                      <figure className="ee-gallery-item-figure">
                        <Image
                          src="/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-40.jpg"
                          alt="L'entreboeuf Déc24@ninacoriton 40"
                          width={2000}
                          height={1333}
                          className="breakdance-image-object"
                          sizes="(max-width: 2000px) 100vw, 2000px"
                        />
                      </figure>
                    </a>

                    <a
                      className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                      href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-36.jpg"
                      data-sub-html="<span></span>"
                      data-category="1"
                      data-lg-size="1333-2000"
                    >
                      <figure className="ee-gallery-item-figure">
                        <Image
                          src="/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-36.jpg"
                          alt="L'entreboeuf Déc24@ninacoriton 36"
                          width={1333}
                          height={2000}
                          className="breakdance-image-object"
                          sizes="(max-width: 1333px) 100vw, 1333px"
                        />
                      </figure>
                    </a>

                    <a
                      className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                      href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-30.jpg"
                      data-sub-html="<span></span>"
                      data-category="1"
                      data-lg-size="2000-1333"
                    >
                      <figure className="ee-gallery-item-figure">
                        <Image
                          src="/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-30.jpg"
                          alt="L'entreboeuf Déc24@ninacoriton 30"
                          width={2000}
                          height={1333}
                          className="breakdance-image-object"
                          sizes="(max-width: 2000px) 100vw, 2000px"
                        />
                      </figure>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="bde-columns-769-291 bde-columns">
              <div className="bde-column-769-292 bde-column">
                <div className="bde-gallery-769-293 bde-gallery">
                  <div
                    className="ee-gallery-swiper breakdance-swiper-wrapper"
                    data-swiper-id="293"
                  >
                    <div className="swiper">
                      <div className="ee-gallery ee-gallery--gallery-slider ee-gallery--slider ee-gallery-- ee-gallery--lightbox ee-gallery--zoom-in ee-gallery--caption- ee-gallery--caption-none ee-gallery--custom swiper-wrapper">
                        <a
                          className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                          href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-45.jpg"
                          data-sub-html="<span></span>"
                          data-category="1"
                          data-lg-size="2000-1333"
                        >
                          <figure className="ee-gallery-item-figure">
                            <Image
                              src="/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-45.jpg"
                              alt="L'entreboeuf Déc24@ninacoriton 45"
                              width={2000}
                              height={1333}
                              className="breakdance-image-object"
                              sizes="(max-width: 2000px) 100vw, 2000px"
                            />
                      </figure>
                        </a>

                        <a
                          className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                          href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-30.jpg"
                          data-sub-html="<span></span>"
                          data-category="1"
                          data-lg-size="2000-1333"
                        >
                          <figure className="ee-gallery-item-figure">
                            <Image
                              src="/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-30.jpg"
                              alt="L'entreboeuf Déc24@ninacoriton 30"
                              width={2000}
                              height={1333}
                              className="breakdance-image-object"
                              sizes="(max-width: 2000px) 100vw, 2000px"
                            />
                      </figure>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bde-column-769-294 bde-column">
                <div className="bde-gallery-769-295 bde-gallery">
                  <div
                    className="ee-gallery-swiper breakdance-swiper-wrapper"
                    data-swiper-id="295"
                  >
                    <div className="swiper">
                      <div className="ee-gallery ee-gallery--gallery-slider ee-gallery--slider ee-gallery-- ee-gallery--lightbox ee-gallery--zoom-in ee-gallery--caption- ee-gallery--caption-none ee-gallery--custom swiper-wrapper">
                        <a
                          className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                          href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-36.jpg"
                          data-sub-html="<span></span>"
                          data-category="1"
                          data-lg-size="1333-2000"
                        >
                          <figure className="ee-gallery-item-figure">
                            <Image
                              src="/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-36.jpg"
                              alt="L'entreboeuf Déc24@ninacoriton 36"
                              width={1333}
                              height={2000}
                              className="breakdance-image-object"
                              sizes="(max-width: 1333px) 100vw, 1333px"
                            />
                      </figure>
                        </a>

                        <a
                          className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                          href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-40.jpg"
                          data-sub-html="<span></span>"
                          data-category="1"
                          data-lg-size="2000-1333"
                        >
                          <figure className="ee-gallery-item-figure">
                            <Image
                              src="/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-40.jpg"
                              alt="L'entreboeuf Déc24@ninacoriton 40"
                              width={2000}
                              height={1333}
                              className="breakdance-image-object"
                              sizes="(max-width: 2000px) 100vw, 2000px"
                            />
                      </figure>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bde-column-769-296 bde-column">
                <div className="bde-gallery-769-297 bde-gallery">
                  <div
                    className="ee-gallery-swiper breakdance-swiper-wrapper"
                    data-swiper-id="297"
                  >
                    <div className="swiper">
                      <div className="ee-gallery ee-gallery--gallery-slider ee-gallery--slider ee-gallery-- ee-gallery--lightbox ee-gallery--zoom-in ee-gallery--caption- ee-gallery--caption-none ee-gallery--custom swiper-wrapper">
                        <a
                          className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                          href="wp-content/uploads/2025/01/LEntreboeuf_Nov24%40ninacoriton-34.jpg"
                          data-sub-html="<span></span>"
                          data-category="1"
                          data-lg-size="1333-2000"
                        >
                          <figure className="ee-gallery-item-figure">
                            <Image
                              src="/wp-content/uploads/2025/01/LEntreboeuf_Nov24@ninacoriton-34.jpg"
                              alt="L'entreboeuf Nov24@ninacoriton 34"
                              width={1333}
                              height={2000}
                              className="breakdance-image-object"
                              sizes="(max-width: 1333px) 100vw, 1333px"
                            />
                      </figure>
                        </a>

                        <a
                          className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                          href="wp-content/uploads/2025/01/LEntreboeuf_Nov24%40ninacoriton-37.jpg"
                          data-sub-html="<span></span>"
                          data-category="1"
                          data-lg-size="1333-2000"
                        >
                          <figure className="ee-gallery-item-figure">
                            <Image
                              src="/wp-content/uploads/2025/01/LEntreboeuf_Nov24@ninacoriton-37.jpg"
                              alt="L'entreboeuf Nov24@ninacoriton 37"
                              width={1333}
                              height={2000}
                              className="breakdance-image-object"
                              sizes="(max-width: 1333px) 100vw, 1333px"
                            />
                      </figure>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bde-section-769-315 bde-section">
          <div className="section-container">
            <h2 className="bde-heading-769-316 bde-heading">
              {t.angusHeading}
            </h2>
            <div className="bde-rich-text-769-314 bde-rich-text breakdance-rich-text-styles">
              <p style={{ textAlign: "center" }}>
                {t.angusPara1Start}
                <strong>{t.angusPara1Bold}</strong>
                {t.angusPara1End}
              </p>
              <p style={{ textAlign: "center" }}>
                <strong>
                  {t.angusPara2BoldStart}
                  <span style={{ color: "#ff0000" }}>{t.angusPara2Red}</span>
                </strong>
                {t.angusPara2BoldEnd}
              </p>
              <p style={{ textAlign: "center" }}>{t.angusPara3}</p>
              <p style={{ textAlign: "center" }}>{t.angusPara4}</p>
            </div>
          </div>
        </section>
      </div>
      <GalleryScripts />
    </>
  );
}
