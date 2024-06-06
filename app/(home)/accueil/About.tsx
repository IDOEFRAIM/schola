import Image from "next/image"
import {Button} from '@/components/ui/button'
const About = () => {
  return (
    <>
      <h1 className="text-4xl text-sky-600 my-10 mx-auto">A propos de nous</h1>
      <div className="flex flex-col md:flex-row items-center justify-between  mb-5">
        <div className="md:w-[50vw] w-full flex items-center justify-center" >
            <Image
            width='300'
            height='300'
            alt='team img'
            src='/radu-marcusu-mbKApJz6RSU-unsplash.jpg'
            className="rounded"
            />
        </div>
        <div className="md:w-[50vw] w-full">
            <h1 className="text-lead my-4">
              Nous sommes des penseurs, des reveurs, des createurs dedies a vous apporter des perspectives diverses et des sujets qui comptent. Des analyses approfondies et des opinions stimulantes aux anecdoctes personnelles et aux expressions creatives.Nous partageons nos voix et experiences sensationnelles.
\            </h1>
            <Button variant='primary'>Nous contacter</Button>
        </div>
      </div>

      <h1 className="text-4xl text-sky-600 my-10 mx-auto">Ce que nous offrons</h1>

      <div className="flex flex-col items-center justify-center mx-5">
      
<ul className="list-disc">
  <li>
    <h2 className="text-lg text-sky-600 inline">Articles captivants:<p className="text-md text-gray-600">Plongez dans un monde d articles soigneusement recherche' et couvrantune large gamme de sujet.Que vous soyez interresee par la technologie,le monde de la vie,la science ou les arts;vous trouverz quelque chose qui suscite votre interet</p></h2>
  </li>
</ul> 
<ul className="list-disc">
  <li>
    <h2 className="text-lg text-sky-600 inline">Contenu communautaire<p className="text-md text-gray-600">
      Plongez dans un monde d articles soigneusement recherche' et couvrantune large gamme de sujet.Que vous soyez interresee par la technologie,le monde de la vie,la science ou les arts;vous trouverz quelque chose qui suscite votre interet
      </p></h2>
  </li>
</ul>
<ul className="list-disc">
  <li>
    <h2 className="text-lg text-sky-600 inline">Un espace pour chaque voix<p className="text-md text-gray-600">
      Nous croyons que chacun a une histoire a' raconter. Si vous avez une passion pour l e'criturre, notre blog est l endroit ideal pour partager votre travail avec un public soutenant et engage'.
      </p></h2>
  </li>
</ul>
<p className="text-md text-gray-600">Notre vision est de creer un espace ou' la connaissance est celebree et la creativite encourage. Que vous soyez ici pour lire, ecrire ou simplement explorer; nous vous invitons a faire partie de notre commnunaute grandissante. Ensemble, nous pouvons construire une plateforme qui valorise les perspectives diverses er favorise des echanges significatifs. </p>
      </div>
      
    </>
  )
}

export default About
