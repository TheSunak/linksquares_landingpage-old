$(document).ready(function() {

  function postToGoogle() {
    var data = {
        'entry.27691755': $('#survey-dashboard').val(),
        'entry.1028587106': $('#survey-square').val(),
        'entry.46583915': $('#square-collapsed').val(),
        'entry.1671733856': $('#square-expanded').val()
      }

      $.post("https://docs.google.com/forms/d/13jvrZk9IMINWCvjFScT8a26GkvECaiIwpenCvEQ6ztM/formResponse", data);

      return false;
  }

  $('#target').submit(function(event) {
    event.preventDefault();
     $('.thanks-text').show();
    postToGoogle();

  });
});
