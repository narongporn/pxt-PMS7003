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
Use this block to define which pins are connect to RX and TX of the sensor.

Use start character in serial on data received to detect start character sending from sensor.

Use read data to read sensor data into buffer.

This block return true if checksum is OK. Use this block with if-then-else to determine data validation.

These blocks return PM1, PM2.5 and PM10 value.

In order to display the PM value correctly, use this block to convert number to string with specific length, filling blank at the end.

#### Metadata (used for search, rendering)

* for PXT/microbit
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>
