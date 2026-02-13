const button = document.getElementById("startBtn");
const textElement = document.getElementById("text");
const body = document.body;
const heartsContainer = document.querySelector(".hearts");

const message = `Happy Valentine's Day, Labs!
I am truly grateful to you for being a part of my life. 
You’ve seen me at my worst, yet you chose to stay.
I will always choose you, through hardship and through joy. 
I pray for you always. Mwa.`;

let index = 0;

function typeWriter() {
  if (index < message.length) {
    textElement.textContent += message.charAt(index);
    index++;
    setTimeout(typeWriter, 50);
  }
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 3 + "s";

  heartsContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 6000);
}

button.addEventListener("click", function () {
  // Switch theme
  body.classList.remove("horror");
  body.classList.add("valentine");

  // Hide button
  button.style.display = "none";

  // Start typing
  typeWriter();

  // Start heart generation
  setInterval(createHeart, 300);
});
