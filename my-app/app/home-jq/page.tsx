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
import drugs from '@/app/assets/drugs.jpeg'
import design1 from ".//../assets/design1.png"


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
      className: "text-blue-500 dark:text-blue-500",
    },
      
    
  ];
  return (
    <>

      
      <div>
      <NavigationMenu className='flex flex-row justify-between min-w-full list-none h-16 sticky top-0 p-5'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className= "font-extrabold text \ text-red-600">Homepage</NavigationMenuTrigger>
          
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                   <a href = "/home-jq">About Me</a>
              </li>
            </ul>
                  

          </NavigationMenuContent>
          
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger className= "font-extrabold text \ text-red-600"> What is Drug Abuse?</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <a href = "/drugs-jingqi">Different types of drugs</a>
            </ul>
          
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <a href = "/quiz-jingqi">Pop Quiz</a>
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

        <CardHeader>
          <CardTitle className="font-extrabold text-4xl \ text-red-600"><center>About Me</center></CardTitle>
          <CardDescription className="font-extrabold text-1xl"><center>Pang Jing Qi (彭靖淇）</center> </CardDescription>
            <CardDescription className="font-extrabold text-1xl"><center>6th January 2008</center> </CardDescription>
          
         
          
        </CardHeader>

        <CardContent><center>Introductions aside, are you ready to dive into the SECRET WORLD of drugs?</center>

        </CardContent>

        <CardFooter>
         
        </CardFooter>

      </Card>

      
      <div
        style={{
          display: 'flex',
          justifyContent:"center",
        }}
        >
      <Image
        src={drugs}
        width={500}
        height={500}
        alt="Picture of some drugs" />
      </div>
      {">"}<AlertDialog><center>
        <AlertDialogTrigger><Button variant="outline">Psst...I have some cool stuff here.</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>You see a clump of 'Mystery Magic Grass'.</AlertDialogTitle>
            <AlertDialogDescription>
              Those are DRUGS!! Why are you doing drugs.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Nah. </AlertDialogCancel>
            <AlertDialogAction>I want the Magic Grass.</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
        </center></AlertDialog><div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        <div className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

        <Boxes />
        <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
          POV: You're on drugs
        </h1>
        <p className="text-center mt-2 text-neutral-300 relative z-20">
          What in the world ?
        </p>



      </div> </>)
}