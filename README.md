## PMS7003
This is an extension for PM2.5 Dust sensor PMS-7003

![PMS7003 sensor](https://github.com/narongporn/pxt-PMS7003/blob/master/images/PMS7003.png)

## Author
Narongporn Laosrisin
https://www.facebook.com/narongporn.lao

## Use as Extension
* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/narongporn/pxt-pms7003** and import

## Description
![connect](https://github.com/narongporn/pxt-PMS7003/blob/master/images/PMS7003-1.png)

Use this block to define which pins are connect to RX and TX of the sensor.


![start character](https://github.com/narongporn/pxt-PMS7003/blob/master/images/PMS7003-2.png)

Use start character in serial on data received to detect start character sending from sensor.


![read data](https://github.com/narongporn/pxt-PMS7003/blob/master/images/PMS7003-3.png)

Use read data to read sensor data into buffer.


![checksum ok?](https://github.com/narongporn/pxt-PMS7003/blob/master/images/PMS7003-4.png)

This block return true if checksum is OK. Use this block with if-then-else to determine data validation.


![PM](https://github.com/narongporn/pxt-PMS7003/blob/master/images/PMS7003-6.png)

These blocks return PM1, PM2.5 and PM10 value.


![convert](https://github.com/narongporn/pxt-PMS7003/blob/master/images/PMS7003-5.png)

In order to display the PM value correctly, use this block to convert number to string with specific length, filling blank at the end.
