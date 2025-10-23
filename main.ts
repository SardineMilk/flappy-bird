input.onButtonPressed(Button.A, function () {
    if (bird >= 0) {
        bird += -1
    }
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
})
function startTheGame () {
    let i: number;
let pipex: number;
let pipey: number;
spawnPipe = 1
    bird = 2
    speed = 1000
    pipes = [0]
    pipePositionOdd = 0
    running = 1
    while (running == 1) {
        basic.clearScreen()
        speed += 0 - 1
        if (spawnPipe == 1) {
            spawnPipe = 0
            pipes.push(randint(0, 3))
        } else {
            spawnPipe = 1
        }
        if (pipes.length > 3) {
            pipes.removeAt(0)
        }
        if (pipePositionOdd == 1) {
            pipePositionOdd = 0
        } else {
            pipePositionOdd = 1
        }
        i = 0
        while (i <= pipes.length - 1) {
            pipex = i * 2 + pipePositionOdd
            pipey = pipes[i]
            led.plot(pipex, 0)
            led.plot(pipex, 1)
            led.plot(pipex, 2)
            led.plot(pipex, 3)
            led.plot(pipex, 4)
            led.unplot(pipex, pipey)
            led.unplot(pipex, pipey + 1)
            i += 1
        }
        if (bird == pipes[0] || bird == pipes[0] + 1) {
            score += 1
        } else {
            score += 0 - 1
        }
        led.plotBrightness(0, bird, 255)
        basic.pause(speed)
    }
    basic.showNumber(score)
}
input.onButtonPressed(Button.AB, function () {
    running = 0
})
input.onButtonPressed(Button.B, function () {
    if (bird < 4) {
        bird += 1
    }
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
})
let score = 0
let running = 0
let pipePositionOdd = 0
let pipes: number[] = []
let speed = 0
let spawnPipe = 0
let bird = 0
startTheGame()
