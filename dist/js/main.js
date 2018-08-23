const navItems = document.querySelectorAll('.nav-item');
let menuToggle = false;

navItems.forEach(item => item.addEventListener('click', () => {
  if (!menuToggle) {
    item.children[1].classList.add('show');
    menuToggle = true;
  } else {
    item.children[1].classList.remove('show');
    menuToggle = false;
  }
}));
