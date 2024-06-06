import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from 'next/link'
const categories = () => {
  const array = [
    'marie',
    'joel',
    'manuella',
    'henrie',
    'ido'
  ]
  return (
    <div className="grid grid-cols-3 space-y-6 space-x-2">
      {
      array.map((x,i) =>{
        return(
          <div className={`col-span-3  flex  justify-between ${i===0?' flex-col  md:flex-row ':'base:flex-col md:flex-col  md:col-span-1'}`} >
            <Image
            className="rounded-lg w-[75%]"
            width={'400'}
            height={'400'}
            alt="pic"
            src={'/janko-ferlic-sfL_QOnmy00-unsplash.jpg'}/>
            <div className="flex flex-col justify-evenly">
              <h3 className="text-sky-600 text-xl">{x}</h3> 
              <h5>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat amet commodi culpa voluptatibus beatae nisi tempore ducimus inventore dolore sapiente!</h5>
              <p className="text-gray-600 text-sm">2 decembre 2024</p>
              <Button className="w-[100px] " variant={'primary'}> <Link href='/blog/maths'>Voir plus</Link> </Button>
            </div>
          </div>
        )
      })}
 
    </div>
  )
}

export default categories
