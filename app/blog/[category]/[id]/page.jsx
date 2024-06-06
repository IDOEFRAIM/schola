'use client'

import Image from "next/image"
import { useState, useEffect } from "react";
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from '@radix-ui/react-toast'
import { Calendar } from "lucide-react"
import { useParams,useRouter } from "next/navigation";
import Link from "next/link";
import GlobalApi from "@/app/_services/GlobalApi";
import { useQuery } from "@tanstack/react-query";
import {usePost} from '@/lib/store';

const page = () => {
    const routes = useParams()
    const router = useRouter()
    const [err, seterr] = useState()
    const [isSendingComment, setisSendingComment] = useState(false)
    const [addedComment, setaddedComment] = useState(new set())
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm()   
    const {toast} = useToast()
     const { category,id } = routes

    const { data, isPending, error } = useQuery({
        queryFn: () => GlobalApi.getSpecifiqueArticle(id),
        queryKey: ['specialArticle',{id}],
        cacheTime:60
    })
    if (isPending){
        return(
            <div className="flex justify-center items-center">
                <h3 className="text-gray-600 text-2xl">Nous chargeons l'article</h3>
            </div>
        )
    }
    if (error) {
        console.log(error)
        //dont forget to reload
        return <p>une erreur est arrive</p>
    }
    const { article, comments } = data

    const { title, slug, body, headerImg} = article

   const onSubmit = async (information) => {
    setisSendingComment(true)
    console.log(id)
    const commentInfo = {
        text:information.commentText,
        articleId:id
    }
    const response = await GlobalApi.addComment(commentInfo).then(result=>{
        console.log(result)
        setaddedComment(prev=>prev.add(result.data.newComment))
        toast({
            title: "Success",
            description: result.data.message,
            variant:'default'
          })
    }).catch(error=>{
        router.push('/auth/login')
        console.log(error)
        usePost.setState({ 
            actualsArticle:article
          })
        const post = usePost()
        console.log(post.actualsArticle)
        toast({
            title: "Erreur",
            description:error?.response?.data?.message,
            action: <ToastAction altText="Creer un compte"/>,
            variant:'destructive'
          })
          
    })
    setisSendingComment(false)
   }
   /**<div className="w-full">
            <Button
            onClick={()=>router.back()}
            ><ArrowLeft/> </Button>
          </div> */
   return (
    <div>
        <h1 className="text-sky-600 hover:text-red-600 text-lg">blog/
            {category} / {title} </h1>
        <div className="article__header flex flex-col m-3">
            <img
                className="w-full h-[50vh]"
                src='/aaron-burden-QJDzYT_K8Xg-unsplash.jpg'
                layout='fill'
                alt='pic'
            />
            <h3 className="text-2xl text-sky-600">HERON ET LES RACINES</h3>
            <p className="text-sky ">
                <span className="flex flex-row items-center text-sm  text-gray-600"><Calendar />Publie le 11 avril 2024</span>
                <span className="text-sky-600"> Par Albert O</span>
            </p>
        </div>
        <div className="article__maincontent my-8">
            <div className="introduction">
                Introduction: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, sunt?
            </div>
            {/* developpement*/}

        </div>
        <div className="main">
            {body}
        </div>
        <div className="article__similaire">
            <h2 className="text-3xl text-sky-600 mb-2">Articles similaires</h2>
            <div className="grid gap-x-10 gap-y-8  md:grid-cols-2 grid-cols-1 justify-items-center">
                {
                    [1, 2, 5, 6].map(x => {
                        return (
                            <div className="w-[400px]">
                                <Image
                                    src={'/aaron-burden-QJDzYT_K8Xg-unsplash.jpg'}
                                    width={'300'}
                                    height={'300'}
                                    alt="pic" />
                                <h3 className="text-2xl text-sky-600">title</h3>
                            </div>
                        )
                    })
                }

            </div>
        </div>
        <div className="commentaires mt-5">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex w-full">
                    <Input
                        {...register('commentText', { required: "Tu n as rien ecrit" })}
                        placeholder="Entre ton commentaire" />
                    <Button variant={isSendingComment ?'default':'primary'}
                    className="mx-[10px]"
                    type="submit"
                    disabled={isSendingComment} >Poster</Button>
                </div>
            </form>
            {errors.commentText && <p className='text-red-600 text-sm'>* {errors.commentText.message} </p>}

            <div className="comments">
                <h1 className="text-gray-600 text-4xl"> Commentaires </h1>

                {
                    comments.map(comment => {
                        const { id, text, author } = comment
                        const { username } = author
                        return (
                            <div className="w-full min-h-50 my-3">
                                <h1 className="text-sky-600 text-2xl">{username} </h1>
                                <h2 className='text-lg text-gray-600'> {text} </h2>
                            </div>
                        )
                    })
                }
  
            </div>
        </div>
    </div>
)
}

export default page

