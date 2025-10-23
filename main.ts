input.onButtonPressed(Button.A, function () {
    bird += -1
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
})
function startTheGame () {
    bird = 2
    speed = 500
    pipes = [0]
    while (true) {
        basic.clearScreen()
        bird += 1
        led.plotBrightness(0, bird, 255)
        speed += 0 - speed / 1000
        if (bird > 5) {
            bird = 2
        }
        basic.pause(speed)
    }
}
let pipes: number[] = []
let speed = 0
let bird = 0
startTheGame()
