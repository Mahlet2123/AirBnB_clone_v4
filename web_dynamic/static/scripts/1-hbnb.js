$(document).ready(function() {
  const amenityObj = {};

  $('input[type="checkbox"]').change(function () {
    const $checkbox = $(this);
    const amenityId = $checkbox.data('id');
    const amenityName = $checkbox.data('name');

    if (this.checked) {
      amenityObj[amenityName] = amenityId;
    } else {
      delete amenityObj[amenityName];
    }

    const amenityNames = Object.keys(amenityObj).sort();
    $('.amenities h4').text(amenityNames.join(', '));
  });
});
