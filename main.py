def on_button_pressed_a():
    basic.show_icon(IconNames.HEART)
    soundExpression.happy.play_until_done()
    basic.show_icon(IconNames.ASLEEP)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_screen_down():
    basic.show_leds("""
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        . . . . .
        """)
input.on_gesture(Gesture.SCREEN_DOWN, on_gesture_screen_down)

def on_button_pressed_ab():
    basic.show_leds("""
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        """)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    basic.show_leds("""
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        . . . . .
        """)
    basic.pause(10000)
    basic.show_leds("""
        . . . . .
        # # . # #
        . . . . .
        . # # # .
        . . . . .
        """)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    basic.show_icon(IconNames.SAD)
    soundExpression.sad.play_until_done()
    basic.show_icon(IconNames.ASLEEP)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_logo_pressed():
    basic.show_icon(IconNames.HAPPY)
    soundExpression.happy.play_until_done()
    basic.show_icon(IconNames.ASLEEP)
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

soundExpression.hello.play_until_done()
basic.show_icon(IconNames.ASLEEP)