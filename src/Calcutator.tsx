import React from 'react'
import Temperature from './Temperature'


function BoilingVerdict(props: any) {
  if (props.celsius >= 100) {
    return <p style={{color: "red"}}>The water would boil.</p>;
  }
  return <p style={{color: "blue"}}>The water would not boil.</p>;
}

function toCelsius(fahrenheit: number) {
  return (fahrenheit - 32) * 5 / 9
}

function toFahrenheit(celsius: number) {
  return (celsius * 9 / 5) + 32
}

function tryConvert(temperature: string, convert: any) {
  const input = parseFloat(temperature)
  if (Number.isNaN(input)) {
    return ''
  }
  const output = convert(input)
  const rounded = Math.round(output * 1000) / 1000
  return rounded.toString()
}

interface Props {}

interface State {
  temperature: string
  scale: 'c' | 'f'
}

export default class Calcurator extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {temperature: '', scale: 'f'}
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this)
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this)
  }

  handleCelsiusChange(temperature: string) {
    this.setState({scale: 'c', temperature})
  }

  handleFahrenheitChange(temperature: string) {
    this.setState({scale: 'f', temperature})
  }

  render() {
    const scale = this.state.scale
    const temperature = this.state.temperature
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature
    return (
      <div>
        <Temperature scale="c" temperature={celsius} onTemperatureChange={this.handleCelsiusChange} />
        <Temperature scale="f" temperature={fahrenheit} onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict celsius={parseFloat(celsius)} />
      </div>
    )
  }
}
