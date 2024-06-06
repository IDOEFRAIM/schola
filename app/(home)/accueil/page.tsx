import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import About from "./About";
import Partenaires from "./Partenaires";
import Features from "./Features";
import Team from "./Team";

const page =  () => {
    return (
        <>
        <div className="lg:max-w-[950px]  md:max-w-[650px] sm:max-w-[525px] w-full max-w-[300px] mx-auto">

            <Carousel
                className="h-[100vh]"

            >
                <CarouselContent>
                    <CarouselItem>
                        <AccueilItem imageUrl='/susan-q-yin-2JIvboGLeho-unsplash.jpg' text='Transformer la complexite en clarte:decouvrez la magie des mathematiques et laissez vous inspirer par la logique et la creativite' />

                    </CarouselItem>
                    <CarouselItem>
                        <AccueilItem imageUrl='/radu-marcusu-mbKApJz6RSU-unsplash.jpg' text="Plongez dans l'univers mathematiques ou chaque formule raconte une histoire et chaque solution devoile un autre monde" />

                    </CarouselItem>
                    <CarouselItem>
                        <AccueilItem imageUrl='/aaron-burden-QJDzYT_K8Xg-unsplash.jpg' text='Des bibliotheques d informations dans un seul telephone' />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

        </div>
        <About/>
        <Team/>
        <Partenaires/>
        <Features/>
        </>
    )
}
export const AccueilItem = ({ text, imageUrl }: any) => {
    return (
        <div className="h-[90vh] flex justify-center items-center" 
        style={{ backgroundImage: `url(${imageUrl})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }}>
            <p className="text-white text-5xl base:text-3xl text-pretty mx-2 text-center">{text} </p>

        </div>
    )
}
export default page

