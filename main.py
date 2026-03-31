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

def on_sound_loud():
    basic.show_leds("""
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        """)
input.on_sound(DetectedSound.LOUD, on_sound_loud)

basic.show_icon(IconNames.ASLEEP)