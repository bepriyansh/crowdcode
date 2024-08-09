import React from 'react'
import { ToggleTheme } from '../toggle-theme'
import Link from 'next/link'

const Header = () => {
    return (
        <div className='flex items-center justify-between w-full px-4 py-2 shadow border-b'>
            <Link href="/" className='font-semibold text-lg text-primary'>CrowD Code</Link>
            <ToggleTheme />
        </div>
    )
}

export default Header