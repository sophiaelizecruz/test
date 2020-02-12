const countOccurrences = (word) => {
    return _.countBy(word, function (letters) { return letters; });
};

console.log(countOccurrences('engineering'));