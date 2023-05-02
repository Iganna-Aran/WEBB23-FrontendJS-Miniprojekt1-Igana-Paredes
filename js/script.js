const arr = ["h5", "h4", "h3", "h2", "h1"];
const hue = 300;
arr.forEach((element, index) => {
  index++;
  const h = document.createElement(element);
  document.body.append(h);
  h.innerText = `Rad ${index}`;
  h.style.color = "hsl(300, 80%, 50%)";
  h.style.textAlign = "center";
  h.style.backgroundColor = `hsl(${index*35}, 90%, 50%, 60%)`;
});

const numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const div = document.createElement("div");
document.body.append(div);
div.style.borderStyle = "solid";
div.style.borderColor = "black";
div.style.borderWidth = "1px";
div.style.width = "auto";
div.style.height = "auto";
div.style.display = "flex";
div.style.justifyContent = "space-around";

const purpleDiv = document.createElement("div");
div.append(purpleDiv);
purpleDiv.style.padding = "10px";
purpleDiv.style.backgroundColor = "lavender";
purpleDiv.style.margin = "50px";

const purpleDiv2 = document.createElement("div");
div.append(purpleDiv2);
purpleDiv2.style.padding = "10px";
purpleDiv2.style.backgroundColor = "lavender";
purpleDiv2.style.margin = "50px";
purpleDiv2.style.textAlign = "center";
purpleDiv2.style.display = "flex";
purpleDiv2.style.flexDirection = "column";

const numText = [
  "ett",
  "två",
  "tre",
  "fyra",
  "fem",
  "sex",
  "sju",
  "åtta",
  "nio",
  "tio",
];

const purpleDiv3 = document.createElement("div");
div.append(purpleDiv3);
purpleDiv3.style.padding = "10px";
purpleDiv3.style.backgroundColor = "lavender";
purpleDiv3.style.margin = "50px";
purpleDiv3.style.textAlign = "center";
purpleDiv3.style.display = "flex";
purpleDiv3.style.flexDirection = "column";

for (let i = 0; i < 10; i++) {
  const divNumbers = document.createElement("div");
  purpleDiv.append(divNumbers);
  divNumbers.style.width = "50px";
  divNumbers.style.height = "auto";
  divNumbers.style.lineHeight = "20px";
  divNumbers.style.textAlign = "left";

  divNumbers.innerText = numArr[i];
  if (i == 4) {
    divNumbers.style.backgroundColor = "none";
    divNumbers.style.color = "white";
  } else if (i % 2 == 0) {
    divNumbers.style.backgroundColor = "black";
    divNumbers.style.color = "white";
  } else {
    divNumbers.style.backgroundColor = "white";
    divNumbers.style.color = "black";
  }
}

for (let i = 9; i > -1; i--) {
  const divNumbers2 = document.createElement("div");
  purpleDiv2.append(divNumbers2);
  divNumbers2.style.width = "50px";
  divNumbers2.style.height = "auto";
  divNumbers2.style.fontSize = "18px";
  divNumbers2.style.lineHeight = "20px";
  divNumbers2.style.textAlign = "middle";

  divNumbers2.innerText = numArr[i];
  if (i == 8) {
    divNumbers2.style.backgroundColor = "none";
    divNumbers2.style.color = "white";
  } else if (i % 2 == 0) {
    divNumbers2.style.backgroundColor = "black";
    divNumbers2.style.color = "white";
  } else {
    divNumbers2.style.backgroundColor = "white";
    divNumbers2.style.color = "black";
  }
}

for (let i = 0; i < 10; i++) {
  const divNumbers3 = document.createElement("div");
  purpleDiv3.append(divNumbers3);
  divNumbers3.style.width = "50px";
  divNumbers3.style.height = "auto";
  divNumbers3.style.fontSize = "18px";
  divNumbers3.style.lineHeight = "20px";
  divNumbers3.style.textAlign = "right";

  divNumbers3.innerText = numText[i];
  if (i == 5) {
    divNumbers3.style.backgroundColor = "none";
    divNumbers3.style.color = "white";
  } else if (i % 2 == 0) {
    divNumbers3.style.backgroundColor = "black";
    divNumbers3.style.color = "white";
  } else {
    divNumbers3.style.backgroundColor = "white";
    divNumbers3.style.color = "black";
  }
}
