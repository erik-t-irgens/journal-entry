import './styles.css';
import {Entry} from './journal';
$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var inputTitle = $('#titleEntry').val();
    var inputBody = $('#bodyEntry').val();
    var userEntry = new Entry (inputTitle, inputBody);
    userEntry.lettersCount();
    userEntry.teaser();
    $('#userOutput').append("<h4>Title: " + inputTitle + "</h4><br><p>Body: " + inputBody + "</p><br><p>Number of vowels: " + userEntry.bodyVowelLength + "</p><br><p> Number of consonants: " + userEntry.bodyConsonantsLength + "</p><br><p>Teaser sentence: " + userEntry.sentenceTeaser + ".</p>");

  });
});
