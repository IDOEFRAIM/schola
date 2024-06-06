import { Button } from "@/components/ui/button"

const Features = () => {
  return (
    <>
     <h1 className="text-4xl text-sky-600 my-10 mx-auto">Nos offres</h1>
      <div className="grid  gap-y-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-items-center">
        <FeatureCard className='md' name='Lecture numerique' imageUrl='/radu-marcusu-mbKApJz6RSU-unsplash.jpg' />
        <FeatureCard className='md' name='Lecture numerique' imageUrl='/radu-marcusu-mbKApJz6RSU-unsplash.jpg' />
        <FeatureCard className='md' name='Lecture numerique' imageUrl='/radu-marcusu-mbKApJz6RSU-unsplash.jpg' />
        <FeatureCard className='md' name='Lecture numerique' imageUrl='/radu-marcusu-mbKApJz6RSU-unsplash.jpg' />

        </div> 
    </>
  )
}
export const FeatureCard = ({name,imageUrl,textContent}:any)=>{
  return(
    <div className="w-[320px]  flex flex-col">
      <div className="w-[300px] h-[300px] "
              style={{ backgroundImage: `url(${imageUrl})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}
              >
        <h1 className="text-white text-2xl">Lecture</h1> 
      </div>
      <div className="mx-5">
        <h1 className="my-3 text-3xl text-sky-600">{name} </h1>
        <h1 className="text-lead mb-2">
            {textContent?textContent:'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aut dolorem iste quam, doloremque laudantium modi quidem libero! Voluptas, ipsa dolores!'}
        </h1>
        <Button variant='primary' >Voir Plus</Button>
      </div>
    </div>
  )
}
export default Features
