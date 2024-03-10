import React from "react";
import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { GoHomeFill } from "react-icons/go";
import { IoIosSearch } from "react-icons/io";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { IoNotificationsOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { GoBookmark } from "react-icons/go";


import { Inter } from "next/font/google";

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
    title: "Bookmarks",
    icon: <GoBookmark />,
  },

  {
    title: "Profle",
    icon: <CiUser />,
  },

  // {
  //   title: "",
  //   icon: < />,
  // },

];

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-12">

        <div className="col-span-3 border-2 border-red-600 pl-8 pt-2">

          <div className="text-3xl hover:bg-gray-200 rounded-full p-4 w-fit transition-all">

          <FaXTwitter />
          </div>

          <div className="text-2xl font-semibold pr-4">

           <ul>
            {sideBaeMenuItems.map((item) => (
            <li className="flex justify-start items-center gap-5 hover:bg-gray-200 rounded-full pt-3 px-4 py-3 w-fit cursor-pointer transition-all" key={item.title}>
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
        
        <div className="col-span-6 border-2 border-green-600"></div>
        <div className="col-span-3 border-2 border-gray-700"></div>
      </div>
    </div>
    
  )
}