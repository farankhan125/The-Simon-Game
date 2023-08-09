// Some Declarations in the game used across the .js file (BELOW CODE PURPOSE)

var flagOfClicks = false
var greenSound = new Audio("sounds/green.mp3");
var redSound = new Audio("sounds/red.mp3");
var yellowSound = new Audio("sounds/yellow.mp3");
var blueSound = new Audio("sounds/blue.mp3");
var wrongSound = new Audio("sounds/wrong.mp3")
var correctSound = new Audio("sounds/correct.mp4")


// The Game will start by clicking any key in the keyboard (BELOW CODE PURPOSE)

$(document).one("keydown touchstart", start)


// Event listeners are added to all four boxes in the game (BELOW CODE PURPOSE)

$(".div-sub1").click(function () {
    var num1 = 1
    $(".div-sub1").addClass("clicking-green")
    setTimeout(function () {
        $(".div-sub1").removeClass("clicking-green")
    }, 100)
    if (flagOfClicks === true) {
        if (num1 != expectedArray[current]) {
            gameOver()
        } else if ((clickArray.length + 1) === expectedArray.length) {
            correctSound.play()
            nextLevel()
        } else {
            greenSound.play()
            clickArray.push(num1)
            current++
        }
    }
})

$(".div-sub2").click(function () {
    var num2 = 2
    $(".div-sub2").addClass("clicking-red")
    setTimeout(function () {
        $(".div-sub2").removeClass("clicking-red")
    }, 100)
    if (flagOfClicks === true) {
        if (num2 != expectedArray[current]) {
            gameOver()
        } else if ((clickArray.length + 1) === expectedArray.length) {
            correctSound.play()
            nextLevel()
        } else {
            redSound.play()
            clickArray.push(num2)
            current++
        }
    }
})

$(".div-sub3").click(function () {
    var num3 = 3
    $(".div-sub3").addClass("clicking-yellow")
    setTimeout(function () {
        $(".div-sub3").removeClass("clicking-yellow")
    }, 100)
    if (flagOfClicks === true) {
        if (num3 != expectedArray[current]) {
            gameOver()
        } else if ((clickArray.length + 1) === expectedArray.length) {
            correctSound.play()
            nextLevel()
        } else {
            yellowSound.play()
            clickArray.push(num3)
            current++
        }
    }
})

$(".div-sub4").click(function () {
    var num4 = 4
    $(".div-sub4").addClass("clicking-blue")
    setTimeout(function () {
        $(".div-sub4").removeClass("clicking-blue")
    }, 100)
    if (flagOfClicks === true) {
        if (num4 != expectedArray[current]) {
            gameOver()
        } else if ((clickArray.length + 1) === expectedArray.length) {
            correctSound.play()
            nextLevel()
        } else {
            blueSound.play()
            clickArray.push(num4)
            current++
        }
    }
})


// Functions that are called according to the situation (BELOW CODE PURPOSE)

function start() {
    window.expectedArray = []
    window.clickArray = []
    window.current = 0
    window.count = 1
    $("h1").text("Level " + count)
    patternOfClicks()
}

function gameOver() {
    flagOfClicks = false
    $("body").addClass("game-over")
    wrongSound.play()
    setTimeout(function() {
        $("body").removeClass("game-over")
    },200)
    $("h1").text("Game Over! Press any key to start again")
    $(document).one("keydown touchstart", start)
}

function nextLevel() {
    flagOfClicks = false
    $("body").addClass("win")
    setTimeout(function() {
        $("body").removeClass("win")
    },200)
    $("h1").text("Level " + (count + 1))
    expectedArray = []
    clickArray = []
    current = 0
    count++
    patternOfClicks()
}

function patternOfClicks() {
    window.intervalID = setInterval(function () {
        randomNum = Math.floor((Math.random() * 4) + 1)
        expectedArray.push(randomNum)
        setTimeout(function () {
            $(".div-sub" + randomNum).addClass("effect")
            patternSound()
        }, 1000)
        setTimeout(function () {
            $(".div-sub" + randomNum).removeClass("effect")
        }, 1300)
        if (expectedArray.length === count) {
            timer()
        }
    }, 1310)
}

function patternSound() {
    switch (randomNum) {
        case 1:
            greenSound.play()
            break;
        case 2:
            redSound.play()
            break;
        case 3:
            yellowSound.play()
            break;
        case 4:
            blueSound.play()
            break;
        default:
    }
}

function timer() {
    setTimeout(function () {
        clearInterval(intervalID)
        setTimeout(function () {
            flagOfClicks = true
        }, 1300)
    }, 0)
}
