function camelize {
return str
.split(.-.)
.map(
(word,index) =>index ==0 ? word :word[0].toUpperCase() + word.slice
)
.join('');
}
