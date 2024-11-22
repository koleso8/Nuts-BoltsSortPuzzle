import Swiper from 'swiper';
import { Navigation, Pagination, Scrollbar, Keyboard } from 'swiper/modules';

import 'swiper/css';

const reviewsList = document.querySelector('.reviews-list');
const prevBtnEl = document.querySelector('.reviews-icon-prev');
const nextBtnEl = document.querySelector('.reviews-icon-next');

async function makeReviews() {
  const reviews = [
    {
      author: 'Scarlett N.',
      review:
        'The special events keep the game fresh and exciting. Can`t wait for more!',
    },
    {
      author: 'Lucas F.',
      review:
        'I enjoy competing with my friends to see who can get the highest score.',
    },
    {
      author: 'Abigail K.',
      review: 'The soundtrack is so catchy. I find myself humming it all day!',
    },
    {
      author: 'Henry P.',
      review:
        'The variety of levels keeps the game interesting. I`m always looking forward to the next one.',
    },
    {
      author: 'Zoe M.',
      review:
        'Sweet Candy Legend is the best match-3 game I`ve played. Addictive and fun!',
    },
    {
      author: 'Alexander J.',
      review:
        'I love how easy it is to learn, but it still offers a great challenge.',
    },
  ];
  renderReviews(reviews);
}

function renderReviews(reviews) {
  const markup = reviews
    .map(review => {
      return `<li class="reviews-item swiper-slide">
          <h3>${review.author}</h3>
          <p>${review.review}</p>
          <span>,,</span>
        </li>`;
    })
    .join('');

  reviewsList.insertAdjacentHTML('beforeend', markup);
}

document.addEventListener('DOMContentLoaded', () => {
  makeReviews();

  const swiper = new Swiper('.reviews-swiper', {
    modules: [Navigation, Scrollbar, Keyboard],
    speed: 600,
    navigation: {
      nextEl: '.reviews-swiper-button-next',
      prevEl: '.reviews-swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    slidesPerView: 1,
    spaceBetween: 16,
    breakpoints: {
      1200: {
        slidesPerView: 2,
        spaceBetween: 104,
      },
    },
  });
});
