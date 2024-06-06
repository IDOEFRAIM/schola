import { ArrowRight } from "lucide-react"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
const interviewCard = ({questions}) => {
    const [questionNumber, setquestionNumber] = useState(0)
    
  return (
    <div className='w-[300px]  flex flex-col justify-around'>
      <header className='text-3xl text-sky-600 my-6  border-b-gray-400 border-b-2'>
        <Button
        disabled={questionNumber<=0}
         onClick={()=>setquestionNumber(prev=>prev-=1)}>
             <ArrowLeft/>
            
        </Button>
        Question {questionNumber }
        <Button
        disabled={questionNumber>=questions.length-1}
         onClick={()=>{
            setquestionNumber(prev=>prev+=1)
            console.log(questionNumber)
         }}>
           <ArrowRight/>
        </Button>
        </header>
      <h2 className="text-2xl text-gray-sky-500 mb-6 ">
        <span className="text-sky-600">Ouedraogo Ali:</span> {questions[questionNumber].question}
    </h2>
      <h2 className="text-lg text-gray-600">
      <span className="text-sky-600">Kabore Pierre:</span> {questions[questionNumber].reponse}
    </h2>
    </div>
  )
}

export default interviewCard
