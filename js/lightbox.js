if (document.querySelector('#lightbox')) {
  // Получаем элементы
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxLink = document.getElementById('lightbox-link');
  const images = document.querySelectorAll('.lightbox-image');
  const closeBtn = document.querySelector('.lightbox-modal-close');

  // При клике на изображение открываем лайтбокс
  images.forEach(image => {
    image.addEventListener('click', function () {
      lightbox.classList.toggle('is-hidden');
      lightboxImg.src = this.src; // Устанавливаем выбранное изображение
      lightboxLink.href = this.dataset.link; // Устанавливаем ссылку
    });
  });

  // Закрываем лайтбокс при клике на "X"
  closeBtn.addEventListener('click', function () {
    lightbox.classList.remove('is-hidden');
  });

  // Закрываем лайтбокс при клике вне изображения
  lightbox.addEventListener('click', function (e) {
    if (e.target !== lightboxImg) {
      lightbox.classList.toggle('is-hidden');
    }
  });
}
