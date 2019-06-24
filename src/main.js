import './styles.css';
import {Entry} from './journal';
$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var inputTitle = $('#titleEntry').val();
    var inputBody = $('#bodyEntry').val();
    $('#userOutput').append("<li>" + inputTitle +  inputBody + "</li>");
    var userEntry = new Entry (inputTitle, inputBody);
    userEntry.lettersCount();
  });
});
