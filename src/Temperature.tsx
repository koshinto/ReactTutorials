interface Props {
  scale: string
  temperature: string
  onTemperatureChange(e: string): void
}

export default function TemperatureInput(props: Props): JSX.Element {

  const handleChange = (e: any): void => {
    props.onTemperatureChange(e.target.value)
  }

  const temperature = props.temperature
  const scale = props.scale
  const scaleNames: any = {
    c: 'Celsius',
    f: 'Fahrenheit'
  }
  return (
    <fieldset>
      <legend>Enter temperature in {scaleNames[scale]}:</legend>
      <input value={temperature} onChange={handleChange}/>
    </fieldset>
  )
}
 