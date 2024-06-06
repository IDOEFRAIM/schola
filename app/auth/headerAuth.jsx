'use client'
import Link from 'next/link'
import GoBack from '@/components/goBack'
const headerAuth = () => {
  return (
    <>
    <GoBack/>
      <div className='flex flex-row w-full justify-between  text-2xl border-b-2 border-b-gray-400'>
        <Link href={'/auth/login'} className='hover:text-sky-600'>Se connecter</Link>
        <Link href={'/auth/register'} className='hover:text-sky-600'>S'inscrire</Link>

      </div>
    </>
  )
}

export default headerAuth
