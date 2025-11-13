'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { translations } from '../translations';

export default function Home() {
  const [language, setLanguage] = useState('fr');
  const t = translations[language];

  useEffect(() => {
    // Load language preference from localStorage
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage && (savedLanguage === 'fr' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  useEffect(() => {
    // Initialize gallery and other interactive elements
    document.addEventListener("DOMContentLoaded", function () {
            if (!window.BreakdanceFrontend) {
              window.BreakdanceFrontend = {};
            }
    
            window.BreakdanceFrontend.data = {
              homeUrl: "https:\/\/restaurantblackangus.com",
              ajaxUrl:
                "https:\/\/restaurantblackangus.com\/wp-admin\/admin-ajax.php",
              elementsPluginUrl:
                "https:\/\/restaurantblackangus.com\/wp-content\/plugins\/breakdance\/subplugins\/breakdance-elements\/",
              BASE_BREAKPOINT_ID: "breakpoint_base",
              breakpoints: [
                {
                  id: "breakpoint_base",
                  label: "Desktop",
                  defaultPreviewWidth: "100%",
                },
                {
                  id: "breakpoint_tablet_landscape",
                  label: "Tablet Landscape",
                  defaultPreviewWidth: 1024,
                  maxWidth: 1119,
                },
                {
                  id: "breakpoint_tablet_portrait",
                  label: "Tablet Portrait",
                  defaultPreviewWidth: 768,
                  maxWidth: 1023,
                },
                {
                  id: "breakpoint_phone_landscape",
                  label: "Phone Landscape",
                  defaultPreviewWidth: 480,
                  maxWidth: 767,
                },
                {
                  id: "breakpoint_phone_portrait",
                  label: "Phone Portrait",
                  defaultPreviewWidth: 400,
                  maxWidth: 479,
                },
              ],
              subscriptionMode: "pro",
            };
          });

    document.addEventListener("DOMContentLoaded", function () {
            new BreakdanceHeaderBuilder(
              ".breakdance .bde-header-builder-130-100",
              "100",
              false
            );
          });

    document.addEventListener("DOMContentLoaded", function () {
            new BreakdanceHeaderBuilder(
              ".breakdance .bde-header-builder-130-115",
              "115",
              false
            );
          });

    document.addEventListener("DOMContentLoaded", function () {
            window.BreakdanceSwiper().update({
              id: "bde-gallery-769-110",
              selector: ".breakdance .bde-gallery-769-110",
              settings: {
                advanced: {
                  slides_per_view: { breakpoint_base: 1 },
                  one_per_view_at: "breakpoint_phone_landscape",
                  slides_per_group: { breakpoint_base: 3 },
                  swipe_on_scroll: false,
                  auto_height: true,
                  between_slides: { breakpoint_base: null },
                },
                infinite: "enabled",
                autoplay: "enabled",
                speed: { number: 1000, unit: "ms", style: "1000ms" },
                effect: "fade",
                autoplay_settings: {
                  speed: { number: 600, unit: "ms", style: "600ms" },
                  stop_on_interaction: false,
                  pause_on_hover: true,
                },
              },
              paginationSettings: { type: "none" },
            });
          });

    document.addEventListener("DOMContentLoaded", function () {
            new BreakdanceLightbox(".breakdance .bde-gallery-769-110", {
              itemSelector: ".ee-gallery-item",
              ...{
                thumbnails: true,
                animated_thumbnails: false,
                zoom: true,
                autoplay: false,
                background: "#000000",
                controls: "#999999",
                thumbnail: "#ffffff",
                thumbnail_active: "#01d2e8f0",
                autoplay_videos: false,
              },
            });
          });

    document.addEventListener("DOMContentLoaded", function () {
            new BreakdanceGallery(".breakdance .bde-gallery-769-110", {
              ...{
                type: "slider",
                gap: { breakpoint_base: { number: 10, unit: "px", style: "10px" } },
                columns: { breakpoint_base: 3, breakpoint_phone_portrait: 1 },
                aspect_ratio: "100%",
                slider: {
                  settings: {
                    advanced: {
                      slides_per_view: { breakpoint_base: 1 },
                      one_per_view_at: "breakpoint_phone_landscape",
                      slides_per_group: { breakpoint_base: 3 },
                      swipe_on_scroll: false,
                      auto_height: true,
                      between_slides: { breakpoint_base: null },
                    },
                    infinite: "enabled",
                    autoplay: "enabled",
                    speed: { number: 1000, unit: "ms", style: "1000ms" },
                    effect: "fade",
                    autoplay_settings: {
                      speed: { number: 600, unit: "ms", style: "600ms" },
                      stop_on_interaction: false,
                      pause_on_hover: true,
                    },
                  },
                  arrows: { disable: true },
                  pagination: { type: "none" },
                },
                slider_images: {
                  aspect_ratio: "0",
                  width: {
                    breakpoint_base: { number: 100, unit: "%", style: "100%" },
                  },
                  height: {
                    breakpoint_phone_portrait: {
                      number: 525,
                      unit: "px",
                      style: "525px",
                    },
                  },
                },
                width: {
                  breakpoint_base: { number: 100, unit: "%", style: "100%" },
                },
              },
              mode: null,
            });
          });

    document.addEventListener("DOMContentLoaded", function () {
            window.BreakdanceSwiper().update({
              id: "bde-gallery-769-301",
              selector: ".breakdance .bde-gallery-769-301",
              settings: {
                advanced: {
                  slides_per_view: { breakpoint_base: 1 },
                  one_per_view_at: "breakpoint_phone_landscape",
                  slides_per_group: { breakpoint_base: 3 },
                  swipe_on_scroll: false,
                  auto_height: false,
                  between_slides: { breakpoint_base: null },
                },
                infinite: "enabled",
                autoplay: "enabled",
                speed: { number: 1000, unit: "ms", style: "1000ms" },
                effect: "fade",
                autoplay_settings: {
                  speed: { number: 600, unit: "ms", style: "600ms" },
                },
              },
              paginationSettings: { type: "none" },
            });
          });

    document.addEventListener("DOMContentLoaded", function () {
            new BreakdanceLightbox(".breakdance .bde-gallery-769-301", {
              itemSelector: ".ee-gallery-item",
              ...{
                thumbnails: true,
                animated_thumbnails: false,
                zoom: true,
                autoplay: false,
                background: "#000000",
                controls: "#999999",
                thumbnail: "#ffffff",
                thumbnail_active: "#01d2e8f0",
                autoplay_videos: false,
              },
            });
          });

    document.addEventListener("DOMContentLoaded", function () {
            new BreakdanceGallery(".breakdance .bde-gallery-769-301", {
              ...{
                type: "slider",
                gap: { breakpoint_base: { number: 10, unit: "px", style: "10px" } },
                columns: { breakpoint_base: 3, breakpoint_phone_portrait: 1 },
                aspect_ratio: "100%",
                slider: {
                  settings: {
                    advanced: {
                      slides_per_view: { breakpoint_base: 1 },
                      one_per_view_at: "breakpoint_phone_landscape",
                      slides_per_group: { breakpoint_base: 3 },
                      swipe_on_scroll: false,
                      auto_height: false,
                      between_slides: { breakpoint_base: null },
                    },
                    infinite: "enabled",
                    autoplay: "enabled",
                    speed: { number: 1000, unit: "ms", style: "1000ms" },
                    effect: "fade",
                    autoplay_settings: {
                      speed: { number: 600, unit: "ms", style: "600ms" },
                    },
                  },
                  arrows: { disable: true },
                  pagination: { type: "none" },
                },
                slider_images: {
                  aspect_ratio: "0",
                  width: {
                    breakpoint_base: { number: 100, unit: "%", style: "100%" },
                  },
                  height: {
                    breakpoint_base: { number: 525, unit: "px", style: "525px" },
                  },
                },
                width: {
                  breakpoint_base: { number: 100, unit: "%", style: "100%" },
                },
              },
              mode: null,
            });
          });

    document.addEventListener("DOMContentLoaded", function () {
            window.BreakdanceSwiper().update({
              id: "bde-gallery-769-115",
              selector: ".breakdance .bde-gallery-769-115",
              settings: {
                advanced: {
                  slides_per_view: { breakpoint_base: 1 },
                  one_per_view_at: "breakpoint_phone_landscape",
                  slides_per_group: { breakpoint_base: 3 },
                  swipe_on_scroll: false,
                  auto_height: false,
                  between_slides: { breakpoint_base: null },
                },
                infinite: "enabled",
                autoplay: "enabled",
                speed: { number: 1000, unit: "ms", style: "1000ms" },
                effect: "fade",
                autoplay_settings: {
                  speed: { number: 800, unit: "ms", style: "800ms" },
                },
              },
              paginationSettings: { type: "none" },
            });
          });

    document.addEventListener("DOMContentLoaded", function () {
            new BreakdanceLightbox(".breakdance .bde-gallery-769-115", {
              itemSelector: ".ee-gallery-item",
              ...{
                thumbnails: true,
                animated_thumbnails: false,
                zoom: true,
                autoplay: false,
                background: "#000000",
                controls: "#999999",
                thumbnail: "#ffffff",
                thumbnail_active: "#01d2e8f0",
                autoplay_videos: false,
              },
            });
          });

    document.addEventListener("DOMContentLoaded", function () {
            new BreakdanceGallery(".breakdance .bde-gallery-769-115", {
              ...{
                type: "slider",
                gap: { breakpoint_base: { number: 10, unit: "px", style: "10px" } },
                columns: { breakpoint_base: 3, breakpoint_phone_portrait: 1 },
                aspect_ratio: "100%",
                slider: {
                  settings: {
                    advanced: {
                      slides_per_view: { breakpoint_base: 1 },
                      one_per_view_at: "breakpoint_phone_landscape",
                      slides_per_group: { breakpoint_base: 3 },
                      swipe_on_scroll: false,
                      auto_height: false,
                      between_slides: { breakpoint_base: null },
                    },
                    infinite: "enabled",
                    autoplay: "enabled",
                    speed: { number: 1000, unit: "ms", style: "1000ms" },
                    effect: "fade",
                    autoplay_settings: {
                      speed: { number: 800, unit: "ms", style: "800ms" },
                    },
                  },
                  arrows: { disable: true },
                  pagination: { type: "none" },
                },
                slider_images: {
                  aspect_ratio: "0",
                  width: {
                    breakpoint_base: { number: 100, unit: "%", style: "100%" },
                  },
                  height: {
                    breakpoint_base: { number: 525, unit: "px", style: "525px" },
                  },
                },
                width: {
                  breakpoint_base: { number: 100, unit: "%", style: "100%" },
                  breakpoint_tablet_portrait: {
                    number: 100,
                    unit: "%",
                    style: "100%",
                  },
                },
              },
              mode: null,
            });
          });

    document.addEventListener("DOMContentLoaded", function () {
            window.BreakdanceSwiper().update({
              id: "bde-gallery-769-117",
              selector: ".breakdance .bde-gallery-769-117",
              settings: {
                advanced: {
                  slides_per_view: { breakpoint_base: 1 },
                  one_per_view_at: "breakpoint_phone_landscape",
                  slides_per_group: { breakpoint_base: 3 },
                  swipe_on_scroll: false,
                  auto_height: false,
                  between_slides: { breakpoint_base: null },
                },
                infinite: "enabled",
                autoplay: "enabled",
                speed: { number: 1000, unit: "ms", style: "1000ms" },
                effect: "fade",
                center_slides: true,
                autoplay_settings: {
                  speed: { number: 1000, unit: "ms", style: "1000ms" },
                },
              },
              paginationSettings: { type: "none" },
            });
          });

    document.addEventListener("DOMContentLoaded", function () {
            new BreakdanceLightbox(".breakdance .bde-gallery-769-117", {
              itemSelector: ".ee-gallery-item",
              ...{
                thumbnails: true,
                animated_thumbnails: false,
                zoom: true,
                autoplay: false,
                background: "#000000",
                controls: "#999999",
                thumbnail: "#ffffff",
                thumbnail_active: "#01d2e8f0",
                autoplay_videos: false,
              },
            });
          });

    document.addEventListener("DOMContentLoaded", function () {
            new BreakdanceGallery(".breakdance .bde-gallery-769-117", {
              ...{
                type: "slider",
                gap: { breakpoint_base: { number: 10, unit: "px", style: "10px" } },
                columns: { breakpoint_base: 3, breakpoint_phone_portrait: 1 },
                aspect_ratio: "100%",
                slider: {
                  settings: {
                    advanced: {
                      slides_per_view: { breakpoint_base: 1 },
                      one_per_view_at: "breakpoint_phone_landscape",
                      slides_per_group: { breakpoint_base: 3 },
                      swipe_on_scroll: false,
                      auto_height: false,
                      between_slides: { breakpoint_base: null },
                    },
                    infinite: "enabled",
                    autoplay: "enabled",
                    speed: { number: 1000, unit: "ms", style: "1000ms" },
                    effect: "fade",
                    center_slides: true,
                    autoplay_settings: {
                      speed: { number: 1000, unit: "ms", style: "1000ms" },
                    },
                  },
                  arrows: { disable: true },
                  pagination: { type: "none" },
                },
                slider_images: {
                  aspect_ratio: "0",
                  width: {
                    breakpoint_base: { number: 100, unit: "%", style: "100%" },
                  },
                  height: {
                    breakpoint_base: { number: 525, unit: "px", style: "525px" },
                  },
                },
                width: {
                  breakpoint_base: { number: 100, unit: "%", style: "100%" },
                },
              },
              mode: null,
            });
          });

    document.addEventListener("DOMContentLoaded", function () {
            new BreakdanceParallax(".breakdance .bde-image-769-308", {
              enabled: true,
              scale: { end: null, start: null, middle: null },
            });
          });

    document.addEventListener("DOMContentLoaded", function () {
            window.BreakdanceSwiper().update({
              id: "bde-gallery-769-290",
              selector: ".breakdance .bde-gallery-769-290",
              settings: {
                advanced: {
                  slides_per_view: { breakpoint_base: 1 },
                  one_per_view_at: "breakpoint_phone_landscape",
                  slides_per_group: { breakpoint_base: 3 },
                  swipe_on_scroll: false,
                  auto_height: true,
                  between_slides: { breakpoint_base: null },
                },
                infinite: "enabled",
                autoplay: "enabled",
                speed: { number: 1000, unit: "ms", style: "1000ms" },
                effect: "fade",
                autoplay_settings: {
                  speed: { number: 600, unit: "ms", style: "600ms" },
                  stop_on_interaction: false,
                  pause_on_hover: true,
                },
              },
              paginationSettings: { type: "none" },
            });
          });

    document.addEventListener("DOMContentLoaded", function () {
            new BreakdanceLightbox(".breakdance .bde-gallery-769-290", {
              itemSelector: ".ee-gallery-item",
              ...{
                thumbnails: true,
                animated_thumbnails: false,
                zoom: true,
                autoplay: false,
                background: "#000000",
                controls: "#999999",
                thumbnail: "#ffffff",
                thumbnail_active: "#01d2e8f0",
                autoplay_videos: false,
              },
            });
          });

    document.addEventListener("DOMContentLoaded", function () {
            new BreakdanceGallery(".breakdance .bde-gallery-769-290", {
              ...{
                type: "slider",
                gap: { breakpoint_base: { number: 10, unit: "px", style: "10px" } },
                columns: { breakpoint_base: 3, breakpoint_phone_portrait: 1 },
                aspect_ratio: "100%",
                slider: {
                  settings: {
                    advanced: {
                      slides_per_view: { breakpoint_base: 1 },
                      one_per_view_at: "breakpoint_phone_landscape",
                      slides_per_group: { breakpoint_base: 3 },
                      swipe_on_scroll: false,
                      auto_height: true,
                      between_slides: { breakpoint_base: null },
                    },
                    infinite: "enabled",
                    autoplay: "enabled",
                    speed: { number: 1000, unit: "ms", style: "1000ms" },
                    effect: "fade",
                    autoplay_settings: {
                      speed: { number: 600, unit: "ms", style: "600ms" },
                      stop_on_interaction: false,
                      pause_on_hover: true,
                    },
                  },
                  arrows: { disable: true },
                  pagination: { type: "none" },
                },
                slider_images: {
                  aspect_ratio: "0",
                  width: {
                    breakpoint_base: { number: 100, unit: "%", style: "100%" },
                  },
                  height: {
                    breakpoint_phone_portrait: {
                      number: 525,
                      unit: "px",
                      style: "525px",
                    },
                  },
                },
                width: {
                  breakpoint_base: { number: 100, unit: "%", style: "100%" },
                },
              },
              mode: null,
            });
          });

    document.addEventListener("DOMContentLoaded", function () {
            window.BreakdanceSwiper().update({
              id: "bde-gallery-769-293",
              selector: ".breakdance .bde-gallery-769-293",
              settings: {
                advanced: {
                  slides_per_view: { breakpoint_base: 1 },
                  one_per_view_at: "breakpoint_phone_landscape",
                  slides_per_group: { breakpoint_base: 3 },
                  swipe_on_scroll: false,
                  auto_height: false,
                  between_slides: { breakpoint_base: null },
                },
                infinite: "enabled",
                autoplay: "enabled",
                speed: { number: 1000, unit: "ms", style: "1000ms" },
                effect: "fade",
                autoplay_settings: {
                  speed: { number: 600, unit: "ms", style: "600ms" },
                },
              },
              paginationSettings: { type: "none" },
            });
          });

    document.addEventListener("DOMContentLoaded", function () {
            new BreakdanceLightbox(".breakdance .bde-gallery-769-293", {
              itemSelector: ".ee-gallery-item",
              ...{
                thumbnails: true,
                animated_thumbnails: false,
                zoom: true,
                autoplay: false,
                background: "#000000",
                controls: "#999999",
                thumbnail: "#ffffff",
                thumbnail_active: "#01d2e8f0",
                autoplay_videos: false,
              },
            });
          });

    document.addEventListener("DOMContentLoaded", function () {
            new BreakdanceGallery(".breakdance .bde-gallery-769-293", {
              ...{
                type: "slider",
                gap: { breakpoint_base: { number: 10, unit: "px", style: "10px" } },
                columns: { breakpoint_base: 3, breakpoint_phone_portrait: 1 },
                aspect_ratio: "100%",
                slider: {
                  settings: {
                    advanced: {
                      slides_per_view: { breakpoint_base: 1 },
                      one_per_view_at: "breakpoint_phone_landscape",
                      slides_per_group: { breakpoint_base: 3 },
                      swipe_on_scroll: false,
                      auto_height: false,
                      between_slides: { breakpoint_base: null },
                    },
                    infinite: "enabled",
                    autoplay: "enabled",
                    speed: { number: 1000, unit: "ms", style: "1000ms" },
                    effect: "fade",
                    autoplay_settings: {
                      speed: { number: 600, unit: "ms", style: "600ms" },
                    },
                  },
                  arrows: { disable: true },
                  pagination: { type: "none" },
                },
                slider_images: {
                  aspect_ratio: "0",
                  width: {
                    breakpoint_base: { number: 100, unit: "%", style: "100%" },
                  },
                  height: {
                    breakpoint_base: { number: 525, unit: "px", style: "525px" },
                  },
                },
                width: {
                  breakpoint_base: { number: 100, unit: "%", style: "100%" },
                },
              },
              mode: null,
            });
          });

    document.addEventListener("DOMContentLoaded", function () {
            window.BreakdanceSwiper().update({
              id: "bde-gallery-769-295",
              selector: ".breakdance .bde-gallery-769-295",
              settings: {
                advanced: {
                  slides_per_view: { breakpoint_base: 1 },
                  one_per_view_at: "breakpoint_phone_landscape",
                  slides_per_group: { breakpoint_base: 3 },
                  swipe_on_scroll: false,
                  auto_height: false,
                  between_slides: { breakpoint_base: null },
                },
                infinite: "enabled",
                autoplay: "enabled",
                speed: { number: 1000, unit: "ms", style: "1000ms" },
                effect: "fade",
                autoplay_settings: {
                  speed: { number: 800, unit: "ms", style: "800ms" },
                },
              },
              paginationSettings: { type: "none" },
            });
          });

    document.addEventListener("DOMContentLoaded", function () {
            new BreakdanceLightbox(".breakdance .bde-gallery-769-295", {
              itemSelector: ".ee-gallery-item",
              ...{
                thumbnails: true,
                animated_thumbnails: false,
                zoom: true,
                autoplay: false,
                background: "#000000",
                controls: "#999999",
                thumbnail: "#ffffff",
                thumbnail_active: "#01d2e8f0",
                autoplay_videos: false,
              },
            });
          });

    document.addEventListener("DOMContentLoaded", function () {
            new BreakdanceGallery(".breakdance .bde-gallery-769-295", {
              ...{
                type: "slider",
                gap: { breakpoint_base: { number: 10, unit: "px", style: "10px" } },
                columns: { breakpoint_base: 3, breakpoint_phone_portrait: 1 },
                aspect_ratio: "100%",
                slider: {
                  settings: {
                    advanced: {
                      slides_per_view: { breakpoint_base: 1 },
                      one_per_view_at: "breakpoint_phone_landscape",
                      slides_per_group: { breakpoint_base: 3 },
                      swipe_on_scroll: false,
                      auto_height: false,
                      between_slides: { breakpoint_base: null },
                    },
                    infinite: "enabled",
                    autoplay: "enabled",
                    speed: { number: 1000, unit: "ms", style: "1000ms" },
                    effect: "fade",
                    autoplay_settings: {
                      speed: { number: 800, unit: "ms", style: "800ms" },
                    },
                  },
                  arrows: { disable: true },
                  pagination: { type: "none" },
                },
                slider_images: {
                  aspect_ratio: "0",
                  width: {
                    breakpoint_base: { number: 100, unit: "%", style: "100%" },
                  },
                  height: {
                    breakpoint_base: { number: 525, unit: "px", style: "525px" },
                  },
                },
                width: {
                  breakpoint_base: { number: 100, unit: "%", style: "100%" },
                  breakpoint_tablet_portrait: {
                    number: 100,
                    unit: "%",
                    style: "100%",
                  },
                },
              },
              mode: null,
            });
          });

    document.addEventListener("DOMContentLoaded", function () {
            window.BreakdanceSwiper().update({
              id: "bde-gallery-769-297",
              selector: ".breakdance .bde-gallery-769-297",
              settings: {
                advanced: {
                  slides_per_view: { breakpoint_base: 1 },
                  one_per_view_at: "breakpoint_phone_landscape",
                  slides_per_group: { breakpoint_base: 3 },
                  swipe_on_scroll: false,
                  auto_height: false,
                  between_slides: { breakpoint_base: null },
                },
                infinite: "enabled",
                autoplay: "enabled",
                speed: { number: 1000, unit: "ms", style: "1000ms" },
                effect: "fade",
                center_slides: true,
                autoplay_settings: {
                  speed: { number: 1000, unit: "ms", style: "1000ms" },
                },
              },
              paginationSettings: { type: "none" },
            });
          });

    document.addEventListener("DOMContentLoaded", function () {
            new BreakdanceLightbox(".breakdance .bde-gallery-769-297", {
              itemSelector: ".ee-gallery-item",
              ...{
                thumbnails: true,
                animated_thumbnails: false,
                zoom: true,
                autoplay: false,
                background: "#000000",
                controls: "#999999",
                thumbnail: "#ffffff",
                thumbnail_active: "#01d2e8f0",
                autoplay_videos: false,
              },
            });
          });

    document.addEventListener("DOMContentLoaded", function () {
            new BreakdanceGallery(".breakdance .bde-gallery-769-297", {
              ...{
                type: "slider",
                gap: { breakpoint_base: { number: 10, unit: "px", style: "10px" } },
                columns: { breakpoint_base: 3, breakpoint_phone_portrait: 1 },
                aspect_ratio: "100%",
                slider: {
                  settings: {
                    advanced: {
                      slides_per_view: { breakpoint_base: 1 },
                      one_per_view_at: "breakpoint_phone_landscape",
                      slides_per_group: { breakpoint_base: 3 },
                      swipe_on_scroll: false,
                      auto_height: false,
                      between_slides: { breakpoint_base: null },
                    },
                    infinite: "enabled",
                    autoplay: "enabled",
                    speed: { number: 1000, unit: "ms", style: "1000ms" },
                    effect: "fade",
                    center_slides: true,
                    autoplay_settings: {
                      speed: { number: 1000, unit: "ms", style: "1000ms" },
                    },
                  },
                  arrows: { disable: true },
                  pagination: { type: "none" },
                },
                slider_images: {
                  aspect_ratio: "0",
                  width: {
                    breakpoint_base: { number: 100, unit: "%", style: "100%" },
                  },
                  height: {
                    breakpoint_base: { number: 525, unit: "px", style: "525px" },
                  },
                },
                width: {
                  breakpoint_base: { number: 100, unit: "%", style: "100%" },
                },
              },
              mode: null,
            });
          });
  }, []);

  return (
    <>

    <div className="breakdance">
      <section className="bde-section-769-100 bde-section">
        <div className="section-container">
          <img
            decoding="async"
            className="bde-image2-769-101 bde-image2 lazyload"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB08AAAI3AQAAAADbmi4tAAAAAnRSTlMAAHaTzTgAAACYSURBVHja7cExAQAAAMKg9U9tDB+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgYImwABA88t1gAAAABJRU5ErkJggg=="
            alt="Black Angus Logo Avec Infos"
            loading="lazy"
            data-src="https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-avec-infos.png"
            data-srcset="https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-avec-infos.png 1871w, https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-avec-infos-300x91.png 300w, https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-avec-infos-1024x310.png 1024w, https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-avec-infos-768x233.png 768w, https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-avec-infos-1536x465.png 1536w"
            data-sizes="auto"
            width="1871"
            height="567"
            data-eio-rwidth="1871"
            data-eio-rheight="567"
          /><noscript
            ><img
              decoding="async"
              className="bde-image2-769-101 bde-image2"
              src="wp-content/uploads/2025/01/black-angus-logo-avec-infos.png"
              alt="Black Angus Logo Avec Infos"
              loading="lazy"
              srcset="
                https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-avec-infos.png          1871w,
                https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-avec-infos-300x91.png    300w,
                https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-avec-infos-1024x310.png 1024w,
                https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-avec-infos-768x233.png   768w,
                https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-avec-infos-1536x465.png 1536w
              "
              sizes="(max-width: 1871px) 100vw, 1871px"
              data-eio="l"
          /></noscript>
          <h1 className="bde-heading-769-102 bde-heading">
            {t.mainHeading}
          </h1>
          <div className="bde-div-769-360 bde-div">
            <img
              decoding="async"
              className="bde-image2-769-361 bde-image2 lazyload"
              src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
              alt="Coup de coeur restoaparis 2025 v2"
              loading="lazy"
              data-src="https://restaurantblackangus.com/wp-content/uploads/2025/06/coup-de-coeur-restoaparis-2025-v2.svg"
            /><noscript
              ><img
                decoding="async"
                className="bde-image2-769-361 bde-image2"
                src="wp-content/uploads/2025/06/coup-de-coeur-restoaparis-2025-v2.svg"
                alt="Coup de coeur restoaparis 2025 v2"
                loading="lazy"
                data-eio="l" /></noscript
            ><img
              decoding="async"
              className="bde-image2-769-363 bde-image2 lazyload"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0AQAAAADjreInAAAAAnRSTlMAAHaTzTgAAAA1SURBVHja7cExAQAAAMKg9U/tYQ2gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG59AAABgyKozQAAAABJRU5ErkJggg=="
              alt="Note google black angus"
              loading="lazy"
              data-src="https://restaurantblackangus.com/wp-content/uploads/2025/06/note-google-black-angus.png"
              data-srcset="https://restaurantblackangus.com/wp-content/uploads/2025/06/note-google-black-angus.png 500w, https://restaurantblackangus.com/wp-content/uploads/2025/06/note-google-black-angus-300x300.png 300w, https://restaurantblackangus.com/wp-content/uploads/2025/06/note-google-black-angus-150x150.png 150w"
              data-sizes="auto"
              width="500"
              height="500"
              data-eio-rwidth="500"
              data-eio-rheight="500"
            /><noscript
              ><img
                decoding="async"
                className="bde-image2-769-363 bde-image2"
                src="wp-content/uploads/2025/06/note-google-black-angus.png"
                alt="Note google black angus"
                loading="lazy"
                srcset="
                  https://restaurantblackangus.com/wp-content/uploads/2025/06/note-google-black-angus.png         500w,
                  https://restaurantblackangus.com/wp-content/uploads/2025/06/note-google-black-angus-300x300.png 300w,
                  https://restaurantblackangus.com/wp-content/uploads/2025/06/note-google-black-angus-150x150.png 150w
                "
                sizes="(max-width: 500px) 100vw, 500px"
                data-eio="l"
            /></noscript>
          </div>
        </div>
      </section>
      <section className="bde-section-769-126 bde-section">
        <div className="section-container">
          <div className="bde-columns-769-318 bde-columns">
            <div className="bde-column-769-319 bde-column">
              <img
                decoding="async"
                className="bde-image2-769-195 bde-image2 lazyload"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAtkAAAb/AQAAAABvjMILAAAAAnRSTlMAAHaTzTgAAAC4SURBVHja7cExAQAAAMKg9U9tDQ+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4NYrBAAGVt9iiAAAAAElFTkSuQmCC"
                alt="Formule Side Left 1"
                loading="lazy"
                data-src="https://restaurantblackangus.com/wp-content/uploads/2025/01/formule-side-left-1.png"
                data-srcset="https://restaurantblackangus.com/wp-content/uploads/2025/01/formule-side-left-1.png 729w, https://restaurantblackangus.com/wp-content/uploads/2025/01/formule-side-left-1-122x300.png 122w, https://restaurantblackangus.com/wp-content/uploads/2025/01/formule-side-left-1-417x1024.png 417w, https://restaurantblackangus.com/wp-content/uploads/2025/01/formule-side-left-1-625x1536.png 625w"
                data-sizes="auto"
                width="729"
                height="1791"
                data-eio-rwidth="729"
                data-eio-rheight="1791"
              /><noscript
                ><img
                  decoding="async"
                  className="bde-image2-769-195 bde-image2"
                  src="wp-content/uploads/2025/01/formule-side-left-1.png"
                  alt="Formule Side Left 1"
                  loading="lazy"
                  srcset="
                    https://restaurantblackangus.com/wp-content/uploads/2025/01/formule-side-left-1.png          729w,
                    https://restaurantblackangus.com/wp-content/uploads/2025/01/formule-side-left-1-122x300.png  122w,
                    https://restaurantblackangus.com/wp-content/uploads/2025/01/formule-side-left-1-417x1024.png 417w,
                    https://restaurantblackangus.com/wp-content/uploads/2025/01/formule-side-left-1-625x1536.png 625w
                  "
                  sizes="(max-width: 729px) 100vw, 729px"
                  data-eio="l"
              /></noscript>
            </div>
            <div className="bde-column-769-320 bde-column">
              <div className="bde-div-769-127 bde-div">
                <div className="bde-div-769-359 bde-div">
                  <h2 className="bde-heading-769-128 bde-heading">FORMULES</h2>
                  <h2 className="bde-heading-769-358 bde-heading">Midi et Soir</h2>
                </div>
                <img
                  decoding="async"
                  className="bde-image2-769-191 bde-image2 lazyload"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABPEAAACbAQAAAAArBjMaAAAAAnRSTlMAAHaTzTgAAAAvSURBVHja7cGBAAAAAMOg+VPf4ARVAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfANg4AABk3svzQAAAABJRU5ErkJggg=="
                  alt="Red Top Border"
                  loading="lazy"
                  data-src="https://restaurantblackangus.com/wp-content/uploads/2025/01/red-top-border.png"
                  data-srcset="https://restaurantblackangus.com/wp-content/uploads/2025/01/red-top-border.png 1265w, https://restaurantblackangus.com/wp-content/uploads/2025/01/red-top-border-300x37.png 300w, https://restaurantblackangus.com/wp-content/uploads/2025/01/red-top-border-1024x125.png 1024w, https://restaurantblackangus.com/wp-content/uploads/2025/01/red-top-border-768x94.png 768w"
                  data-sizes="auto"
                  width="1265"
                  height="155"
                  data-eio-rwidth="1265"
                  data-eio-rheight="155"
                /><noscript
                  ><img
                    decoding="async"
                    className="bde-image2-769-191 bde-image2"
                    src="wp-content/uploads/2025/01/red-top-border.png"
                    alt="Red Top Border"
                    loading="lazy"
                    srcset="
                      https://restaurantblackangus.com/wp-content/uploads/2025/01/red-top-border.png          1265w,
                      https://restaurantblackangus.com/wp-content/uploads/2025/01/red-top-border-300x37.png    300w,
                      https://restaurantblackangus.com/wp-content/uploads/2025/01/red-top-border-1024x125.png 1024w,
                      https://restaurantblackangus.com/wp-content/uploads/2025/01/red-top-border-768x94.png    768w
                    "
                    sizes="(max-width: 1265px) 100vw, 1265px"
                    data-eio="l"
                /></noscript>
                <div className="bde-div-769-190 bde-div">
                  <h3 className="bde-heading-769-262 bde-heading">
                    Accompagné de sa salade d’accueil, frites et purée
                  </h3>
                  <div className="bde-div-769-261 bde-div">
                    <div className="bde-div-769-263 bde-div">
                      <h4
                        className="bde-heading-769-266 bde-heading bde-preset-b80cbe54-952c-403a-8fdd-b8057bda7e01"
                      >
                        Black Red
                      </h4>
                      <h5
                        className="bde-heading-769-267 bde-heading bde-preset-a58ba013-22d2-43a1-8b7d-693453589819"
                      >
                        Cœur de rumsteak Angus
                      </h5>
                    </div>
                    <div
                      className="bde-text-769-328 bde-text formule-prix bde-preset-b082af3a-c9da-4742-b993-e6ccf27dc75e"
                    >
                      29€
                    </div>
                  </div>
                  <div className="bde-div-769-273 bde-div">
                    <div className="bde-div-769-274 bde-div">
                      <h4
                        className="bde-heading-769-275 bde-heading bde-preset-b80cbe54-952c-403a-8fdd-b8057bda7e01"
                      >
                        Black Lover
                      </h4>
                      <h5
                        className="bde-heading-769-276 bde-heading bde-preset-a58ba013-22d2-43a1-8b7d-693453589819"
                      >
                        Entrecôte Angus
                      </h5>
                    </div>
                    <div
                      className="bde-text-769-330 bde-text formule-prix bde-preset-b082af3a-c9da-4742-b993-e6ccf27dc75e"
                    >
                      35€
                    </div>
                  </div>
                  <div className="bde-div-769-268 bde-div">
                    <div className="bde-div-769-269 bde-div">
                      <h4
                        className="bde-heading-769-270 bde-heading bde-preset-b80cbe54-952c-403a-8fdd-b8057bda7e01"
                      >
                        Black Prime
                      </h4>
                      <h5
                        className="bde-heading-769-271 bde-heading bde-preset-a58ba013-22d2-43a1-8b7d-693453589819"
                      >
                        Filet de bœuf Angus
                      </h5>
                    </div>
                    <div
                      className="bde-text-769-329 bde-text formule-prix bde-preset-b082af3a-c9da-4742-b993-e6ccf27dc75e"
                    >
                      42€
                    </div>
                  </div>
                </div>
              </div>
              <div className="bde-div-769-337 bde-div">
                <h2 className="bde-heading-769-338 bde-heading">Déjeuner</h2>
                <img
                  decoding="async"
                  className="bde-image2-769-339 bde-image2 lazyload"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABPEAAACbAQAAAAArBjMaAAAAAnRSTlMAAHaTzTgAAAAvSURBVHja7cGBAAAAAMOg+VPf4ARVAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfANg4AABk3svzQAAAABJRU5ErkJggg=="
                  alt="Red Top Border"
                  loading="lazy"
                  data-src="https://restaurantblackangus.com/wp-content/uploads/2025/01/red-top-border.png"
                  data-srcset="https://restaurantblackangus.com/wp-content/uploads/2025/01/red-top-border.png 1265w, https://restaurantblackangus.com/wp-content/uploads/2025/01/red-top-border-300x37.png 300w, https://restaurantblackangus.com/wp-content/uploads/2025/01/red-top-border-1024x125.png 1024w, https://restaurantblackangus.com/wp-content/uploads/2025/01/red-top-border-768x94.png 768w"
                  data-sizes="auto"
                  width="1265"
                  height="155"
                  data-eio-rwidth="1265"
                  data-eio-rheight="155"
                /><noscript
                  ><img
                    decoding="async"
                    className="bde-image2-769-339 bde-image2"
                    src="wp-content/uploads/2025/01/red-top-border.png"
                    alt="Red Top Border"
                    loading="lazy"
                    srcset="
                      https://restaurantblackangus.com/wp-content/uploads/2025/01/red-top-border.png          1265w,
                      https://restaurantblackangus.com/wp-content/uploads/2025/01/red-top-border-300x37.png    300w,
                      https://restaurantblackangus.com/wp-content/uploads/2025/01/red-top-border-1024x125.png 1024w,
                      https://restaurantblackangus.com/wp-content/uploads/2025/01/red-top-border-768x94.png    768w
                    "
                    sizes="(max-width: 1265px) 100vw, 1265px"
                    data-eio="l"
                /></noscript>
                <div className="bde-div-769-340 bde-div">
                  <h3 className="bde-heading-769-341 bde-heading">
                    Accompagné de sa salade d’accueil et ses frites
                  </h3>
                  <div className="bde-div-769-342 bde-div">
                    <div className="bde-div-769-343 bde-div">
                      <div className="bde-div-769-357 bde-div">
                        <h4
                          className="bde-heading-769-344 bde-heading bde-preset-b80cbe54-952c-403a-8fdd-b8057bda7e01"
                        >
                          Black Burger
                        </h4>
                        <h5
                          className="bde-heading-769-345 bde-heading bde-preset-a58ba013-22d2-43a1-8b7d-693453589819"
                        >
                          Steak haché 150g Angus
                        </h5>
                      </div>
                    </div>
                    <div
                      className="bde-text-769-346 bde-text formule-prix bde-preset-b082af3a-c9da-4742-b993-e6ccf27dc75e"
                    >
                      19€
                    </div>
                  </div>
                  <div className="bde-text-769-335 bde-text">
                    Uniquement du lundi<br />au vendredi de 12h à 17h,<br />hors
                    jours fériés
                  </div>
                </div>
              </div>
            </div>
            <div className="bde-column-769-321 bde-column">
              <img
                decoding="async"
                className="bde-image2-769-209 bde-image2 lazyload"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAvUAAAb7AQAAAAChfGNDAAAAAnRSTlMAAHaTzTgAAAC8SURBVHja7cEBAQAAAIIg/69uSEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfBmePgAB/3XLuwAAAABJRU5ErkJggg=="
                alt="Formule Side Right V2"
                loading="lazy"
                data-src="https://restaurantblackangus.com/wp-content/uploads/2025/01/formule-side-right-v2.png"
                data-srcset="https://restaurantblackangus.com/wp-content/uploads/2025/01/formule-side-right-v2.png 757w, https://restaurantblackangus.com/wp-content/uploads/2025/01/formule-side-right-v2-127x300.png 127w, https://restaurantblackangus.com/wp-content/uploads/2025/01/formule-side-right-v2-434x1024.png 434w, https://restaurantblackangus.com/wp-content/uploads/2025/01/formule-side-right-v2-651x1536.png 651w"
                data-sizes="auto"
                width="757"
                height="1787"
                data-eio-rwidth="757"
                data-eio-rheight="1787"
              /><noscript
                ><img
                  decoding="async"
                  className="bde-image2-769-209 bde-image2"
                  src="wp-content/uploads/2025/01/formule-side-right-v2.png"
                  alt="Formule Side Right V2"
                  loading="lazy"
                  srcset="
                    https://restaurantblackangus.com/wp-content/uploads/2025/01/formule-side-right-v2.png          757w,
                    https://restaurantblackangus.com/wp-content/uploads/2025/01/formule-side-right-v2-127x300.png  127w,
                    https://restaurantblackangus.com/wp-content/uploads/2025/01/formule-side-right-v2-434x1024.png 434w,
                    https://restaurantblackangus.com/wp-content/uploads/2025/01/formule-side-right-v2-651x1536.png 651w
                  "
                  sizes="(max-width: 757px) 100vw, 757px"
                  data-eio="l"
              /></noscript>
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
                <div
                  className="ee-gallery ee-gallery--gallery-slider ee-gallery--slider ee-gallery-- ee-gallery--lightbox ee-gallery--zoom-in ee-gallery--caption- ee-gallery--caption-none ee-gallery--custom swiper-wrapper"
                >
                  <a
                    className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                    href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-03.jpg"
                    data-sub-html="<span></span>"
                    data-category="1"
                    data-lg-size="1333-2000"
                  >
                    <figure className="ee-gallery-item-figure">
                      <img
                        decoding="async"
                        className="breakdance-image-object lazyload"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqoAAAQAAQAAAAABqUZ1AAAAAnRSTlMAAHaTzTgAAABtSURBVHja7cExAQAAAMKg9U9tCU+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4GlwPAAGjkrJcAAAAAElFTkSuQmCC"
                        width="682"
                        height="1024"
                        alt="L'entreboeuf Déc24@ninacoriton 03"
                        data-src="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-03-682x1024.jpg"
                        data-srcset="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-03.jpg 1333w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-03-200x300.jpg 200w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-03-682x1024.jpg 682w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-03-768x1152.jpg 768w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-03-1024x1536.jpg 1024w"
                        data-sizes="auto"
                        data-eio-rwidth="682"
                        data-eio-rheight="1024"
                      /><noscript
                        ><img
                          decoding="async"
                          className="breakdance-image-object"
                          src="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-03-682x1024.jpg"
                          width="682"
                          height="1024"
                          srcset="
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-03.jpg           1333w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-03-200x300.jpg    200w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-03-682x1024.jpg   682w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-03-768x1152.jpg   768w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-03-1024x1536.jpg 1024w
                          "
                          sizes="(max-width: 1333px) 100vw, 1333px"
                          alt="L'entreboeuf Déc24@ninacoriton 03"
                          data-eio="l"
                      /></noscript>
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
                      <img
                        decoding="async"
                        className="breakdance-image-object lazyload"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAKqAQAAAACMMRGcAAAAAnRSTlMAAHaTzTgAAABrSURBVHja7cEBAQAAAIIg/69uSEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvBtXuQABimusowAAAABJRU5ErkJggg=="
                        width="1024"
                        height="682"
                        alt="L'entreboeuf Déc24@ninacoriton 02"
                        data-src="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-02-1024x682.jpg"
                        data-srcset="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-02.jpg 2000w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-02-300x200.jpg 300w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-02-1024x682.jpg 1024w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-02-768x512.jpg 768w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-02-1536x1024.jpg 1536w"
                        data-sizes="auto"
                        data-eio-rwidth="1024"
                        data-eio-rheight="682"
                      /><noscript
                        ><img
                          decoding="async"
                          className="breakdance-image-object"
                          src="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-02-1024x682.jpg"
                          width="1024"
                          height="682"
                          srcset="
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-02.jpg           2000w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-02-300x200.jpg    300w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-02-1024x682.jpg  1024w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-02-768x512.jpg    768w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-02-1536x1024.jpg 1536w
                          "
                          sizes="(max-width: 2000px) 100vw, 2000px"
                          alt="L'entreboeuf Déc24@ninacoriton 02"
                          data-eio="l"
                      /></noscript>
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
                      <img
                        decoding="async"
                        className="breakdance-image-object lazyload"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAKqAQAAAACMMRGcAAAAAnRSTlMAAHaTzTgAAABrSURBVHja7cEBAQAAAIIg/69uSEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvBtXuQABimusowAAAABJRU5ErkJggg=="
                        width="1024"
                        height="682"
                        alt="L'entreboeuf Déc24@ninacoriton 12"
                        data-src="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-12-1024x682.jpg"
                        data-srcset="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-12.jpg 2000w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-12-300x200.jpg 300w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-12-1024x682.jpg 1024w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-12-768x512.jpg 768w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-12-1536x1024.jpg 1536w"
                        data-sizes="auto"
                        data-eio-rwidth="1024"
                        data-eio-rheight="682"
                      /><noscript
                        ><img
                          decoding="async"
                          className="breakdance-image-object"
                          src="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-12-1024x682.jpg"
                          width="1024"
                          height="682"
                          srcset="
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-12.jpg           2000w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-12-300x200.jpg    300w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-12-1024x682.jpg  1024w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-12-768x512.jpg    768w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-12-1536x1024.jpg 1536w
                          "
                          sizes="(max-width: 2000px) 100vw, 2000px"
                          alt="L'entreboeuf Déc24@ninacoriton 12"
                          data-eio="l"
                      /></noscript>
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
                      <img
                        decoding="async"
                        className="breakdance-image-object lazyload"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqoAAAQAAQAAAAABqUZ1AAAAAnRSTlMAAHaTzTgAAABtSURBVHja7cExAQAAAMKg9U9tCU+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4GlwPAAGjkrJcAAAAAElFTkSuQmCC"
                        width="682"
                        height="1024"
                        alt="L'entreboeuf Déc24@ninacoriton 08"
                        data-src="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-08-682x1024.jpg"
                        data-srcset="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-08.jpg 1333w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-08-200x300.jpg 200w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-08-682x1024.jpg 682w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-08-768x1152.jpg 768w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-08-1024x1536.jpg 1024w"
                        data-sizes="auto"
                        data-eio-rwidth="682"
                        data-eio-rheight="1024"
                      /><noscript
                        ><img
                          decoding="async"
                          className="breakdance-image-object"
                          src="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-08-682x1024.jpg"
                          width="682"
                          height="1024"
                          srcset="
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-08.jpg           1333w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-08-200x300.jpg    200w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-08-682x1024.jpg   682w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-08-768x1152.jpg   768w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-08-1024x1536.jpg 1024w
                          "
                          sizes="(max-width: 1333px) 100vw, 1333px"
                          alt="L'entreboeuf Déc24@ninacoriton 08"
                          data-eio="l"
                      /></noscript>
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
                      <img
                        decoding="async"
                        className="breakdance-image-object lazyload"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAKqAQAAAACMMRGcAAAAAnRSTlMAAHaTzTgAAABrSURBVHja7cEBAQAAAIIg/69uSEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvBtXuQABimusowAAAABJRU5ErkJggg=="
                        width="1024"
                        height="682"
                        alt="L'entreboeuf Déc24@ninacoriton 05"
                        data-src="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-05-1024x682.jpg"
                        data-srcset="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-05.jpg 2000w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-05-300x200.jpg 300w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-05-1024x682.jpg 1024w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-05-768x512.jpg 768w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-05-1536x1024.jpg 1536w"
                        data-sizes="auto"
                        data-eio-rwidth="1024"
                        data-eio-rheight="682"
                      /><noscript
                        ><img
                          decoding="async"
                          className="breakdance-image-object"
                          src="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-05-1024x682.jpg"
                          width="1024"
                          height="682"
                          srcset="
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-05.jpg           2000w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-05-300x200.jpg    300w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-05-1024x682.jpg  1024w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-05-768x512.jpg    768w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-05-1536x1024.jpg 1536w
                          "
                          sizes="(max-width: 2000px) 100vw, 2000px"
                          alt="L'entreboeuf Déc24@ninacoriton 05"
                          data-eio="l"
                      /></noscript>
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
                    <div
                      className="ee-gallery ee-gallery--gallery-slider ee-gallery--slider ee-gallery-- ee-gallery--lightbox ee-gallery--zoom-in ee-gallery--caption- ee-gallery--caption-none ee-gallery--custom swiper-wrapper"
                    >
                      <a
                        className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                        href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-02.jpg"
                        data-sub-html="<span></span>"
                        data-category="1"
                        data-lg-size="2000-1333"
                      >
                        <figure className="ee-gallery-item-figure">
                          <img
                            decoding="async"
                            className="breakdance-image-object lazyload"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAKqAQAAAACMMRGcAAAAAnRSTlMAAHaTzTgAAABrSURBVHja7cEBAQAAAIIg/69uSEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvBtXuQABimusowAAAABJRU5ErkJggg=="
                            width="1024"
                            height="682"
                            alt="L'entreboeuf Déc24@ninacoriton 02"
                            data-src="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-02-1024x682.jpg"
                            data-srcset="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-02.jpg 2000w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-02-300x200.jpg 300w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-02-1024x682.jpg 1024w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-02-768x512.jpg 768w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-02-1536x1024.jpg 1536w"
                            data-sizes="auto"
                            data-eio-rwidth="1024"
                            data-eio-rheight="682"
                          /><noscript
                            ><img
                              decoding="async"
                              className="breakdance-image-object"
                              src="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-02-1024x682.jpg"
                              width="1024"
                              height="682"
                              srcset="
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-02.jpg           2000w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-02-300x200.jpg    300w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-02-1024x682.jpg  1024w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-02-768x512.jpg    768w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-02-1536x1024.jpg 1536w
                              "
                              sizes="(max-width: 2000px) 100vw, 2000px"
                              alt="L'entreboeuf Déc24@ninacoriton 02"
                              data-eio="l"
                          /></noscript>
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
                          <img
                            decoding="async"
                            className="breakdance-image-object lazyload"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAKqAQAAAACMMRGcAAAAAnRSTlMAAHaTzTgAAABrSURBVHja7cEBAQAAAIIg/69uSEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvBtXuQABimusowAAAABJRU5ErkJggg=="
                            width="1024"
                            height="682"
                            alt="L'entreboeuf Déc24@ninacoriton 05"
                            data-src="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-05-1024x682.jpg"
                            data-srcset="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-05.jpg 2000w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-05-300x200.jpg 300w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-05-1024x682.jpg 1024w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-05-768x512.jpg 768w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-05-1536x1024.jpg 1536w"
                            data-sizes="auto"
                            data-eio-rwidth="1024"
                            data-eio-rheight="682"
                          /><noscript
                            ><img
                              decoding="async"
                              className="breakdance-image-object"
                              src="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-05-1024x682.jpg"
                              width="1024"
                              height="682"
                              srcset="
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-05.jpg           2000w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-05-300x200.jpg    300w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-05-1024x682.jpg  1024w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-05-768x512.jpg    768w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-05-1536x1024.jpg 1536w
                              "
                              sizes="(max-width: 2000px) 100vw, 2000px"
                              alt="L'entreboeuf Déc24@ninacoriton 05"
                              data-eio="l"
                          /></noscript>
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
                    <div
                      className="ee-gallery ee-gallery--gallery-slider ee-gallery--slider ee-gallery-- ee-gallery--lightbox ee-gallery--zoom-in ee-gallery--caption- ee-gallery--caption-none ee-gallery--custom swiper-wrapper"
                    >
                      <a
                        className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                        href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-03.jpg"
                        data-sub-html="<span></span>"
                        data-category="1"
                        data-lg-size="1333-2000"
                      >
                        <figure className="ee-gallery-item-figure">
                          <img
                            decoding="async"
                            className="breakdance-image-object lazyload"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqoAAAQAAQAAAAABqUZ1AAAAAnRSTlMAAHaTzTgAAABtSURBVHja7cExAQAAAMKg9U9tCU+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4GlwPAAGjkrJcAAAAAElFTkSuQmCC"
                            width="682"
                            height="1024"
                            alt="L'entreboeuf Déc24@ninacoriton 03"
                            data-src="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-03-682x1024.jpg"
                            data-srcset="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-03.jpg 1333w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-03-200x300.jpg 200w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-03-682x1024.jpg 682w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-03-768x1152.jpg 768w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-03-1024x1536.jpg 1024w"
                            data-sizes="auto"
                            data-eio-rwidth="682"
                            data-eio-rheight="1024"
                          /><noscript
                            ><img
                              decoding="async"
                              className="breakdance-image-object"
                              src="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-03-682x1024.jpg"
                              width="682"
                              height="1024"
                              srcset="
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-03.jpg           1333w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-03-200x300.jpg    200w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-03-682x1024.jpg   682w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-03-768x1152.jpg   768w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-03-1024x1536.jpg 1024w
                              "
                              sizes="(max-width: 1333px) 100vw, 1333px"
                              alt="L'entreboeuf Déc24@ninacoriton 03"
                              data-eio="l"
                          /></noscript>
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
                          <img
                            decoding="async"
                            className="breakdance-image-object lazyload"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAKqAQAAAACMMRGcAAAAAnRSTlMAAHaTzTgAAABrSURBVHja7cEBAQAAAIIg/69uSEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvBtXuQABimusowAAAABJRU5ErkJggg=="
                            width="1024"
                            height="682"
                            alt="L'entreboeuf Déc24@ninacoriton 12"
                            data-src="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-12-1024x682.jpg"
                            data-srcset="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-12.jpg 2000w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-12-300x200.jpg 300w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-12-1024x682.jpg 1024w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-12-768x512.jpg 768w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-12-1536x1024.jpg 1536w"
                            data-sizes="auto"
                            data-eio-rwidth="1024"
                            data-eio-rheight="682"
                          /><noscript
                            ><img
                              decoding="async"
                              className="breakdance-image-object"
                              src="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-12-1024x682.jpg"
                              width="1024"
                              height="682"
                              srcset="
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-12.jpg           2000w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-12-300x200.jpg    300w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-12-1024x682.jpg  1024w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-12-768x512.jpg    768w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-12-1536x1024.jpg 1536w
                              "
                              sizes="(max-width: 2000px) 100vw, 2000px"
                              alt="L'entreboeuf Déc24@ninacoriton 12"
                              data-eio="l"
                          /></noscript>
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
                    <div
                      className="ee-gallery ee-gallery--gallery-slider ee-gallery--slider ee-gallery-- ee-gallery--lightbox ee-gallery--zoom-in ee-gallery--caption- ee-gallery--caption-none ee-gallery--custom swiper-wrapper"
                    >
                      <a
                        className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                        href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-08.jpg"
                        data-sub-html="<span></span>"
                        data-category="1"
                        data-lg-size="1333-2000"
                      >
                        <figure className="ee-gallery-item-figure">
                          <img
                            decoding="async"
                            className="breakdance-image-object lazyload"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqoAAAQAAQAAAAABqUZ1AAAAAnRSTlMAAHaTzTgAAABtSURBVHja7cExAQAAAMKg9U9tCU+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4GlwPAAGjkrJcAAAAAElFTkSuQmCC"
                            width="682"
                            height="1024"
                            alt="L'entreboeuf Déc24@ninacoriton 08"
                            data-src="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-08-682x1024.jpg"
                            data-srcset="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-08.jpg 1333w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-08-200x300.jpg 200w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-08-682x1024.jpg 682w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-08-768x1152.jpg 768w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-08-1024x1536.jpg 1024w"
                            data-sizes="auto"
                            data-eio-rwidth="682"
                            data-eio-rheight="1024"
                          /><noscript
                            ><img
                              decoding="async"
                              className="breakdance-image-object"
                              src="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-08-682x1024.jpg"
                              width="682"
                              height="1024"
                              srcset="
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-08.jpg           1333w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-08-200x300.jpg    200w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-08-682x1024.jpg   682w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-08-768x1152.jpg   768w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-08-1024x1536.jpg 1024w
                              "
                              sizes="(max-width: 1333px) 100vw, 1333px"
                              alt="L'entreboeuf Déc24@ninacoriton 08"
                              data-eio="l"
                          /></noscript>
                        </figure>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bde-div-769-258 bde-div">
            <img
              decoding="async"
              className="bde-image2-769-259 bde-image2 lazyload"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABRQAAAI3AQAAAADCAupTAAAAAnRSTlMAAHaTzTgAAABxSURBVHja7cExAQAAAMKg9U9tCy+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfgZrSwABSWnvPgAAAABJRU5ErkJggg=="
              alt="Black Angus Logo Vache Head"
              loading="lazy"
              data-src="https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-vache-head.png"
              data-srcset="https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-vache-head.png 1300w, https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-vache-head-300x131.png 300w, https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-vache-head-1024x447.png 1024w, https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-vache-head-768x335.png 768w"
              data-sizes="auto"
              width="1300"
              height="567"
              data-eio-rwidth="1300"
              data-eio-rheight="567"
            /><noscript
              ><img
                decoding="async"
                className="bde-image2-769-259 bde-image2"
                src="wp-content/uploads/2025/01/black-angus-logo-vache-head.png"
                alt="Black Angus Logo Vache Head"
                loading="lazy"
                srcset="
                  https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-vache-head.png          1300w,
                  https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-vache-head-300x131.png   300w,
                  https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-vache-head-1024x447.png 1024w,
                  https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-vache-head-768x335.png   768w
                "
                sizes="(max-width: 1300px) 100vw, 1300px"
                data-eio="l" /></noscript
            ><img
              decoding="async"
              className="bde-image2-769-260 bde-image2 lazyload"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABRQAAAI3AQAAAADCAupTAAAAAnRSTlMAAHaTzTgAAABxSURBVHja7cExAQAAAMKg9U9tCy+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfgZrSwABSWnvPgAAAABJRU5ErkJggg=="
              alt="Black Angus Logo Vache Back"
              loading="lazy"
              data-src="https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-vache-back.png"
              data-srcset="https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-vache-back.png 1300w, https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-vache-back-300x131.png 300w, https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-vache-back-1024x447.png 1024w, https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-vache-back-768x335.png 768w"
              data-sizes="auto"
              width="1300"
              height="567"
              data-eio-rwidth="1300"
              data-eio-rheight="567"
            /><noscript
              ><img
                decoding="async"
                className="bde-image2-769-260 bde-image2"
                src="wp-content/uploads/2025/01/black-angus-logo-vache-back.png"
                alt="Black Angus Logo Vache Back"
                loading="lazy"
                srcset="
                  https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-vache-back.png          1300w,
                  https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-vache-back-300x131.png   300w,
                  https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-vache-back-1024x447.png 1024w,
                  https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-vache-back-768x335.png   768w
                "
                sizes="(max-width: 1300px) 100vw, 1300px"
                data-eio="l" /></noscript
            ><img
              decoding="async"
              className="bde-image2-769-278 bde-image2 lazyload"
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABRQAAAI3AQAAAADCAupTAAAAAnRSTlMAAHaTzTgAAABxSURBVHja7cExAQAAAMKg9U9tCy+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfgZrSwABSWnvPgAAAABJRU5ErkJggg=="
              alt="Black Angus Logo Vache Derriere"
              loading="lazy"
              data-src="https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-vache-derriere.png"
              data-srcset="https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-vache-derriere.png 1300w, https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-vache-derriere-300x131.png 300w, https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-vache-derriere-1024x447.png 1024w, https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-vache-derriere-768x335.png 768w"
              data-sizes="auto"
              width="1300"
              height="567"
              data-eio-rwidth="1300"
              data-eio-rheight="567"
            /><noscript
              ><img
                decoding="async"
                className="bde-image2-769-278 bde-image2"
                src="wp-content/uploads/2025/01/black-angus-logo-vache-derriere.png"
                alt="Black Angus Logo Vache Derriere"
                loading="lazy"
                srcset="
                  https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-vache-derriere.png          1300w,
                  https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-vache-derriere-300x131.png   300w,
                  https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-vache-derriere-1024x447.png 1024w,
                  https://restaurantblackangus.com/wp-content/uploads/2025/01/black-angus-logo-vache-derriere-768x335.png   768w
                "
                sizes="(max-width: 1300px) 100vw, 1300px"
                data-eio="l"
            /></noscript>
          </div>
        </div>
      </section>
      <section className="bde-section-769-364 bde-section">
        <div className="section-container">
          <h2 className="bde-heading-769-366 bde-heading">
            {t.customerReviews}
          </h2>
          <div className="bde-shortcode-769-365 bde-shortcode">
            <pre
              className="ti-widget"
            ><template id="trustindex-google-widget-html"><div className=" ti-widget  ti-goog ti-disable-font ti-show-rating-text ti-review-text-mode-readmore ti-text-align-left" data-no-translation="true" data-time-locale="il y a %d %s|aujourd'hui|jour|jours|semaine|semaines|mois|mois|année|ans" data-layout-id="34" data-layout-category="slider" data-set-id="soft" data-pid="" data-language="fr" data-close-locale="Fermer" data-review-target-width="300" data-css-version="2" data-reply-by-locale="Réponse du propriétaire" data-pager-autoplay-timeout="6"> <div className="ti-widget-container ti-col-3"> <div className="ti-header ti-header-grid source-Google"> <div className="ti-fade-container"> <div className="ti-rating-text"> <strong className="ti-rating ti-rating-large"> EXCELLENT </strong> </div> <span className="ti-stars star-lg"><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/h.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image></span> <div className="ti-rating-text"> <span className="nowrap">Basée sur <strong>8405 avis</strong></span> </div> <div className="ti-large-logo"> <div className="ti-v-center"> <trustindex-image className="ti-logo-fb" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/logo.svg" width="150" height="25" loading="lazy" alt="Google"></trustindex-image> </div> </div> </div> </div> <div className="ti-reviews-container"> <div className="ti-controls"> <div className="ti-next" aria-label="Avis suivante" role="button"></div> <div className="ti-prev" aria-label="Avis précédent" role="button"></div> </div> <div className="ti-reviews-container-wrapper">  <div data-empty="0" data-time="1754956800" className="ti-review-item source-Google ti-image-layout-thumbnail" data-id="cfcd208495d565ef66e7dff9f98764da"> <div className="ti-inner"> <div className="ti-review-header"> <div className="ti-platform-icon ti-with-tooltip"> <span className="ti-tooltip">Publié sur </span> <trustindex-image data-imgurl="https://cdn.trustindex.io/assets/platform/Google/icon.svg" alt="" width="20" height="20" loading="lazy"></trustindex-image> </div> <div className="ti-profile-img"> <trustindex-image data-imgurl="https://lh3.googleusercontent.com/a/ACg8ocKWtHNtkJsCjIBvOV0EZMB3SijWIQDgExSJIWOiLy1C5pzExA=w40-h40-c-rp-mo-br100" alt="RUDY CLERC profile picture" loading="lazy"></trustindex-image> </div> <div className="ti-profile-details"> <div className="ti-name"> RUDY CLERC </div> <div className="ti-date"></div> </div> </div> <span className="ti-stars"><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><span className="ti-verified-review ti-verified-platform"><span className="ti-verified-tooltip">Trustindex vérifie que la source originale de l'avis est Google.</span></span></span> <div className="ti-review-text-container ti-review-content">{/* R-CONTENT */}Chlore est la serveuse idéale Je vous met au défi de trouver un professionnalisme pareil.{/* R-CONTENT */}</div> <span className="ti-read-more" data-container=".ti-review-content" data-collapse-text="Cacher" data-open-text="Lire la suite"></span> </div> </div>  <div data-empty="0" data-time="1754956800" className="ti-review-item source-Google ti-image-layout-thumbnail" data-id="cfcd208495d565ef66e7dff9f98764da"> <div className="ti-inner"> <div className="ti-review-header"> <div className="ti-platform-icon ti-with-tooltip"> <span className="ti-tooltip">Publié sur </span> <trustindex-image data-imgurl="https://cdn.trustindex.io/assets/platform/Google/icon.svg" alt="" width="20" height="20" loading="lazy"></trustindex-image> </div> <div className="ti-profile-img"> <trustindex-image data-imgurl="https://lh3.googleusercontent.com/a-/ALV-UjUlQL0-waAmMYSxSyi9qOpVOvgwE4OlsTYezUuG-Wiv34yGTNM=w40-h40-c-rp-mo-br100" alt="MARTINE ALIBERT profile picture" loading="lazy"></trustindex-image> </div> <div className="ti-profile-details"> <div className="ti-name"> MARTINE ALIBERT </div> <div className="ti-date"></div> </div> </div> <span className="ti-stars"><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><span className="ti-verified-review ti-verified-platform"><span className="ti-verified-tooltip">Trustindex vérifie que la source originale de l'avis est Google.</span></span></span> <div className="ti-review-text-container ti-review-content">{/* R-CONTENT */}Merci Chloé et Pamela qui nous ont formidablement bien servi, accueil chaleureux et convivial.{/* R-CONTENT */}</div> <span className="ti-read-more" data-container=".ti-review-content" data-collapse-text="Cacher" data-open-text="Lire la suite"></span> </div> </div>  <div data-empty="0" data-time="1754956800" className="ti-review-item source-Google ti-image-layout-thumbnail" data-id="cfcd208495d565ef66e7dff9f98764da"> <div className="ti-inner"> <div className="ti-review-header"> <div className="ti-platform-icon ti-with-tooltip"> <span className="ti-tooltip">Publié sur </span> <trustindex-image data-imgurl="https://cdn.trustindex.io/assets/platform/Google/icon.svg" alt="" width="20" height="20" loading="lazy"></trustindex-image> </div> <div className="ti-profile-img"> <trustindex-image data-imgurl="https://lh3.googleusercontent.com/a/ACg8ocKyfQR52AMd_8HQ03GYrZMVrivh6usKVhm3aLg_ItB3ic9z4A=w40-h40-c-rp-mo-br100" alt="Eve Canli profile picture" loading="lazy"></trustindex-image> </div> <div className="ti-profile-details"> <div className="ti-name"> Eve Canli </div> <div className="ti-date"></div> </div> </div> <span className="ti-stars"><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><span className="ti-verified-review ti-verified-platform"><span className="ti-verified-tooltip">Trustindex vérifie que la source originale de l'avis est Google.</span></span></span> <div className="ti-review-text-container ti-review-content">{/* R-CONTENT */}Très bon moment partagé dans cette endroit, une bonne ambiance et un accueil au petit soin par Aline qui nous a fait passer un bon moment{/* R-CONTENT */}</div> <span className="ti-read-more" data-container=".ti-review-content" data-collapse-text="Cacher" data-open-text="Lire la suite"></span> </div> </div>  <div data-empty="0" data-time="1754956800" className="ti-review-item source-Google ti-image-layout-thumbnail" data-id="cfcd208495d565ef66e7dff9f98764da"> <div className="ti-inner"> <div className="ti-review-header"> <div className="ti-platform-icon ti-with-tooltip"> <span className="ti-tooltip">Publié sur </span> <trustindex-image data-imgurl="https://cdn.trustindex.io/assets/platform/Google/icon.svg" alt="" width="20" height="20" loading="lazy"></trustindex-image> </div> <div className="ti-profile-img"> <trustindex-image data-imgurl="https://lh3.googleusercontent.com/a/ACg8ocIOwDbDFE1xhyVTWl61FQUsan0cVCBojK0sxFW-RTeChGBpPo23=w40-h40-c-rp-mo-br100" alt="Louis Sant&apos;anna profile picture" loading="lazy"></trustindex-image> </div> <div className="ti-profile-details"> <div className="ti-name"> Louis Sant&apos;anna </div> <div className="ti-date"></div> </div> </div> <span className="ti-stars"><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><span className="ti-verified-review ti-verified-platform"><span className="ti-verified-tooltip">Trustindex vérifie que la source originale de l'avis est Google.</span></span></span> <div className="ti-review-text-container ti-review-content">{/* R-CONTENT */}Plats délicieux et très bon service de Pamela et Chloé.{/* R-CONTENT */}</div> <span className="ti-read-more" data-container=".ti-review-content" data-collapse-text="Cacher" data-open-text="Lire la suite"></span> </div> </div>  <div data-empty="0" data-time="1754956800" className="ti-review-item source-Google ti-image-layout-thumbnail" data-id="cfcd208495d565ef66e7dff9f98764da"> <div className="ti-inner"> <div className="ti-review-header"> <div className="ti-platform-icon ti-with-tooltip"> <span className="ti-tooltip">Publié sur </span> <trustindex-image data-imgurl="https://cdn.trustindex.io/assets/platform/Google/icon.svg" alt="" width="20" height="20" loading="lazy"></trustindex-image> </div> <div className="ti-profile-img"> <trustindex-image data-imgurl="https://lh3.googleusercontent.com/a-/ALV-UjWtkn3w7OE_JyKaPC0qkhtQ6fNITfkbB3PlVV97IOOOeBvjQno=w40-h40-c-rp-mo-br100" alt="Charone Jova profile picture" loading="lazy"></trustindex-image> </div> <div className="ti-profile-details"> <div className="ti-name"> Charone Jova </div> <div className="ti-date"></div> </div> </div> <span className="ti-stars"><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><span className="ti-verified-review ti-verified-platform"><span className="ti-verified-tooltip">Trustindex vérifie que la source originale de l'avis est Google.</span></span></span> <div className="ti-review-text-container ti-review-content">{/* R-CONTENT */}Rien à dire très bien, très bon accueil pas{/* R-CONTENT */}</div> <span className="ti-read-more" data-container=".ti-review-content" data-collapse-text="Cacher" data-open-text="Lire la suite"></span> </div> </div>  <div data-empty="0" data-time="1754956800" className="ti-review-item source-Google ti-image-layout-thumbnail" data-id="cfcd208495d565ef66e7dff9f98764da"> <div className="ti-inner"> <div className="ti-review-header"> <div className="ti-platform-icon ti-with-tooltip"> <span className="ti-tooltip">Publié sur </span> <trustindex-image data-imgurl="https://cdn.trustindex.io/assets/platform/Google/icon.svg" alt="" width="20" height="20" loading="lazy"></trustindex-image> </div> <div className="ti-profile-img"> <trustindex-image data-imgurl="https://lh3.googleusercontent.com/a/ACg8ocJWDS87wJxfbUV7RBrwdyfiIv-XckXMpeuFHk-V7TwuL55TWq0=w40-h40-c-rp-mo-br100" alt="Andie J profile picture" loading="lazy"></trustindex-image> </div> <div className="ti-profile-details"> <div className="ti-name"> Andie J </div> <div className="ti-date"></div> </div> </div> <span className="ti-stars"><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><span className="ti-verified-review ti-verified-platform"><span className="ti-verified-tooltip">Trustindex vérifie que la source originale de l'avis est Google.</span></span></span> <div className="ti-review-text-container ti-review-content">{/* R-CONTENT */}It was excellent. It's my first time in Paris. My cousin recommended me this restaurant. I loved it.
Chloe and Pamela were nice and very efficient{/* R-CONTENT */}</div> <span className="ti-read-more" data-container=".ti-review-content" data-collapse-text="Cacher" data-open-text="Lire la suite"></span> </div> </div>  <div data-empty="0" data-time="1754956800" className="ti-review-item source-Google ti-image-layout-thumbnail" data-id="cfcd208495d565ef66e7dff9f98764da"> <div className="ti-inner"> <div className="ti-review-header"> <div className="ti-platform-icon ti-with-tooltip"> <span className="ti-tooltip">Publié sur </span> <trustindex-image data-imgurl="https://cdn.trustindex.io/assets/platform/Google/icon.svg" alt="" width="20" height="20" loading="lazy"></trustindex-image> </div> <div className="ti-profile-img"> <trustindex-image data-imgurl="https://lh3.googleusercontent.com/a/ACg8ocIPmYsyUmG-rt8d63dmpQl_c9nbvCO7Gnh2UpWrSk5MN6P01g=w40-h40-c-rp-mo-br100" alt="selaire kofffi profile picture" loading="lazy"></trustindex-image> </div> <div className="ti-profile-details"> <div className="ti-name"> selaire kofffi </div> <div className="ti-date"></div> </div> </div> <span className="ti-stars"><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><span className="ti-verified-review ti-verified-platform"><span className="ti-verified-tooltip">Trustindex vérifie que la source originale de l'avis est Google.</span></span></span> <div className="ti-review-text-container ti-review-content">{/* R-CONTENT */}Super service de la part de pamela et Chloé .{/* R-CONTENT */}</div> <span className="ti-read-more" data-container=".ti-review-content" data-collapse-text="Cacher" data-open-text="Lire la suite"></span> </div> </div>  <div data-empty="0" data-time="1754956800" className="ti-review-item source-Google ti-image-layout-thumbnail" data-id="cfcd208495d565ef66e7dff9f98764da"> <div className="ti-inner"> <div className="ti-review-header"> <div className="ti-platform-icon ti-with-tooltip"> <span className="ti-tooltip">Publié sur </span> <trustindex-image data-imgurl="https://cdn.trustindex.io/assets/platform/Google/icon.svg" alt="" width="20" height="20" loading="lazy"></trustindex-image> </div> <div className="ti-profile-img"> <trustindex-image data-imgurl="https://lh3.googleusercontent.com/a/ACg8ocKcSfMRdpEibsYGVvBYGMWNHem2tRNick89W4HQjEYT9pEfKg=w40-h40-c-rp-mo-br100" alt="Melvin Touré profile picture" loading="lazy"></trustindex-image> </div> <div className="ti-profile-details"> <div className="ti-name"> Melvin Touré </div> <div className="ti-date"></div> </div> </div> <span className="ti-stars"><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><span className="ti-verified-review ti-verified-platform"><span className="ti-verified-tooltip">Trustindex vérifie que la source originale de l'avis est Google.</span></span></span> <div className="ti-review-text-container ti-review-content">{/* R-CONTENT */}Merci à Pamela Chloé pour leur conseille et service exceptionnel{/* R-CONTENT */}</div> <span className="ti-read-more" data-container=".ti-review-content" data-collapse-text="Cacher" data-open-text="Lire la suite"></span> </div> </div>  <div data-empty="0" data-time="1754956800" className="ti-review-item source-Google ti-image-layout-thumbnail" data-id="cfcd208495d565ef66e7dff9f98764da"> <div className="ti-inner"> <div className="ti-review-header"> <div className="ti-platform-icon ti-with-tooltip"> <span className="ti-tooltip">Publié sur </span> <trustindex-image data-imgurl="https://cdn.trustindex.io/assets/platform/Google/icon.svg" alt="" width="20" height="20" loading="lazy"></trustindex-image> </div> <div className="ti-profile-img"> <trustindex-image data-imgurl="https://lh3.googleusercontent.com/a/ACg8ocJyjI808u7FQ8U4JdLfRZOGJvNaDTFU6WjCf9Zzk8JH9RUtmQ=w40-h40-c-rp-mo-br100" alt="Simonneau Julien profile picture" loading="lazy"></trustindex-image> </div> <div className="ti-profile-details"> <div className="ti-name"> Simonneau Julien </div> <div className="ti-date"></div> </div> </div> <span className="ti-stars"><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><trustindex-image className="ti-star" data-imgurl="https://cdn.trustindex.io/assets/platform/Google/star/f.svg" alt="Google" width="17" height="17" loading="lazy"></trustindex-image><span className="ti-verified-review ti-verified-platform"><span className="ti-verified-tooltip">Trustindex vérifie que la source originale de l'avis est Google.</span></span></span> <div className="ti-review-text-container ti-review-content">{/* R-CONTENT */}Excellent repas, belle découverte. Je recommande vivement aux amateurs de viande rouge. Avec en prime un service irréprochable de Chloé, toujours aux petits soins pour qu’on ne manque de rien.{/* R-CONTENT */}</div> <span className="ti-read-more" data-container=".ti-review-content" data-collapse-text="Cacher" data-open-text="Lire la suite"></span> </div> </div>  </div> <div className="ti-controls-line"> <div className="dot"></div> </div> </div>   </div> </div> </template></pre>
            <div
              data-src="https://cdn.trustindex.io/loader.js?wp-widget"
              data-template-id="trustindex-google-widget-html"
              data-css-url="https://restaurantblackangus.com/wp-content/uploads/trustindex-google-widget.css?1761010785"
            ></div>
          </div>
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
                      <img
                        decoding="async"
                        className="breakdance-image-object lazyload"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABTUAAAeAAQAAAAA3ao7XAAAAAnRSTlMAAHaTzTgAAAFPSURBVHja7cExAQAAAMKg9U9tB2+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4DfsPAABv1iGcAAAAABJRU5ErkJggg=="
                        width="1333"
                        height="2000"
                        alt="Restaurant Black Angus Salle 1"
                        data-src="https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-1.jpg"
                        data-srcset="https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-1.jpg 1333w, https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-1-200x300.jpg 200w, https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-1-682x1024.jpg 682w, https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-1-768x1152.jpg 768w, https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-1-1024x1536.jpg 1024w"
                        data-sizes="auto"
                        data-eio-rwidth="1333"
                        data-eio-rheight="2000"
                      /><noscript
                        ><img
                          decoding="async"
                          className="breakdance-image-object"
                          src="wp-content/uploads/2025/01/restaurant-black-angus-salle-1.jpg"
                          width="1333"
                          height="2000"
                          srcset="
                            https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-1.jpg           1333w,
                            https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-1-200x300.jpg    200w,
                            https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-1-682x1024.jpg   682w,
                            https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-1-768x1152.jpg   768w,
                            https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-1-1024x1536.jpg 1024w
                          "
                          sizes="(max-width: 1333px) 100vw, 1333px"
                          alt="Restaurant Black Angus Salle 1"
                          data-eio="l"
                      /></noscript>
                    </div>
                  </div>
                </figure>
              </div>
            </div>
            <div className="bde-column-769-307 bde-column">
              <div className="bde-image-769-308 bde-image" data-parallax="true">
                <figure className="breakdance-image breakdance-image--233">
                  <div className="breakdance-image-container">
                    <div className="breakdance-image-clip">
                      <img
                        decoding="async"
                        className="breakdance-image-object lazyload"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAAUAAQAAAACO9nKaAAAAAnRSTlMAAHaTzTgAAAFCSURBVHja7cEBDQAAAMKg909tDjegAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAXA7U8AAGRQ3nKAAAAAElFTkSuQmCC"
                        width="2000"
                        height="1333"
                        alt="Restaurant Black Angus Salle 2"
                        data-src="https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-2.jpg"
                        data-srcset="https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-2.jpg 2000w, https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-2-300x200.jpg 300w, https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-2-1024x682.jpg 1024w, https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-2-768x512.jpg 768w, https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-2-1536x1024.jpg 1536w"
                        data-sizes="auto"
                        data-eio-rwidth="2000"
                        data-eio-rheight="1333"
                      /><noscript
                        ><img
                          decoding="async"
                          className="breakdance-image-object"
                          src="wp-content/uploads/2025/01/restaurant-black-angus-salle-2.jpg"
                          width="2000"
                          height="1333"
                          srcset="
                            https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-2.jpg           2000w,
                            https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-2-300x200.jpg    300w,
                            https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-2-1024x682.jpg  1024w,
                            https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-2-768x512.jpg    768w,
                            https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-2-1536x1024.jpg 1536w
                          "
                          sizes="(max-width: 2000px) 100vw, 2000px"
                          alt="Restaurant Black Angus Salle 2"
                          data-eio="l"
                      /></noscript>
                    </div>
                  </div>
                </figure>
              </div>
              <div className="bde-image-769-309 bde-image">
                <figure className="breakdance-image breakdance-image--234">
                  <div className="breakdance-image-container">
                    <div className="breakdance-image-clip">
                      <img
                        decoding="async"
                        className="breakdance-image-object lazyload"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAB4AAAAUAAQAAAACO9nKaAAAAAnRSTlMAAHaTzTgAAAFCSURBVHja7cEBDQAAAMKg909tDjegAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAXA7U8AAGRQ3nKAAAAAElFTkSuQmCC"
                        width="2000"
                        height="1333"
                        alt="Restaurant Black Angus Salle 3"
                        data-src="https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-3.jpg"
                        data-srcset="https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-3.jpg 2000w, https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-3-300x200.jpg 300w, https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-3-1024x682.jpg 1024w, https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-3-768x512.jpg 768w, https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-3-1536x1024.jpg 1536w"
                        data-sizes="auto"
                        data-eio-rwidth="2000"
                        data-eio-rheight="1333"
                      /><noscript
                        ><img
                          decoding="async"
                          className="breakdance-image-object"
                          src="wp-content/uploads/2025/01/restaurant-black-angus-salle-3.jpg"
                          width="2000"
                          height="1333"
                          srcset="
                            https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-3.jpg           2000w,
                            https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-3-300x200.jpg    300w,
                            https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-3-1024x682.jpg  1024w,
                            https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-3-768x512.jpg    768w,
                            https://restaurantblackangus.com/wp-content/uploads/2025/01/restaurant-black-angus-salle-3-1536x1024.jpg 1536w
                          "
                          sizes="(max-width: 2000px) 100vw, 2000px"
                          alt="Restaurant Black Angus Salle 3"
                          data-eio="l"
                      /></noscript>
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
          <div
            className="bde-rich-text-769-119 bde-rich-text breakdance-rich-text-styles"
          >
            <div className="abstract" style={{textAlign: 'center'}}>
              {t.aboutParagraph1}<br /><br />
            </div>
            <div className="abstract" style={{textAlign: 'center'}}>
              {t.aboutParagraph2Start}
              <strong style={{color: '#ed1d23'}}>{t.aboutParagraph2Highlight1}</strong>
              {t.aboutParagraph2Middle}
              <strong style={{color: '#ed1d23'}}>{t.aboutParagraph2Highlight2}</strong>
              {t.aboutParagraph2End}
            </div>
            <p style={{textAlign: 'center'}}>
              {t.aboutParagraph3}
            </p>
          </div>
        </div>
      </section>
      <section className="bde-section-769-210 bde-section">
        <div className="section-container">
          <div className="bde-columns-769-322 bde-columns">
            <div className="bde-column-769-323 bde-column">
              <img
                decoding="async"
                className="bde-image2-769-256 bde-image2 lazyload"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAroAAAGCAQAAAAAnR13pAAAAAnRSTlMAAHaTzTgAAAA4SURBVHja7cGBAAAAAMOg+VNf4QBVAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8BmGMgABa4eIlgAAAABJRU5ErkJggg=="
                alt="Cuillere V2"
                loading="lazy"
                data-src="https://restaurantblackangus.com/wp-content/uploads/2025/01/cuillere-v2.png"
                data-srcset="https://restaurantblackangus.com/wp-content/uploads/2025/01/cuillere-v2.png 698w, https://restaurantblackangus.com/wp-content/uploads/2025/01/cuillere-v2-300x166.png 300w"
                data-sizes="auto"
                width="698"
                height="386"
                data-eio-rwidth="698"
                data-eio-rheight="386"
              /><noscript
                ><img
                  decoding="async"
                  className="bde-image2-769-256 bde-image2"
                  src="wp-content/uploads/2025/01/cuillere-v2.png"
                  alt="Cuillere V2"
                  loading="lazy"
                  srcset="
                    https://restaurantblackangus.com/wp-content/uploads/2025/01/cuillere-v2.png         698w,
                    https://restaurantblackangus.com/wp-content/uploads/2025/01/cuillere-v2-300x166.png 300w
                  "
                  sizes="(max-width: 698px) 100vw, 698px"
                  data-eio="l"
              /></noscript>
            </div>
            <div className="bde-column-769-324 bde-column">
              <div className="bde-div-769-211 bde-div">
                <h2 className="bde-heading-769-212 bde-heading">Desserts</h2>
                <img
                  decoding="async"
                  className="bde-image2-769-213 bde-image2 lazyload"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABPEAAACbAQAAAAArBjMaAAAAAnRSTlMAAHaTzTgAAAAvSURBVHja7cGBAAAAAMOg+VPf4ARVAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfANg4AABk3svzQAAAABJRU5ErkJggg=="
                  alt="Red Top Border"
                  loading="lazy"
                  data-src="https://restaurantblackangus.com/wp-content/uploads/2025/01/red-top-border.png"
                  data-srcset="https://restaurantblackangus.com/wp-content/uploads/2025/01/red-top-border.png 1265w, https://restaurantblackangus.com/wp-content/uploads/2025/01/red-top-border-300x37.png 300w, https://restaurantblackangus.com/wp-content/uploads/2025/01/red-top-border-1024x125.png 1024w, https://restaurantblackangus.com/wp-content/uploads/2025/01/red-top-border-768x94.png 768w"
                  data-sizes="auto"
                  width="1265"
                  height="155"
                  data-eio-rwidth="1265"
                  data-eio-rheight="155"
                /><noscript
                  ><img
                    decoding="async"
                    className="bde-image2-769-213 bde-image2"
                    src="wp-content/uploads/2025/01/red-top-border.png"
                    alt="Red Top Border"
                    loading="lazy"
                    srcset="
                      https://restaurantblackangus.com/wp-content/uploads/2025/01/red-top-border.png          1265w,
                      https://restaurantblackangus.com/wp-content/uploads/2025/01/red-top-border-300x37.png    300w,
                      https://restaurantblackangus.com/wp-content/uploads/2025/01/red-top-border-1024x125.png 1024w,
                      https://restaurantblackangus.com/wp-content/uploads/2025/01/red-top-border-768x94.png    768w
                    "
                    sizes="(max-width: 1265px) 100vw, 1265px"
                    data-eio="l"
                /></noscript>
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
                  <div
                    className="bde-div-769-217 bde-div bde-preset-4a368af5-7b0a-4ce4-a281-47ab68badcaf"
                  >
                    <div
                      className="bde-div-769-218 bde-div bde-preset-84071600-909e-455e-8dc7-ade8350a2e28"
                    >
                      <h3 className="bde-heading-769-279 bde-heading desserts">
                        {t.dessertSorbets2}
                      </h3>
                    </div>
                    <div
                      className="bde-text-769-220 bde-text bde-preset-5b0b0eb6-d544-4eb3-a475-06a52e74308a"
                    >
                      6
                    </div>
                  </div>
                  <div
                    className="bde-div-769-221 bde-div bde-preset-4a368af5-7b0a-4ce4-a281-47ab68badcaf"
                  >
                    <div className="bde-div-769-222 bde-div">
                      <h3 className="bde-heading-769-280 bde-heading desserts">
                        {t.dessertSorbets3}
                      </h3>
                    </div>
                    <div
                      className="bde-text-769-224 bde-text bde-preset-5b0b0eb6-d544-4eb3-a475-06a52e74308a"
                    >
                      9
                    </div>
                  </div>
                  <div
                    className="bde-div-769-225 bde-div bde-preset-4a368af5-7b0a-4ce4-a281-47ab68badcaf"
                  >
                    <div
                      className="bde-div-769-226 bde-div bde-preset-84071600-909e-455e-8dc7-ade8350a2e28"
                    >
                      <h3 className="bde-heading-769-286 bde-heading desserts">
                        {t.dessertPearTart}
                      </h3>
                    </div>
                    <div
                      className="bde-text-769-228 bde-text bde-preset-5b0b0eb6-d544-4eb3-a475-06a52e74308a"
                    >
                      9,5
                    </div>
                  </div>
                  <div
                    className="bde-div-769-229 bde-div bde-preset-4a368af5-7b0a-4ce4-a281-47ab68badcaf"
                  >
                    <div
                      className="bde-div-769-230 bde-div bde-preset-84071600-909e-455e-8dc7-ade8350a2e28"
                    >
                      <h3 className="bde-heading-769-287 bde-heading desserts">
                        {t.dessertAppleTart}
                      </h3>
                    </div>
                    <div
                      className="bde-text-769-232 bde-text bde-preset-5b0b0eb6-d544-4eb3-a475-06a52e74308a"
                    >
                      9,5
                    </div>
                  </div>
                  <div
                    className="bde-div-769-233 bde-div bde-preset-4a368af5-7b0a-4ce4-a281-47ab68badcaf"
                  >
                    <div
                      className="bde-div-769-234 bde-div bde-preset-84071600-909e-455e-8dc7-ade8350a2e28"
                    >
                      <h3 className="bde-heading-769-281 bde-heading desserts">
                        {t.dessertLemonTart}
                      </h3>
                    </div>
                    <div
                      className="bde-text-769-236 bde-text bde-preset-5b0b0eb6-d544-4eb3-a475-06a52e74308a"
                    >
                      9,5
                    </div>
                  </div>
                  <div
                    className="bde-div-769-237 bde-div bde-preset-4a368af5-7b0a-4ce4-a281-47ab68badcaf"
                  >
                    <div
                      className="bde-div-769-238 bde-div bde-preset-84071600-909e-455e-8dc7-ade8350a2e28"
                    >
                      <h3 className="bde-heading-769-283 bde-heading desserts">
                        {t.dessertCremeBrulee}
                      </h3>
                    </div>
                    <div
                      className="bde-text-769-240 bde-text bde-preset-5b0b0eb6-d544-4eb3-a475-06a52e74308a"
                    >
                      9,5
                    </div>
                  </div>
                  <div
                    className="bde-div-769-241 bde-div bde-preset-4a368af5-7b0a-4ce4-a281-47ab68badcaf"
                  >
                    <div
                      className="bde-div-769-242 bde-div bde-preset-84071600-909e-455e-8dc7-ade8350a2e28"
                    >
                      <h3 className="bde-heading-769-284 bde-heading desserts">
                        {t.dessertBaba}
                      </h3>
                    </div>
                    <div
                      className="bde-text-769-244 bde-text bde-preset-5b0b0eb6-d544-4eb3-a475-06a52e74308a"
                    >
                      10,5
                    </div>
                  </div>
                  <div
                    className="bde-div-769-245 bde-div bde-preset-4a368af5-7b0a-4ce4-a281-47ab68badcaf"
                  >
                    <div
                      className="bde-div-769-246 bde-div bde-preset-84071600-909e-455e-8dc7-ade8350a2e28"
                    >
                      <h3 className="bde-heading-769-285 bde-heading desserts">
                        {t.dessertProfiteroles}
                      </h3>
                    </div>
                    <div
                      className="bde-text-769-248 bde-text bde-preset-5b0b0eb6-d544-4eb3-a475-06a52e74308a"
                    >
                      11
                    </div>
                  </div>
                  <div
                    className="bde-div-769-249 bde-div bde-preset-4a368af5-7b0a-4ce4-a281-47ab68badcaf"
                  >
                    <div className="bde-div-769-250 bde-div">
                      <h3 className="bde-heading-769-282 bde-heading desserts">
                        {t.dessertChocolateCake}
                      </h3>
                      <div className="bde-text-769-252 bde-text desserts">
                        {t.dessertWaitTime}
                      </div>
                    </div>
                    <div
                      className="bde-text-769-253 bde-text bde-preset-5b0b0eb6-d544-4eb3-a475-06a52e74308a"
                    >
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
              <img
                decoding="async"
                className="bde-image2-769-257 bde-image2 lazyload"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWwAAAFqAQAAAAAWvV0JAAAAAnRSTlMAAHaTzTgAAAAmSURBVHja7cEBAQAAAIIg/69uSEABAAAAAAAAAAAAAAAAAAAA8GdCdgABUxeOSQAAAABJRU5ErkJggg=="
                alt="Couverts"
                loading="lazy"
                data-src="https://restaurantblackangus.com/wp-content/uploads/2025/01/couverts.png"
                data-srcset="https://restaurantblackangus.com/wp-content/uploads/2025/01/couverts.png 364w, https://restaurantblackangus.com/wp-content/uploads/2025/01/couverts-300x298.png 300w, https://restaurantblackangus.com/wp-content/uploads/2025/01/couverts-150x150.png 150w"
                data-sizes="auto"
                width="364"
                height="362"
                data-eio-rwidth="364"
                data-eio-rheight="362"
              /><noscript
                ><img
                  decoding="async"
                  className="bde-image2-769-257 bde-image2"
                  src="wp-content/uploads/2025/01/couverts.png"
                  alt="Couverts"
                  loading="lazy"
                  srcset="
                    https://restaurantblackangus.com/wp-content/uploads/2025/01/couverts.png         364w,
                    https://restaurantblackangus.com/wp-content/uploads/2025/01/couverts-300x298.png 300w,
                    https://restaurantblackangus.com/wp-content/uploads/2025/01/couverts-150x150.png 150w
                  "
                  sizes="(max-width: 364px) 100vw, 364px"
                  data-eio="l"
              /></noscript>
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
                <div
                  className="ee-gallery ee-gallery--gallery-slider ee-gallery--slider ee-gallery-- ee-gallery--lightbox ee-gallery--zoom-in ee-gallery--caption- ee-gallery--caption-none ee-gallery--custom swiper-wrapper"
                >
                  <a
                    className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                    href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-45.jpg"
                    data-sub-html="<span></span>"
                    data-category="1"
                    data-lg-size="2000-1333"
                  >
                    <figure className="ee-gallery-item-figure">
                      <img
                        decoding="async"
                        className="breakdance-image-object lazyload"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAKqAQAAAACMMRGcAAAAAnRSTlMAAHaTzTgAAABrSURBVHja7cEBAQAAAIIg/69uSEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvBtXuQABimusowAAAABJRU5ErkJggg=="
                        width="1024"
                        height="682"
                        alt="L'entreboeuf Déc24@ninacoriton 45"
                        data-src="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-45-1024x682.jpg"
                        data-srcset="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-45.jpg 2000w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-45-300x200.jpg 300w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-45-1024x682.jpg 1024w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-45-768x512.jpg 768w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-45-1536x1024.jpg 1536w"
                        data-sizes="auto"
                        data-eio-rwidth="1024"
                        data-eio-rheight="682"
                      /><noscript
                        ><img
                          decoding="async"
                          className="breakdance-image-object"
                          src="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-45-1024x682.jpg"
                          width="1024"
                          height="682"
                          srcset="
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-45.jpg           2000w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-45-300x200.jpg    300w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-45-1024x682.jpg  1024w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-45-768x512.jpg    768w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-45-1536x1024.jpg 1536w
                          "
                          sizes="(max-width: 2000px) 100vw, 2000px"
                          alt="L'entreboeuf Déc24@ninacoriton 45"
                          data-eio="l"
                      /></noscript>
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
                      <img
                        decoding="async"
                        className="breakdance-image-object lazyload"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAKqAQAAAACMMRGcAAAAAnRSTlMAAHaTzTgAAABrSURBVHja7cEBAQAAAIIg/69uSEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvBtXuQABimusowAAAABJRU5ErkJggg=="
                        width="1024"
                        height="682"
                        alt="L'entreboeuf Déc24@ninacoriton 40"
                        data-src="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-40-1024x682.jpg"
                        data-srcset="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-40.jpg 2000w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-40-300x200.jpg 300w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-40-1024x682.jpg 1024w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-40-768x512.jpg 768w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-40-1536x1024.jpg 1536w"
                        data-sizes="auto"
                        data-eio-rwidth="1024"
                        data-eio-rheight="682"
                      /><noscript
                        ><img
                          decoding="async"
                          className="breakdance-image-object"
                          src="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-40-1024x682.jpg"
                          width="1024"
                          height="682"
                          srcset="
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-40.jpg           2000w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-40-300x200.jpg    300w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-40-1024x682.jpg  1024w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-40-768x512.jpg    768w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-40-1536x1024.jpg 1536w
                          "
                          sizes="(max-width: 2000px) 100vw, 2000px"
                          alt="L'entreboeuf Déc24@ninacoriton 40"
                          data-eio="l"
                      /></noscript>
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
                      <img
                        decoding="async"
                        className="breakdance-image-object lazyload"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqoAAAQAAQAAAAABqUZ1AAAAAnRSTlMAAHaTzTgAAABtSURBVHja7cExAQAAAMKg9U9tCU+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4GlwPAAGjkrJcAAAAAElFTkSuQmCC"
                        width="682"
                        height="1024"
                        alt="L'entreboeuf Déc24@ninacoriton 36"
                        data-src="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-36-682x1024.jpg"
                        data-srcset="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-36.jpg 1333w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-36-200x300.jpg 200w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-36-682x1024.jpg 682w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-36-768x1152.jpg 768w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-36-1024x1536.jpg 1024w"
                        data-sizes="auto"
                        data-eio-rwidth="682"
                        data-eio-rheight="1024"
                      /><noscript
                        ><img
                          decoding="async"
                          className="breakdance-image-object"
                          src="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-36-682x1024.jpg"
                          width="682"
                          height="1024"
                          srcset="
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-36.jpg           1333w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-36-200x300.jpg    200w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-36-682x1024.jpg   682w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-36-768x1152.jpg   768w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-36-1024x1536.jpg 1024w
                          "
                          sizes="(max-width: 1333px) 100vw, 1333px"
                          alt="L'entreboeuf Déc24@ninacoriton 36"
                          data-eio="l"
                      /></noscript>
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
                      <img
                        decoding="async"
                        className="breakdance-image-object lazyload"
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAKqAQAAAACMMRGcAAAAAnRSTlMAAHaTzTgAAABrSURBVHja7cEBAQAAAIIg/69uSEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvBtXuQABimusowAAAABJRU5ErkJggg=="
                        width="1024"
                        height="682"
                        alt="L'entreboeuf Déc24@ninacoriton 30"
                        data-src="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-30-1024x682.jpg"
                        data-srcset="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-30.jpg 2000w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-30-300x200.jpg 300w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-30-1024x682.jpg 1024w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-30-768x512.jpg 768w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-30-1536x1024.jpg 1536w"
                        data-sizes="auto"
                        data-eio-rwidth="1024"
                        data-eio-rheight="682"
                      /><noscript
                        ><img
                          decoding="async"
                          className="breakdance-image-object"
                          src="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-30-1024x682.jpg"
                          width="1024"
                          height="682"
                          srcset="
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-30.jpg           2000w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-30-300x200.jpg    300w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-30-1024x682.jpg  1024w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-30-768x512.jpg    768w,
                            https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-30-1536x1024.jpg 1536w
                          "
                          sizes="(max-width: 2000px) 100vw, 2000px"
                          alt="L'entreboeuf Déc24@ninacoriton 30"
                          data-eio="l"
                      /></noscript>
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
                    <div
                      className="ee-gallery ee-gallery--gallery-slider ee-gallery--slider ee-gallery-- ee-gallery--lightbox ee-gallery--zoom-in ee-gallery--caption- ee-gallery--caption-none ee-gallery--custom swiper-wrapper"
                    >
                      <a
                        className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                        href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-45.jpg"
                        data-sub-html="<span></span>"
                        data-category="1"
                        data-lg-size="2000-1333"
                      >
                        <figure className="ee-gallery-item-figure">
                          <img
                            decoding="async"
                            className="breakdance-image-object lazyload"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAKqAQAAAACMMRGcAAAAAnRSTlMAAHaTzTgAAABrSURBVHja7cEBAQAAAIIg/69uSEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvBtXuQABimusowAAAABJRU5ErkJggg=="
                            width="1024"
                            height="682"
                            alt="L'entreboeuf Déc24@ninacoriton 45"
                            data-src="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-45-1024x682.jpg"
                            data-srcset="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-45.jpg 2000w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-45-300x200.jpg 300w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-45-1024x682.jpg 1024w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-45-768x512.jpg 768w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-45-1536x1024.jpg 1536w"
                            data-sizes="auto"
                            data-eio-rwidth="1024"
                            data-eio-rheight="682"
                          /><noscript
                            ><img
                              decoding="async"
                              className="breakdance-image-object"
                              src="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-45-1024x682.jpg"
                              width="1024"
                              height="682"
                              srcset="
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-45.jpg           2000w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-45-300x200.jpg    300w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-45-1024x682.jpg  1024w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-45-768x512.jpg    768w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-45-1536x1024.jpg 1536w
                              "
                              sizes="(max-width: 2000px) 100vw, 2000px"
                              alt="L'entreboeuf Déc24@ninacoriton 45"
                              data-eio="l"
                          /></noscript>
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
                          <img
                            decoding="async"
                            className="breakdance-image-object lazyload"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAKqAQAAAACMMRGcAAAAAnRSTlMAAHaTzTgAAABrSURBVHja7cEBAQAAAIIg/69uSEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvBtXuQABimusowAAAABJRU5ErkJggg=="
                            width="1024"
                            height="682"
                            alt="L'entreboeuf Déc24@ninacoriton 30"
                            data-src="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-30-1024x682.jpg"
                            data-srcset="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-30.jpg 2000w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-30-300x200.jpg 300w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-30-1024x682.jpg 1024w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-30-768x512.jpg 768w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-30-1536x1024.jpg 1536w"
                            data-sizes="auto"
                            data-eio-rwidth="1024"
                            data-eio-rheight="682"
                          /><noscript
                            ><img
                              decoding="async"
                              className="breakdance-image-object"
                              src="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-30-1024x682.jpg"
                              width="1024"
                              height="682"
                              srcset="
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-30.jpg           2000w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-30-300x200.jpg    300w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-30-1024x682.jpg  1024w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-30-768x512.jpg    768w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-30-1536x1024.jpg 1536w
                              "
                              sizes="(max-width: 2000px) 100vw, 2000px"
                              alt="L'entreboeuf Déc24@ninacoriton 30"
                              data-eio="l"
                          /></noscript>
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
                    <div
                      className="ee-gallery ee-gallery--gallery-slider ee-gallery--slider ee-gallery-- ee-gallery--lightbox ee-gallery--zoom-in ee-gallery--caption- ee-gallery--caption-none ee-gallery--custom swiper-wrapper"
                    >
                      <a
                        className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                        href="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-36.jpg"
                        data-sub-html="<span></span>"
                        data-category="1"
                        data-lg-size="1333-2000"
                      >
                        <figure className="ee-gallery-item-figure">
                          <img
                            decoding="async"
                            className="breakdance-image-object lazyload"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqoAAAQAAQAAAAABqUZ1AAAAAnRSTlMAAHaTzTgAAABtSURBVHja7cExAQAAAMKg9U9tCU+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4GlwPAAGjkrJcAAAAAElFTkSuQmCC"
                            width="682"
                            height="1024"
                            alt="L'entreboeuf Déc24@ninacoriton 36"
                            data-src="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-36-682x1024.jpg"
                            data-srcset="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-36.jpg 1333w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-36-200x300.jpg 200w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-36-682x1024.jpg 682w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-36-768x1152.jpg 768w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-36-1024x1536.jpg 1024w"
                            data-sizes="auto"
                            data-eio-rwidth="682"
                            data-eio-rheight="1024"
                          /><noscript
                            ><img
                              decoding="async"
                              className="breakdance-image-object"
                              src="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-36-682x1024.jpg"
                              width="682"
                              height="1024"
                              srcset="
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-36.jpg           1333w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-36-200x300.jpg    200w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-36-682x1024.jpg   682w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-36-768x1152.jpg   768w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-36-1024x1536.jpg 1024w
                              "
                              sizes="(max-width: 1333px) 100vw, 1333px"
                              alt="L'entreboeuf Déc24@ninacoriton 36"
                              data-eio="l"
                          /></noscript>
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
                          <img
                            decoding="async"
                            className="breakdance-image-object lazyload"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABAAAAAKqAQAAAACMMRGcAAAAAnRSTlMAAHaTzTgAAABrSURBVHja7cEBAQAAAIIg/69uSEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvBtXuQABimusowAAAABJRU5ErkJggg=="
                            width="1024"
                            height="682"
                            alt="L'entreboeuf Déc24@ninacoriton 40"
                            data-src="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-40-1024x682.jpg"
                            data-srcset="https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-40.jpg 2000w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-40-300x200.jpg 300w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-40-1024x682.jpg 1024w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-40-768x512.jpg 768w, https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-40-1536x1024.jpg 1536w"
                            data-sizes="auto"
                            data-eio-rwidth="1024"
                            data-eio-rheight="682"
                          /><noscript
                            ><img
                              decoding="async"
                              className="breakdance-image-object"
                              src="wp-content/uploads/2024/12/LEntreboeuf_dec24%40ninacoriton-40-1024x682.jpg"
                              width="1024"
                              height="682"
                              srcset="
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-40.jpg           2000w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-40-300x200.jpg    300w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-40-1024x682.jpg  1024w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-40-768x512.jpg    768w,
                                https://restaurantblackangus.com/wp-content/uploads/2024/12/LEntreboeuf_dec24@ninacoriton-40-1536x1024.jpg 1536w
                              "
                              sizes="(max-width: 2000px) 100vw, 2000px"
                              alt="L'entreboeuf Déc24@ninacoriton 40"
                              data-eio="l"
                          /></noscript>
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
                    <div
                      className="ee-gallery ee-gallery--gallery-slider ee-gallery--slider ee-gallery-- ee-gallery--lightbox ee-gallery--zoom-in ee-gallery--caption- ee-gallery--caption-none ee-gallery--custom swiper-wrapper"
                    >
                      <a
                        className="ee-gallery-item ee-gallery-item--image ee-gallery-item--single swiper-slide"
                        href="wp-content/uploads/2025/01/LEntreboeuf_Nov24%40ninacoriton-34.jpg"
                        data-sub-html="<span></span>"
                        data-category="1"
                        data-lg-size="1333-2000"
                      >
                        <figure className="ee-gallery-item-figure">
                          <img
                            decoding="async"
                            className="breakdance-image-object lazyload"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqoAAAQAAQAAAAABqUZ1AAAAAnRSTlMAAHaTzTgAAABtSURBVHja7cExAQAAAMKg9U9tCU+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4GlwPAAGjkrJcAAAAAElFTkSuQmCC"
                            width="682"
                            height="1024"
                            alt="L'entreboeuf Nov24@ninacoriton 34"
                            data-src="https://restaurantblackangus.com/wp-content/uploads/2025/01/LEntreboeuf_Nov24@ninacoriton-34-682x1024.jpg"
                            data-srcset="https://restaurantblackangus.com/wp-content/uploads/2025/01/LEntreboeuf_Nov24@ninacoriton-34.jpg 1333w, https://restaurantblackangus.com/wp-content/uploads/2025/01/LEntreboeuf_Nov24@ninacoriton-34-200x300.jpg 200w, https://restaurantblackangus.com/wp-content/uploads/2025/01/LEntreboeuf_Nov24@ninacoriton-34-682x1024.jpg 682w, https://restaurantblackangus.com/wp-content/uploads/2025/01/LEntreboeuf_Nov24@ninacoriton-34-768x1152.jpg 768w, https://restaurantblackangus.com/wp-content/uploads/2025/01/LEntreboeuf_Nov24@ninacoriton-34-1024x1536.jpg 1024w"
                            data-sizes="auto"
                            data-eio-rwidth="682"
                            data-eio-rheight="1024"
                          /><noscript
                            ><img
                              decoding="async"
                              className="breakdance-image-object"
                              src="wp-content/uploads/2025/01/LEntreboeuf_Nov24%40ninacoriton-34-682x1024.jpg"
                              width="682"
                              height="1024"
                              srcset="
                                https://restaurantblackangus.com/wp-content/uploads/2025/01/LEntreboeuf_Nov24@ninacoriton-34.jpg           1333w,
                                https://restaurantblackangus.com/wp-content/uploads/2025/01/LEntreboeuf_Nov24@ninacoriton-34-200x300.jpg    200w,
                                https://restaurantblackangus.com/wp-content/uploads/2025/01/LEntreboeuf_Nov24@ninacoriton-34-682x1024.jpg   682w,
                                https://restaurantblackangus.com/wp-content/uploads/2025/01/LEntreboeuf_Nov24@ninacoriton-34-768x1152.jpg   768w,
                                https://restaurantblackangus.com/wp-content/uploads/2025/01/LEntreboeuf_Nov24@ninacoriton-34-1024x1536.jpg 1024w
                              "
                              sizes="(max-width: 1333px) 100vw, 1333px"
                              alt="L'entreboeuf Nov24@ninacoriton 34"
                              data-eio="l"
                          /></noscript>
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
                          <img
                            decoding="async"
                            className="breakdance-image-object lazyload"
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAqoAAAQAAQAAAAABqUZ1AAAAAnRSTlMAAHaTzTgAAABtSURBVHja7cExAQAAAMKg9U9tCU+gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4GlwPAAGjkrJcAAAAAElFTkSuQmCC"
                            width="682"
                            height="1024"
                            alt="L'entreboeuf Nov24@ninacoriton 37"
                            data-src="https://restaurantblackangus.com/wp-content/uploads/2025/01/LEntreboeuf_Nov24@ninacoriton-37-682x1024.jpg"
                            data-srcset="https://restaurantblackangus.com/wp-content/uploads/2025/01/LEntreboeuf_Nov24@ninacoriton-37.jpg 1333w, https://restaurantblackangus.com/wp-content/uploads/2025/01/LEntreboeuf_Nov24@ninacoriton-37-200x300.jpg 200w, https://restaurantblackangus.com/wp-content/uploads/2025/01/LEntreboeuf_Nov24@ninacoriton-37-682x1024.jpg 682w, https://restaurantblackangus.com/wp-content/uploads/2025/01/LEntreboeuf_Nov24@ninacoriton-37-768x1152.jpg 768w, https://restaurantblackangus.com/wp-content/uploads/2025/01/LEntreboeuf_Nov24@ninacoriton-37-1024x1536.jpg 1024w"
                            data-sizes="auto"
                            data-eio-rwidth="682"
                            data-eio-rheight="1024"
                          /><noscript
                            ><img
                              decoding="async"
                              className="breakdance-image-object"
                              src="wp-content/uploads/2025/01/LEntreboeuf_Nov24%40ninacoriton-37-682x1024.jpg"
                              width="682"
                              height="1024"
                              srcset="
                                https://restaurantblackangus.com/wp-content/uploads/2025/01/LEntreboeuf_Nov24@ninacoriton-37.jpg           1333w,
                                https://restaurantblackangus.com/wp-content/uploads/2025/01/LEntreboeuf_Nov24@ninacoriton-37-200x300.jpg    200w,
                                https://restaurantblackangus.com/wp-content/uploads/2025/01/LEntreboeuf_Nov24@ninacoriton-37-682x1024.jpg   682w,
                                https://restaurantblackangus.com/wp-content/uploads/2025/01/LEntreboeuf_Nov24@ninacoriton-37-768x1152.jpg   768w,
                                https://restaurantblackangus.com/wp-content/uploads/2025/01/LEntreboeuf_Nov24@ninacoriton-37-1024x1536.jpg 1024w
                              "
                              sizes="(max-width: 1333px) 100vw, 1333px"
                              alt="L'entreboeuf Nov24@ninacoriton 37"
                              data-eio="l"
                          /></noscript>
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
          <div
            className="bde-rich-text-769-314 bde-rich-text breakdance-rich-text-styles"
          >
            <p style={{textAlign: 'center'}}>
              {t.angusPara1Start}
              <strong>{t.angusPara1Bold}</strong>
              {t.angusPara1End}
            </p>
            <p style={{textAlign: 'center'}}>
              <strong>
                {t.angusPara2BoldStart}
                <span style={{color: '#ff0000'}}>{t.angusPara2Red}</span>
              </strong>
              {t.angusPara2BoldEnd}
            </p>
            <p style={{textAlign: 'center'}}>
              {t.angusPara3}
            </p>
            <p style={{textAlign: 'center'}}>
              {t.angusPara4}
            </p>
          </div>
        </div>
      </section>
    </div>
   
    </>
  );

}

