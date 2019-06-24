

export var Entry = function (title, body) {
  this.title= title;
  this.body = body;

}

Entry.prototype.lettersCount = function() {
  var regexVowels = /[aeiou]/i;
  var regexConsonants = /[bcdfghjklmnpqrstvwxyz]/i;
  var bodySplit = this.body.split("");
  var bodyVowels = [];
  var bodyConsonants =[];
  bodySplit.forEach(function(character){

    if (character.match(regexVowels)) {
      bodyVowels.push(character);
    } else if (character.match(regexConsonants)) {
      bodyConsonants.push(character);
    } else {
      return
    }

  });
    var bodyVowelLength = bodyVowels.length;
    var bodyConsonantsLength = bodyConsonants.length;
  console.log(bodySplit);
  console.log(bodyVowelLength);
  console.log(bodyConsonantsLength);

}
