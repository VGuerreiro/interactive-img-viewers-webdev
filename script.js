const gallery = document.getElementById("gallery");
const buttonsCollection = document.getElementsByClassName("btn");
const buttons = Array.from(buttonsCollection);
const numImgs = 3;
let num = 1;

function swapIMG(event) {
    let imgURL;

    if (event.target.classList.contains("next")) {
        num++;
        if (num > numImgs) {
            num = 1;
        }
        imgURL = `url("./imgs/${num}.jpg")`;
    }

    if (event.target.classList.contains("prev")) {
        num--;
        if (num < 1) {
            num = numImgs;
        }
        imgURL = `url("./imgs/${num}.jpg")`;
    }
    gallery.style.backgroundImage = imgURL;
}

buttons.forEach((btn) => {
    btn.addEventListener("click", swapIMG);
});

//::::::::::::::::::::::::::::::::::::::::::::::::::::
const gallery2 = document.getElementById("gallery_2");
const gallery2Left = gallery2.offsetLeft;
// const gallery2Width = gallery2.offsetWidth;
let iPosX;
const numFrames = 75;
let currentFrame = 1;
let mouseDown = false;

window.onload = () => {
    for (let imgN = 1; imgN < numFrames; imgN++) {
        var img = new Image();
        img.src = `./imgs/frames/${imgN}.jpg`;
    }
}

const stop = () => {
    mouseDown = false;
    gallery2.style.cursor = "pointer";
}

gallery2.addEventListener("mousedown", (event) => {
    mouseDown = true;
    iPosX = event.pageX - gallery2Left;

    gallery2.style.cursor = "grab";
    // event.preventDefault();
    // console.log("mouseDown");
});

gallery2.addEventListener("mousemove", (event) => {

    if (mouseDown) {
        let currentPosX = event.pageX - gallery2Left;
        let distance = currentPosX - iPosX;

        if (distance >= 10) {
            // console.log(`distance_right: ${currentFrame}`);

            currentFrame++;
            if (currentFrame > numFrames) {
                currentFrame = 1;
            }
        }
        else if (distance < -10) {
            // console.log(`distance_left: ${currentFrame}`);

            currentFrame--;
            if (currentFrame < 1) {
                currentFrame = numFrames;
            }
        }
        // else stop();
        frameURL = `url("./imgs/frames/${currentFrame}.jpg")`;
        gallery2.style.backgroundImage = frameURL;
    }
});

gallery2.addEventListener("mouseout", stop);
gallery2.addEventListener("mouseup", stop);

//::::::::::::::::::::::::::::::::::::::::::::::::::::
const gallery3 = document.getElementById("gallery_3");
const gallery3Top = gallery3.getBoundingClientRect().top;
const gallery3Bottom = gallery3.getBoundingClientRect().bottom;
let lastScroll = 0;
let currentFrame2 = 1;

window.addEventListener("scroll", (event) => {
    let currentScroll = window.scrollY;
    //document.documentElement.scrollTop || document.body.scrollTop;

    if (currentScroll > lastScroll) {
        // console.log("DOWN");
        lastScroll = currentScroll;

        currentFrame2++
        if (currentFrame2 > numFrames) {
            currentFrame2 = 1;
        }
    }
    else {
        // console.log("UP");
        lastScroll = currentScroll;

        currentFrame2--
        if (currentFrame2 < 1) {
            currentFrame2 = numFrames;
        }
    }
    frameURL = `url("./imgs/frames/${currentFrame2}.jpg")`;
    gallery3.style.backgroundImage = frameURL;

    // console.log(`LastScroll: ${lastScroll}`);
    // console.log(`currentScroll: ${currentScroll}`);
    // console.log(`gallery3Top: ${gallery3Top}`);
    // console.log(`gallery3Bottom: ${gallery3Bottom}`);
    // console.log(`currentFrame: ${currentFrame2}`);
})
