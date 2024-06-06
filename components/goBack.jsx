'use client'

import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

const goBack = () => {
  const router = useRouter()
  return (
    <header className=' w-full'>
    <div className="w-full text-sky-600">
            <Button
            variant='primary'
            onClick={()=>router.back()}
            ><ArrowLeft/> Revenir en arriere</Button>
          </div>
    </header>
  )
}

export default goBack
