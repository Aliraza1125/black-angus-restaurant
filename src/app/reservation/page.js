'use client';

import { useLanguage } from '../../context/LanguageContext';

export default function Reservation() {
  const { t } = useLanguage();

  return (
    <div className="breakdance">
      <section className="bde-section-238-100 bde-section">
        <div className="section-container">
          <div className="bde-columns-238-102 bde-columns">
            <div className="bde-column-238-103 bde-column">
              <div className="bde-rich-text-238-105 bde-rich-text breakdance-rich-text-styles">
                <p style={{ textAlign: 'left' }}>
                  <strong>{t.reservationPleaseNote}</strong>
                </p>
                <ul>
                  <li style={{ textAlign: 'left' }}>
                    <span style={{ color: '#ff0000' }}>
                      <strong>{t.reservationWalkInWelcome}</strong>
                    </span>{' '}
                    <strong>
                      <span style={{ color: '#ff0000' }}>{t.reservationNoReservation} </span>
                    </strong>
                    {t.reservationSpacious} <strong>{t.reservationTablesAvailable}</strong> {t.reservationForWalkIn}
                    <br />
                    <br />
                  </li>
                  <li style={{ textAlign: 'left' }}>
                    {t.reservationPossibility}
                  </li>
                  <li style={{ textAlign: 'left' }}>
                    <strong>
                      <span style={{ color: '#ff0000' }}>{t.reservationEveningSlots}</span> {t.reservationWalkInEvening}{' '}
                      <u>{t.reservationComeWithout}</u>{' '}
                    </strong>
                    {t.reservationTeamHappy}
                    <br />
                    <br />
                  </li>
                  <li style={{ textAlign: 'left' }}>
                    <strong>{t.reservationLastOrder}</strong> :<br />
                    {t.reservationWeekday}
                    <br />
                    {t.reservationWeekend}
                  </li>
                </ul>
              </div>
              <div className="bde-button-238-107 bde-button booking-link">
                <a
                  className="breakdance-link button-atom button-atom--custom bde-button__button"
                  href="https://bookings.zenchef.com/results?rid=369522"
                  target="_blank"
                  data-type="url"
                  rel="noopener noreferrer"
                >
                  <span className="button-atom__text">{t.reservationBookButton}</span>
                </a>
              </div>
            </div>
            <div className="bde-column-238-104 bde-column">
              <img
                decoding="async"
                className="bde-image2-238-106 bde-image2 lazyload"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABTUAAAeAAQAAAAA3ao7XAAAAAnRSTlMAAHaTzTgAAAFPSURBVHja7cExAQAAAMKg9U9tB2+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4DfsPAABv1iGcAAAAABJRU5ErkJggg=="
                alt={t.reservationImageAlt}
                loading="lazy"
                data-src="https://restaurantblackangus.com/wp-content/uploads/2025/01/Restaurant-black-angus-grande-salle-paris.jpg"
                data-srcset="https://restaurantblackangus.com/wp-content/uploads/2025/01/Restaurant-black-angus-grande-salle-paris.jpg 1333w, https://restaurantblackangus.com/wp-content/uploads/2025/01/Restaurant-black-angus-grande-salle-paris-200x300.jpg 200w, https://restaurantblackangus.com/wp-content/uploads/2025/01/Restaurant-black-angus-grande-salle-paris-682x1024.jpg 682w, https://restaurantblackangus.com/wp-content/uploads/2025/01/Restaurant-black-angus-grande-salle-paris-768x1152.jpg 768w, https://restaurantblackangus.com/wp-content/uploads/2025/01/Restaurant-black-angus-grande-salle-paris-1024x1536.jpg 1024w"
                data-sizes="auto"
                width="1333"
                height="2000"
                data-eio-rwidth="1333"
                data-eio-rheight="2000"
              />
              <noscript>
                <img
                  decoding="async"
                  className="bde-image2-238-106 bde-image2"
                  src="/wp-content/uploads/2025/01/Restaurant-black-angus-grande-salle-paris.jpg"
                  alt={t.reservationImageAlt}
                  loading="lazy"
                  srcSet="https://restaurantblackangus.com/wp-content/uploads/2025/01/Restaurant-black-angus-grande-salle-paris.jpg 1333w, https://restaurantblackangus.com/wp-content/uploads/2025/01/Restaurant-black-angus-grande-salle-paris-200x300.jpg 200w, https://restaurantblackangus.com/wp-content/uploads/2025/01/Restaurant-black-angus-grande-salle-paris-682x1024.jpg 682w, https://restaurantblackangus.com/wp-content/uploads/2025/01/Restaurant-black-angus-grande-salle-paris-768x1152.jpg 768w, https://restaurantblackangus.com/wp-content/uploads/2025/01/Restaurant-black-angus-grande-salle-paris-1024x1536.jpg 1024w"
                  sizes="(max-width: 1333px) 100vw, 1333px"
                  data-eio="l"
                />
              </noscript>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
