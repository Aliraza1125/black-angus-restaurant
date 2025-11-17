import Script from "next/script";
import "./globals.css";
import LayoutWrapper from "../components/LayoutWrapper";

export const metadata = {
  title: "Black Angus, le restaurant qui sublime la viande à Paris 11 ème",
  description: "Le nouveau restaurant Black Angus vous propose le meilleur de la viande à Paris sur la place de la république, avec trois formules offrant de belles pièces comme le cœur de rumsteak, l'entrecôte ou le filet de bœuf.",
  robots: "max-image-preview:large, max-snippet:-1, max-video-preview:-1",
  openGraph: {
    title: "Black Angus, le restaurant qui sublime la viande à Paris 11 ème",
    description: "Le nouveau restaurant Black Angus vous propose le meilleur de la viande à Paris sur la place de la république, avec trois formules offrant de belles pièces comme le cœur de rumsteak, l'entrecôte ou le filet de bœuf.",
    url: "https://restaurantblackangus.com/",
    type: "website",
    locale: "fr_FR",
    siteName: "Restaurant Black Angus Paris",
  },
  icons: {
    icon: [
      { url: "/wp-content/uploads/2024/12/cropped-logo-black-angus-reseaux-sociaux-32x32.jpg", sizes: "32x32" },
      { url: "/wp-content/uploads/2024/12/cropped-logo-black-angus-reseaux-sociaux-192x192.jpg", sizes: "192x192" },
    ],
    apple: "/wp-content/uploads/2024/12/cropped-logo-black-angus-reseaux-sociaux-180x180.jpg",
  },
  other: {
    "google-site-verification": "C3QiZHyJN95SfoNwfuQo5mSAkRQYbBHFlOVGMfuKq2Y",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr-FR">
      <head>
        <link rel="canonical" href="https://restaurantblackangus.com/" />
        <link rel="alternate" href="https://restaurantblackangus.com/" hrefLang="fr" />
        <link rel="alternate" href="https://restaurantblackangus.com/en/" hrefLang="en" />

        <style dangerouslySetInnerHTML={{__html: `
          @font-face {
            font-family: 'Antonio';
            font-style: normal;
            font-weight: 100;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/antonio/v22/gNMbW3NwSYq_9WD34ngK5F8vR8T0PVxx8BtI.ttf) format('truetype');
          }
          @font-face {
            font-family: 'Antonio';
            font-style: normal;
            font-weight: 200;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/antonio/v22/gNMbW3NwSYq_9WD34ngK5F8vR8T0PVzx8RtI.ttf) format('truetype');
          }
          @font-face {
            font-family: 'Antonio';
            font-style: normal;
            font-weight: 300;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/antonio/v22/gNMbW3NwSYq_9WD34ngK5F8vR8T0PVwv8RtI.ttf) format('truetype');
          }
          @font-face {
            font-family: 'Antonio';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/antonio/v22/gNMbW3NwSYq_9WD34ngK5F8vR8T0PVxx8RtI.ttf) format('truetype');
          }
          @font-face {
            font-family: 'Antonio';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/antonio/v22/gNMbW3NwSYq_9WD34ngK5F8vR8T0PVxD8RtI.ttf) format('truetype');
          }
          @font-face {
            font-family: 'Antonio';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/antonio/v22/gNMbW3NwSYq_9WD34ngK5F8vR8T0PVyv9htI.ttf) format('truetype');
          }
          @font-face {
            font-family: 'Antonio';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/antonio/v22/gNMbW3NwSYq_9WD34ngK5F8vR8T0PVyW9htI.ttf) format('truetype');
          }
          @font-face {
            font-family: 'Outfit';
            font-style: normal;
            font-weight: 100;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/outfit/v15/QGYyz_MVcBeNP4NjuGObqx1XmO1I4TC0C4E.ttf) format('truetype');
          }
          @font-face {
            font-family: 'Outfit';
            font-style: normal;
            font-weight: 200;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/outfit/v15/QGYyz_MVcBeNP4NjuGObqx1XmO1I4bC1C4E.ttf) format('truetype');
          }
          @font-face {
            font-family: 'Outfit';
            font-style: normal;
            font-weight: 300;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/outfit/v15/QGYyz_MVcBeNP4NjuGObqx1XmO1I4W61C4E.ttf) format('truetype');
          }
          @font-face {
            font-family: 'Outfit';
            font-style: normal;
            font-weight: 400;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/outfit/v15/QGYyz_MVcBeNP4NjuGObqx1XmO1I4TC1C4E.ttf) format('truetype');
          }
          @font-face {
            font-family: 'Outfit';
            font-style: normal;
            font-weight: 500;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/outfit/v15/QGYyz_MVcBeNP4NjuGObqx1XmO1I4QK1C4E.ttf) format('truetype');
          }
          @font-face {
            font-family: 'Outfit';
            font-style: normal;
            font-weight: 600;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/outfit/v15/QGYyz_MVcBeNP4NjuGObqx1XmO1I4e6yC4E.ttf) format('truetype');
          }
          @font-face {
            font-family: 'Outfit';
            font-style: normal;
            font-weight: 700;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/outfit/v15/QGYyz_MVcBeNP4NjuGObqx1XmO1I4deyC4E.ttf) format('truetype');
          }
          @font-face {
            font-family: 'Outfit';
            font-style: normal;
            font-weight: 800;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/outfit/v15/QGYyz_MVcBeNP4NjuGObqx1XmO1I4bCyC4E.ttf) format('truetype');
          }
          @font-face {
            font-family: 'Outfit';
            font-style: normal;
            font-weight: 900;
            font-display: swap;
            src: url(https://fonts.gstatic.com/s/outfit/v15/QGYyz_MVcBeNP4NjuGObqx1XmO1I4ZmyC4E.ttf) format('truetype');
          }
          img:is([sizes="auto" i], [sizes^="auto," i]) {
            contain-intrinsic-size: 3000px 1500px;
          }
          .lazyload { background-image: none !important; }
          .lazyload:before { background-image: none !important; }
          .country-selector.weglot-dropdown .wgcurrent a,
          .country-selector.weglot-dropdown .wgcurrent span {
            padding-right: 20px;
          }
        `}} />
      </head>
      <body className="wp-singular page-template-default page wp-theme-breakdance-zero-theme breakdance">
        <LayoutWrapper>
          {children}
        </LayoutWrapper>

        {/* JavaScript files - Critical scripts load first */}
        <Script src="/wp-content/plugins/weglot/dist/front-js5fba.js" strategy="afterInteractive" />
        <Script src="/wp-content/plugins/breakdance/plugin/global-scripts/breakdance-utilsc93c.js" strategy="afterInteractive" />
        <Script src="/wp-content/plugins/breakdance/subplugins/breakdance-elements/dependencies-files/breakdance-header-builder@1/header-builderc93c.js" strategy="afterInteractive" />

        {/* Non-critical scripts load lazily for better performance */}
        <Script src="/wp-content/plugins/breakdance/subplugins/breakdance-elements/dependencies-files/swiper@8/swiper-bundle.minc93c.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/breakdance/subplugins/breakdance-elements/dependencies-files/breakdance-swiper/breakdance-swiperc93c.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/breakdance/subplugins/breakdance-elements/dependencies-files/isotope-layout@3.0.6/isotope.pkgd.minc93c.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/breakdance/subplugins/breakdance-elements/dependencies-files/lightgallery@2/lightgallery-bundle.minc93c.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/breakdance/subplugins/breakdance-elements/dependencies-files/elements-reusable-code/lightboxc93c.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/breakdance/subplugins/breakdance-elements/dependencies-files/breakdance-gallery@1/galleryc93c.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/breakdance/subplugins/breakdance-elements/dependencies-files/imagesloaded@4/imagesloaded.pkgd.minc93c.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/breakdance/plugin/animations/scrolling/js/blur-pluginc93c.js" strategy="lazyOnload" />
        <Script src="/wp-content/plugins/breakdance/plugin/animations/scrolling/js/parallaxc93c.js" strategy="lazyOnload" />
        <Script src="https://unpkg.com/gsap@3.12.2/dist/gsap.min.js" strategy="lazyOnload" />
        <Script src="https://unpkg.com/gsap@3.12.2/dist/ScrollTrigger.min.js" strategy="lazyOnload" />
        <Script src="https://cdn.trustindex.io/loader.js" strategy="lazyOnload" />
      </body>
    </html>
  );
}
