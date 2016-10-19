//range-slider
(function() {
  $('#range').slider({
    range: 'min',
    min: 261,
    max: 8000,
    animate: true,
    slide: function(e, ui) {
      var val = ui.value,
        total = (val - 260).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
      price = ui.value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

      return $('.ui-slider-handle').html('$' + price) &&
        $('#loan-amount').html('<h4>$' + price + '</h4>') &&
        $('#loan-received').html('<h4>$' + total + '</h4>');
    }
  });
  $('.ui-slider-handle').html('$' + '261');
  $('#loan-amount').html('<h4>' + '$261' + '</h4>');
  $('#loan-received').html('<h4>' + '$1' + '</h4>');
}.call(this));

$('input[type="radio"]').change(function() {
  var option1 = $('#loanOption1'),
    option2 = $('#loanOption2');

  if ($('#radio1').is(':checked')) {
    option1.addClass('highlight');
  } else {
    option1.removeClass('highlight');
  }
  if ($('#radio2').is(':checked')) {
    option2.addClass('highlight');
  } else {
    option2.removeClass('highlight');
  }
});
