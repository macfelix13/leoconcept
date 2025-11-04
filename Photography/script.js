// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Fade-in on scroll
const faders = document.querySelectorAll('section, .grid img, .about-content, .services-list li');

const appearOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('fade-in');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// Hero background slider (if using multiple slides)
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

if (slides.length > 0) {
  slides[currentSlide].classList.add('active');

  function showNextSlide() {
    slides[currentSlide].classList.remove('active');

    const current = slides[currentSlide];
    if (current.dataset.type === 'video') {
      const video = current.querySelector('video');
      if (video) video.pause();
    }

    currentSlide = (currentSlide + 1) % slides.length;
    const next = slides[currentSlide];
    next.classList.add('active');

    if (next.dataset.type === 'video') {
      const video = next.querySelector('video');
      if (video) video.play();
    }
  }

  setInterval(showNextSlide, 7000);
}

// Portfolio filter logic
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    const category = button.getAttribute('data-category');

    portfolioItems.forEach(item => {
      const itemCategory = item.getAttribute('data-category');
      if (category === 'all' || itemCategory === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

document.querySelectorAll('.view-more').forEach(button => {
  button.addEventListener('click', () => {
    const imgSrc = button.getAttribute('data-image');
    lightboxImg.src = imgSrc;
    lightbox.style.display = 'flex';
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  } });

// Contact form submission (dummy example)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
  contactForm.reset();
});

// Back to Top Button
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopBtn.style.display = 'block';
  } else {
    backToTopBtn.style.display = 'none';
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
