import React from 'react'
import Services from './Services'


const Home = () => {
    return (
        <>
            <p className='w-[319px] text-[#F17216] mt-[100px] ml-[120px]'>Best Business Platform-world record 2021</p>
            <div className='flex justify-between'>
                <div className='ml-[100px]'>
                    <img src="Group 564.svg" alt="" className='w-[646px] h-[146px] ml-4 ' />
                    <p className='ml-[22px] w-[480px] h-[108px] text-[15px] font-Ubuntu'>
                        Support small business and join the nationwide movement to encourage commercial support for the millions of monority owned business helping world economy.
                    </p>
                    <p className=' border bg-red-400 rounded-2xl p-2 ml-5 w-[120px] text-center'>Get Started</p>
                </div>
                <img src="Vector1.svg" alt="" className=' relative w-[161px] mt-5 h-[53px] ml-[40px] pl-[200] ' />
                <img src="Group 2050.svg" alt="" className=' w-[417px] h-[356px] mr-[170px] pr-[50px]' absolute />
            </div>
            <div className='flex justify-between w-[80%] m-auto'>
                <img src="Group 652.svg" alt="" className='w-[170px] h-[132px] ml-4 ' />
                <img src="Group 631.svg" alt="" className='w-[170px] h-[132px] ml-4 ' />
                <img src="Group 651.svg" alt="" className='w-[229px] h-[147px] ml-4 mt-5' />
                <img src="Group 2053.svg" alt="" className='w-[170px] h-[132px] ml-4 ' />
            </div>
            <Services />
            <div>
                <img src="Rectangle 342.svg" className='h-[500px] absolute ' alt="" />
                <div className='flex'>
                    <div>
                        <img src="Group 2070.svg" className='relative h-[450px] w-[656px]' alt="" />
                    </div>
                    <div>
                        <h3 className='text-[#F17216] text-[14px] relative mt-5 block'>Why Choose Us</h3>
                        <h3 className='text-white block text-[34px] relative h-[120px] w-[430px]'>Take on any Challenge of the Digital World</h3>
                        <h4 className='relative text-white mb-2'>Corporate Financial Advisory</h4>
                        <h4 className='relative text-white mb-2'>Development of Financial Models</h4>
                        <h4 className='relative text-white mb-2'>Deal Structuring</h4>
                    </div>
                </div>
            </div>
            <div>
                <img src="sol.svg" alt="" />
                <img src="mark.svg" className='w-[80%] m-auto' alt="" />
            </div>
        </>
    )
}

export default Home
