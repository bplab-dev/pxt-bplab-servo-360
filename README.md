# Servo 360 Extension for MakeCode

![Servo Image](./icon.png)

This extension allows you to control a 360-degree continuous rotation servo motor with the micro:bit.

## Use as Extension

This repository can be added as an **extension** in MakeCode.

* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **bplab-dev/pxt-bplab-servo-360** and import

## 🚀 Features

* Easy control of 360-degree continuous rotation servo motors
* Support for both full-speed and variable-speed rotation
* Simple blocks for motor control in both directions
* Ability to turn off motor to save power
* Can be registered as a MakeCode extension for easy use
* Support for Korean

## Blocks

### 🔍 Summary: What each block does

| **Block ID**                 | **Function**                                   |
|-----------------------------|-----------------------------------------------|
| [`spinOneWay`](#1-spin-one-way-block) | Spin motor in one direction at full speed |
| [`spinOtherWay`](#2-spin-other-way-block) | Spin motor in opposite direction at full speed |
| [`spinOneWayWithSpeed`](#3-spin-one-way-with-speed-block) | Spin motor in one direction with variable speed |
| [`spinOtherWayWithSpeed`](#4-spin-other-way-with-speed-block) | Spin motor in opposite direction with variable speed |
| [`turnOffMotor`](#5-turn-off-motor-block) | Turn off the motor |

### 1. Spin One Way Block

* 🔹 Description
  * Spins the servo motor in one direction at full speed
  * Default pin is P1

* ✅ Usage example

  ```blocks
  // Spin motor at full speed
  servo360.spinOneWay(AnalogPin.P1)
  ```

### 2. Spin Other Way Block

* 🔹 Description
  * Spins the servo motor in the opposite direction at full speed
  * Default pin is P1

* ✅ Usage example

  ```blocks
  // Spin motor in opposite direction
  servo360.spinOtherWay(AnalogPin.P1)
  ```

### 3. Spin One Way With Speed Block

* 🔹 Description
  * Spins the motor in one direction with variable speed
  * Speed range: 0 to 100
  * Default pin is P1, default speed is 50

* ✅ Usage example

  ```blocks
  // Spin at 75% speed
  servo360.spinOneWayWithSpeed(AnalogPin.P1, 75)
  ```

### 4. Spin Other Way With Speed Block

* 🔹 Description
  * Spins the motor in the opposite direction with variable speed
  * Speed range: 0 to 100
  * Default pin is P1, default speed is 50

* ✅ Usage example

  ```blocks
  // Spin opposite way at 25% speed
  servo360.spinOtherWayWithSpeed(AnalogPin.P1, 25)
  ```

### 5. Turn Off Motor Block

* 🔹 Description
  * Turns off the motor at the specified pin
  * Default pin is P1

* ✅ Usage example

  ```blocks
  // Turn off the motor
  servo360.turnOffMotor(AnalogPin.P1)
  ```

## 📜 License

MIT License

## 💡 About BPLab

BPLab is a specialized company that provides coding education that anyone can easily learn. We provide in-person and online coding education for children, teens, adults, institutions, organizations, small groups, and schools in Korea in various fields such as IoT, artificial intelligence, micro:bit and Arduino.

We are also leading the way in developing and distributing coding education kits that allow learners to build, program, and experience the principles of coding. These kits utilize microcontrollers such as Arduino and micro:bit, as well as various sensors. This micro:bit extension is available for use in courses taught by BPLab.

Visit our websites:

* Korea: [https://bplab.kr](https://bplab.kr)
* Global: [https://bplab-us.com](https://bplab-us.com)
* Japan: [https://bplab-jp.com](https://bplab-jp.com)

## 📍 Supported targets

* for PXT/microbit

<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
