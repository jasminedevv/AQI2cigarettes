# AQI to Cigarettes Calculator
This project is based on [work by Richard A. Muller and Elizabeth A. Muller](http://berkeleyearth.org/archive/air-pollution-and-cigarette-equivalence/). Thanks to them for working out what a cigarette is worth in terms of health-risk.

## Disclaimer
I am not a scientist or really even an academic. This is a little project I did during a weekend in the summer of 2020 when I was confined to my room because of the bad air. PRs and issues welcome - especially from real experts.

## Methods
The PM 2.5 to AQI converter uses an equation I found in the code of [this calculator](https://www.airnow.gov/aqi/aqi-calculator/). The [breakpoints](https://www.epa.gov/sites/production/files/2014-05/documents/zell-aqi.pdf) are from the EPA. I assume that one cigarette [is equal to exposure to air pollution of 22 μg/m3 for 24 hours](http://berkeleyearth.org/archive/air-pollution-and-cigarette-equivalence/).

## Technologies
AQI2Cigarettes is a static React app written in Typescript and hosted on GitHub pages. Special thanks to [GoatCounter.com](goatcounter.com) for easy privacy-forward analytics.

## Project Status
Live [here](https://jasminedevv.github.io/AQI2cigarettes/).

## News Coverage
- [My article about the project](https://medium.com/@jasminedevv/i-made-an-aqi-to-cigarettes-calculator-f407177c85c2)
- [ABC4 article by Scott Lewis](https://www.abc4.com/news/local-news/online-calculator-translates-air-pollution-index-into-number-of-cigarettes-youve-smoked/)
- [Air Quality News article by Martin Guttridge-Hewitt](https://airqualitynews.com/2023/02/07/new-air-quality-index-to-cigarettes-smoked-converter-is-it-useful/)
