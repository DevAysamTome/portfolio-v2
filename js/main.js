const hamburgerMenu = document.querySelector(".hamburger-menu");
    const navbarMenu = document.querySelector(".nav-content");
    
    hamburgerMenu.addEventListener("click", () => {
      hamburgerMenu.classList.toggle("active");
      navbarMenu.classList.toggle("active");
    });
    
    // Add hover effect to navbar links
    const navLinks = document.querySelectorAll(".nav-content a");
    
    navLinks.forEach((link) => {
      link.addEventListener("mouseover", () => {
        link.style.color = "#2dbdca";
        link.style.transition = "all 0.2s ease-out";
      });
    
      link.addEventListener("mouseout", () => {
        link.style.color = "#fff";
        link.style.transition = "all 0.2s ease-out";
      });
    });
    
    // Add hover effect to logo
    const logo = document.querySelector(".nav-logo a");
    
    logo.addEventListener("mouseover", () => {
      logo.style.color = "#2dbdca";
      logo.style.transition = "all 0.2s ease-out";
    });
    
    logo.addEventListener("mouseout", () => {
      logo.style.color = "#fff";
      logo.style.transition = "all 0.2s ease-out";
    });


  