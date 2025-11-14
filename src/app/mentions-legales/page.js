'use client';

import { useLanguage } from '../../context/LanguageContext';

export default function MentionsLegales() {
  const { t } = useLanguage();

  return (
    <div className="breakdance">
      <section className="bde-section-46-100 bde-section">
        <div className="section-container">
          <img
            decoding="async"
            className="bde-image2-46-101 bde-image2 lazyload"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB04AAAJUAQAAAAC6ODjnAAAAAnRSTlMAAHaTzTgAAACeSURBVHja7cEBDQAAAMKg909tDwcUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfBsjOgABmqxUCAAAAABJRU5ErkJggg=="
            alt="Restaurant Black Angus Paris"
            loading="lazy"
            data-src="https://restaurantblackangus.com/wp-content/uploads/2024/12/logo-black-angus-site-internet.jpg"
            data-srcset="https://restaurantblackangus.com/wp-content/uploads/2024/12/logo-black-angus-site-internet.jpg 1870w, https://restaurantblackangus.com/wp-content/uploads/2024/12/logo-black-angus-site-internet-300x96.jpg 300w, https://restaurantblackangus.com/wp-content/uploads/2024/12/logo-black-angus-site-internet-1024x326.jpg 1024w, https://restaurantblackangus.com/wp-content/uploads/2024/12/logo-black-angus-site-internet-768x245.jpg 768w, https://restaurantblackangus.com/wp-content/uploads/2024/12/logo-black-angus-site-internet-1536x490.jpg 1536w"
            data-sizes="auto"
            width="1870"
            height="596"
            data-eio-rwidth="1870"
            data-eio-rheight="596"
          />
          <noscript>
            <img
              decoding="async"
              className="bde-image2-46-101 bde-image2"
              src="/wp-content/uploads/2024/12/logo-black-angus-site-internet.jpg"
              alt="Restaurant Black Angus Paris"
              loading="lazy"
              srcSet="https://restaurantblackangus.com/wp-content/uploads/2024/12/logo-black-angus-site-internet.jpg 1870w, https://restaurantblackangus.com/wp-content/uploads/2024/12/logo-black-angus-site-internet-300x96.jpg 300w, https://restaurantblackangus.com/wp-content/uploads/2024/12/logo-black-angus-site-internet-1024x326.jpg 1024w, https://restaurantblackangus.com/wp-content/uploads/2024/12/logo-black-angus-site-internet-768x245.jpg 768w, https://restaurantblackangus.com/wp-content/uploads/2024/12/logo-black-angus-site-internet-1536x490.jpg 1536w"
              sizes="(max-width: 1870px) 100vw, 1870px"
              data-eio="l"
            />
          </noscript>
          <h1 className="bde-heading-46-102 bde-heading">
            {t.legalNoticesTitle}
          </h1>
          <div className="bde-rich-text-46-103 bde-rich-text breakdance-rich-text-styles">
            <p style={{ textAlign: 'left' }}>
              {t.legalNoticesIntro}
            </p>
            <p style={{ textAlign: 'left' }}>
              <strong>{t.legalNoticesInfoTitle}</strong>
            </p>
            <p style={{ textAlign: 'left' }}>
              {t.legalNoticesStatus}
              <br />
              {t.legalNoticesName}
              <br />
              {t.legalNoticesSiret}
              <br />
              {t.legalNoticesAddress}
            </p>
            <p style={{ textAlign: 'left' }}>
              {t.legalNoticesHosting}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
