'use client'

import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function ConfigAos () {

  useEffect(() => {
    AOS.init({
      once: true,
      disable: 'phone',
      duration: 600,
      easing: 'ease-out-sine',
    })
  })

  return null
}