const dino = document.querySelector(".dino");
const cactus = document.querySelector(".cactus");

let isJumping = false;

let counter = 0;

function jump() {
  if (isJumping) return;
  isJumping = true;
  dino.classList.add("jump");
  setTimeout(() => {
    dino.classList.remove("jump");
    isJumping = false;
  }, 750);
}

document.addEventListener("click", jump);
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    jump();
  }
});

const checkDead = setInterval(() => {
  const dinoRect = dino.getBoundingClientRect();
  const cactusRect = cactus.getBoundingClientRect();

  if (
    dinoRect.left < cactusRect.right &&
    dinoRect.right > cactusRect.left &&
    dinoRect.top < cactusRect.bottom &&
    dinoRect.bottom > cactusRect.top
  ) {
    cactus.style.animation = "none";
    alert(`Game Over. Score: ${Math.floor(counter / 100)}`);

    counter = 0;
    cactus.style.animation = "cactus_move 3s infinite linear";
  } else {
    counter++;
  }
}, 30);
