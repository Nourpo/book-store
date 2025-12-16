 let slideIndex = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
      slides.forEach(slide => slide.style.display = 'none');
      slideIndex = (index + slides.length) % slides.length;
      slides[slideIndex].style.display = 'block';
    }

    function changeSlide(n) {
      showSlide(slideIndex + n);
    }

    function autoSlide() {
      showSlide(slideIndex + 1);
    }

    showSlide(slideIndex);
    setInterval(autoSlide, 5000);