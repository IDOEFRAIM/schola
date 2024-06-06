import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { z } from "zod";

//define schema for users

const userSchema = z
.object({
    username:z.string().min(1,'Le nom d utilisateur est important').max(100),
    email:z.string().min(1,'L email n est pas present').email('email invalid'),
    password:z.string().min(1,'Le mot de passe est important').min(8,'Le mot de passe doit avoir plus de 8 lettres ou caractere')


})
export async function POST(req,res){

    try {
        const body =await req.json()
        const {email,username,password}=userSchema.parse(body) 
        
        //check if user exitconsole.log(email,username,password)
        const existingUser =await db.user.findUnique({
            where:{email:email}
        })
        if(existingUser){
            return  NextResponse.json({user: null,message:'Cet email est deja utilise.Essaye de changer d email'},{status:401})
        }
        const newUser = await db.user.create({
            data:{
                username,email,password
            }
        })
        const {password:newUserPassword,...rest}  =newUser
        return  NextResponse.json({user: rest,message:'Votre compte a ete cree'},{status:201})

    } catch (error) {
        return  NextResponse.json({message:'Une erreur est arrive de notre cote.Veuillez nous contacter au numero 01479800',error:error.message},{status:500})
    }
}