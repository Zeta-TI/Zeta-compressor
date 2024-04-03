'use client'

import { useTheme } from "next-themes"
import Image from 'next/image'

import LogoDark from '../../app/assets/logo-dark.png'
import LogoLight from '../../app/assets/logo-light.png'

export function LogoImage() {

    const { theme } = useTheme()

    return (

        <Image
            src={theme === 'dark' ? LogoDark : LogoLight}
            alt="Zeta"
            width={200}
            height={200}
        />
    )
}