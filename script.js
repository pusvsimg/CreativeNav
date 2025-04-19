document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('.navbar button');
  const categories = document.querySelectorAll('.main .category');
  const allButton = document.querySelector('.navbar button[data-category="all"]');

  function setActiveCategory(targetCategory) {
    // Deactivate all buttons and categories first
    navButtons.forEach(btn => btn.classList.remove('active'));
    categories.forEach(cat => cat.classList.remove('active'));

    // Activate the clicked button
    const activeButton = document.querySelector(`.navbar button[data-category="${targetCategory}"]`);
    if (activeButton) {
      activeButton.classList.add('active');
    }

    // Activate the corresponding category/categories
    if (targetCategory === 'all') {
      categories.forEach(cat => cat.classList.add('active'));
    } else {
      const activeCategory = document.querySelector(`.main .category[data-category="${targetCategory}"]`);
      if (activeCategory) {
        activeCategory.classList.add('active');
      }
    }
  }

  // Add click event listeners to buttons
  navButtons.forEach(button => {
    button.addEventListener('click', () => {
      const category = button.getAttribute('data-category');
      setActiveCategory(category);
    });
  });

  // Set the default active category ('all') on page load
  if (allButton) {
    setActiveCategory('all');
  }
});