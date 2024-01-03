'use-strict';

import './styles/index.scss';

// Images
import Logo from './assets/images/logo.svg';
import CurvedLine1 from './assets/images/pattern-curved-line-1.svg';
import CurvedLine2 from './assets/images/pattern-curved-line-2.svg';

// Hero images
import HeroLandscape from './assets/images/image-hero-landscape.webp';
import HeroLandscape2x from './assets/images/image-hero-landscape@2x.webp';
import HeroPortrait from './assets/images/image-hero-portrait.webp';
import HeroPortrait2x from './assets/images/image-hero-portrait@2x.webp';

// Testimony images
import AuthorSm from './assets/images/image-jeremy-small.webp';
import AuthorSm2x from './assets/images/image-jeremy-small@2x.webp';
import AuthorLg from './assets/images/image-jeremy-large.webp';
import AuthorLg2x from './assets/images/image-jeremy-large@2x.webp';
import Blur from './assets/images/pattern-blur.svg';

// logo
document.getElementById('header-logo').src = Logo;
document.getElementById('footer-logo').src = Logo;

// patterns
document.getElementById('curved-line-1').src = CurvedLine1;
document.getElementById('curved-line-2').src = CurvedLine2;

// Product
document.getElementById('phone-image').src = HeroLandscape;
document.getElementById('phone-image').srcset = `${HeroLandscape} 1x, ${HeroLandscape2x} 2x`;
document.getElementById('phone-image-portrait').srcset = `${HeroPortrait} 1x, ${HeroPortrait2x} 2x`;

// Testimonial
document.getElementById('author-image').src = AuthorSm;
document.getElementById('author-image').srcset = `${AuthorSm} 1x, ${AuthorSm2x} 2x`;
document.getElementById('author-image-large').srcset = `${AuthorLg} 1x, ${AuthorLg2x} 2x`;
document.getElementById('blur').src = Blur;
