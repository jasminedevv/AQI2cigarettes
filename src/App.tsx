import React from 'react'
import './App.css'
import 'semantic-ui-react'
import { Container, Header, Input, Button } from 'semantic-ui-react'

class App extends React.Component<
  {},
  { AQI: number; hours: number; cigs: any }
> {

  constructor (props: any) {
    super(props)

    this.state = {
      AQI: 150,
      hours: 24,
      cigs: "stuff"
    }
  }

  AQI2cigs () {
    // placeholder while I get react shit working
    var { AQI, hours } = this.state
    const cigs = AQI + hours
    this.setState({ cigs: cigs })
    this.forceUpdate()
  }

  render () {
    const { AQI, hours, cigs } = this.state
    return (
      <div className='App'>
        <Header as='h1'>AQI to Cigarettes Calculator</Header>
        <br />
        <br />
        <Container className='max-200'>
          <Input fluid 
            label='AQI' 
            value={AQI}
            onChange={e => this.setState({AQI: Number(e.currentTarget.value) })} 
          />
          <br />
          <br />
          <Input fluid 
            label='Hours Exposed' 
            value={hours}
            onChange={e => this.setState({hours: Number(e.currentTarget.value) })} 
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
        </Container>
      </div>
    )
  }
}

export default App
