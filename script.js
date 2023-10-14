let ball = document.getElementById("ball");
document.addEventListener("keydown", moveBall);

let left = 0;
let t = 0;
let elmentWidth = ball.offsetWidth;
  
function moveBall(event) {
  
  let browserHeight = document.documentElement.clientHeight;
  let browserWidth = document.documentElement.clientWidth;
  let key = event.keyCode;

  
 

  

  if (key == 87 || key == 38) {
    if (t - 25 >= 0) {
      ball.style.top = t - 25 + "px";
      t -= 25;
    }
    else{
      ball.style.top=0;
      t=browserHeight-126;
    }
  }

  if (key == 83 || key == 40) {

    if (t + elmentWidth + 25 <= browserHeight) {
      ball.style.top = t + 25 + "px";
      t += 25;
    }
    else{
      ball.style.top=1+"px";
      t=0;
    }
  }

  if (key == 65 || key == 37) {
    if (left - 25 >= 0) {
      ball.style.left = left - 25 + "px";
      left -= 25;
    }
    else{
      ball.style.right=0;
      left=browserWidth-126;
    }
  }

  if (key == 68 || key == 39) {
    if (left + elmentWidth + 25 <= browserWidth) {
      ball.style.left = left + 25 + "px";
      left += 25;
    }
    else{
      ball.style.left=1+"px";
      left=0;
    }
  }
}


