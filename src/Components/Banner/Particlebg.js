import React from 'react'
import particleConfig from '../../config/particle-config'
import Particles from "react-tsparticles"

export default function Particlebg() {
  return (
    <Particles params={particleConfig}></Particles>
  )
}