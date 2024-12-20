import gallery1_mob1x from '../img/mobile_gallery_first1x.png';
import gallery1_mob2x from '../img/mobile_gallery_first2x.png';
import gallery1_desk1x from '../img/desktop_gallery_first1x.png';
import gallery1_desk2x from '../img/desktop_gallery_first2x.png';

import gallery2_mob1x from '../img/mobile_gallery_second1x.png';
import gallery2_mob2x from '../img/mobile_gallery_second2x.png';
import gallery2_desk1x from '../img/desktop_gallery_second1x.png';
import gallery2_desk2x from '../img/desktop_gallery_second2x.png';

import gallery3_mob1x from '../img/mobile_gallery_third1x.png';
import gallery3_mob2x from '../img/mobile_gallery_third2x.png';
import gallery3_desk1x from '../img/desktop_gallery_third1x.png';
import gallery3_desk2x from '../img/desktop_gallery_third2x.png';

import gallery4_mob1x from '../img/mobile_gallery_fourth1x.png';
import gallery4_mob2x from '../img/mobile_gallery_fourth2x.png';
import gallery4_desk1x from '../img/desktop_gallery_fourth1x.png';
import gallery4_desk2x from '../img/desktop_gallery_fourth2x.png';

import gallery5_mob1x from '../img/mobile_gallery_fifth1x.png';
import gallery5_mob2x from '../img/mobile_gallery_fifth2x.png';
import gallery5_desk1x from '../img/desktop_gallery_fifth1x.png';
import gallery5_desk2x from '../img/desktop_gallery_fifth2x.png';

import gallery6_mob1x from '../img/mobile_gallery_sixth1x.png';
import gallery6_mob2x from '../img/mobile_gallery_sixth2x.png';
import gallery6_desk1x from '../img/desktop_gallery_sixth1x.png';
import gallery6_desk2x from '../img/desktop_gallery_sixth2x.png';

import about_desktop1x from '../img/desktop_about1x.png';
import logo1x from '../img/webp/logo-1x.png';
import logo2x from '../img/webp/logo-2x.png';

document.getElementById('about_img').innerHTML = `
  <picture>
    <source
      media="(min-width: 1200px)"
      srcset="${about_desktop1x} 1x,${about_desktop1x} 2x"
      type="image/png"
    />
    <img
      src="${about_desktop1x} "
      alt="img_screenshot"
      loading="lazy"
    />
  </picture>`;
export const galleryImages = {
  about_desktop1x,

  gallery1_mob1x,
  gallery1_mob2x,
  gallery1_desk1x,
  gallery1_desk2x,

  gallery2_mob1x,
  gallery2_mob2x,
  gallery2_desk1x,
  gallery2_desk2x,

  gallery3_mob1x,
  gallery3_mob2x,
  gallery3_desk1x,
  gallery3_desk2x,

  gallery4_mob1x,
  gallery4_mob2x,
  gallery4_desk1x,
  gallery4_desk2x,

  gallery5_mob1x,
  gallery5_mob2x,
  gallery5_desk1x,
  gallery5_desk2x,

  gallery6_mob1x,
  gallery6_mob2x,
  gallery6_desk1x,
  gallery6_desk2x,
};
