module.exports = {
  SAMPLE_DATA: {
    "_id": "https://acp.iu.edu/current-students/tuition.html",
    "first-contentful-paint": {
      "id": "first-contentful-paint",
      "title": "First Contentful Paint",
      "description": "First Contentful Paint marks the time at which the first text or image is painted. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/first-contentful-paint).",
      "score": {
        "$numberDouble": "0.96"
      },
      "scoreDisplayMode": "numeric",
      "numericValue": {
        "$numberDouble": "1963.007"
      },
      "displayValue": "2.0 s",
      "explanation": null,
      "errorMessage": null,
      "warnings": null,
      "details": null
    },
    "first-meaningful-paint": {
      "id": "first-meaningful-paint",
      "title": "First Meaningful Paint",
      "description": "First Meaningful Paint measures when the primary content of a page is visible. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/first-meaningful-paint).",
      "score": {
        "$numberDouble": "0.63"
      },
      "scoreDisplayMode": "numeric",
      "numericValue": {
        "$numberDouble": "3481.926000000001"
      },
      "displayValue": "3.5 s",
      "explanation": null,
      "errorMessage": null,
      "warnings": null,
      "details": null
    },
    "speed-index": {
      "id": "speed-index",
      "title": "Speed Index",
      "description": "Speed Index shows how quickly the contents of a page are visibly populated. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/speed-index).",
      "score": {
        "$numberDouble": "0.96"
      },
      "scoreDisplayMode": "numeric",
      "numericValue": {
        "$numberDouble": "2722.000137519726"
      },
      "displayValue": "2.7 s",
      "explanation": null,
      "errorMessage": null,
      "warnings": null,
      "details": null
    },
    "first-cpu-idle": {
      "id": "first-cpu-idle",
      "title": "First CPU Idle",
      "description": "First CPU Idle marks the first time at which the page's main thread is quiet enough to handle input. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/first-interactive).",
      "score": {
        "$numberDouble": "0.7"
      },
      "scoreDisplayMode": "numeric",
      "numericValue": {
        "$numberDouble": "5056.317"
      },
      "displayValue": "5.1 s",
      "explanation": null,
      "errorMessage": null,
      "warnings": null,
      "details": null
    },
    "dom-size": {
      "id": "dom-size",
      "title": "Avoids an excessive DOM size",
      "description": "Browser engineers recommend pages contain fewer than ~1,500 DOM elements. The sweet spot is a tree depth < 32 elements and fewer than 60 children/parent element. A large DOM can increase memory usage, cause longer [style calculations](https://developers.google.com/web/fundamentals/performance/rendering/reduce-the-scope-and-complexity-of-style-calculations), and produce costly [layout reflows](https://developers.google.com/speed/articles/reflow). [Learn more](https://developers.google.com/web/tools/lighthouse/audits/dom-size).",
      "score": {
        "$numberInt": "1"
      },
      "scoreDisplayMode": "numeric",
      "numericValue": {
        "$numberInt": "370"
      },
      "displayValue": "370 elements",
      "explanation": null,
      "errorMessage": null,
      "warnings": null,
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "statistic",
            "itemType": "text",
            "text": "Statistic"
          },
          {
            "key": "element",
            "itemType": "code",
            "text": "Element"
          },
          {
            "key": "value",
            "itemType": "numeric",
            "text": "Value"
          }
        ],
        "items": [
          {
            "statistic": "Total DOM Elements",
            "element": "",
            "value": "370"
          },
          {
            "statistic": "Maximum DOM Depth",
            "element": {
              "type": "code",
              "value": "<span class=\"gscb_a\" id=\"gs_cb50\" aria-hidden=\"true\">"
            },
            "value": "19"
          },
          {
            "statistic": "Maximum Child Elements",
            "element": {
              "type": "code",
              "value": "<p>"
            },
            "value": "25"
          }
        ],
        "summary": null
      }
    },
    "estimated-input-latency": {
      "id": "estimated-input-latency",
      "title": "Estimated Input Latency",
      "description": "Estimated Input Latency is an estimate of how long your app takes to respond to user input, in milliseconds, during the busiest 5s window of page load. If your latency is higher than 50 ms, users may perceive your app as laggy. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/estimated-input-latency).",
      "score": {
        "$numberInt": "1"
      },
      "scoreDisplayMode": "numeric",
      "numericValue": {
        "$numberDouble": "12.8"
      },
      "displayValue": "10 ms",
      "explanation": null,
      "errorMessage": null,
      "warnings": null,
      "details": null
    },
    "network-payload": {
      "id": "total-byte-weight",
      "title": "Avoids enormous network payloads",
      "description": "Large network payloads cost users real money and are highly correlated with long load times. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/network-payloads).",
      "score": {
        "$numberInt": "1"
      },
      "scoreDisplayMode": "numeric",
      "numericValue": {
        "$numberInt": "624216"
      },
      "displayValue": "Total size was 610 KB",
      "explanation": null,
      "errorMessage": null,
      "warnings": null,
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "url",
            "itemType": "url",
            "text": "URL"
          },
          {
            "key": "totalBytes",
            "itemType": "bytes",
            "text": "Size"
          }
        ],
        "items": [
          {
            "url": "https://acp.iu.edu/images/banners/current-students/campus-768x512.jpg",
            "totalBytes": {
              "$numberInt": "112887"
            }
          },
          {
            "url": "https://www.google.com/cse/static/element/e1b7867e793369c8/cse_element__en.js?usqp=CAI%3D",
            "totalBytes": {
              "$numberInt": "80132"
            }
          },
          {
            "url": "https://cse.google.com/adsense/search/async-ads.js",
            "totalBytes": {
              "$numberInt": "59312"
            }
          },
          {
            "url": "https://fonts.iu.edu/fonts/benton-sans-cond-regular.woff",
            "totalBytes": {
              "$numberInt": "44973"
            }
          },
          {
            "url": "https://fonts.iu.edu/fonts/benton-sans-cond-bold.woff",
            "totalBytes": {
              "$numberInt": "44218"
            }
          },
          {
            "url": "https://fonts.iu.edu/fonts/benton-sans-bold.woff",
            "totalBytes": {
              "$numberInt": "41131"
            }
          },
          {
            "url": "https://fonts.iu.edu/fonts/benton-sans-regular.woff",
            "totalBytes": {
              "$numberInt": "40590"
            }
          },
          {
            "url": "https://fonts.iu.edu/fonts/georgia-pro-bold-italic.woff",
            "totalBytes": {
              "$numberInt": "36041"
            }
          },
          {
            "url": "https://vpuedev.indiana.edu/common/js/1.x/jquery.min.js",
            "totalBytes": {
              "$numberInt": "30711"
            }
          },
          {
            "url": "https://assets.iu.edu/web/3.2.x/css/iu-framework.min.css?2019-05-02",
            "totalBytes": {
              "$numberInt": "26239"
            }
          }
        ],
        "summary": null
      }
    },
    "legible-font-sizes": {
      "id": "font-size",
      "title": "Document uses legible font sizes",
      "description": "Font sizes less than 12px are too small to be legible and require mobile visitors to “pinch to zoom” in order to read. Strive to have >60% of page text ≥12px. [Learn more](https://developers.google.com/web/tools/lighthouse/audits/font-sizes).",
      "score": {
        "$numberInt": "1"
      },
      "scoreDisplayMode": "binary",
      "numericValue": null,
      "displayValue": "100% legible text",
      "explanation": null,
      "errorMessage": null,
      "warnings": null,
      "details": {
        "type": "table",
        "headings": [
          {
            "key": "source",
            "itemType": "url",
            "text": "Source"
          },
          {
            "key": "selector",
            "itemType": "code",
            "text": "Selector"
          },
          {
            "key": "coverage",
            "itemType": "text",
            "text": "% of Page Text"
          },
          {
            "key": "fontSize",
            "itemType": "text",
            "text": "Font Size"
          }
        ],
        "items": [
          {
            "source": "Legible text",
            "selector": "",
            "coverage": "100.00%",
            "fontSize": "≥ 12px"
          }
        ],
        "summary": null
      }
    },
    "performance-info": {
      "title": "Performance",
      "auditRefs": [
        {
          "id": "first-contentful-paint",
          "weight": {
            "$numberInt": "3"
          },
          "group": "metrics"
        },
        {
          "id": "first-meaningful-paint",
          "weight": {
            "$numberInt": "1"
          },
          "group": "metrics"
        },
        {
          "id": "speed-index",
          "weight": {
            "$numberInt": "4"
          },
          "group": "metrics"
        },
        {
          "id": "interactive",
          "weight": {
            "$numberInt": "5"
          },
          "group": "metrics"
        },
        {
          "id": "first-cpu-idle",
          "weight": {
            "$numberInt": "2"
          },
          "group": "metrics"
        },
        {
          "id": "max-potential-fid",
          "weight": {
            "$numberInt": "0"
          },
          "group": "metrics"
        },
        {
          "id": "estimated-input-latency",
          "weight": {
            "$numberInt": "0"
          }
        },
        {
          "id": "render-blocking-resources",
          "weight": {
            "$numberInt": "0"
          },
          "group": "load-opportunities"
        },
        {
          "id": "uses-responsive-images",
          "weight": {
            "$numberInt": "0"
          },
          "group": "load-opportunities"
        },
        {
          "id": "offscreen-images",
          "weight": {
            "$numberInt": "0"
          },
          "group": "load-opportunities"
        },
        {
          "id": "unminified-css",
          "weight": {
            "$numberInt": "0"
          },
          "group": "load-opportunities"
        },
        {
          "id": "unminified-javascript",
          "weight": {
            "$numberInt": "0"
          },
          "group": "load-opportunities"
        },
        {
          "id": "unused-css-rules",
          "weight": {
            "$numberInt": "0"
          },
          "group": "load-opportunities"
        },
        {
          "id": "uses-optimized-images",
          "weight": {
            "$numberInt": "0"
          },
          "group": "load-opportunities"
        },
        {
          "id": "uses-webp-images",
          "weight": {
            "$numberInt": "0"
          },
          "group": "load-opportunities"
        },
        {
          "id": "uses-text-compression",
          "weight": {
            "$numberInt": "0"
          },
          "group": "load-opportunities"
        },
        {
          "id": "uses-rel-preconnect",
          "weight": {
            "$numberInt": "0"
          },
          "group": "load-opportunities"
        },
        {
          "id": "time-to-first-byte",
          "weight": {
            "$numberInt": "0"
          },
          "group": "load-opportunities"
        },
        {
          "id": "redirects",
          "weight": {
            "$numberInt": "0"
          },
          "group": "load-opportunities"
        },
        {
          "id": "uses-rel-preload",
          "weight": {
            "$numberInt": "0"
          },
          "group": "load-opportunities"
        },
        {
          "id": "efficient-animated-content",
          "weight": {
            "$numberInt": "0"
          },
          "group": "load-opportunities"
        },
        {
          "id": "total-byte-weight",
          "weight": {
            "$numberInt": "0"
          },
          "group": "diagnostics"
        },
        {
          "id": "uses-long-cache-ttl",
          "weight": {
            "$numberInt": "0"
          },
          "group": "diagnostics"
        },
        {
          "id": "dom-size",
          "weight": {
            "$numberInt": "0"
          },
          "group": "diagnostics"
        },
        {
          "id": "critical-request-chains",
          "weight": {
            "$numberInt": "0"
          },
          "group": "diagnostics"
        },
        {
          "id": "user-timings",
          "weight": {
            "$numberInt": "0"
          },
          "group": "diagnostics"
        },
        {
          "id": "bootup-time",
          "weight": {
            "$numberInt": "0"
          },
          "group": "diagnostics"
        },
        {
          "id": "mainthread-work-breakdown",
          "weight": {
            "$numberInt": "0"
          },
          "group": "diagnostics"
        },
        {
          "id": "font-display",
          "weight": {
            "$numberInt": "0"
          },
          "group": "diagnostics"
        },
        {
          "id": "performance-budget",
          "weight": {
            "$numberInt": "0"
          },
          "group": "budgets"
        },
        {
          "id": "resource-summary",
          "weight": {
            "$numberInt": "0"
          },
          "group": "diagnostics"
        },
        {
          "id": "network-requests",
          "weight": {
            "$numberInt": "0"
          }
        },
        {
          "id": "network-rtt",
          "weight": {
            "$numberInt": "0"
          }
        },
        {
          "id": "network-server-latency",
          "weight": {
            "$numberInt": "0"
          }
        },
        {
          "id": "main-thread-tasks",
          "weight": {
            "$numberInt": "0"
          }
        },
        {
          "id": "diagnostics",
          "weight": {
            "$numberInt": "0"
          }
        },
        {
          "id": "metrics",
          "weight": {
            "$numberInt": "0"
          }
        },
        {
          "id": "screenshot-thumbnails",
          "weight": {
            "$numberInt": "0"
          }
        },
        {
          "id": "final-screenshot",
          "weight": {
            "$numberInt": "0"
          }
        }
      ],
      "id": "performance",
      "score": {
        "$numberDouble": "0.83"
      }
    },
    "accessibility-info": {
      "title": "Accessibility",
      "description": "These checks highlight opportunities to [improve the accessibility of your web app](https://developers.google.com/web/fundamentals/accessibility). Only a subset of accessibility issues can be automatically detected so manual testing is also encouraged.",
      "manualDescription": "These items address areas which an automated testing tool cannot cover. Learn more in our guide on [conducting an accessibility review](https://developers.google.com/web/fundamentals/accessibility/how-to-review).",
      "auditRefs": [
        {
          "id": "accesskeys",
          "weight": {
            "$numberInt": "0"
          },
          "group": "a11y-navigation"
        },
        {
          "id": "aria-allowed-attr",
          "weight": {
            "$numberInt": "10"
          },
          "group": "a11y-aria"
        },
        {
          "id": "aria-required-attr",
          "weight": {
            "$numberInt": "10"
          },
          "group": "a11y-aria"
        },
        {
          "id": "aria-required-children",
          "weight": {
            "$numberInt": "10"
          },
          "group": "a11y-aria"
        },
        {
          "id": "aria-required-parent",
          "weight": {
            "$numberInt": "10"
          },
          "group": "a11y-aria"
        },
        {
          "id": "aria-roles",
          "weight": {
            "$numberInt": "10"
          },
          "group": "a11y-aria"
        },
        {
          "id": "aria-valid-attr-value",
          "weight": {
            "$numberInt": "10"
          },
          "group": "a11y-aria"
        },
        {
          "id": "aria-valid-attr",
          "weight": {
            "$numberInt": "10"
          },
          "group": "a11y-aria"
        },
        {
          "id": "audio-caption",
          "weight": {
            "$numberInt": "0"
          },
          "group": "a11y-audio-video"
        },
        {
          "id": "button-name",
          "weight": {
            "$numberInt": "10"
          },
          "group": "a11y-names-labels"
        },
        {
          "id": "bypass",
          "weight": {
            "$numberInt": "3"
          },
          "group": "a11y-navigation"
        },
        {
          "id": "color-contrast",
          "weight": {
            "$numberInt": "3"
          },
          "group": "a11y-color-contrast"
        },
        {
          "id": "definition-list",
          "weight": {
            "$numberInt": "0"
          },
          "group": "a11y-tables-lists"
        },
        {
          "id": "dlitem",
          "weight": {
            "$numberInt": "0"
          },
          "group": "a11y-tables-lists"
        },
        {
          "id": "document-title",
          "weight": {
            "$numberInt": "3"
          },
          "group": "a11y-names-labels"
        },
        {
          "id": "duplicate-id",
          "weight": {
            "$numberInt": "1"
          },
          "group": "a11y-best-practices"
        },
        {
          "id": "frame-title",
          "weight": {
            "$numberInt": "0"
          },
          "group": "a11y-names-labels"
        },
        {
          "id": "html-has-lang",
          "weight": {
            "$numberInt": "3"
          },
          "group": "a11y-language"
        },
        {
          "id": "html-lang-valid",
          "weight": {
            "$numberInt": "3"
          },
          "group": "a11y-language"
        },
        {
          "id": "image-alt",
          "weight": {
            "$numberInt": "10"
          },
          "group": "a11y-names-labels"
        },
        {
          "id": "input-image-alt",
          "weight": {
            "$numberInt": "0"
          },
          "group": "a11y-names-labels"
        },
        {
          "id": "label",
          "weight": {
            "$numberInt": "0"
          },
          "group": "a11y-names-labels"
        },
        {
          "id": "layout-table",
          "weight": {
            "$numberInt": "0"
          },
          "group": "a11y-tables-lists"
        },
        {
          "id": "link-name",
          "weight": {
            "$numberInt": "3"
          },
          "group": "a11y-names-labels"
        },
        {
          "id": "list",
          "weight": {
            "$numberInt": "3"
          },
          "group": "a11y-tables-lists"
        },
        {
          "id": "listitem",
          "weight": {
            "$numberInt": "3"
          },
          "group": "a11y-tables-lists"
        },
        {
          "id": "meta-refresh",
          "weight": {
            "$numberInt": "0"
          },
          "group": "a11y-best-practices"
        },
        {
          "id": "meta-viewport",
          "weight": {
            "$numberInt": "10"
          },
          "group": "a11y-best-practices"
        },
        {
          "id": "object-alt",
          "weight": {
            "$numberInt": "0"
          },
          "group": "a11y-names-labels"
        },
        {
          "id": "tabindex",
          "weight": {
            "$numberInt": "0"
          },
          "group": "a11y-navigation"
        },
        {
          "id": "td-headers-attr",
          "weight": {
            "$numberInt": "3"
          },
          "group": "a11y-tables-lists"
        },
        {
          "id": "th-has-data-cells",
          "weight": {
            "$numberInt": "3"
          },
          "group": "a11y-tables-lists"
        },
        {
          "id": "valid-lang",
          "weight": {
            "$numberInt": "0"
          },
          "group": "a11y-language"
        },
        {
          "id": "video-caption",
          "weight": {
            "$numberInt": "0"
          },
          "group": "a11y-audio-video"
        },
        {
          "id": "video-description",
          "weight": {
            "$numberInt": "0"
          },
          "group": "a11y-audio-video"
        },
        {
          "id": "logical-tab-order",
          "weight": {
            "$numberInt": "0"
          }
        },
        {
          "id": "focusable-controls",
          "weight": {
            "$numberInt": "0"
          }
        },
        {
          "id": "interactive-element-affordance",
          "weight": {
            "$numberInt": "0"
          }
        },
        {
          "id": "managed-focus",
          "weight": {
            "$numberInt": "0"
          }
        },
        {
          "id": "focus-traps",
          "weight": {
            "$numberInt": "0"
          }
        },
        {
          "id": "custom-controls-labels",
          "weight": {
            "$numberInt": "0"
          }
        },
        {
          "id": "custom-controls-roles",
          "weight": {
            "$numberInt": "0"
          }
        },
        {
          "id": "visual-order-follows-dom",
          "weight": {
            "$numberInt": "0"
          }
        },
        {
          "id": "offscreen-content-hidden",
          "weight": {
            "$numberInt": "0"
          }
        },
        {
          "id": "heading-levels",
          "weight": {
            "$numberInt": "0"
          }
        },
        {
          "id": "use-landmarks",
          "weight": {
            "$numberInt": "0"
          }
        }
      ],
      "id": "accessibility",
      "score": {
        "$numberInt": "1"
      }
    },
    "best-practices-info": {
      "title": "Best Practices",
      "auditRefs": [
        {
          "id": "appcache-manifest",
          "weight": {
            "$numberInt": "1"
          }
        },
        {
          "id": "is-on-https",
          "weight": {
            "$numberInt": "1"
          }
        },
        {
          "id": "uses-http2",
          "weight": {
            "$numberInt": "1"
          }
        },
        {
          "id": "uses-passive-event-listeners",
          "weight": {
            "$numberInt": "1"
          }
        },
        {
          "id": "no-document-write",
          "weight": {
            "$numberInt": "1"
          }
        },
        {
          "id": "external-anchors-use-rel-noopener",
          "weight": {
            "$numberInt": "1"
          }
        },
        {
          "id": "geolocation-on-start",
          "weight": {
            "$numberInt": "1"
          }
        },
        {
          "id": "doctype",
          "weight": {
            "$numberInt": "1"
          }
        },
        {
          "id": "no-vulnerable-libraries",
          "weight": {
            "$numberInt": "1"
          }
        },
        {
          "id": "js-libraries",
          "weight": {
            "$numberInt": "0"
          }
        },
        {
          "id": "notification-on-start",
          "weight": {
            "$numberInt": "1"
          }
        },
        {
          "id": "deprecations",
          "weight": {
            "$numberInt": "1"
          }
        },
        {
          "id": "password-inputs-can-be-pasted-into",
          "weight": {
            "$numberInt": "1"
          }
        },
        {
          "id": "errors-in-console",
          "weight": {
            "$numberInt": "1"
          }
        },
        {
          "id": "image-aspect-ratio",
          "weight": {
            "$numberInt": "1"
          }
        }
      ],
      "id": "best-practices",
      "score": {
        "$numberDouble": "0.86"
      }
    },
    "seo-info": {
      "title": "SEO",
      "description": "These checks ensure that your page is optimized for search engine results ranking. There are additional factors Lighthouse does not check that may affect your search ranking. [Learn more](https://support.google.com/webmasters/answer/35769).",
      "manualDescription": "Run these additional validators on your site to check additional SEO best practices.",
      "auditRefs": [
        {
          "id": "viewport",
          "weight": {
            "$numberInt": "1"
          },
          "group": "seo-mobile"
        },
        {
          "id": "document-title",
          "weight": {
            "$numberInt": "1"
          },
          "group": "seo-content"
        },
        {
          "id": "meta-description",
          "weight": {
            "$numberInt": "1"
          },
          "group": "seo-content"
        },
        {
          "id": "http-status-code",
          "weight": {
            "$numberInt": "1"
          },
          "group": "seo-crawl"
        },
        {
          "id": "link-text",
          "weight": {
            "$numberInt": "1"
          },
          "group": "seo-content"
        },
        {
          "id": "is-crawlable",
          "weight": {
            "$numberInt": "1"
          },
          "group": "seo-crawl"
        },
        {
          "id": "robots-txt",
          "weight": {
            "$numberInt": "1"
          },
          "group": "seo-crawl"
        },
        {
          "id": "image-alt",
          "weight": {
            "$numberInt": "1"
          },
          "group": "seo-content"
        },
        {
          "id": "hreflang",
          "weight": {
            "$numberInt": "1"
          },
          "group": "seo-content"
        },
        {
          "id": "canonical",
          "weight": {
            "$numberInt": "1"
          },
          "group": "seo-content"
        },
        {
          "id": "font-size",
          "weight": {
            "$numberInt": "1"
          },
          "group": "seo-mobile"
        },
        {
          "id": "plugins",
          "weight": {
            "$numberInt": "1"
          },
          "group": "seo-content"
        },
        {
          "id": "tap-targets",
          "weight": {
            "$numberInt": "1"
          },
          "group": "seo-mobile"
        },
        {
          "id": "structured-data",
          "weight": {
            "$numberInt": "0"
          }
        }
      ],
      "id": "seo",
      "score": {
        "$numberInt": "1"
      }
    },
    "pwa-info": {
      "title": "Progressive Web App",
      "description": "These checks validate the aspects of a Progressive Web App. [Learn more](https://developers.google.com/web/progressive-web-apps/checklist).",
      "manualDescription": "These checks are required by the baseline [PWA Checklist](https://developers.google.com/web/progressive-web-apps/checklist) but are not automatically checked by Lighthouse. They do not affect your score but it's important that you verify them manually.",
      "auditRefs": [
        {
          "id": "load-fast-enough-for-pwa",
          "weight": {
            "$numberInt": "7"
          },
          "group": "pwa-fast-reliable"
        },
        {
          "id": "works-offline",
          "weight": {
            "$numberInt": "5"
          },
          "group": "pwa-fast-reliable"
        },
        {
          "id": "offline-start-url",
          "weight": {
            "$numberInt": "1"
          },
          "group": "pwa-fast-reliable"
        },
        {
          "id": "is-on-https",
          "weight": {
            "$numberInt": "2"
          },
          "group": "pwa-installable"
        },
        {
          "id": "service-worker",
          "weight": {
            "$numberInt": "1"
          },
          "group": "pwa-installable"
        },
        {
          "id": "installable-manifest",
          "weight": {
            "$numberInt": "2"
          },
          "group": "pwa-installable"
        },
        {
          "id": "redirects-http",
          "weight": {
            "$numberInt": "2"
          },
          "group": "pwa-optimized"
        },
        {
          "id": "splash-screen",
          "weight": {
            "$numberInt": "1"
          },
          "group": "pwa-optimized"
        },
        {
          "id": "themed-omnibox",
          "weight": {
            "$numberInt": "1"
          },
          "group": "pwa-optimized"
        },
        {
          "id": "content-width",
          "weight": {
            "$numberInt": "1"
          },
          "group": "pwa-optimized"
        },
        {
          "id": "viewport",
          "weight": {
            "$numberInt": "2"
          },
          "group": "pwa-optimized"
        },
        {
          "id": "without-javascript",
          "weight": {
            "$numberInt": "1"
          },
          "group": "pwa-optimized"
        },
        {
          "id": "apple-touch-icon",
          "weight": {
            "$numberInt": "1"
          },
          "group": "pwa-optimized"
        },
        {
          "id": "pwa-cross-browser",
          "weight": {
            "$numberInt": "0"
          }
        },
        {
          "id": "pwa-page-transitions",
          "weight": {
            "$numberInt": "0"
          }
        },
        {
          "id": "pwa-each-page-has-url",
          "weight": {
            "$numberInt": "0"
          }
        }
      ],
      "id": "pwa",
      "score": {
        "$numberDouble": "0.56"
      }
    }
  }
}