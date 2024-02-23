const _next = document.getElementById("next");
const _prev = document.getElementById("prev");

const imageArray = document.getElementsByClassName("slideshow-element");

// imageArray[0].style.display = "block";
let i = 0

function forward() {
    for (let index = 0; index < imageArray.length; index++) {
        imageArray[index].style.display = "none";
    }
    if (i >= (imageArray.length-=1)) {
        i = 0;

        // imageArray[i].style.animation = "phase-in-forward .3s ease-out backwards"
        imageArray[i].style.display = "block";
    } else {
        i++

        // imageArray[i].style.animation = "phase-in-forward .3s ease-out backwards"
        imageArray[i].style.display = "block";
    }
}

function backward() {
    for (let index = 0; index < imageArray.length; index++) {
        imageArray[index].style.display = "none";
    }
    if (i <= 0) {
        i = (imageArray.length - 1);

        // imageArray[i].style.animation = "phase-in-backward .3s ease-out backwards"
        imageArray[i].style.display = "block";
    } else {
        i--
        // imageArray[i].style.animation = "phase-in-backward .3s ease-out backwards"
        imageArray[i].style.display = "block";
    }
}
_next.addEventListener("click", forward);
_prev.addEventListener("click", backward);

function idleSlide() {
    setTimeout(
        () => {
            for (let index = 0; index < imageArray.length; index++) {
                imageArray[index].style.display = "none";
            }
            if (i >= (imageArray.length-=1)) {
                i = 0;
        
                // imageArray[i].style.animation = "phase-in-forward .3s ease-out backwards"
                imageArray[i].style.display = "block";
            } else {
                i++
        
                // imageArray[i].style.animation = "phase-in-forward .3s ease-out backwards"
                imageArray[i].style.display = "block";
            }

            idleSlide();
        }, 5000
    )
}

idleSlide();
