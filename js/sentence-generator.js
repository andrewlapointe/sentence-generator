const parent = document.getElementById("sentence");
const NN = [
  "dog",
  "cat",
  "frog",
  "rat",
  "mouse",
  "elephant",
  "person",
  "monster",
  "child",
  "clown",
  "italian plumber",
  "hero of time",
  "small blob like creature",
];
const VB = [
  "runs",
  "jumped",
  "ate",
  "chewed",
  "grooved",
  "shmooved",
  "warbled",
  "died",
  "fell",
];
const RB = [
  "quickly",
  "slowly",
  "neatly",
  "messily",
  "loudly",
  "quietly",
  "with grace",
  "curtly",
];

window.onload = getSentence((elementExists = false));

function createElement() {
  var node = document.createElement("p");
  node.id = "node";
  parent.appendChild(node);
  document.getElementById("node").innerHTML =
    "Press the button for a random sentence!";
  return;
}

function getSentence(elementExists) {
  if (elementExists) {
    const sentence = { article: "The", NN: "", VB: "", RB: "" }; // js object

    //  "The" + NN + VB + RB "The mouse ran quickly"
    sentence.NN = NN[Math.floor(Math.random() * NN.length)];
    sentence.VB = VB[Math.floor(Math.random() * VB.length)];
    sentence.RB = RB[Math.floor(Math.random() * RB.length)];

    var newText =
      "The" + " " + sentence.NN + " " + sentence.VB + " " + sentence.RB + ".";
    updateText(newText);
  } else {
    createElement();
  }
}

function updateText(newText) {
  document.getElementById("node").innerHTML = newText;
}

const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}
