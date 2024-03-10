import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-12">
        <div className="col-span-3 border-2 border-red-600 pl-8 pt-2">
          <div className="text-3xl hover:bg-gray-200 rounded-full p-2 w-fit">
          <FaXTwitter />
          </div>
        </div>
        <div className="col-span-6 border-2 border-green-600"></div>
        <div className="col-span-3 border-2 border-gray-700"></div>
      </div>
    </div>
    
  )
}