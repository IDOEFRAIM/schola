'use client'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
const page = () => {
    const [tag, settag] = useState(new Set())
  return (
    <>
      <h2 className="text-gray-600 text-lg my-4">Page des interview</h2>
      <div className="select w-full my-4">
        {
            ['aeronautique','medecine','physique','chimie','informatique'].map(x=>{
                let doesTagAdded = tag.has(x)
                return(
                    <span className="mx-2 my-4">
                        <Button
                        variant={doesTagAdded && 'primary'}
                        onClick={()=>{
                            doesTagAdded?
                            settag(prev=>prev.delete(x)):
                            settag(prev=>prev.add(x))
                        }}
                        >{x} </Button>
                    </span>
                )
            })
        }
      </div>
      <div className="grid grid-cols-1   md:grid-cols-2  xl:grid-cols-3 justify-items-center  gap-x-4 gap-y-5">
      {
        ['1st','2nd','3rd'].map(interviewCard=>{
            return(
                <div className="flex flex-col">
                        <Image
                          className="w-full h-[50vh]"
                          src='/aaron-burden-QJDzYT_K8Xg-unsplash.jpg'
                          width='200'
                          height='200'
                          alt='pic'
                        />
                        <h2 className="text-gray-600 text-2xl">Theme: <span className="text-sky-600">Aeronautique</span> </h2>
                        <Button variant={'primary'}><Link href={'/interviews/interviewIdEx'}>Voir plus</Link></Button>
               </div>
            )
        })
      }</div>
    </>
  )
}

export default page
