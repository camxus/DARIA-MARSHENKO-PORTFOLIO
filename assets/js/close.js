const menuBtn = document.querySelector('.close-btn');
const area = document.querySelector('.close-area');
const videoBtn = document.querySelector('.video_area');
const paintingsBtn = document.querySelector('.preview');

let menuOpen = false;
area.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

if (videoBtn !== null)
{
videoBtn.addEventListener('click', () => {
    if(!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
    } else {
      menuBtn.classList.remove('open');
      menuOpen = false;
    }
  });
}

if (paintingsBtn !== null)
{
paintingsBtn.addEventListener('click', () => {
    console.log("daria")
    if(!menuOpen) {
      menuBtn.classList.add('open');
      menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        menuOpen = false;
    }
  });
}