import {db} from '@/lib/db'
import { NextResponse } from 'next/server'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
export async function GET (){
    const allComments = await db.comment.findMany({
        include:{
            author:true,
            article:true
        }
    })
    return NextResponse.json({comment:allComments},{status:201})
}

export async function POST (req,res){
    console.log('starting')
try {
    const {articleId,text}= await req.json()
    const session = await getServerSession(authOptions)
    const email =session.user.email
    if(!session?.user){
        return NextResponse.json({message:'Vous n"etes pas connecter assurer vous d etre connecte '},{status:401})
    }
    const newComment = await db.comment.create({
        data:{
         articleId,authorEmail:email,text
        }
     })
    return NextResponse.json({message:'created ',newComment:newComment},{status:200})
} catch (error) {
    console.log(error.message)
    return NextResponse.json({message:'Une erreur est arrive.Verifiez votre connexion.Etes vous connecte a votre compte.Nous vous redirigeons vers la page de connexion'},{status:400})

}
    
}

export async function DELETE(){


    try {
        
        const email =session.user.email
        const newComment = await db.comment.create({
            data:{
             authorEmail:email,text
            }
         })
         return NextResponse.json({comment:newComment},{status:200})
    } catch (error) {
        console.log(error.message)
        return NextResponse.json({message:'il semblerait qu une erreur soit arrive de notre cote'},{status:500})

    }
}
