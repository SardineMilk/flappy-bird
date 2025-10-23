def on_button_pressed_a():
    global bird
    bird += -1
    music.play(music.tone_playable(262, music.beat(BeatFraction.WHOLE)),
        music.PlaybackMode.IN_BACKGROUND)
input.on_button_pressed(Button.A, on_button_pressed_a)

def startTheGame():
    global spawnPipe, bird, speed, pipes, pipePositionOdd
    spawnPipe = 1
    bird = 2
    speed = 500
    pipes = [0]
    pipePositionOdd = 0
    while True:
        basic.clear_screen()
        bird += 1
        led.plot_brightness(0, bird, 255)
        speed += 0 - speed / 1000
        if bird > 5:
            bird = 2

        if spawnPipe == 1:
            spawnPipe = 0
            pipes.append(randint(0, 3))
        else:
            spawnPipe = 1

        for i in range(pipes.length):
            pipex = (i*2) + pipePositionOdd
            pipey = pipes[i]
            led.plot(pipex, 0)
            led.plot(pipex, 1)
            led.plot(pipex, 2)
            led.plot(pipex, 3)
            led.plot(pipex, 4)
            led.unplot(pipex, pipey)
            led.unplot(pipex, pipey+1)
        if (pipes.length > 3
pipePositionOdd = 0
pipes: List[number] = []
speed = 0
spawnPipe = 0
bird = 0
startTheGame()