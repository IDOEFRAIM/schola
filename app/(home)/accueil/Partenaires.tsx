import { Button } from "@/components/ui/button"

const Partenaires = () => {
  return (
    <>
     <h1 className="text-4xl text-sky-600 my-10 mx-auto">Nos partenaires</h1>
     <p className="text-lead text-gray-500 mb-5 text-center">Nous tenons encore a remercier nos partenaires qui nous ont fait confiance!</p>
      <div className="grid  gap-y-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center">
        <PartenaireCard className='md' name="helper's name" imageUrl='/susan-q-yin-2JIvboGLeho-unsplash.jpg' />
        <PartenaireCard className='md' name="helper's name" imageUrl='/susan-q-yin-2JIvboGLeho-unsplash.jpg' />
        <PartenaireCard className='md' name="helper's name" imageUrl='/susan-q-yin-2JIvboGLeho-unsplash.jpg' />

        </div> 
    </>
  )
}
export const PartenaireCard = ({name,imageUrl}:any)=>{
  return(
    <div className="w-[320px]  flex flex-col">
      <div className="w-[300px] h-[400px] "
              style={{ backgroundImage: `url(${imageUrl})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}
              >
        <h1 className="text-sky-600 text-lg">filiere</h1> 
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
export default Partenaires
