import { ReactNode } from 'react'
import HeaderSign from '../../components/header-sign';

export default function SignLayout({ children }: { children: ReactNode }){

  return (
    <div className='flex flex-col min-h-screen overflow-hidden'>
      <HeaderSign />
      {children}
    </div>
  )
}
