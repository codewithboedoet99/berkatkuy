 'use strict';

// Utility function to toggle active class
const toggleActiveClass = (elem) => elem.classList.toggle('active');

// Sidebar variables and event listener
const sidebar = document.querySelector('[data-sidebar]');
const sidebarBtn = document.querySelector('[data-sidebar-btn]');

if (sidebar && sidebarBtn) {
  sidebarBtn.addEventListener('click', () => toggleActiveClass(sidebar));
}

// Testimonials modal functionality
const testimonialsItems = document.querySelectorAll('[data-testimonials-item]');
const modalContainer = document.querySelector('[data-modal-container]');
const modalCloseBtn = document.querySelector('[data-modal-close-btn]');
const overlay = document.querySelector('[data-overlay]');

const modalImg = document.querySelector('[data-modal-img]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalText = document.querySelector('[data-modal-text]');

const toggleModal = () => {
  if (modalContainer && overlay) {
    toggleActiveClass(modalContainer);
    toggleActiveClass(overlay);
  }
};

testimonialsItems.forEach(item => {
  item.addEventListener('click', () => {
    const avatar = item.querySelector('[data-testimonials-avatar]');
    const title = item.querySelector('[data-testimonials-title]');
    const text = item.querySelector('[data-testimonials-text]');
    
    if (modalImg && avatar) {
      modalImg.src = avatar.src;
      modalImg.alt = avatar.alt;
    }
    if (modalTitle && title) {
      modalTitle.innerHTML = title.innerHTML;
    }
    if (modalText && text) {
      modalText.innerHTML = text.innerHTML;
    }

    toggleModal();
  });
});

if (modalCloseBtn && overlay) {
  modalCloseBtn.addEventListener('click', toggleModal);
  overlay.addEventListener('click', toggleModal);
}

// Custom select functionality
const select = document.querySelector('[data-select]');
const selectItems = document.querySelectorAll('[data-select-item]');
const selectValue = document.querySelector('[data-select-value]');
const filterBtns = document.querySelectorAll('[data-filter-btn]');

if (select) {
  select.addEventListener('click', () => toggleActiveClass(select));
}

selectItems.forEach(item => {
  item.addEventListener('click', () => {
    const selectedValue = item.innerText.toLowerCase();
    if (selectValue) {
      selectValue.innerText = item.innerText;
    }
    toggleActiveClass(select);
    filterItemsFunc(selectedValue);
  });
});

// Filter functionality
const filterItems = document.querySelectorAll('[data-filter-item]');

const filterItemsFunc = (selectedValue) => {
  filterItems.forEach(item => {
    if (selectedValue === 'all' || selectedValue === item.dataset.category) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
};

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const selectedValue = btn.innerText.toLowerCase();
    if (selectValue) {
      selectValue.innerText = btn.innerText;
    }
    filterItemsFunc(selectedValue);
    filterBtns.forEach(button => button.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Contact form validation
const form = document.querySelector('[data-form]');
const formInputs = document.querySelectorAll('[data-form-input]');
const formBtn = document.querySelector('[data-form-btn]');

if (form && formBtn) {
  formInputs.forEach(input => {
    input.addEventListener('input', () => {
      formBtn.disabled = !form.checkValidity();
    });
  });
}

// Page navigation
const navigationLinks = document.querySelectorAll('[data-nav-link]');
const pages = document.querySelectorAll('[data-page]');

const handleNavigationClick = (event) => {
  const clickedLink = event.target;
  const clickedIndex = Array.from(navigationLinks).indexOf(clickedLink);

  navigationLinks.forEach(link => link.classList.remove('active'));
  pages.forEach(page => page.classList.remove('active'));

  if (clickedIndex >= 0 && clickedIndex < pages.length) {
    pages[clickedIndex].classList.add('active');
    clickedLink.classList.add('active');
    window.scrollTo(0, 0); // Scroll to top
  }
};

navigationLinks.forEach(link => link.addEventListener('click', handleNavigationClick));
