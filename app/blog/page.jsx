import { Button } from "@/components/ui/button"
import GlobalApi from '@/app/_services/GlobalApi'
import Link from "next/link"
import Image from "next/image"

export default async function page() {
  const data = await GlobalApi.getArticles()

  const { articles, categories } = data
  // console.log( articles,categories )

  //if (isLoading) return <p>Loading...</p>
  //if (isError) {
  //return <p>Une erreur arrive.Verifie ta connection</p>
  //}
  //console.log('donne', response) ${isFirstItem ?'flex-col justify-between bg-red-600' :' base:flex-row flex-col'}


  return (
    <div>
      <h3 className="text-sky-600 text-3xl">Blog</h3>
      <h2 className="text-gray-600 text-2xl mb-3">Notre equipe travail avec archanement pour vous offrir le meilleur de nous.</h2>
      {
        categories.map((category, i) => {
          const categoryArticles = articles.filter(article => article.category.name == category.name)
          return (
            <div key={`blog-${category.name}`} >
              <h1 className="text-2xl text-sky-600 capitalize ">{category.name} </h1>
              <div className="grid grid-cols-1   md:grid-cols-2  xl:grid-cols-3 justify-items-center  gap-x-4 gap-y-5">
                {
                  categoryArticles.map((categoryArticles, i) => {
                    const isFirstItem = (i == 0)
                    const { id, slug, title, body, headerImg, writer } = categoryArticles
                    return (
                      <div key={`blogpreview-${id}`} className={` flex flex-col`}>
                        <Image
                          className="w-full h-[50vh]"
                          src='/aaron-burden-QJDzYT_K8Xg-unsplash.jpg'
                          width='200'
                          height='200'
                          alt='pic'
                        />
                        <div className="main">
                          <h2 className="text-lg base:text-sm text-sky-600 line-clamp-1 mb-2">#{slug} </h2>
                          <h2 className="text-2xl text-gray-500 my-2"> {title} </h2>
                          <h2 className="text-3xl ">Ecrit par <span className="text-2xl text-gray-500">{writer}</span> </h2>
                          <p className="mb-2 text-2xl text-gray-400 line-clamp-4 w-full h-[120px] text-ellipsis">{body}</p>
                        </div>
                        <div className="w-[100px] my-2">
                          <Button variant='primary'><Link href={`/blog/${category.name}/${id}`}>Voir plus</Link></Button>

                        </div>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          )
        })
      }

    </div>
  )
}

