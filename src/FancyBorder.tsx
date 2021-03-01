import React from 'react'

export default function FancyBorder(props: any): JSX.Element {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  )
}
