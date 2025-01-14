document.addEventListener('DOMContentLoaded', () => {
  // Menu toggle
  const menuIcon = document.querySelector('#menu-icon');
  const navbar = document.querySelector('header nav');

  if (menuIcon) {
    menuIcon.addEventListener('click', () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    });
  }

  // Highlight active navigation item
  const navItems = document.querySelectorAll('.nav-i');
  navItems.forEach(item => {
    if (item.href === window.location.href) {
      item.classList.add('active');
    }

    item.addEventListener('click', () => {
      navItems.forEach(nav => nav.classList.remove('active'));
      item.classList.add('active');
    });
  });
});

// Send email
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

  const serviceID = 'service_2kyjisn';
  const templateID = 'template_5buoboc';

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
