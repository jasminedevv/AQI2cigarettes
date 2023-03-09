import React from 'react'
import './App.css'
import 'semantic-ui-react'
import { calcPM25 } from './utils'
import { Container, Header, Input, Button } from 'semantic-ui-react'

class App extends React.Component<
  {},
  { AQI: any; hours: any; cigs: any; particles: any; warning: string }
> {
  constructor (props: any) {
    super(props)

    this.state = {
      AQI: '',
      hours: 24,
      cigs: 0,
      particles: 0,
      warning: ''
    }
  }

  AQI2cigs () {
    // placeholder while I get react shit working
    var { AQI, hours } = this.state

    try {
      AQI = parseInt(AQI)
      hours = Number(hours)
      if (isNaN(AQI)) {
        this.setState({
          warning:
            'AQI must be a number from 0 to 1000. Please no letters or symbols.'
        })
        return
      }
      if (isNaN(hours)) {
        this.setState({
          warning:
            'Number of hours must be a number. Please no letters or symbols.'
        })
        return
      }
    } catch (e) {
      console.log(e)
      this.setState({ warning: "That's not a real number! Please try again." })
      return
    }
    // Estimated particles for 24 hours
    const PM24h = calcPM25(AQI)

    // Source: http://berkeleyearth.org/archive/air-pollution-and-cigarette-equivalence/
    const particlesPerCigPerHours = 22
    const cigs = (PM24h / particlesPerCigPerHours / 24) * hours

    this.setState({ cigs })
    this.setState({ warning: '' })
  }

  render () {
    const { AQI, hours, cigs, warning } = this.state
    const cigsLegible = cigs.toFixed(2)

    return (
      <div className='App'>
        <br />
        <br />
        <Header as='h1'>AQI to Cigarettes Calculator</Header>
        <br />
        <br />
        <p>
          Input the Air Quality Index (AQI) where you live and how many hours
          you've been exposed. The calculator will tell you what the impact to
          your health is in cigarettes. Make sure to use PM 2.5 AQI otherwise
          results will not be accurate!
        </p>
        <br />
        <br />
        <Container className='max-200'>
          <Input
            fluid
            label='AQI'
            value={AQI}
            onChange={e => this.setState({ AQI: e.currentTarget.value })}
          />
          <br />
          <br />
          <Input
            fluid
            label='Hours Exposed'
            value={hours}
            onChange={e => this.setState({ hours: e.currentTarget.value })}
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

          <p className='red'>{warning}</p>
          <div id='info'>
            <br />
            <hr></hr>
            <Header>How does this work?</Header>
            <p>
              <b>Step 1</b>: I converted AQI back to PM 2.5 particle
              concentration. That's the number of particles in the air that are
              a certain size. For this operation I used the same equation as <a href='https://www.airnow.gov/aqi/aqi-calculator/'>
                the Air Now calculator
              </a>
              .
            </p>
            <p>
              <b>Step 2</b>: based on <a href='http://berkeleyearth.org/archive/air-pollution-and-cigarette-equivalence/'>this research</a>, the health impact of a particle concentration of 22μg/m3 per 24 hours is equivalent to about 1 cigarette. I divided the
              concentration from step 1 by 22 and 24, then multiplied by the
              number of hours exposed. This isn't going to be
              completely accurate since some kinds of air pollution are worse
              (wood smoke is apparently not as bad for you, for example) and I'm
              sure cigarettes vary in lethality. Note that I am looking at <i>impact to health</i>, not particles inhaled.
            </p>
            <p>
              You'll notice the results are slightly off from what the
              researchers got. That's because when you convert particle density
              to AQI - and then back - you end up rounding a bit.
            </p>
            <i>
              Is my logic off? Did I science wrong? Please <a href='https://github.com/jasminedevv/AQI2cigarettes'>leave an issue on GitHub</a>. For more information about why I built this the way I did, <a href="https://medium.com/@jasminedevv/i-made-an-aqi-to-cigarettes-calculator-f407177c85c2">read this</a>.
            </i>
            <br></br>
            <br></br>
            <i>
              If you write something about this project I would love to hear about it! My email address is my handle @protonmail.com.
            </i>
            <br></br>
            <br></br>
            <i>
              Originally Published September 2020. Last updated March 2023.
            </i>
          </div>
          <br />
          <br />
        </Container>
        <script type="text/javascript" src="http://www.websitegoodies.com/counter.php?id=74902&color="></script>
      </div>
    )
  }
}

export default App
