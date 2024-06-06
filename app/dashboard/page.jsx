import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import Link from 'next/link'
const page =async () => {
  const session = await getServerSession(authOptions)
    if (session?.user) {
      return <h3 className='text-3xl'> Bienvenu! <span className='text-2xl text-sky-600'> {session?.user.username} </span> </h3>

    }

  return (
    <div>
      <h3> S il te plait inscrit toi <Link href='/api/auth/signin'>ici</Link> </h3>
    </div>
  )
}

export default page
