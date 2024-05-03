window.addEventListener('blur', function() {
    document.title = '0x1 Device';
  });

  // Function to restore the original title when the window gains focus
  window.addEventListener('focus', function() {
    document.title = '0x1 by sxft';
  });