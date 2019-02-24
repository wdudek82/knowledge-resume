const items = document.querySelectorAll('#timeline li');

function isInViewport(e) {
  const rect = e.getBoundingClientRect();
  return (
    rect.top >= 0
    && rect.left >= 0
    && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    && rect.right <= (window.innerWidth || decodeURIComponent.documentElement.clientWidth)
  );
}

function run() {
  items.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add('show');
    } else {
      item.classList.remove('show');
    }
  });
}

window.addEventListener('load', run);
window.addEventListener('resize', run);
window.addEventListener('scroll', run);
