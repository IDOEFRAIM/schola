import Link from 'next/link'
import { Button } from '@/components/ui/button'

const footer = () => {
  return (
    <>
      <h1 className="border-t-2 border-t-gray-400 pt-4 mt-4 text-md text-gray-600">Veux tu changer ton mot de passe...
      <Button variant='primary'><Link href='/auth/resetPassword'>CHANGER</Link></Button>...
      Si tu as oublie ton mot de passe, tu peux nous contacter au <div className="text-sky-600 text-sm">01479800</div> pour que nous reintialisons ton mot de passe apres des verifications.
       </h1>
    </>
  )
}

export default footer
