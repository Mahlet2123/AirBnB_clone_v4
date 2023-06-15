$(document).ready(function() {
  // Create an empty array to store the selected Amenity IDs
  var selectedAmenities = [];

  // Listen for changes on each input checkbox tag
  $('input[type="checkbox"]').change(function() {
    // Get the Amenity ID associated with the checkbox
    var amenityID = $(this).data('amenity-id');

    // Check if the checkbox is checked
    if ($(this).is(':checked')) {
      // Add the Amenity ID to the selectedAmenities array
      selectedAmenities.push(amenityID);
    } else {
      // Remove the Amenity ID from the selectedAmenities array
      var index = selectedAmenities.indexOf(amenityID);
      if (index !== -1) {
        selectedAmenities.splice(index, 1);
      }
    }

    // Update the h4 tag inside the div Amenities with the list of Amenities checked
    $('#amenities h4').text(selectedAmenities.join(', '));
  });
});

