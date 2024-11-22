/* empty css                      */import{S as n,N as g,a as c,K as m}from"./assets/vendor-kvstCFTy.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const d=document.querySelectorAll('a[href*="#"]');for(let l of d)l.addEventListener("click",function(o){document.body.classList.remove("modal-open"),o.preventDefault();const t=l.getAttribute("href").substr(1),i=document.getElementById(t);i&&i.scrollIntoView({behavior:"smooth",block:"start"})});const y="/Nuts-BoltsSortPuzzle/assets/desktop_gallery_first1x-bgZTGbw6.png",u="/Nuts-BoltsSortPuzzle/assets/desktop_gallery_first2x-DbMCekZi.png",p="/Nuts-BoltsSortPuzzle/assets/desktop_gallery_second1x-BynVALuN.png",b="/Nuts-BoltsSortPuzzle/assets/desktop_gallery_second2x-Bo9DCtjx.png",x="/Nuts-BoltsSortPuzzle/assets/desktop_gallery_third1x-rcpXuc6c.png",_="/Nuts-BoltsSortPuzzle/assets/desktop_gallery_third2x-DW7JT6o8.png",e={gallery1_desk1x:y,gallery1_desk2x:u,gallery2_desk1x:p,gallery2_desk2x:b,gallery3_desk1x:x,gallery3_desk2x:_},k=document.querySelector(".gallery-list");document.querySelector(".reviews-icon-prev");document.querySelector(".reviews-icon-next");async function f(){const l=[{imgMob1:e.gallery1_mob1x,imgMob2:e.gallery1_mob2x,imgDesk1:e.gallery1_desk1x,imgDesk2:e.gallery1_desk2x},{imgMob1:e.gallery2_mob1x,imgMob2:e.gallery2_mob2x,imgDesk1:e.gallery2_desk1x,imgDesk2:e.gallery2_desk2x},{imgMob1:e.gallery3_mob1x,imgMob2:e.gallery3_mob2x,imgDesk1:e.gallery3_desk1x,imgDesk2:e.gallery3_desk2x},{imgMob1:e.gallery4_mob1x,imgMob2:e.gallery4_mob2x,imgDesk1:e.gallery4_desk1x,imgDesk2:e.gallery4_desk2x},{imgMob1:e.gallery5_mob1x,imgMob2:e.gallery5_mob2x,imgDesk1:e.gallery5_desk1x,imgDesk2:e.gallery5_desk2x},{imgMob1:e.gallery6_mob1x,imgMob2:e.gallery6_mob2x,imgDesk1:e.gallery6_desk1x,imgDesk2:e.gallery6_desk2x},{imgMob1:e.gallery7_mob1x,imgMob2:e.gallery7_mob2x,imgDesk1:e.gallery7_desk1x,imgDesk2:e.gallery7_desk2x}];D(l)}function D(l){const o=l.map(t=>`<li class="gallery-item swiper-slide">
      <picture >
        <source
          media="(min-width: 768px)"
          srcset="${t.imgDesk1} 1x,${t.imgDesk2} 2x"
          type="image/png"
        />

        <source
          media="(max-width: 767px)"
          srcset="${t.imgMob1} 1x,${t.imgMob2} 2x"
          type="image/png"
        />
        <img
          src="${t.imgMob1} "
          alt="img_${t.imgMob1}"
          class="galleryImg"
          loading="lazy"
        />
      </picture>
      </li>`).join("");k.insertAdjacentHTML("beforeend",o)}document.addEventListener("DOMContentLoaded",()=>{f(),new n(".gallery-swiper",{modules:[g,c,m],speed:600,navigation:{nextEl:".gallery-swiper-button-next",prevEl:".gallery-swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},slidesPerView:1,spaceBetween:16,breakpoints:{768:{slidesPerView:3,spaceBetween:16}}})});
//# sourceMappingURL=index.js.map
