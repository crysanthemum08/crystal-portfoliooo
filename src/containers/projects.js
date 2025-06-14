import React from 'react'
function Projects() {
    return (
        <section className='projects self-center justify-center'>
            <div className='w-full text-center'>
                <h3 className='mx-auto text-[30px] opacity-75 font-roboto font-extrabold tracking-wide '>Projects</h3>
                <p className='text-black text-[22px] opacity-50 tracking-wide mb-[2.5rem]'>Coding Highlights</p>
                <div className='flex xs:flex-col sm:flex-col md:flex-row lg:flex-row xs:gap-y-5 sm:gap-y-5 md:gap-x-5 lg:gap-x-5 w-fit mx-auto'>
                    <div className='space-y-2'>
                        <div className="w-[350px] h-[220px] rounded-2xl bg-[url('./images/ff2.jpg')] bg-cover bg-center ">
                            <div className='text-white place-items-center relative opacity-0 transition ease-in-out hover:opacity-100 duration-300 h-full bg-black bg-opacity-60 backdrop-blur-sm grid place-content-center rounded-2xl space-y-2'>
                                <h2 className='w-fit h-fit text-[21px] opacity-80 '>
                                    FurryFinds
                                </h2>
                                <p className='w-[80%] text-[18px] '>
                                    An E-commerce website using <span className='text-green-500'>PHP</span>, <span className='text-green-500'>CSS</span>, and <span className='text-green-500'>JavaScript</span>
                                </p>
                                <a href='https://github.com/crysanthemum08/furryFinds' target="_blank" without rel="noreferrer" className='border-b-[1px]' >
                                    Go to GitHub
                                </a>    
                            </div>
                        </div>
                        <p className='text-[19px] opacity-70'>
                            FurryFinds
                        </p>
                    </div>
                    <div className='space-y-2'>
                        <div className="w-[350px] h-[220px] rounded-2xl bg-[url('./images/garas.png')] bg-cover bg-center">
                            <div className='text-white place-items-center relative opacity-0 transition ease-in-out hover:opacity-100 duration-300 h-full bg-black bg-opacity-60 backdrop-blur-sm grid place-content-center rounded-2xl space-y-2'>
                                <h2 className='w-fit h-fit text-[21px] opacity-80 '>
                                    GARA's Burger
                                </h2>
                                <p className='w-[80%] text-[18px] '>
                                    A POS and Queueing Management System using <span className='text-green-500'>Java</span>
                                </p>
                                <a href='https://github.com/crysanthemum08/GBurger' target="_blank" without rel="noreferrer" className='border-b-[1px]' >
                                    Go to GitHub
                                </a>    
                            </div>
                        </div>
                        <p className='text-[19px] opacity-70'>
                            GARA's Burger
                        </p>
                    </div>
                    <div className='space-y-2'>
                        <div className="w-[350px] h-[220px] rounded-2xl bg-[url('./images/fims.png')] bg-cover bg-center">
                            <div className='text-white place-items-center relative opacity-0 transition ease-in-out hover:opacity-100 duration-300 h-full bg-black bg-opacity-60 backdrop-blur-sm grid place-content-center rounded-2xl space-y-2'>
                                <h2 className='w-fit h-fit text-[21px] opacity-80 '>
                                    Francheska's Sales and Inventory System
                                </h2>
                                <p className='w-[80%] text-[18px] '>
                                    A Sales and Inventory Management System using <span className='text-green-500'>Laravel Framework</span>, <span className='text-green-500'>JavaScript</span> and <span className='text-green-500'>CSS</span>
                                </p>
                                <a href='https://github.com/crysanthemum08/laravel-fims-main' target="_blank" without rel="noreferrer" className='border-b-[1px]' >
                                    Go to GitHub
                                </a>    
                            </div>
                        </div>
                        <p className='text-[19px] opacity-70'>
                            Francheska's Sales and Inventory System
                        </p>
                    </div>
                    <div className='space-y-2'>
                        <div className="w-[350px] h-[220px] rounded-2xl bg-[url('./images/techserve.png')] bg-cover bg-center">
                            <div className='text-white place-items-center relative opacity-0 transition ease-in-out hover:opacity-100 duration-300 h-full bg-black bg-opacity-60 backdrop-blur-sm grid place-content-center rounded-2xl space-y-2'>
                                <h2 className='w-fit h-fit text-[21px] opacity-80 '>
                                    TechServe
                                </h2>
                                <p className='w-[80%] text-[18px] '>
                                    A Mobile App using <span className='text-green-500'>Dart</span>
                                </p>
                                <a href='https://github.com/crysanthemum08/techServe' target="_blank" without rel="noreferrer" className='border-b-[1px]' >
                                    Go to GitHub
                                </a>    
                            </div>
                        </div>
                        <p className='text-[19px] opacity-70'>
                            TechServe
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects
