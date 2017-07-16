var txt;
var counts = {};
function preload() {
    txt = loadStrings('text.txt');
}

function setup() {
    var allwords = txt.join("\n");
    var tokens = allwords.split(/\W+/);
    for (let i =0; i < tokens.length; i++) {
        var word = tokens[i];
        if (counts[word]) {
            counts[word] += 1;
        }
        else {
            counts[word] = 1;
        }
    }
    console.log(counts);
    noCanvas();
}
