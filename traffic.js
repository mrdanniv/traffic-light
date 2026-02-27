const cards = document.querySelectorAll(".card");
const cards2 = document.querySelectorAll(".card2");
const items = document.querySelectorAll(".item");

function randColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}

function randDeg() {
  return Math.floor(Math.random() * 361);
}

items.forEach((item) => {
  item.addEventListener("click", () => {
    const color = item.dataset.bg; // берем id - тоесть получаем цвет из data-bg
    if (color) {
      item.style.background = color;
      document.body.style.background = color;
    } else {
      // x - сброс цвета //
      document.body.style.background = "#FFF";

      items.forEach((i, idx) => {
        if (idx !== items.length - 1) {
          i.style.background = "#FFF";
        } else {
          i.style.background = "red";
        }
      });
    }
  });
});

cards.forEach((el) => {
  el.addEventListener("click", () => {
    el.style.background = randColor();
  });
});

cards2.forEach((el) => {
  el.addEventListener("pointerenter", () => {
    el.style.background = `linear-gradient(${randDeg()}deg, ${randColor()}, ${randColor()})`;
  });
});

