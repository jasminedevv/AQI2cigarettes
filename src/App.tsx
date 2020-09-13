import React from 'react'
import './App.css'
import 'semantic-ui-react'
import { Container, Header, Input, Button } from 'semantic-ui-react'

class App extends React.Component<
  {},
  { AQI: number; hours: number; cigs: any; particles: number }
> {
  constructor (props: any) {
    super(props)

    this.state = {
      AQI: 150,
      hours: 24,
      cigs: 'stuff',
      particles: 0
    }
  }

  particles2AQI () {
    const AQI = calcAQI(this.state.particles)
    this.setState({ AQI })
  }

  AQI2cigs () {
    // placeholder while I get react shit working
    var { AQI, hours } = this.state

    // Estimated particles for 24 hours
    const PM24h = calcPM25(AQI)

    // Source: http://berkeleyearth.org/archive/air-pollution-and-cigarette-equivalence/
    const particlesPerCigPerHours = 22
    const cigs = (PM24h / particlesPerCigPerHours) / 24 * hours

    this.setState({ cigs })
  }

  render () {
    const { AQI, hours, cigs, particles } = this.state
    return (
      <div className='App'>
        <Header as='h1'>UNFINISHED AQI to Cigarettes Calculator</Header>
        <br />
        <br />
        <Container className='max-200'>
          <Input
            fluid
            label='AQI'
            value={AQI}
            onChange={e =>
              this.setState({ AQI: Number(e.currentTarget.value) })
            }
          />
          <br />
          <br />
          <Input
            fluid
            label='Hours Exposed'
            value={hours}
            onChange={e =>
              this.setState({ hours: Number(e.currentTarget.value) })
            }
          />
          <br />
          <br />
          <Button primary onClick={this.AQI2cigs.bind(this)}>
            Calculate
          </Button>
          <br />
          <br />
          <p>It's like you've smoked</p>
          <Header as='h2'>{cigs}</Header>
          <p>cigarettes</p>
          <hr></hr>
          <Header>Calculate AQI</Header>

          <br />
          <Input
            fluid
            label='PM2.5 Particles'
            value={particles}
            onChange={e =>
              this.setState({ particles: Number(e.currentTarget.value) })
            }
          />
          <br />
          <br />
          <Button primary onClick={this.particles2AQI.bind(this)}>
            Calculate
          </Button>
          <Header>{AQI}</Header>
        </Container>
      </div>
    )
  }
}

export default App

const AQITablePM25 = {
  code: 'PM2.5',
  unit: 'ug/m3',
  period: '24h',
  concentrations: [
    {
      min: 0.0,
      max: 12.0,
      index: {
        min: 0,
        max: 50
      }
    },
    {
      min: 12.1,
      max: 35.4,
      index: {
        min: 51,
        max: 100
      }
    },
    {
      min: 35.5,
      max: 55.4,
      index: {
        min: 101,
        max: 150
      }
    },
    {
      min: 55.5,
      max: 150.4,
      index: {
        min: 151,
        max: 200
      }
    },
    {
      min: 150.5,
      max: 250.4,
      index: {
        min: 201,
        max: 300
      }
    },
    {
      min: 250.5,
      max: 350.4,
      index: {
        min: 301,
        max: 400
      }
    },
    {
      min: 350.5,
      max: 500.4,
      index: {
        min: 401,
        max: 500
      }
    }
  ]
}

function getBreakpoints (AQI: number) {
  const breakpoints = AQITablePM25.concentrations.find(function (conc) {
    if (conc.index.min < AQI && conc.index.max > AQI) {
      return conc
    }
  })
  if (breakpoints === undefined) {
    throw new Error('concentration out of bounds')
  }
  return breakpoints
}

// calculates PM 2.5 concentration per 24 hours based on AQI
function calcPM25 (AQI: number) {
  const breakpoints = getBreakpoints(AQI)
  const PM_min = breakpoints.min
  const PM_max = breakpoints.max
  const AQI_min = breakpoints.index.min
  const AQI_max = breakpoints.index.max

  const PM =
    (PM_min * AQI_max - PM_min * AQI - AQI_min * PM_max + PM_max * AQI) /
    (PM_max - AQI_min)

  console.log(
    `For AQI of ${AQI}, found particle concentration of ${PM} for 24 hours`
  )
  return PM
}

function getBreakpointsParticles (particles: number) {
  const breakpoints = AQITablePM25.concentrations.find(function (conc) {
    if (conc.index.min < particles && conc.index.max > particles) {
      return conc
    }
  })
  if (breakpoints === undefined) {
    throw new Error('concentration out of bounds')
  }
  return breakpoints
}

/** Nothing below this line is working */
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
