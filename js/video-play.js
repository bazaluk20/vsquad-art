if (document.querySelector('.v-wrapper')) {
  let videoBlock = document.querySelector('.v-wrapper');
  videoBlock.addEventListener('click', function (event) {
    let player = event.currentTarget.querySelector('.v-player');
    let cover = event.currentTarget.querySelector('.v-cover');
    let btn = event.currentTarget.querySelector('.v-btn');
    player.style.display = 'block';
    cover.style.display = 'none';
    btn.style.display = 'none';
  });
}
