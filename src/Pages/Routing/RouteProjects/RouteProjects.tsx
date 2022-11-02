import React from 'react'
import style from '../RouteProjects/RouteProjects.module.scss'

interface IRouteProjects { }

const RouteProjects: React.FC<IRouteProjects> = () => {
    return (
        <section className='container mx-auto'>
            <div className={`flex flex-col py-[160px] gap-[200px]`}>
                <div className='flex flex-col justify-center items-center gap-[240px] md:flex-row md:justify-end md:items-end'>
                    <a href="/" className={`${style.link}`}>
                        <figure className={`${style.thumb}`}>
                            <img className={`${style.image} h-[450px] w-[300px]`} src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="" />
                            <figcaption className={`${style.caption}`}>asasa</figcaption>
                        </figure>
                    </a>
                    <a href="/" className='translate-y-32'>
                        <figure>
                            <img className='h-[250px] w-[500px]' src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="" />
                            <div className='flex flex-col gap-[4px] mt-[8px]'>
                                <figcaption className='text-whiteOppacity text-[13px] font-jetBrains'>Sorry Mom Tattoo</figcaption>
                                <figcaption className='text-whiteOppacity32 text-[11.11px] max-w-[250px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur id rem sit magnam illo </figcaption>
                            </div>
                        </figure>
                    </a>
                </div>

                <div className='flex flex-col justify-center items-center gap-[340px] md:flex-row md:justify-start md:items-start'>
                    <a href="/">
                        <figure>
                            <img className='h-[250px] w-[500px]' src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="" />
                            <div className='flex flex-col gap-[4px] mt-[8px]'>
                                <figcaption className='text-whiteOppacity text-[13px] font-jetBrains'>Sorry Mom Tattoo</figcaption>
                                <figcaption className='text-whiteOppacity32 text-[11.11px] max-w-[250px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur id rem sit magnam illo </figcaption>
                            </div>
                        </figure>
                    </a>
                    <a href="/" className='translate-y-32'>
                        <figure>
                            <img className='h-[450px] w-[300px]' src="https://source.unsplash.com/AHBvAIVqk64/300x500" alt="" />
                            <div className='flex flex-col gap-[4px] mt-[8px]'>
                                <figcaption className='text-whiteOppacity text-[13px] font-jetBrains'>Sorry Mom Tattoo</figcaption>
                                <figcaption className='text-whiteOppacity32 text-[11.11px] max-w-[250px]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur id rem sit magnam illo </figcaption>
                            </div>
                        </figure>
                    </a>
                </div>
            </div>
        </section>
    )
}

export default RouteProjects;