import {NextResponse} from 'next/server'
import {db} from  '@/lib/db'

export async function POST(req,res){
    const {email,oldPassword,newPassword}= await req.json()
    try {
        const existingUser = await db.user.findUnique({
            where:{
                email:email
            }
        })
        console.log(existingUser)
        if(!existingUser) {
            return NextResponse.json({error:true,message:'Aucun utilisateur ne correspond a cet utilisateur'},{status:401})
        }
        const didPasswordMatch = existingUser.password == oldPassword
        console.log(didPasswordMatch)
        if(!didPasswordMatch) {
            return NextResponse.json({error:true,message:'Desole mais votre ancien mot de passe est incorrect'},{status:401})
        }
        await db.user.update({
            where: {
                email: email,
              },
              data: {
                password: newPassword,
              },
        })
        return NextResponse.json({error:false,message:'Votre mot de passe a ete mis a jour'},{status:200})
    } catch (error) {
        console.log(error.message)
        return NextResponse.json({error:true,message:'Desole! Une erreur est arrive de notre cote'},{status:400})

    }
    
}