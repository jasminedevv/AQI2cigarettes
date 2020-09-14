// pulled from page 11 of https://www.epa.gov/sites/production/files/2014-05/documents/zell-aqi.pdf
const AQITablePM25 = {
  concentrations: [
    {
      min: 0,
      max: 15.5,
      index: {
        min: 0,
        max: 50
      }
    },
    {
      min: 15.5,
      max: 40.5,
      index: {
        min: 50,
        max: 100
      }
    },
    {
      min: 40.5,
      max: 65.5,
      index: {
        min: 100,
        max: 150
      }
    },
    {
      min: 65.5,
      max: 150.5,
      index: {
        min: 150,
        max: 200
      }
    },
    {
      min: 150.5,
      max: 250.5,
      index: {
        min: 200,
        max: 300
      }
    },
    {
      min: 250.5,
      max: 500.5,
      index: {
        min: 300,
        max: 400
      }
    },
    {
      min: 500.5,
      max: 99999999999, // yea I know
      index: {
        min: 400,
        max: 99999999999
      }
    }
  ]
}

/** Get the upper and lower bounds of particle concentration for corresponding AQI */
function getBreakpoints (AQI: number) {
  const breakpoints = AQITablePM25.concentrations.find(function (conc) {
    if (conc.index.min <= AQI && conc.index.max > AQI) {
      return conc
    }
  })
  if (breakpoints === undefined) {
    throw new Error(`AQI out of bounds. AQI: ${AQI}`)
  }
  return breakpoints
}

/** Calculate PM 2.5 concentration per 24 hours based on AQI */
function calcPM25 (AQI: number) {

  const breakpoints = getBreakpoints(AQI)
  // particle concentration
  const PM_min = breakpoints.min
  const PM_max = breakpoints.max
  // air quality index
  const AQI_min = breakpoints.index.min
  const AQI_max = breakpoints.index.max

  // particle concentration based on given AQI
  // this equation is based on the one used here: https://www.airnow.gov/aqi/aqi-calculator/
  const PM = ((AQI - AQI_min) / (AQI_max - AQI_min)) * (PM_max - PM_min) + PM_min

  return PM
}

export { calcPM25 }