// List of image filenames from the media folder to be displayed in the gallery
const galleryImages = [
  '_2240541-.JPG',
  '_A290405.JPG',
  '_MG_8584..JPG',
  '9ab33027-.JPG',
  '67C4414D-.JPG',
  'B28C4502-.JPG',
  'F61173E1-.JPG',
  'image00001.JPG',
  'IMG_0111..JPG',
  'IMG_0610.JPG',
  'IMG_1552.JPG',
  'IMG_3842.JPG',
  'IMG_4486..JPG',
  'IMG_6049.JPG',
  'IMG_8703.JPG'
];

// Function to load gallery images dynamically
function loadGallery() {
  const galleryGrid = document.querySelector('.gallery-grid');
  galleryImages.forEach(filename => {
    const img = document.createElement('img');
    img.src = `media/${filename}`;
    img.alt = 'TO:BE photo';
    galleryGrid.appendChild(img);
  });
}

// Fade-in animation on scroll
function fadeInOnScroll() {
  const sections = document.querySelectorAll('.section');
  const windowBottom = window.innerHeight;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < windowBottom - 100) {
      section.classList.add('fade-in');
    }
  });
}

// Smooth scrolling for anchor links
function smoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Form submission handler
function handleFormSubmit() {
  const form = document.getElementById('booking-form');
  form.addEventListener('submit', e => {
    e.preventDefault();
    alert('Thank you for your booking request! TO:BE will contact you soon.');
    form.reset();
  });
}

// Initialize functions on DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
  loadGallery();
  fadeInOnScroll();
  smoothScroll();
  handleFormSubmit();

  window.addEventListener('scroll', fadeInOnScroll);
});
