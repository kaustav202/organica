// Initialize Swiper
var swiper = new Swiper(".product-slider", {
  loop: true,
  spaceBetween: 20,
  autoplay: {
      delay: 7500,
      disableOnInteraction: false
  },
  breakpoints: {
      0: {
          slidesPerView: 1
      },
      768: {
          slidesPerView: 4
      },
      1020: {
          slidesPerView: 3
      },
  },
});

// Dropdown functionality
document.addEventListener('DOMContentLoaded', function () {
  const userIcon = document.getElementById("userIcon");
  const dropdownMenu = document.getElementById("dropdownMenu");

  userIcon.addEventListener("click", function (event) {
    event.preventDefault(); // Prevents default action
    console.log("User icon clicked!"); // Debugging
    dropdownMenu.classList.toggle("show"); // Toggle dropdown visibility
  });
  
  });


// Close dropdown when clicking outside
window.addEventListener('click', function (event) {
  const userIcon = document.getElementById("userIcon");
  const dropdownMenu = document.getElementById("dropdownMenu");

  if (!userIcon.contains(event.target) && !dropdownMenu.contains(event.target)) {
    dropdownMenu.classList.remove("show"); // Hide dropdown
  }
});


// Search functionality
const searchInput = document.querySelector('.search-bar');

searchInput.addEventListener('input', function () {
  const searchTerm = searchInput.value.toLowerCase();
  const productSlides = document.querySelectorAll('.swiper-slide');

  productSlides.forEach(slide => {
      const title = slide.querySelector('h3').textContent.toLowerCase();
      if (title.includes(searchTerm)) {
          slide.style.display = 'block';  // Show matched product
      } else {
          slide.style.display = 'none';   // Hide unmatched product
      }
  });

  swiper.update(); // Update Swiper to reflect visibility changes
});
