input.onGesture(Gesture.EightG, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
    music.play(music.createSoundExpression(WaveShape.Noise, 5000, 5000, 206, 206, 5000, SoundExpressionEffect.Tremolo, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # . . . #
        # # . # #
        # . . . #
        # . . . .
        . # # # .
        `)
    basic.pause(500)
    basic.showIcon(IconNames.Asleep)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . . . .
        # . . . .
        . # # # .
        `)
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.A, function () {
    soundExpression.happy.playUntilDone()
    basic.showIcon(IconNames.Heart)
    basic.pause(0.1)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(0.1)
    basic.showIcon(IconNames.Heart)
    basic.pause(0.1)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(0.1)
    basic.showIcon(IconNames.Heart)
    basic.pause(0.1)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(0.1)
    basic.showIcon(IconNames.Heart)
    basic.pause(0.1)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(0.1)
    basic.showIcon(IconNames.Heart)
    basic.pause(0.1)
    basic.showIcon(IconNames.SmallHeart)
    basic.showIcon(IconNames.Asleep)
})
input.onButtonPressed(Button.AB, function () {
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.B, function () {
    manyetik = input.magneticForce(Dimension.X)
    led.plotBarGraph(
    manyetik,
    1023,
    true
    )
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Sad)
    soundExpression.sad.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.Happy)
    soundExpression.happy.playUntilDone()
    basic.showIcon(IconNames.Asleep)
})
let manyetik = 0
soundExpression.hello.playUntilDone()
basic.showIcon(IconNames.Asleep)
