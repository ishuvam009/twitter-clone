import React from 'react';
import Head from 'next/head';
import Image from 'next/image';

import { LuMessageCircle } from "react-icons/lu";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoMdHeartEmpty } from "react-icons/io";
import { GoUpload } from "react-icons/go";

const FeedCard: React.FC = () => {
    return (
                <>
                <Head>
                 <meta charSet="utf-8" />
                </Head>
                <div className='border-b border-[#CFD9DE] hover:bg-gray-100 transition-all cursor-pointer'>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-1'>
                            <Image src='https://pbs.twimg.com/profile_images/1742855219053314048/7kuSNnyX_400x400.jpg' alt='user-iamge' height={50} width={50} className='rounded-full p-2' />
                        </div>
                        <div className='col-span-11 pb-4 pr-4'>
                            <h5>Nishita</h5>
                            <p>
                            {/* https://twitter.com/Shristitwtsss/photo */}
                            Topper se bs pass hone wala transition hi aaye h  college me 🥲🥲
                            #Engineering #CollegeStudent
                            </p>
                            <div className='flex justify-between mt-4 text-xl w-[90%]'>
                                <div>
                                    <LuMessageCircle />
                                </div>
                                <div>
                                    <AiOutlineRetweet />
                                </div>
                                <div>
                                    <IoMdHeartEmpty />
                                </div>
                                <div>
                                    <GoUpload />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>    
    )    
}

export default FeedCard;