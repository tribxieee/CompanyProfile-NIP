document.addEventListener("DOMContentLoaded", () => {
  // 1. Inisialisasi Elemen
  const navbar = document.querySelector(".custom-navbar");
  const counters = document.querySelectorAll(".stat-item h3");
  const btnDaftar = document.querySelector(".btn-daftar");

  // 2. Efek Scroll Navbar (Gabungan Shadow & Padding)
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
      navbar.style.padding = "8px 0";
      navbar.classList.add("shadow-sm");
    } else {
      navbar.style.boxShadow = "none";
      navbar.style.padding = "15px 0";
      navbar.classList.remove("shadow-sm");
    }
  });

  // 3. Animasi Angka Statistik
  const animateCounters = () => {
    counters.forEach((counter) => {
      // Ambil angka asli dari teks awal sebelum berubah
      const target = parseInt(counter.innerText.replace("+", ""));
      const hasPlus = counter.innerText.includes("+");
      let count = 0;

      // Kecepatan: target dibagi jumlah frame (misal 50 frame)
      const increment = target / 50;

      const updateCount = () => {
        count += increment;
        if (count < target) {
          counter.innerText = Math.ceil(count) + (hasPlus ? "+" : "");
          setTimeout(updateCount, 20); // Jalankan terus sampai target
        } else {
          counter.innerText = target + (hasPlus ? "+" : "");
        }
      };

      updateCount();
    });
  };

  // 4. Logika Klik Tombol
  if (btnDaftar) {
    btnDaftar.addEventListener("click", function (e) {
      console.log("Tombol daftar kursus Naura Innova telah diklik!");
    });
  }

  // Jalankan animasi saat halaman dimuat
  animateCounters();
});

document.addEventListener("DOMContentLoaded", () => {
  const playBtn = document.querySelector(".play-btn");

  if (playBtn) {
    playBtn.addEventListener("click", () => {
      // Logika ini bisa diganti untuk membuka modal video atau mengalihkan halaman
      alert("Video 'Cerita Kami' Naura Innova akan diputar!");
    });
  }

  // Optional: Animasi Reveal saat scroll
  const observerOptions = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, observerOptions);

  document.querySelectorAll(".program-card").forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease-out";
    observer.observe(card);
  });
});

document.addEventListener('DOMContentLoaded', function () {
    const swiper = new Swiper('.testimonial-slider', {
        // Parameter dasar
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        grabCursor: true,
        
        // Navigasi Custom
        navigation: {
            nextEl: '.btn-next',
            prevEl: '.btn-prev',
        },

        // Responsive breakpoints
        breakpoints: {
            // HP: 1 slide full
            576: {
                slidesPerView: 1.5,
                spaceBetween: 20
            },
            // Tablet: 2 slide
            768: {
                slidesPerView: 2.2,
                spaceBetween: 30
            },
            // Desktop: 3 slide + sisa sedikit buat next slide effect
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            }
        }
    });
});