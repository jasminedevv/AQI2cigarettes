export const AQITablePM25 = {
  code: 'PM2.5',
  unit: 'ug/m3',
  period: '24h',
  concentrations: [
    {
      min: 0,
      max: 15,
      index: {
        min: 0,
        max: 50
      }
    },
    {
      min: 15,
      max: 40,
      index: {
        min: 50,
        max: 100
      }
    },
    {
      min: 40,
      max: 65,
      index: {
        min: 100,
        max: 150
      }
    },
    {
      min: 65,
      max: 150,
      index: {
        min: 150,
        max: 200
      }
    },
    {
      min: 150,
      max: 250,
      index: {
        min: 200,
        max: 300
      }
    },
    {
      min: 250,
      max: 500,
      index: {
        min: 300,
        max: 400
      }
    },
    {
      min: 500,
      max: 99999999999,
      index: {
        min: 400,
        max: 99999999999
      }
    }
  ]
}

function getBreakpointsParticles (particles: number) {
  const breakpoints = AQITablePM25.concentrations.find(function (conc) {
    if (conc.index.min <= particles && conc.index.max > particles) {
      return conc
    }
  })
  if (breakpoints === undefined) {
    throw new Error(`concentration out of bounds: ${particles}`)
  }
  return breakpoints
}

function calcAQI (inputConcentration: number) {
  const breakpoints = getBreakpointsParticles(inputConcentration) // should be
  const PM_observed = inputConcentration
  const PM_min = breakpoints.min
  const PM_max = breakpoints.max
  const AQI_min = breakpoints.index.min
  const AQI_max = breakpoints.index.max

  // solved for AQI from https://www.epa.gov/sites/production/files/2014-05/documents/zell-aqi.pdf
  const AQI =
    ((PM_observed - PM_min) * (AQI_max - AQI_min)) / (PM_max - PM_min) + AQI_min

  return AQI
}

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

// calculates PM 2.5 concentration per 24 hours based on AQI
// None of this works currently

function calcPM25 (AQI: number) {
  const breakpoints = getBreakpoints(AQI)
  const PM_min = breakpoints.min
  const PM_max = breakpoints.max
  const AQI_min = breakpoints.index.min
  const AQI_max = breakpoints.index.max

  console.log(breakpoints)

  // const PM =
  //   (PM_min * AQI_max - PM_min * AQI - AQI_min * PM_max + PM_max * AQI) /
  //   (PM_max - AQI_min)

  const PM =
    ((PM_max - PM_min) * (AQI - AQI_min)) / (AQI_max - AQI_min) + PM_min

  // console.log(
  //   `For AQI of ${AQI}, found particle concentration of ${PM} for 24 hours`
  // )
  return PM
}

export { calcPM25, calcAQI }