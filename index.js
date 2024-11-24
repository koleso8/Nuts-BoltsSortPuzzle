/* empty css                      */import{S as g,N as c,a as u,K as d}from"./assets/vendor-kvstCFTy.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(l){if(l.ep)return;l.ep=!0;const r=s(l);fetch(l.href,r)}})();(()=>{const t={openMenuBtn:document.querySelector(".js-open-menu"),closeMenuBtn:document.querySelector(".js-close-menu"),menuOverlay:document.querySelector("[data-modal]")},o=()=>{t.menuOverlay.classList.toggle("is-hidden")};t.openMenuBtn.addEventListener("click",o),t.closeMenuBtn.addEventListener("click",o),t.menuOverlay.addEventListener("click",s=>{s.target===t.menuOverlay&&o()})})();const m=document.querySelectorAll('a[href*="#"]');for(let t of m)t.addEventListener("click",function(o){document.body.classList.remove("modal-open"),o.preventDefault();const s=t.getAttribute("href").substr(1),n=document.getElementById(s);n&&n.scrollIntoView({behavior:"smooth",block:"start"})});const y=document.querySelector(".reviews-list");document.querySelector(".reviews-icon-prev");document.querySelector(".reviews-icon-next");async function p(){_([{author:"Scarlett N.",review:"The special events keep the game fresh and exciting. Can`t wait for more!"},{author:"Lucas F.",review:"I enjoy competing with my friends to see who can get the highest score."},{author:"Abigail K.",review:"The soundtrack is so catchy. I find myself humming it all day!"},{author:"Henry P.",review:"The variety of levels keeps the game interesting. I`m always looking forward to the next one."},{author:"Zoe M.",review:"Sweet Candy Legend is the best match-3 game I`ve played. Addictive and fun!"},{author:"Alexander J.",review:"I love how easy it is to learn, but it still offers a great challenge."}])}function _(t){const o=t.map(s=>`<li class="reviews-item swiper-slide">
          <h3>${s.author}</h3>
          <p>${s.review}</p>
          <span>,,</span>
        </li>`).join("");y.insertAdjacentHTML("beforeend",o)}document.addEventListener("DOMContentLoaded",()=>{p(),new g(".reviews-swiper",{modules:[c,u,d],speed:600,navigation:{nextEl:".reviews-swiper-button-next",prevEl:".reviews-swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},slidesPerView:1,spaceBetween:16,breakpoints:{1200:{slidesPerView:2,spaceBetween:104}}})});const x="/Nuts-BoltsSortPuzzle/assets/mobile_gallery_first1x-BAYX3g96.png",b="/Nuts-BoltsSortPuzzle/assets/mobile_gallery_first2x-l4LO75ab.png",f="/Nuts-BoltsSortPuzzle/assets/desktop_gallery_first1x-DJ6Wl0Zq.png",k="/Nuts-BoltsSortPuzzle/assets/desktop_gallery_first2x-CdrHIp5J.png",h="/Nuts-BoltsSortPuzzle/assets/mobile_gallery_second1x-4R5aUqL6.png",z="/Nuts-BoltsSortPuzzle/assets/mobile_gallery_second2x-COpmHILF.png",w="/Nuts-BoltsSortPuzzle/assets/desktop_gallery_second1x-CRGMJKC0.png",v="/Nuts-BoltsSortPuzzle/assets/desktop_gallery_second2x-C4Az9euw.png",B="/Nuts-BoltsSortPuzzle/assets/mobile_gallery_third1x-Bco97xfv.png",S="/Nuts-BoltsSortPuzzle/assets/mobile_gallery_third2x-DaFJEuO1.png",P="/Nuts-BoltsSortPuzzle/assets/desktop_gallery_third1x-C8hFEtcT.png",N="/Nuts-BoltsSortPuzzle/assets/desktop_gallery_third2x-eLI6_O67.png",M="/Nuts-BoltsSortPuzzle/assets/mobile_gallery_fourth1x-BFP7JOtS.png",L="/Nuts-BoltsSortPuzzle/assets/mobile_gallery_fourth2x-ZHVMZQ63.png",D="/Nuts-BoltsSortPuzzle/assets/desktop_gallery_fourth1x-B0O4cpKb.png",O="/Nuts-BoltsSortPuzzle/assets/desktop_gallery_fourth2x-DDcFOnO8.png",I="/Nuts-BoltsSortPuzzle/assets/mobile_gallery_fifth1x-BBiDuEzb.png",E="/Nuts-BoltsSortPuzzle/assets/mobile_gallery_fifth2x-CFOonMaL.png",C="/Nuts-BoltsSortPuzzle/assets/desktop_gallery_fifth1x-DyIidXiN.png",q="/Nuts-BoltsSortPuzzle/assets/desktop_gallery_fifth2x-uyLtFBux.png",$="/Nuts-BoltsSortPuzzle/assets/mobile_gallery_sixth1x-CPgNJP06.png",A="/Nuts-BoltsSortPuzzle/assets/mobile_gallery_sixth2x-BKYWNDIj.png",F="/Nuts-BoltsSortPuzzle/assets/desktop_gallery_sixth1x-Czk_biOy.png",V="/Nuts-BoltsSortPuzzle/assets/desktop_gallery_sixth2x-Cg-7aTWy.png",a="/Nuts-BoltsSortPuzzle/assets/desktop_about1x-CtN4p3LV.png";document.getElementById("about_img").innerHTML=`
  <picture>
    <source
      media="(min-width: 1200px)"
      srcset="${a} 1x,${a} 2x"
      type="image/png"
    />
    <img
      src="${a} "
      alt="img_screenshot"
      loading="lazy"
    />
  </picture>`;const e={about_desktop1x:a,gallery1_mob1x:x,gallery1_mob2x:b,gallery1_desk1x:f,gallery1_desk2x:k,gallery2_mob1x:h,gallery2_mob2x:z,gallery2_desk1x:w,gallery2_desk2x:v,gallery3_mob1x:B,gallery3_mob2x:S,gallery3_desk1x:P,gallery3_desk2x:N,gallery4_mob1x:M,gallery4_mob2x:L,gallery4_desk1x:D,gallery4_desk2x:O,gallery5_mob1x:I,gallery5_mob2x:E,gallery5_desk1x:C,gallery5_desk2x:q,gallery6_mob1x:$,gallery6_mob2x:A,gallery6_desk1x:F,gallery6_desk2x:V},j=document.querySelector(".gallery-list");document.querySelector(".reviews-icon-prev");document.querySelector(".reviews-icon-next");async function T(){const t=[{imgMob1:e.gallery1_mob1x,imgMob2:e.gallery1_mob2x,imgDesk1:e.gallery1_desk1x,imgDesk2:e.gallery1_desk2x},{imgMob1:e.gallery2_mob1x,imgMob2:e.gallery2_mob2x,imgDesk1:e.gallery2_desk1x,imgDesk2:e.gallery2_desk2x},{imgMob1:e.gallery3_mob1x,imgMob2:e.gallery3_mob2x,imgDesk1:e.gallery3_desk1x,imgDesk2:e.gallery3_desk2x},{imgMob1:e.gallery4_mob1x,imgMob2:e.gallery4_mob2x,imgDesk1:e.gallery4_desk1x,imgDesk2:e.gallery4_desk2x},{imgMob1:e.gallery5_mob1x,imgMob2:e.gallery5_mob2x,imgDesk1:e.gallery5_desk1x,imgDesk2:e.gallery5_desk2x},{imgMob1:e.gallery6_mob1x,imgMob2:e.gallery6_mob2x,imgDesk1:e.gallery6_desk1x,imgDesk2:e.gallery6_desk2x}];H(t)}function H(t){const o=t.map(s=>`<li class="gallery-item swiper-slide">
      <picture >
        <source
          media="(min-width: 768px)"
          srcset="${s.imgDesk1} 1x,${s.imgDesk2} 2x"
          type="image/png"
        />

        <source
          media="(max-width: 767px)"
          srcset="${s.imgMob1} 1x,${s.imgMob2} 2x"
          type="image/png"
        />
        <img
          src="${s.imgMob1} "
          alt="img_${s.imgMob1}"
          class="galleryImg"
          loading="lazy"
        />
      </picture>
      </li>`).join("");j.insertAdjacentHTML("beforeend",o)}document.addEventListener("DOMContentLoaded",()=>{T(),new g(".gallery-swiper",{modules:[c,u,d],speed:600,navigation:{nextEl:".gallery-swiper-button-next",prevEl:".gallery-swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!0},slidesPerView:1,spaceBetween:16,breakpoints:{1200:{slidesPerView:3,spaceBetween:80}}})});
//# sourceMappingURL=index.js.map
