import React, { useState } from 'react'
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


export default function Calcurator(): JSX.Element {
  const [temperature, setTemperature] = useState('')
  const [scale, setScale] = useState('c')

  const handleCelsiusChange = (temperature: string) => {
    setTemperature(temperature)
    setScale('c')
  }

  const handleFahrenheitChange = (temperature: string) => {
    setTemperature(temperature)
    setScale('f')
  }

  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature
  return (
    <div>
      <Temperature scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange} />
      <Temperature scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  )
}
