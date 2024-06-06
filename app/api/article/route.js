import {db} from '@/lib/db'
import { NextResponse } from 'next/server'

export async function GET(){
    try {
        const articles = await db.articles.findMany({
            include:{
                category:true
            }
        })
        const categoryArticle = await db.categoryArticle.findMany()
        return NextResponse.json({articles:articles,categories:categoryArticle},{status:200})
    } catch (error) {
        console.log(error.message)
        return NextResponse.json({message:'Une erreur est arrive de notre part, Veuillez nous contacter au:01479800'},{status:500})
    }
}

export async function POST(req,res){
    const { slug, title, body, headerImg, category,author } =await req.json()
console.log(slug, title, body, headerImg, category,author)

try {
    const donne = {
        slug: slug,
        title: title,
        body: body,
        headerImg: headerImg,
        author:author
    }

    //check wheter a category exist or not
    const didCartegoryExist = await db.categoryArticle.findUnique
        ({
            where:{
                name: category
            }  
        })
   const didArticleExist = await db.articles.findUnique({
       where:{
        title:title
       }
   })

   if(didArticleExist){
       return NextResponse.json({message:'Desole,mais cet article existe deja'})
   }
    if (didCartegoryExist) {
       await db.articles.create({
           data: {
               ...donne,
               category: {
                   name: category
               },
           }
       })
       return NextResponse.json({ message:'l article a ete creee avec succes' }, { status: 201 })
    }else{
       console.log('making an article by creating a new category')
       await db.articles.create({
           data: {
               ...donne,
               category: {
                   create:{
                       name: category
                   }
               }
           }
       })
       const allArticles = await db.articles.findMany()
       return NextResponse.json({ message:'l article a ete creee avec succes',articles:allArticles }, { status: 201 })

    }


} catch (error) {
    console.log(error.message)
    return NextResponse.json({ message: 'Une erreur est arrive de notre cote.Veuillez nous contacter au numero 01479800' }, { status: 500 })
}
}