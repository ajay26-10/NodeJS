

let str = ("JavaScript, often abbreviated as JS, is a programming language and core technology of the Web, alongside HTML and CSS. 99% of websites use JavaScript on the client side for webpage behavior. Web browsers have a dedicated JavaScript engine that executes the client code.");

let word = "and";
strarray = str.split(" ");
l = strarray.length;
var count = 0;
for (i = 0; i < l; i++) {
    if (strarray[i] == word) {
        count++;
    }

}
console.log(word + ` is repeated ${count} times in the text`);