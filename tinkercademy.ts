
/**
 * Use this file to define custom functions and blocks.
 * Read more at https://pxt.microbit.org/blocks/custom
 */


enum ADKeys {
    A = 1,
    B = 2,
    C = 3,
    D = 4,
    E = 5
}

enum OnOff {
    Off = 0,
    On = 1
}

/**
 * Custom blocks
 */

//% color=#0fbc11 icon="\uf121"
namespace tinkercademy {

    let crashSensorPin: DigitalPin;
    /**
     Returns the value of the moisture sensor on a scale of 0 to 100.
     */
    //% blockId=octopus_moisture weight=10 blockGap=22
    //% block="value of moisture sensor at pin %p"
    export function MoistureSensor(p: AnalogPin): number {
        return pins.map(pins.analogReadPin(p), 0, 950, 0, 100);
    }
    /**
     Toggles an LED on or off.
     */
    //% blockId=octopus_led weight=100 blockGap=30
    //% block="toggle LED at pin %p | %state"
    export function LED(p: DigitalPin, state: OnOff): void {
        pins.digitalWritePin(p, state);
    }

    /**
   Checks if the specified key on the ADkeyboard is pressed.
     */

    //% blockId=octopus_adkeyboard weight=90 blockGap=30
    //% block="key %k | is pressed on ADKeyboard at pin %p"
    export function ADKeyboard(k: ADKeys, p: AnalogPin): boolean {
        let a: number = pins.analogReadPin(p);
        if (a < 10 && k == 1) {
            return true;
        } else if (a >= 40 && a <= 60 && k == 2) {
            return true;
        } else if (a >= 80 && a <= 110 && k == 3) {
            return true;
        } else if (a >= 130 && a <= 150 && k == 4) {
            return true;
        } else if (a >= 530 && a <= 560 && k == 5) {
            return true;
        } else return false;
    }

    /**
   Checks whether the motion sensor is currently detecting any motion.
     */

    //% blockId=octopus_pir weight=80 blockGap=30
    //% block="motion detector at pin %p | detects motion"
    export function PIR(p: DigitalPin): boolean {
        let a: number = pins.digitalReadPin(p);
        if (a == 1) {
            return true;
        } else return false;
    }

    /**
   Checks whether the crash sensor is currently pressed.
     */

    //% blockId=octopus_crash weight=70 blockGap=30
    //% block="crash sensor pressed"
    export function crashSensor(): boolean {
        let a: number = pins.digitalReadPin(crashSensorPin);
        if (a == 0) {
            return true;
        } else return false;
    }


    /**
    IMPORTANT: Sets up the motion sensor.
     */


    //% blockId=octopus_crashsetup weight=75 blockGap=10
    //% block="Setup crash sensor at pin %p"
    export function crashSensorSetup(p: DigitalPin): void {
        crashSensorPin = p;
        pins.setPull(p, PinPullMode.PullUp)
    }
}
