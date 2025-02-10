import React from 'react'
import {Spotlight} from "@/components/ui/spotlight-new";

const Hero = () => {
    return (
        <div className="pb-20 pt-36">
            <div>
                <Spotlight/>
            </div>
            <div
                className="h-screen w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.3] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
                />

            </div>
            <div className="flex justify-center relative my-20 z-10">
               <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[69vw] flex flex-col items-center justify-center">
                   <h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">A magia da web com next.js</h2>
               </div>
            </div>
        </div>

    )
}
export default Hero
