import React, { useCallback } from "react";
import Image from "next/image";

import { FaXTwitter } from "react-icons/fa6";
import { GoHomeFill, GoBookmark } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
// import { GoBookmark } from "react-icons/go";
import { RiTwitterXLine } from "react-icons/ri";
import { CiCircleMore } from "react-icons/ci";

import { Inter } from "next/font/google";
import FeedCard from "@/components/FeedCard";
import {CredentialResponse, GoogleLogin} from "@react-oauth/google";
// import FeedCard from "@/components/FeedCard/indexx";

const inter = Inter({ subsets: ["latin"] });

interface TwitterSidebarButton {
  title: string;
  icon: React.ReactNode;
}

const sideBaeMenuItems: TwitterSidebarButton[] = [
  
  {
    title: "Home",
    icon: <GoHomeFill />,
  },

  {
    title: "Explore",
    icon: <IoIosSearch />,
  },

  {
    title: "Notification",
    icon: <IoNotificationsOutline />,
  },

  {
    title: "Messages",
    icon: <HiOutlineEnvelope />,
  },

  {
    title: "Premium",
    icon: <RiTwitterXLine />,
  },

  {
    title: "Bookmarks",
    icon: <GoBookmark />,
  },

  {
    title: "Profle",
    icon: <CiUser />,
  },

  {
    title: "More",
    icon: <CiCircleMore />,
  },

  // {
  //   title: "",
  //   icon: < />,
  // },

];

export default function Home() {

  const handleLoginWithGoogle = useCallback((cred: CredentialResponse) => {
    
  }, [])

  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-12 fixed">

        {/* //First Column */}

        <div className="col-span-3  pl-8 pt-2 overflow-y-auto">

          <div className="text-3xl hover:bg-gray-200 rounded-full p-4 w-fit transition-all cursor-pointer">

          <FaXTwitter />
          </div>

          <div className="text-2xl font-semibold pr-4">

           <ul>
            {sideBaeMenuItems.map((item) => (
            <li className="flex justify-start items-center gap-5 hover:bg-gray-200 rounded-full pt-1 px-4 py-3 w-fit cursor-pointer transition-all " key={item.title}>
              <span>{item.icon}</span>
              <span>{item.title}</span>
              </li>
              ))}
            </ul> 
            <div className="mt-2">
              <button className="bg-[#1D9BF0] rounded-full text-white text-lg w-56 p-2">Post</button>
            </div>
          </div>

        </div>
        
        {/* // Second Column */}

        <div className="col-span-6 border border-[#CFD9DE] overflow-y-scroll no-scrollbar">
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
        </div>

        {/* Third Column */}

        <div className="col-span-3 p-5">
          <div className="p-5 bg-[#EFF3F4] rounded-3xl">
              <h1 className="mx-3 my-2 text-2xl">New To Twitter!</h1>
              <div className="mx-3">
              <GoogleLogin onSuccess={(cred) => console.log(cred)} />
              </div>
          </div>    
        </div>
      </div>
    </div>
  )
}