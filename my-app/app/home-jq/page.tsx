"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Image from 'next/image'
import cat from '@/app/assets/cat.jpg'
import design1 from ".//../assets/design1.png"
import milk from '@/app/assets/milk.jpg'
import pancake from '@/app/assets/pancake.jpg'
import taiko from '@/app/assets/taiko.jpg'
import rgs from '@/app/assets/rgs.png'


import shark from '@/app/assets/shark.jpg'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"



import React from "react";
import { cn } from "@/lib/utils";
import { Boxes } from "@/components/ui/background-boxes";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";


export default function One() {


  const words = [
    {
      text: "Nice",
    },
    {
      text: "to",
    },
    {
      text: "meet",
    },
    {
      text: "you",
      className: "text-red-600 dark:text-red-600",
    },


  ];
  return (
    <>
   


      <div>
        <NavigationMenu className='flex flex-row justify-between min-w-full list-none h-16 sticky top-0 p-5'>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-extrabold text \ text-red-600">Homepage</NavigationMenuTrigger>

              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <a href="/home-jq">About Me</a>
                  </li>
                </ul>


              </NavigationMenuContent>

            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-extrabold text \ text-red-600"> What is Drug Abuse?</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  <a href="/drugs-jingqi">Different types of drugs</a>
                </ul>

                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  <a href="/quiz-jingqi">Pop Quiz</a>
                </ul>
              </NavigationMenuContent>

            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>



      </div>

      <ul>

      </ul>



      <Card>
        <Image
          src={design1}
          width={500}
          height={500}
          alt="design1"
          className="w-screen h-60 mt-30" />
        <div className="flex items-center justify-center"></div>


        <div className="flex flex-col items-center justify-center h-[20rem] ">
          <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
            Get to know me.
          </p>
          <TypewriterEffect words={words} />
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">

          </div>
        </div>

        <div className="flex justify-center">
                <Carousel className="w-1/3 h-1/4">
                    <CarouselContent>
                        <CarouselItem>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-rectangular items-center justify-center p-6">
                                        <Image src={shark}
                                            alt="hi"
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <Image src={cat}
                                            alt="hi"
                                        />
                                    </CardContent> 
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-rectangular items-center justify-center p-6">
                                        <Image src={taiko}
                                            alt="hi"
                                        />
                                    </CardContent> 
                                </Card>
                            </div>
                        </CarouselItem>
                        <CarouselItem>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <Image src={pancake}
                                            alt="hi"
                                        />
                                    </CardContent> 
                                </Card>
                            </div>
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>

            </div>

           
        <CardHeader>
          <CardTitle className="font-extrabold text-4xl \ text-red-600"><center>About Me</center></CardTitle>
          <CardDescription ><center>Pang Jing Qi</center> </CardDescription>



        </CardHeader>

        <CardContent><center>Enjoys drawing, cats, rhythm games, and finding places to eat in Singapore.</center>

        </CardContent>

        <CardFooter>

        </CardFooter>

      </Card>

      

      {">"}<AlertDialog><center>
        <AlertDialogTrigger><Button variant="outline">More Info</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>More about me.</AlertDialogTitle>
            <AlertDialogDescription><p className = "font-bold text / text-red-600">
              School: </p> Raffles Girls' School (Secondary)
            
            </AlertDialogDescription>
            <AlertDialogDescription>
            <p className = "font-bold text / text-red-600">Age:</p> 16
            

              <Image
          src={rgs}
          width={300}
          height={300}
          alt="design1"
          className=" h-30 mt-30" />
       
          
            </AlertDialogDescription>
            <AlertDialogDescription><p className = "font-bold text / text-red-600">Status:</p> Graduated</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Back</AlertDialogCancel>
            
          </AlertDialogFooter>
        </AlertDialogContent>
      </center></AlertDialog><div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <div>
        <Boxes />
          
          </div>


       



      </div> </>)
}