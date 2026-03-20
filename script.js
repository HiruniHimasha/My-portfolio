// Initialize EmailJS
    emailjs.init({ publicKey: "o8Wdgus1ldkUd9Jfs" });

    // Send mail function
    function sendMail() {
      const params = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        message: document.getElementById('message').value.trim(),
      };

      if (!params.name || !params.email || !params.message) {
        alert('All fields are required.');
        return;
      }

      const serviceID = 'service_4ob3ytv';
      const templateID = 'template_hplph9i';

      emailjs
        .send(serviceID, templateID, params)
        .then(res => {
          alert('Email sent successfully!');
          document.getElementById('name').value = '';
          document.getElementById('email').value = '';
          document.getElementById('message').value = '';
          console.log('Email sent successfully:', res);
        })
        .catch(err => {
          alert('Failed to send email. Please try again.');
          console.error('Failed to send email:', err);
        });
    }

    // All DOM-dependent code inside DOMContentLoaded
    document.addEventListener('DOMContentLoaded', function() {
      console.log('DOM loaded - initializing features');
      
      // Get elements
      const menuIcon = document.getElementById('menu-icon');
      const navbar = document.querySelector('header nav');
      const navItems = document.querySelectorAll('.nav-i');
      const sections = document.querySelectorAll('section');
      const seeMoreBtn = document.getElementById('seeMoreBtn');
      const extraProjects = document.querySelectorAll('.extra-project');

      // ===== MOBILE MENU TOGGLE =====
      if (menuIcon && navbar) {
        menuIcon.addEventListener('click', () => {
          menuIcon.classList.toggle('bx-x');
          navbar.classList.toggle('active');
        });
      }

      // ===== NAVIGATION ACTIVE CLICK =====
      navItems.forEach(item => {
        item.addEventListener('click', (e) => {
          // Remove active from all
          navItems.forEach(nav => nav.classList.remove('active'));
          // Add active to clicked
          item.classList.add('active');
          
          // Close mobile menu if open
          if (navbar && navbar.classList.contains('active')) {
            navbar.classList.remove('active');
            if (menuIcon) menuIcon.classList.remove('bx-x');
          }
        });
      });

      // ===== SCROLL ACTIVE SECTION =====
      window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
          const sectionTop = section.offsetTop - 150;
          if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
          }
        });

        navItems.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
          }
        });
      });

      // ===== SEE MORE PROJECTS FEATURE =====
      if (seeMoreBtn) {
        console.log('See More button found, extra projects:', extraProjects.length);
        
        // Hide button if no extra projects
        if (extraProjects.length === 0) {
          seeMoreBtn.style.display = "none";
          console.log('No extra projects, hiding button');
        } else {
          // Make sure extra projects are hidden initially (in case CSS fails)
          extraProjects.forEach(project => {
            project.style.display = "none";
          });
          
          let isExpanded = false;
          
          seeMoreBtn.addEventListener("click", () => {
            console.log('See More clicked, expanded:', isExpanded);
            
            extraProjects.forEach(project => {
              project.style.display = isExpanded ? "none" : "block";
            });
            
            seeMoreBtn.textContent = isExpanded ? "See More" : "See Less";
            isExpanded = !isExpanded;
          });
        }
      } else {
        console.log('See More button not found!');
      }
    });