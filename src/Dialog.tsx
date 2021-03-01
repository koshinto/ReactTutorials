import React from 'react'
import FancyBorder from './FancyBorder'

function Dialog(props: any) {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
  )
}

interface Props {}

interface State {
  login: string
}

export default class SignUpDialog extends React.Component<Props, State> {
  constructor(props : Props) {
    super(props)
    this.state = {login: ''}
    this.handleChange = this.handleChange.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }
  handleChange(e: any) {
    this.setState({login: e.target.value})
  }

  handleSignUp() {
    alert(`Welcome aboard, ${this.state.login}`)
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program"
      message="How should we refer to you?">
        <input value={this.state.login} onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>Sign Me Up!</button>
      </Dialog>
    )
  }
}