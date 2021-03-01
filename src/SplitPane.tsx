import React from 'react'

function SplitPane(props: any) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  )
}

export default function RenderSplitPane() {
  const left = <p>Contact</p>
  const right = <p>Chat</p>
  
  return (
    <SplitPane
      left={left}
      right={right}
    />
  )
}