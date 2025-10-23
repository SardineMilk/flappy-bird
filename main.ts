input.onButtonPressed(Button.A, function () {
    bird += 1
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
})
input.onButtonPressed(Button.AB, function () {
	
})
let bird = 2
let speed = 500
let pipes = [0]
loops.everyInterval(speed, function () {
    led.plotBrightness(0, bird, 255)
    speed += 0 - speed / 1000
})
