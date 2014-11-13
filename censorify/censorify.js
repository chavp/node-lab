var censoredWords = ["sad", "bad", "mad"],
    customCensoredWords = [];
function censor(inStr) {
    for (idx in this.censoredWords) {
        inStr = inStr.replace(this.censoredWords[idx], "****");
    }
    for (idx in this.customCensoredWords) {
        inStr = inStr.replace(this.customCensoredWords[idx], "****");
    }
    return inStr;
}
function addCensoredWord(word) {
    this.customCensoredWords.push(word);
}
function getCensoredWords(word) {
    return this.censoredWords.concat(this.customCensoredWords);
}
exports.censor = censor;
exports.addCensoredWord = addCensoredWord;
exports.getCensoredWords = getCensoredWords;