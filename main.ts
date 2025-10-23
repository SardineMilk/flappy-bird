input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    bird += -1
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.InBackground)
})
function startTheGame() {
    let pipex: number;
    let pipey: number;
    
    spawnPipe = 1
    bird = 2
    speed = 500
    pipes = [0]
    pipePositionOdd = 0
    while (true) {
        basic.clearScreen()
        bird += 1
        led.plotBrightness(0, bird, 255)
        speed += 0 - speed / 1000000000
        if (bird > 5) {
            bird = 2
        }
        
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
        
        for (let i = 0; i < pipes.length; i++) {
            pipex = i * 2 + pipePositionOdd
            pipey = pipes[i]
            led.plot(pipex, 0)
            led.plot(pipex, 1)
            led.plot(pipex, 2)
            led.plot(pipex, 3)
            led.plot(pipex, 4)
            led.unplot(pipex, pipey)
            led.unplot(pipex, pipey + 1)
        }
    }
}

let pipePositionOdd = 0
let pipes : number[] = []
let speed = 0
let spawnPipe = 0
let bird = 0
startTheGame()
