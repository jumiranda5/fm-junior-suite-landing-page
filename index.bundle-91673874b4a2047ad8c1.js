/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/assets/images/logo.svg
const logo_namespaceObject = __webpack_require__.p + "images/logo-4dfe9487ba72fe85d2bf.svg";
;// CONCATENATED MODULE: ./src/assets/images/pattern-curved-line-1.svg
const pattern_curved_line_1_namespaceObject = __webpack_require__.p + "images/pattern-curved-line-1-737baf08aa1b342f22c3.svg";
;// CONCATENATED MODULE: ./src/assets/images/pattern-curved-line-2.svg
const pattern_curved_line_2_namespaceObject = __webpack_require__.p + "images/pattern-curved-line-2-b3e7a600581015c68140.svg";
;// CONCATENATED MODULE: ./src/assets/images/image-hero-landscape.webp
const image_hero_landscape_namespaceObject = __webpack_require__.p + "images/image-hero-landscape-52fe9fd98c76d8a58321.webp";
;// CONCATENATED MODULE: ./src/assets/images/image-hero-landscape@2x.webp
const image_hero_landscape_2x_namespaceObject = __webpack_require__.p + "images/image-hero-landscape@2x-123203c8325e24668511.webp";
;// CONCATENATED MODULE: ./src/assets/images/image-hero-portrait.webp
const image_hero_portrait_namespaceObject = __webpack_require__.p + "images/image-hero-portrait-0af20950e50dc1b976ab.webp";
;// CONCATENATED MODULE: ./src/assets/images/image-hero-portrait@2x.webp
const image_hero_portrait_2x_namespaceObject = __webpack_require__.p + "images/image-hero-portrait@2x-0e7d260fe971a9504197.webp";
;// CONCATENATED MODULE: ./src/assets/images/image-jeremy-small.webp
const image_jeremy_small_namespaceObject = __webpack_require__.p + "images/image-jeremy-small-bbe5ee649a6d9bc10301.webp";
;// CONCATENATED MODULE: ./src/assets/images/image-jeremy-small@2x.webp
const image_jeremy_small_2x_namespaceObject = __webpack_require__.p + "images/image-jeremy-small@2x-b8d5f6c9d04e53a7684f.webp";
;// CONCATENATED MODULE: ./src/assets/images/image-jeremy-large.webp
const image_jeremy_large_namespaceObject = __webpack_require__.p + "images/image-jeremy-large-90583e4bc319c24cc027.webp";
;// CONCATENATED MODULE: ./src/assets/images/image-jeremy-large@2x.webp
const image_jeremy_large_2x_namespaceObject = __webpack_require__.p + "images/image-jeremy-large@2x-5afcfaea6f7aae47fc0c.webp";
;// CONCATENATED MODULE: ./src/assets/images/pattern-blur.svg
const pattern_blur_namespaceObject = __webpack_require__.p + "images/pattern-blur-b8e22fd07a55b6f74a4c.svg";
;// CONCATENATED MODULE: ./src/main.js
'use-strict';



// Images




// Hero images





// Testimony images






// logo
document.getElementById('header-logo').src = logo_namespaceObject;
document.getElementById('footer-logo').src = logo_namespaceObject;

// patterns
document.getElementById('curved-line-1').src = pattern_curved_line_1_namespaceObject;
document.getElementById('curved-line-2').src = pattern_curved_line_2_namespaceObject;

// Product
document.getElementById('phone-image').src = image_hero_landscape_namespaceObject;
document.getElementById('phone-image').srcset = `${image_hero_landscape_namespaceObject} 1x, ${image_hero_landscape_2x_namespaceObject} 2x`;
document.getElementById('phone-image-portrait').srcset = `${image_hero_portrait_namespaceObject} 1x, ${image_hero_portrait_2x_namespaceObject} 2x`;

// Testimonial
document.getElementById('author-image').src = image_jeremy_small_namespaceObject;
document.getElementById('author-image').srcset = `${image_jeremy_small_namespaceObject} 1x, ${image_jeremy_small_2x_namespaceObject} 2x`;
document.getElementById('author-image-large').srcset = `${image_jeremy_large_namespaceObject} 1x, ${image_jeremy_large_2x_namespaceObject} 2x`;
document.getElementById('blur').src = pattern_blur_namespaceObject;
/******/ })()
;
//# sourceMappingURL=index.bundle-91673874b4a2047ad8c1.js.map