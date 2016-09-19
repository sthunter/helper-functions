/*-- Helper Functions --*/

// Returns title cased string, 2nd argument is exception words as a space separated string
// First word is always uppercased
function titleCase(title, minorWords = '') {
  return title.split(' ').map(function(word, i){
    if(!minorWords.split(' ').some(minorWord => minorWord.toLowerCase() === word.toLowerCase()) || i === 0) {
      return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    } else {
      return word.toLowerCase();
    }
  }).join(' ');
}
