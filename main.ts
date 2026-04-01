input.onButtonPressed(Button.B, function () {
    manyetik = input.magneticForce(Dimension.X)
    led.plotBarGraph(
    manyetik,
    1023,
    true
    )
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        . . . . .
        `)
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    soundExpression.happy.playUntilDone()
    basic.showIcon(IconNames.Asleep)
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
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        `)
})
let manyetik = 0
soundExpression.hello.playUntilDone()
basic.showIcon(IconNames.Asleep)
