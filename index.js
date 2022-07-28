function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }
document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });

function moveDodgerRight() {
    const rightNumber = dodger.style.left.replace("px", "");
    const right = parseInt(rightNumber, 10);

    if (right < 380){
        dodger.style.left = `${right + 1}px`;
    }
}

document.addEventListener("keydown", function (f) {
    if (f.key === "ArrowRight") {
        moveDodgerRight();
    }
})