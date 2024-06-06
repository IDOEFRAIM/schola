import { Button } from "@/components/ui/button"

const Team = () => {
  return (
    <>
     <h1 className="text-4xl text-sky-600 my-10 mx-auto">Notre Equipe</h1>
      <div className="grid  gap-y-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center">
        <TeamCard className='md' name='IDO MARIE' imageUrl='/susan-q-yin-2JIvboGLeho-unsplash.jpg' />
        <TeamCard className='md' name='IDO MARIE' imageUrl='/susan-q-yin-2JIvboGLeho-unsplash.jpg' />
        <TeamCard className='md' name='IDO MARIE' imageUrl='/susan-q-yin-2JIvboGLeho-unsplash.jpg' />
        <TeamCard className='md' name='IDO MARIE' imageUrl='/susan-q-yin-2JIvboGLeho-unsplash.jpg' />
        <TeamCard className='md' name='IDO MARIE' imageUrl='/susan-q-yin-2JIvboGLeho-unsplash.jpg' />
        <TeamCard className='md' name='IDO MARIE' imageUrl='/susan-q-yin-2JIvboGLeho-unsplash.jpg' />
        <TeamCard className='md' name='IDO MARIE' imageUrl='/susan-q-yin-2JIvboGLeho-unsplash.jpg' />
        <TeamCard className='md' name='IDO MARIE' imageUrl='/susan-q-yin-2JIvboGLeho-unsplash.jpg' />
        <TeamCard className='md' name='IDO MARIE' imageUrl='/susan-q-yin-2JIvboGLeho-unsplash.jpg' />
        <TeamCard className='md' name='IDO MARIE' imageUrl='/susan-q-yin-2JIvboGLeho-unsplash.jpg' />

        </div> 
    </>
  )
}
export const TeamCard = ({name,imageUrl}:any)=>{
  return(
    <div className="w-[320px]  flex flex-col">
      <div className="w-[300px] h-[400px] "
              style={{ backgroundImage: `url(${imageUrl})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}
              >
        <h1 className="text-sky-600 text-lg">role</h1> 
      </div>
      <div className="mx-5">
        <h1 className="my-3 text-3xl text-sky-600">{name} </h1>
        <h1 className="text-lead mb-2">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut dolorem iste quam, doloremque laudantium modi quidem libero! Voluptas, ipsa dolores!
        </h1>
        <Button variant='primary' >Voir Plus</Button>
      </div>
    </div>
  )
}
export default Team