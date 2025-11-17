"use client";

import { useEffect } from "react";

export default function GalleryScripts() {
  useEffect(() => {
    // Initialize gallery and other interactive elements
    document.addEventListener("DOMContentLoaded", function () {
      if (!window.BreakdanceFrontend) {
        window.BreakdanceFrontend = {};
      }

      window.BreakdanceFrontend.data = {
        homeUrl: "https://restaurantblackangus.com",
        ajaxUrl: "https://restaurantblackangus.com/wp-admin/admin-ajax.php",
        elementsPluginUrl:
          "https://restaurantblackangus.com/wp-content/plugins/breakdance/subplugins/breakdance-elements/",
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

    // Initialize all Breakdance components
    const initializeBreakdanceComponents = () => {
      // Header builders
      if (typeof BreakdanceHeaderBuilder !== 'undefined') {
        new BreakdanceHeaderBuilder(".breakdance .bde-header-builder-130-100", "100", false);
        new BreakdanceHeaderBuilder(".breakdance .bde-header-builder-130-115", "115", false);
      }

      // Initialize all galleries with their swipers
      if (window.BreakdanceSwiper && window.BreakdanceSwiper()) {
        const galleryConfigs = [
          { id: "bde-gallery-769-110", selector: ".breakdance .bde-gallery-769-110", autoHeight: true, speed: 600 },
          { id: "bde-gallery-769-301", selector: ".breakdance .bde-gallery-769-301", autoHeight: false, speed: 600 },
          { id: "bde-gallery-769-115", selector: ".breakdance .bde-gallery-769-115", autoHeight: false, speed: 800 },
          { id: "bde-gallery-769-117", selector: ".breakdance .bde-gallery-769-117", autoHeight: false, speed: 1000, centerSlides: true },
          { id: "bde-gallery-769-290", selector: ".breakdance .bde-gallery-769-290", autoHeight: true, speed: 600 },
          { id: "bde-gallery-769-293", selector: ".breakdance .bde-gallery-769-293", autoHeight: false, speed: 600 },
          { id: "bde-gallery-769-295", selector: ".breakdance .bde-gallery-769-295", autoHeight: false, speed: 800 },
          { id: "bde-gallery-769-297", selector: ".breakdance .bde-gallery-769-297", autoHeight: false, speed: 1000, centerSlides: true },
        ];

        galleryConfigs.forEach(config => {
          window.BreakdanceSwiper().update({
            id: config.id,
            selector: config.selector,
            settings: {
              advanced: {
                slides_per_view: { breakpoint_base: 1 },
                one_per_view_at: "breakpoint_phone_landscape",
                slides_per_group: { breakpoint_base: 3 },
                swipe_on_scroll: false,
                auto_height: config.autoHeight,
                between_slides: { breakpoint_base: null },
              },
              infinite: "enabled",
              autoplay: "enabled",
              speed: { number: 1000, unit: "ms", style: "1000ms" },
              effect: "fade",
              ...(config.centerSlides && { center_slides: true }),
              autoplay_settings: {
                speed: { number: config.speed, unit: "ms", style: `${config.speed}ms` },
                ...(config.autoHeight && { stop_on_interaction: false, pause_on_hover: true }),
              },
            },
            paginationSettings: { type: "none" },
          });
        });
      }

      // Initialize lightboxes
      if (typeof BreakdanceLightbox !== 'undefined') {
        const lightboxSelectors = [
          ".breakdance .bde-gallery-769-110",
          ".breakdance .bde-gallery-769-301",
          ".breakdance .bde-gallery-769-115",
          ".breakdance .bde-gallery-769-117",
          ".breakdance .bde-gallery-769-290",
          ".breakdance .bde-gallery-769-293",
          ".breakdance .bde-gallery-769-295",
          ".breakdance .bde-gallery-769-297",
        ];

        const lightboxConfig = {
          thumbnails: true,
          animated_thumbnails: false,
          zoom: true,
          autoplay: false,
          background: "#000000",
          controls: "#999999",
          thumbnail: "#ffffff",
          thumbnail_active: "#01d2e8f0",
          autoplay_videos: false,
        };

        lightboxSelectors.forEach(selector => {
          new BreakdanceLightbox(selector, {
            itemSelector: ".ee-gallery-item",
            ...lightboxConfig,
          });
        });
      }

      // Initialize galleries
      if (typeof BreakdanceGallery !== 'undefined') {
        const galleryElements = [
          { selector: ".breakdance .bde-gallery-769-110", autoHeight: true, speed: 600 },
          { selector: ".breakdance .bde-gallery-769-301", autoHeight: false, speed: 600 },
          { selector: ".breakdance .bde-gallery-769-115", autoHeight: false, speed: 800 },
          { selector: ".breakdance .bde-gallery-769-117", autoHeight: false, speed: 1000, centerSlides: true },
          { selector: ".breakdance .bde-gallery-769-290", autoHeight: true, speed: 600 },
          { selector: ".breakdance .bde-gallery-769-293", autoHeight: false, speed: 600 },
          { selector: ".breakdance .bde-gallery-769-295", autoHeight: false, speed: 800 },
          { selector: ".breakdance .bde-gallery-769-297", autoHeight: false, speed: 1000, centerSlides: true },
        ];

        galleryElements.forEach(gallery => {
          new BreakdanceGallery(gallery.selector, {
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
                  auto_height: gallery.autoHeight,
                  between_slides: { breakpoint_base: null },
                },
                infinite: "enabled",
                autoplay: "enabled",
                speed: { number: 1000, unit: "ms", style: "1000ms" },
                effect: "fade",
                ...(gallery.centerSlides && { center_slides: true }),
                autoplay_settings: {
                  speed: { number: gallery.speed, unit: "ms", style: `${gallery.speed}ms` },
                  ...(gallery.autoHeight && { stop_on_interaction: false, pause_on_hover: true }),
                },
              },
              arrows: { disable: true },
              pagination: { type: "none" },
            },
            slider_images: {
              aspect_ratio: "0",
              width: { breakpoint_base: { number: 100, unit: "%", style: "100%" } },
              height: gallery.autoHeight
                ? { breakpoint_phone_portrait: { number: 525, unit: "px", style: "525px" } }
                : { breakpoint_base: { number: 525, unit: "px", style: "525px" } },
            },
            width: { breakpoint_base: { number: 100, unit: "%", style: "100%" } },
            mode: null,
          });
        });
      }

      // Initialize parallax
      if (typeof BreakdanceParallax !== 'undefined') {
        new BreakdanceParallax(".breakdance .bde-image-769-308", {
          enabled: true,
          scale: { end: null, start: null, middle: null },
        });
      }
    };

    // Run initialization when DOM is ready
    if (document.readyState === 'loading') {
      document.addEventListener("DOMContentLoaded", initializeBreakdanceComponents);
    } else {
      // DOM already loaded
      initializeBreakdanceComponents();
    }

    return () => {
      document.removeEventListener("DOMContentLoaded", initializeBreakdanceComponents);
    };
  }, []);

  return null; // This component doesn't render anything
}
