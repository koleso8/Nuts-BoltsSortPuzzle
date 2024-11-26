document.querySelectorAll('.faq-list-item').forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
  
      document.querySelectorAll('.faq-list-item').forEach(el => {
        if (el !== item) el.classList.remove('open');
      });

      item.classList.toggle('open');
    });
  });