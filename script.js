document.addEventListener('DOMContentLoaded', function() {
  // Get the element with the ID 'open'
  let b = document.querySelector('#open');
  
  // Add a slight animation effect on page load
  setTimeout(() => b.focus(), 100);  // Focus on the element after 100ms
  setTimeout(() => b.blur(), 1000);  // Remove focus after 1000ms

  // Listen for click event on the element with ID 'open'
  b.addEventListener('click', function() {
    console.log("đã kích");

    // Redirect to end.html after clicking the element
    window.location.href = 'end/';  // Change to your desired directory or URL
  });
});
