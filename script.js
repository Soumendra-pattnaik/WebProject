// Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Typewriter Effect
    const typewriter = document.getElementById("typewriter");
    const text = "Hi i am Soumendra Pattnaik";
    let i = 0;

    function type() {
      if (i < text.length) {
        typewriter.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 150);
      }
    }

    type();

    // Theme Toggle
    function toggleTheme() {
      const body = document.body;
      const toggleBtn = document.querySelector('.theme-toggle');
      if (body.classList.contains("dark-mode")) {
        body.classList.remove("dark-mode");
        body.classList.add("light-mode");
        toggleBtn.textContent = "☀️";
      } else {
        body.classList.remove("light-mode");
        body.classList.add("dark-mode");
        toggleBtn.textContent = "🌙";
      }
    }