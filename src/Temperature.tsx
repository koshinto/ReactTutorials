import React from 'react'

interface Props {
  scale: string
  temperature: string
  onTemperatureChange(e: string): void
}

interface State {
  temperature: string
  scale?: string
}

export default class TemperatureInput extends React.Component<Props, State> {
  constructor(props: any) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
    this.state = {temperature: ''}
  }

  handleChange(e: any): void {
    this.props.onTemperatureChange(e.target.value)
  }

  render() {
    const temperature = this.props.temperature
    const scale = this.props.scale
    const scaleNames: any = {
      c: 'Celsius',
      f: 'Fahrenheit'
    }
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange}/>
      </fieldset>
    )
  }
}
 