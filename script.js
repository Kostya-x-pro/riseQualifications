'use strict';

// Сохранение положения скрола перед загрузкой в LS
window.addEventListener('beforeunload', () => {
  localStorage.setItem('scrollPosition', window.scrollY);
});

window.addEventListener('DOMContentLoaded', () => {
  const savedScrollPosition = localStorage.getItem('scrollPosition');

  if (savedScrollPosition !== null) {
    window.scrollTo(0, savedScrollPosition);
  }

});

