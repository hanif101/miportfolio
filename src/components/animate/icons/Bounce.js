/* eslint-disable */

import React, { useState } from 'react'
import { useSpring, animated, interpolate } from 'react-spring'
import { Link } from 'react-router-dom'

import './bounce.scss'

const SqueezeSpring = ({ children }) => {
  const [state, setState] = useState(false)
  const { x, y } = useSpring({
    from: { x: !state ? 1 : 0, y: !state ? 1 : 0 },
    to: { x: 1, y: 1 },
    config: { mass: 0.5, tension: 120, friction: 2, precision: 0.001 },
    reset: state,
    onStart: (state) => setState(false)
  })

  return (
    <animated.div
      className='squeeze'
      onMouseEnter={() => setState(true)}
      style={{
        transform: interpolate(
          [
            x.interpolate({
              range: [0, 0.3, 1],
              output: [1, 1.1, 1]
            }),
            y.interpolate({
              range: [0, 0.3, 1],
              output: [1, 0.9, 1]
            })
          ],
          (x, y) => `scale(${x},${y})`
        )
      }}
    >
      {children}
    </animated.div>
  )
}

export const Bounce = ({ icons }) => {

  // console.log(icons)
  return (
    <div className='bounce'>
      {icons.map((icon, index) => (
        <span key={index}>
          <SqueezeSpring key={index}> {icon} </SqueezeSpring>
        </span>
      ))}
    </div>
  )
}
