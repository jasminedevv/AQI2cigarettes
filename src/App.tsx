import React from 'react'
import './App.css'
import 'semantic-ui-react'
import { calcPM25 } from './utils'
import { Container, Header, Input, Button } from 'semantic-ui-react'

class App extends React.Component<
  {},
  { AQI: number; hours: number; cigs: any; particles: number }
> {
  constructor (props: any) {
    super(props)

    this.state = {
      AQI: 0,
      hours: 24,
      cigs: 0,
      particles: 0
    }
  }

  AQI2cigs () {
    // placeholder while I get react shit working
    var { AQI, hours } = this.state

    // Estimated particles for 24 hours
    const PM24h = calcPM25(AQI)

    // Source: http://berkeleyearth.org/archive/air-pollution-and-cigarette-equivalence/
    const particlesPerCigPerHours = 22
    const cigs = (PM24h / particlesPerCigPerHours / 24) * hours

    this.setState({ cigs })
  }

  render () {
    const { AQI, hours, cigs } = this.state
    const cigsLegible = cigs.toFixed(2)

    return (
      <div className='App'>
        <Header as='h1'>AQI to Cigarettes Calculator</Header>
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
          <Header as='h2'>{cigsLegible}</Header>
          <p>cigarettes</p>

          <p className='red'>
            DISCLAIMER: I haven't gotten this validated by an expert yet so take
            these results with a grain of salt for now.
          </p>
        </Container>
      </div>
    )
  }
}

export default App
