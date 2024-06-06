'use client'
import { useState } from 'react'
import InterviewCard from './interviewCard'
import Image from 'next/image'
const page = () => {
    const [questionNumber, setquestionNumber] = useState(0)
    const questions = [
        {
            question:'que fault il faire pour entrer a l asecna',
            reponse:'    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorum laborum accusantium excepturi odit quibusdam. Nemo culpa, distinctio placeat vitae debitis excepturi fugiat sunt blanditiis ullam deleniti. Aperiam, rerum minus!'
        },
        {
            question:'Pouvez vous nous raconter des difficultes que vous avez rencontres',
            reponse:'    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorum laborum accusantium excepturi odit quibusdam. Nemo culpa, distinctio placeat vitae debitis excepturi fugiat sunt blanditiis ullam deleniti. Aperiam, rerum minus!'
        },
            {
            question:'Pouvez vous nous citer des metiers de l aeronautique',
            reponse:'    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dolorum laborum accusantium excepturi odit quibusdam. Nemo culpa, distinctio placeat vitae debitis excepturi fugiat sunt blanditiis ullam deleniti. Aperiam, rerum minus!'
        }
    ]
  return (
    <div className='flex flex-col md:flex-row justify-around items-center mt-4'>
        <Image
        src={'/reading.jpg'}
        width={400}
        height={400}
        alt='interview pic'
        />
      <InterviewCard
      questions={questions}/>
    </div>
  )
}

export default page
