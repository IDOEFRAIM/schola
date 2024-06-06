import Image from "next/image"
const page = () => {
    return (
        <>
        <h1 className="text-3xl text-sky-600 mb-4">Notre Equipe</h1>
        <div>
        <iframe src="https://giphy.com/embed/tTfsp2AL2k9aKiPFKL" width="500" height="500"  allowFullScreen></iframe>

        </div>
            <div className="grid  gap-y-8 grid-cols-1  lg:grid-cols-2 justify-items-center">
                <div className="sm:w-[500px] w-[300px]">
                    <Image
                    width='400'
                    height='400'
                    alt='developer image'
                    src='/susan-q-yin-2JIvboGLeho-unsplash.jpg'
                    />
                    <h1 className="text-3xl text-sky-600">Efraim Ido</h1>
                    <h1 className="text-2xl text-gray-700">MERN DEVELOPER</h1>
                    <h1>
                        Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid quo deleniti architecto temporibus cum eligendi ea eveniet repudiandae repellat, neque quaerat facilis enim magni hic accusamus maxime? Quia, nulla.
                    </h1>
                </div>
                <div className="sm:w-[500px] w-[300px]">
                    <Image
                    width='400'
                    height='400'
                    alt='developer image'
                    src='/susan-q-yin-2JIvboGLeho-unsplash.jpg'
                    />
                    <h1 className="text-3xl text-sky-600">Efraim Ido</h1>
                    <h1 className="text-2xl text-gray-700">MERN DEVELOPER</h1>
                    <h1>
                        Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid quo deleniti architecto temporibus cum eligendi ea eveniet repudiandae repellat, neque quaerat facilis enim magni hic accusamus maxime? Quia, nulla.
                    </h1>
                </div>
                <div className="sm:w-[500px] w-[300px]">
                    <Image
                    width='400'
                    height='400'
                    alt='developer image'
                    src='/susan-q-yin-2JIvboGLeho-unsplash.jpg'
                    />
                    <h1 className="text-3xl text-sky-600">Efraim Ido</h1>
                    <h1 className="text-2xl text-gray-700">MERN DEVELOPER</h1>
                    <h1>
                        Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid quo deleniti architecto temporibus cum eligendi ea eveniet repudiandae repellat, neque quaerat facilis enim magni hic accusamus maxime? Quia, nulla.
                    </h1>
                </div>
                <div className="sm:w-[500px] w-[300px]">
                    <Image
                    width='400'
                    height='400'
                    alt='developer image'
                    src='/susan-q-yin-2JIvboGLeho-unsplash.jpg'
                    />
                    <h1 className="text-3xl text-sky-600">Efraim Ido</h1>
                    <h1 className="text-2xl text-gray-700">MERN DEVELOPER</h1>
                    <h1>
                        Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid quo deleniti architecto temporibus cum eligendi ea eveniet repudiandae repellat, neque quaerat facilis enim magni hic accusamus maxime? Quia, nulla.
                    </h1>
                </div>
            </div>
        </>
    )
}

export default page
