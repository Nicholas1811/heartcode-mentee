"use client"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"


import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


import { useToast } from "@/hooks/use-toast"
import { Button } from "@/components/ui/button"
import { ToastAction } from "@/components/ui/toast"


import React from "react";


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import Image, { StaticImageData } from 'next/image'
import Picture1 from '@/app/photos/pic1.jpeg'
import Picture2 from '@/app/photos/pic2.jpeg'
import Picture3 from '@/app/photos/pic3.png'
import PictureMe from '@/app/photos/Me.jpg'
import PictureFlags from '@/app/photos/flags.jpg'
import PictureGatePri from '@/app/photos/GatePri.jpg'
import PictureNice1 from '@/app/photos/Nice1.jpg'
import PictureNice2 from '@/app/photos/Nice2.jpg'
import PictureAiden from '@/app/photos/Aiden.jpg'
import PictureStaircase from '@/app/photos/Staircase.jpg'
import Gif1 from '@/app/photos/osu.gif'
import Video1 from '@/app/photos/300k.jpg'
import Gif2 from '@/app/photos/300k.gif'
import Gif3 from '@/app/photos/cry.gif'
import Gif4 from '@/app/photos/ml.gif'

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

import { Carousel, CardApple } from "@/components/ui/apple-cards-carousel";

import { motion } from "framer-motion";
import Reactaurora from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";

export default function Two() {
  const cards = data.map((card, index) => (
    <CardApple key={card.src} card={card} index={index} layout={true} />
  ));
  const { toast } = useToast()
  return (
    <div>
     
<Card>

<AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className = "relative flex flex-col w-full"
        >

            <NavigationMenu className='flex flex-row justify-between min-w-full list-none h-16 sticky'>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className = "text-white">About drug abuse</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <a href="/about-drugs-yj">Study Material</a>

                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className = "text-white">Quiz</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      <a href="/Quiz-yj">Take the test!</a>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

          

      
            <CardHeader>
              <CardTitle className="text-red-500">
                Dont do drugs
              </CardTitle>
              <CardDescription>
                drugs are bad
              </CardDescription>
            </CardHeader>


            <CardHeader>
              <CardTitle className="text-orange-900">
                About Me
              </CardTitle>
              <CardDescription>
                My name is Yong Jun
              </CardDescription>
              <CardDescription className="text-blue-400">
                I'm from Maris Stella High School
              </CardDescription>
            </CardHeader>

            <Drawer><center>
              <DrawerTrigger className = "text-white">My Hobbies(Click Me!)</DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Hobbies</DrawerTitle>
                  <DrawerDescription>


                    - Playing Games (Genshin Impact, Mobile Legends, Osu etc.)


                  </DrawerDescription>
                  <DrawerDescription>

                    - Watching Anime

                  </DrawerDescription>
                  <DrawerDescription>

                    - Sleeping

                  </DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>


                  <DrawerClose>
                    <Button variant="outline">Back</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </center></Drawer>

  

            <div className="flex justify-center items-center min-l-screen">
              <div className="relative">
                <Card className="absolute left-0 w-40 ml-5">
                  <HoverCard>
                    <HoverCardTrigger> Co-Curricular Activity </HoverCardTrigger>
                    <HoverCardContent>
                      National Police Cadet Core (NPCC)
                    </HoverCardContent>
                  </HoverCard>
                </Card>

                <Button className="text-green-300 absolute right-0" variant="outline"
                  onClick={() => {
                    toast({
                      title: "Subjects ",
                      description: "English, Higher Chinese, E Math, A Math, Pure Chemistry, Pure Physics, Elective Geography, Social Studies, Pure Literature",
                      action: (
                        <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                      ),
                    })
                  }}>
                  My Subject Combination
                </Button>
              </div>
            </div>

            </motion.div>
            </AuroraBackground>

          </Card>
 


      <div className="w-full h-full py-20">
        <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
          Pictures
        </h2>
      </div>



      <Carousel items={cards} />
    </div>


  )
}


const Logo = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                School Motto
              </span>{" "}
              勤·勉·忠·勇
              (Diligence, Determination, Loyalty and Courage)
            </p>
            <Image
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              src={PictureFlags}
            />
          </div>
        );
      })}
    </>
  );
};

const Gate = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The Primary School Gate
              </span>{" "}

            </p>
            <Image
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              src={PictureGatePri}
            />
          </div>
        );
      })}
    </>
  );
};

const Porch = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The school staricase
              </span>{" "}

            </p>
            <Image
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              src={PictureStaircase}
            />
          </div>
        );
      })}
    </>
  );
};

const CCA = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                My junior
              </span>{" "}
              Aiden
            </p>
            <Image
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              src={PictureAiden}
            />
          </div>
        );
      })}
    </>
  );
};

const Smt1 = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Mobile Legends
              </span>{" "}

            </p>
            <Image
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              src={Gif4}
            />
          </div>
        );
      })}
    </>
  );
};

const Smt2 = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                Sed
              </span>{" "}

            </p>
            <Image
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
              src={Gif3}
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "My School",
    title: "School Logo",
    src: Picture3,
    content: <Logo />,
  },
  {
    category: "",
    title: "Front Porch",
    src: Picture1,
    content: <Porch />,
  },
  {
    category: "",
    title: "School Gate",
    src: Picture2,
    content: <Gate />,
  },

  {
    category: "CCA",
    title: "National Police Cadet Core (NPCC)",
    src: PictureMe,
    content: <CCA />,
  },
  {
    category: "Games",
    title: "that I play",
    src: Gif1,
    content: <Smt1 />,
  },
  {
    category: "",
    title: "Genshin",
    src: Gif2,
    content: <Smt2 />,

  },
];