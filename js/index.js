let emojis = [];

const unshiftBtn = document.getElementById("unshift-btn");
const pushBtn = document.getElementById("push-btn");
const shiftBtn = document.getElementById("shift-btn");
const popBtn = document.getElementById("pop-btn");
const emojiInput = document.getElementById("emoji-input");
const emojisContainer = document.getElementById("emojis-container");
const activeBtn = document.getElementById("active-btn");
const repeatBtn = document.getElementById("repeat-btn");
const mainContainer = document.getElementById("main-container");

function renderEmoji() {
  emojisContainer.innerHTML = "";
  emojisContainer.style.backgroundColor = "#004A8E";
  let emojisString = "";
  for (let i = 0; i < emojis.length; i++) {
    emojisString += `<span class="emojitrix__emoji">${emojis[i]}</span>`;
  }
  emojisContainer.innerHTML = emojisString;
}

unshiftBtn.addEventListener("click", function () {
  if (emojiInput.value) {
    emojis.unshift(emojiInput.value);
    emojiInput.value = "";
    emojiInput.focus();
    renderEmoji();
  }
  emojiInput.focus();
});

pushBtn.addEventListener("click", function () {
  if (emojiInput.value) {
    emojis.push(emojiInput.value);
    emojiInput.value = "";
    emojiInput.focus();
    renderEmoji();
  }
  emojiInput.focus();
});

shiftBtn.addEventListener("click", function () {
  emojis.shift();
  emojiInput.focus();
  renderEmoji();
  emojisContainer.style.background = "#fff";
});

popBtn.addEventListener("click", function () {
  emojis.pop();
  emojiInput.focus();
  renderEmoji();
  emojisContainer.style.background = "#fff";
});

activeBtn.addEventListener("click", function () {
  if (emojis.length > 0) {
    let opacity = 1 / emojis.length;
    let plusOpacity = opacity;
    let interval = setInterval(function () {
      if (emojis.length === 0) {
        clearInterval(interval);
        mainContainer.innerHTML = `<h2 class="complete">Complete!</h2>`;
        activeBtn.style.display = "none";
        repeatBtn.style.display = "inline-block";
      } else {
        mainContainer.style.background = `rgba(0, 74, 142, ${plusOpacity})`;
        plusOpacity += opacity;
        emojiInput.value = emojis.pop();
        renderEmoji();
      }
    }, 500);
  }
});

repeatBtn.addEventListener("click", function () {
  mainContainer.style.background = "#fac036";
  mainContainer.replaceChildren(emojiInput);
  emojiInput.value = "";
  emojiInput.focus();
  emojisContainer.style.background = "#fff";
  activeBtn.style.display = "inline-block";
  repeatBtn.style.display = "none";
});
