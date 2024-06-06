import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

//define schema for users

const userSchema = z
.object({
    email:z.string().min(1,'L email n est pas present').email('email invalid'),
    password:z.string().min(1,'Le mot de passe est important').min(4,'Le mot de passe doit avoir plus de 4 lettres ou caractere')


})
export async function POST(req,res){

    try {
        const body =await req.json()
        const {email,password}=userSchema.parse(body) 
        //check if user exit
        const existingUser =await db.user.findMany({
          where:{
            AND:{
              email:email,
              password:password
            }
          }
        })
        if(!existingUser){
          return  NextResponse.json({message:'Le mot de passe et l email ne correspondent pas'},{status:401})
        }
        const {password:existingUserPassword,...rest}  =existingUser

        return  NextResponse.json({user:rest , token:'1234'},{status:201})

    } catch (error) {
      console.log(error)
        return  NextResponse.json({message:'Une erreur est arrive de notre cote.Veuillez nous contacter au numero 01479800'},{status:500})
    }
}