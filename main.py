def on_button_pressed_a():
    global bird
    if bird >= 0:
        bird += -1
    music.play(music.tone_playable(262, music.beat(BeatFraction.WHOLE)),
        music.PlaybackMode.IN_BACKGROUND)
input.on_button_pressed(Button.A, on_button_pressed_a)

def startTheGame():
    global spawnPipe, bird, speed, pipes, pipePositionOdd, running, score
    spawnPipe = 1
    bird = 2
    speed = 1000
    pipes = [0]
    pipePositionOdd = 0
    running = 1
    while running == 1:
        basic.clear_screen()
        speed += 0 - 1
        if spawnPipe == 1:
            spawnPipe = 0
            pipes.append(randint(0, 3))
        else:
            spawnPipe = 1
        if len(pipes) > 3:
            pipes.remove_at(0)
        if pipePositionOdd == 1:
            pipePositionOdd = 0
        else:
            pipePositionOdd = 1
        i = 0
        while i <= len(pipes) - 1:
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
        if bird == pipes[0] or bird == pipes[0] + 1:
            score += 1
        else:
            score += 0 - 1
        led.plot_brightness(0, bird, 255)
        basic.pause(speed)
    basic.show_number(score)

def on_button_pressed_ab():
    global running
    running = 0
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    global bird
    if bird < 4:
        bird += 1
    music.play(music.tone_playable(262, music.beat(BeatFraction.WHOLE)),
        music.PlaybackMode.IN_BACKGROUND)
input.on_button_pressed(Button.B, on_button_pressed_b)

score = 0
running = 0
pipePositionOdd = 0
pipes: List[number] = []
speed = 0
spawnPipe = 0
bird = 0
startTheGame()