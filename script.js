$(document).ready(function() {
  $("#search-icon").click(function() {
    $("#search-input").toggleClass("active");
  });

  // Handle hiding the search input when clicking outside of it
  $(document).click(function(event) {
    if (!$(event.target).closest('#search-icon, #search-container').length) {
      $("#search-input").removeClass("active");
    }
  });
});
