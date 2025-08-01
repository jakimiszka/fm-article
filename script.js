const share_btn = document.querySelector(".share_btn");
const toast = document.querySelector(".toast_desktop");

share_btn.addEventListener('click', function() {
    if (toast.getAttribute('data-active') === 'false') {
      toast.style.display = 'flex';
      toast.setAttribute('data-active', 'true');
    } else {
      toast.style.display = 'none';
      toast.setAttribute('data-active', 'false');
    }
  });