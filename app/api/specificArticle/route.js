import { NextResponse } from "next/server"
import { db } from "@/lib/db"

export async function GET(req){
    const articleId = req.nextUrl.searchParams.get("id")
    const article = await db.articles.findMany({
        where:{
            id:articleId
        },
        include:{
            category:true
        }
    })
    const articleComments = await db.comment.findMany({
        where:{
            articleId:articleId
        },
        include:{
            author:true
        }
    })  
    return NextResponse.json({article:article,comments:articleComments},{status:200})
}