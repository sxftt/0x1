document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
  
    // Load user's theme preference from cookie
    const theme = getCookie("theme");
    if (theme) {
      document.body.classList.add(theme);
      if (theme === "dark-mode") {
        themeToggle.checked = true;
      }
    }
  
    // Toggle theme on checkbox change
    themeToggle.addEventListener("change", function() {
      if (themeToggle.checked) {
        document.body.classList.add("dark-mode");
        document.body.classList.remove("purplish-theme");
        setCookie("theme", "dark-mode", 30);
      } else {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("purplish-theme");
        setCookie("theme", "purplish-theme", 30);
      }
    });
  
    // Function to set cookie
    function setCookie(name, value, days) {
      const expires = new Date();
      expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
      document.cookie = name + "=" + value + ";expires=" + expires.toUTCString();
    }
  
    // Function to get cookie
    function getCookie(name) {
      const cookies = document.cookie.split("; ");
      for (const cookie of cookies) {
        const [cookieName, cookieValue] = cookie.split("=");
        if (cookieName === name) {
          return cookieValue;
        }
      }
      return null;
    }
  });
  