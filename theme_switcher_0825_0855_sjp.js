// 代码生成时间: 2025-08-25 08:55:06
(function() {
  'use strict';

  // Define the ThemeSwitcher class
  function ThemeSwitcher() {
    // Store the current theme
    this.currentTheme = null;
  }

  // Prototype for ThemeSwitcher methods
  ThemeSwitcher.prototype = {
    // Initialize the theme switcher
    init: function() {
      this.currentTheme = this.getDefaultTheme();
      this.applyTheme();
    },

    // Get the default theme from local storage or set a default
    getDefaultTheme: function() {
      return localStorage.getItem('theme') || 'light';
    },

    // Apply the current theme to the document
    applyTheme: function() {
      document.body.className = this.currentTheme;
    },

    // Toggle the theme between light and dark
    toggleTheme: function() {
      if (this.currentTheme === 'light') {
        this.currentTheme = 'dark';
      } else {
        this.currentTheme = 'light';
      }
      this.applyTheme();
      this.saveTheme();
    },

    // Save the current theme to local storage
    saveTheme: function() {
      localStorage.setItem('theme', this.currentTheme);
    },

    // Load theme from local storage
    loadTheme: function() {
      const theme = this.getDefaultTheme();
      this.currentTheme = theme;
      this.applyTheme();
    },

    // Error handling for unsupported themes
    validateTheme: function(theme) {
      const supportedThemes = ['light', 'dark'];
      if (!supportedThemes.includes(theme)) {
        throw new Error("Unsupported theme: 'theme'. Supported themes are 'light' and 'dark'.");
      }
    }
  };

  // Expose the ThemeSwitcher class to the global scope
  window.ThemeSwitcher = ThemeSwitcher;

  // Create an instance and initialize on DOM load
  document.addEventListener('DOMContentLoaded', function() {
    const themeSwitcher = new ThemeSwitcher();
    themeSwitcher.loadTheme();
  });

})();