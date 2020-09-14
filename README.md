# AQI to Cigarettes Calculator
This project is based on [work by Richard A. Muller and Elizabeth A. Muller](http://berkeleyearth.org/archive/air-pollution-and-cigarette-equivalence/) and inspired by living on the US west coast in the year 2020.

## Disclaimer
I am neither a scientist, nor an academic of any kind. It has also been years since I failed Algebra so my work here is probably flawed. Are you a scientist or a smart person? I would love your help. Pull requests and issues are welcome! If you don't know how to use Github please email me at jasminedevv@protonmail.com and I'll submit the issue for you.

## Methods
The PM 2.5 to AQI converter uses [this equation](https://www.epa.gov/sites/production/files/2014-05/documents/zell-aqi.pdf) from the EPA. The breakpoints currently used are from [here](https://github.com/ThangLeQuoc/aqi-bot/blob/master/resources/aqi-breakpoint.json). There is a discrepancy between the breakpoints used by the EPA and AQI-bot. In the future we should just use the EPA version.

The AQI to PM 2.5 calculator is the same equation as above solved for observed PM. I have no idea if this makes sense or not.

## Project Status: UNFINISHED
TODO list:
1. Iron out bugs like how the app flips out if you put letters in any of the fields
2. Iron out the PM to AQI converter
3. Finish the AQI - PM converter
4. Get all of this checked by an expert
