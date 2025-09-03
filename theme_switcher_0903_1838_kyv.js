// 代码生成时间: 2025-09-03 18:38:35
(function() {
  'use strict';

  // Define the themes
  const themes = {
    light: 'light-theme',
    dark: 'dark-theme'
  };

  // Function to switch themes
  function switchTheme(currentTheme) {
    // Check if the theme is valid
    if (!themes.hasOwnProperty(currentTheme)) {
      console.error('Invalid theme:', currentTheme);
      return;
    }

    // Toggle the theme
    document.body.className = themes[currentTheme];
  }

  // Function to initialize the theme switcher
  function initThemeSwitcher() {
    // Default theme is light
    let currentTheme = 'light';

    // Event listener for theme switch button
    document.getElementById('theme-switch-btn').addEventListener('click', function() {
      // Switch theme between light and dark
      currentTheme = currentTheme === 'light' ? 'dark' : 'light';
      switchTheme(currentTheme);
    });
  }

  // Initialize the theme switcher on document ready
  document.addEventListener('DOMContentLoaded', initThemeSwitcher);

})();
