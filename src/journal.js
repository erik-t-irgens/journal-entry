

export var Entry = function (title, body) {
  this.title = title;
  this.body = body;
  this.bodyVowelLength;
  this.bodyConsonantsLength;
  this.sentenceTeaser;
}

Entry.prototype.teaser = function(){
  var sentences = [];
  var words = [];
  sentences = this.body.split(".");
  words = this.body.split(" ");
  if (sentences[0].split(" ").length <= 8) {
    this.sentenceTeaser = sentences[0];
  } else {
    this.sentenceTeaser = (words[0] + " " + words[1] + " " + words[2] + " " + words[3] + " " + words[4] + " " + words[5] + " " + words[6] + " " + words[7] + "...")
  }
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
  this.bodyVowelLength = bodyVowels.length;
  this.bodyConsonantsLength = bodyConsonants.length;
}
