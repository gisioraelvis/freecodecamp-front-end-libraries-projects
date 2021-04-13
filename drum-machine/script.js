window.document.onkeyup = function (event) {
  let keystroke = event.key;
  if (keystroke === "q" || keystroke === "Q") {
    play("Q");
  } else if (keystroke === "w" || keystroke === "W") {
    play("W");
  } else if (keystroke === "e" || keystroke === "E") {
    play("E");
  } else if (keystroke === "a" || keystroke === "A") {
    play("A");
  } else if (keystroke === "s" || keystroke === "S") {
    play("S");
  } else if (keystroke === "d" || keystroke === "D") {
    play("D");
  } else if (keystroke === "z" || keystroke === "Z") {
    play("Z");
  } else if (keystroke === "x" || keystroke === "X") {
    play("X");
  } else if (keystroke === "c" || keystroke === "C") {
    play("C");
  }
};
function play(str) {
  if (str === "q" || str === "Q") {
    document.getElementById("display").innerText = "Rock on!";
  } else if (str === "w" || str === "W") {
    document.getElementById("display").innerText = "Drum Roll!";
  } else if (str === "e" || str === "E") {
    document.getElementById("display").innerText = "Music Time!";
  } else if (str === "a" || str === "A") {
    document.getElementById("display").innerText = "Big Hit!";
  } else if (str === "s" || str === "S") {
    document.getElementById("display").innerText = "Party On!";
  } else if (str === "d" || str === "D") {
    document.getElementById("display").innerText = "Jamming on!";
  } else if (str === "z" || str === "Z") {
    document.getElementById("display").innerText = "Popstarts!";
  } else if (str === "x" || str === "X") {
    document.getElementById("display").innerText = "On the mood!";
  } else if (str === "c" || str === "C") {
    document.getElementById("display").innerText = "On the rythm!";
  }
  let audio = document.getElementById(str);
  audio.play();

  const range = document.getElementById("range");

  range.addEventListener("input", (e) => {
    const value = +e.target.value;
    const label = e.target.nextElementSibling;

    const range_width = getComputedStyle(e.target).getPropertyValue("width");
    const label_width = getComputedStyle(label).getPropertyValue("width");

    const num_width = +range_width.substring(0, range_width.length - 2);
    const num_label_width = +label_width.substring(0, label_width.length - 2);

    const max = +e.target.max;
    const min = +e.target.min;

    const left =
      value * (num_width / max) -
      num_label_width / 2 +
      scale(value, min, max, 10, -10);

    label.style.left = `${left}px`;

    label.innerHTML = value;

    audio.volume = `${value / 100}`;
  });

  // https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };
}
