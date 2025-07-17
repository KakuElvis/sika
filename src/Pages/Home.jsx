import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (

    <>
        <div className='bg-gray-10 py-20 '>

            <header>
                <nav className="px-40 flex justify-between items-center bg-white  shadow-md fixed top-0 left-0 right-0 z-50">
                    <div class="py-5 font-bold text-3xl">
                        <a href="#home">
                            <span class="text-heading">Sika</span>
                        </a>
                    </div>
                    
                    <div>
                        <ul className='flex items-center font-bold justify-center space-x-6'>
                            <li>
                            <a href="#home" class="hover:bg-logo/10 ease-in duration-200 px-4 py-2 rounded-md">Home</a>
                        </li>
                        <li>
                            <a href="#about" class="hover:bg-logo/10 ease-in duration-200 px-4 py-2 rounded-md">About</a>
                        </li>
                        <li>
                            <a href="#contact" class="hover:bg-logo/10 ease-in duration-200 px-4 py-2 rounded-md">Contact</a>
                        </li>
                        <li>
                            <a href="#contact" class="hover:bg-logo/10 ease-in duration-200 px-4 py-2 rounded-md">Blurbs</a>
                        </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <section className=' items-center justify-center px-40'>
                <div className='flex flex-col  items-center justify-between z-20 md:flex-row'>
                    <div>
                        <div>
                            <h2 className='text-black text-5xl font-bold'>Personal finance, <br/> <span className='text-heading'>reimagined</span></h2>
                        </div>
                        {/* <div> */}
                            <div className=' gap-2 py-5'>
                                <h3>Download Sika now</h3>
                                <div>
                                    <div className='flex flex-row gap-2'>
                                        <img src="./src/assets/sika.png" className=" py-5" alt="" width="100" height="100" />
                                        <img src="./src/assets/sika.png" className="py-5" alt="" width="100" height="100"/>
                                    </div>
                                </div>
                            </div>
                        {/* </div> */}
                    </div>
                    <div>
                        <img src="./src/assets/phone.png" className="transform scale-x-[-1] py-5 bg-heading rounded-l-3xl w-fit " alt="" width="500" height="200"/>
                    </div>
                </div>
            </section>

            <section className='px-40'>
                <div>
                    <h1 className='text-black text-5xl font-bold'> <span className='text-heading'>Choose better</span> <br/> with Sika</h1>
                </div>
                <div className='flex space-x-15 py-5'>
                    <div className='bg-green-200 p-10 rounded-lg flex gap-10'>
                        <h4 className='font-bold'>Protect what matters</h4>
                        <img src="./src/assets/sika.png" className="py-5" alt="" width="100" height="100"/>
                    </div>
                    <div className='bg-gray-200 p-10 rounded-lg flex gap-10'>
                        <h4 className='font-bold'>Nurture it to grow</h4>
                        <img src="./src/assets/sika.png" className="py-5" alt="" width="100" height="100"/>
                    </div>
                    <div className='bg-yellow-500 p-10 rounded-lg flex gap-10'>
                        <h4 className='font-bold'>Many means to one goal</h4>
                        <img src="./src/assets/sika.png" className="py-5" alt="" width="100" height="100"/>
                    </div>
                </div>
            </section>

            <section className='px-40'>
                <div className='flex flex-col  items-center justify-between z-20 md:flex-row'>
                    <div>
                        <div className='mb-10'>
                            <h1 className='text-black text-5xl font-bold'> <span className='text-heading'>Take control</span> of <br/>  your money</h1>
                        </div>
                        <div className='flex flex-row py-10'>
                            <div>
                                <h4 className='text-black text-2xl font-bold mb-5'>Finances at your <br/> fingertips</h4>
                                <div>
                                    <li>skdlskdlsd</li>
                                    <li>skdlskjsdksjdkdlsd</li>
                                    <li>ukjkjsdj</li>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <img src="./src/assets/phone.png" className="transform scale-x-[-1] py-10 " alt="" width="500" height="300"/>
                    </div>
                </div>
            </section>

            <section className='bg-gray-50 py-5'>
                <div className='px-40'>
                    <div>
                        <h1 className='text-black text-5xl font-bold'>Building our <span className='text-heading'> <br />expertise, for you</span> </h1>
                    </div>
                    <div className='flex gap-2 py-5'>
                        <div className='bg-green-200  p-10 rounded-lg'>
                            <h4 className='mb-5 font-bold'>Protect what matters</h4>
                            <p className='text-wrap'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque tempora ipsam adipisci excepturi cum magni commodi neque. Eveniet, repudiandae cumque?</p>
                        </div>
                        <div className='bg-blue-500  p-10 rounded-lg text-white'>
                            <h4 className='mb-5 font-bold'>Nurture it to grow</h4>
                            <p className='text-wrap'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque tempora ipsam adipisci excepturi cum magni commodi neque. Eveniet, repudiandae cumque?</p>
                        </div>
                        <div className='bg-yellow-500  p-10 rounded-lg'>
                            <h4 className='mb-5 font-bold'>Many means to one goal</h4>
                            <p className='text-wrap'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque tempora ipsam adipisci excepturi cum magni commodi neque. Eveniet, repudiandae cumque?</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='flex flex-col justify-center items-center text-center py-20'>
                <div className='space-y-2'>
                    <h1 className='font-bold text-5xl'>World of <span className='text-heading'>Sika</span></h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, sequi.</p>
                    <button className='bg-heading text-white py-2 px-3 rounded-sm font-bold'>Join Sika</button>
                </div>
                <div className=''>
                    <img src="./src/assets/phone.png" className="transform scale-x-[-1] py-5 items-center" alt="" width="500" height="300"/>
                </div>
                <div className='flex flex-row gap-5 '>
                    <div>
                        <h2 className='text-4xl font-bold'>60+</h2>
                        <h4>hi</h4>
                    </div>
                    <div>
                        <h2 className='text-4xl font-bold'>60+</h2>
                        <h4>hi</h4>
                    </div>
                    <div>
                        <h2 className='text-4xl font-bold'>60+</h2>
                        <h4>hi</h4>
                    </div>
                </div>
            </section>

            <section className='px-40'>
                <div>
                    <h1 className='text-black text-5xl font-bold'>Let's make your <br/> <span className='text-heading'>wealth work for you</span> </h1>
                    <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium ullam omnis nam perspiciatis dolorem ipsum velit, dolores voluptates consectetur deleniti.</p>
                </div>
                <div className='flex space-x-5 py-5'>
                    <div className=' space-y-5 p-10 rounded-lg  gap-10 w-1/3'>
                        <div>
                            <h4 className='font-bold text-2xl'>Protect what matters</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nam fuga quod officia quae corporis aperiam non assumenda veniam quam?</p>
                        </div>
                        <div>
                            <h4 className='font-bold text-2xl'>Protect what matters</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nam fuga quod officia quae corporis aperiam non assumenda veniam quam?</p>
                        </div>
                    </div>
                   <div className='w-1/3'>
                        <img src="./src/assets/phone.png" className="transform scale-x-[-1] py-5 items-center" alt="" width="400" height="200"/>
                    </div>
                    <div className=' space-y-5 p-10 rounded-lg gap-10 w-1/3'>
                        <div>
                            <h4 className='font-bold text-2xl'>Protect what matters</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nam fuga quod officia quae corporis aperiam non assumenda veniam quam?</p>
                        </div>
                        <div>
                            <h4 className='font-bold text-2xl'>Protect what matters</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nam fuga quod officia quae corporis aperiam non assumenda veniam quam?</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className='px-40 bg-heading py-5'>
                <div className='flex space-x-5'>
                    <div className='py-5 space-y-5'>
                        <h2 className='text-white text-2xl font-bold'>Trused <br /> partnership</h2>
                        <button className='bg-white text-heading py-2 px-3 rounded-sm font-bold'>Join Sika</button>
                        <img src="./src/assets/sika.png" className="py-5" alt="" width="100" height="100"/>
                    </div>
                    <div className='flex space-x-5 py-5 justify-between'>
                        <div className='bg-white p-10 rounded-lg  gap-10'>
                            <div>
                                <h4 className='font-bold'>Protect what matters</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nam fuga quod officia quae corporis aperiam non assumenda veniam quam?</p>
                            </div>
                            <img src="./src/assets/sika.png" className="py-5" alt="" width="100" height="100"/>
                        </div>
                        <div className='bg-white p-10 rounded-lg  gap-10'>
                            <div>
                                <h4 className='font-bold'>Protect what matters</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nam fuga quod officia quae corporis aperiam non assumenda veniam quam?</p>
                            </div>
                            <img src="./src/assets/sika.png" className="py-5" alt="" width="100" height="100"/>
                        </div>
                        <div className='bg-white p-10 rounded-lg  gap-10'>
                            <div>
                                <h4 className='font-bold'>Protect what matters</h4>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem nam fuga quod officia quae corporis aperiam non assumenda veniam quam?</p>
                            </div>
                            <img src="./src/assets/sika.png" className="py-5" alt="" width="100" height="100"/>
                        </div>
                    </div>
                </div>
            </section>

            <section className='px-40 py-5'>
                    <div className='py-5 space-y-5'>
                        <h2 className='text-heading text-3xl font-bold'>Every win inapires <br /> <span className='text-black'>us for better</span></h2>
                    </div>
                    <div className='flex flex-row space-x-2 py-5 justify-between'>
                        <div>
                            <img src="./src/assets/sika.png" className="py-5" alt="" width="100" height="100"/>
                        </div>
                         <div>
                            <img src="./src/assets/sika.png" className="py-5" alt="" width="100" height="100"/>
                        </div>
                         <div>
                            <img src="./src/assets/sika.png" className="py-5" alt="" width="100" height="100"/>
                        </div>
                         <div>
                            <img src="./src/assets/sika.png" className="py-5" alt="" width="100" height="100"/>
                        </div>
                        
                    </div>
            </section>

            <section className='bg-heading px-40 py-5'>
                    <div className='py-5 space-y-5'>
                        <h2 className='text-white text-3xl font-bold'>Every win inapires </h2>
                    </div>
                    <div className='flex space-x-40 justify-center items-center text-center'>
                        <img src="./src/assets/sika.png" className="py-5" alt="" width="50" height="50"/>
                        <img src="./src/assets/sika.png" className="py-5" alt="" width="50" height="50"/>
                        <img src="./src/assets/sika.png" className="py-5" alt="" width="50" height="50"/>
                        <img src="./src/assets/sika.png" className="py-5" alt="" width="50" height="50"/>
                    </div>
                    <div className='flex space-x-5'>
                        <div>
                            <img src="./src/assets/sika.png" className="py-5" alt="" width="100" height="100"/>
                        </div>
                        <div className='space-y-2'>
                            <h2 className=''>Managing your finance with us is a tap away</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, ut!</p>
                            <div className='flex'>
                                <img src="./src/assets/sika.png" className="py-5" alt="" width="100" height="100"/>
                                <img src="./src/assets/sika.png" className="py-5" alt="" width="100" height="100"/>
                            </div>
                        </div>
                    </div>
                        
            </section>
            
        </div>
    </>
  )
}

export default Home