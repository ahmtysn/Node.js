const Handlebars = require("handlebars");

const subjects = [
  "Shark",
  "Popcorn",
  "Poison",
  "Fork",
  "Cherry",
  "Toothbrush",
  "Cannon"
];
const punchlines = [
  "watch movie with",
  "spread some love",
  "put on cake",
  "clean toilets",
  "go to the moon",
  "achieve world piece",
  "help people learn programing"
];
function randomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
const data = {
  subject: randomElement(subjects),
  punchline: randomElement(punchlines)
};
const source = `{{subject}} is great to {{punchline}}.`;
const template = Handlebars.compile(source);
const result = template(data);

console.log(result);
