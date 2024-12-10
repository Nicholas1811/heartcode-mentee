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


import React from "react";
import { cn } from "@/lib/utils";
import { Boxes } from "@/components/ui/background-boxes";

export default function One() {
  return (
    <>
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Drug Abuse</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>More</NavigationMenuLink>
              </NavigationMenuContent>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                About Me
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <Card>
        <CardHeader>
          <CardTitle className="font-extrabold text-4xl \ text-red-600"><center>About Me</center></CardTitle>
          <CardDescription className="font-serif \ text-cyan-400"><center>Pang Jing Qi (彭靖淇）</center> </CardDescription>
          <CardDescription className="font-serif \ text-orange-400"><center>Student from RGS (Graduated)</center>
          </CardDescription>
          <CardDescription className="font-comic sans \ text-blue-300"><center>Favourite animal: Blahaj </center> </CardDescription>
          <CardDescription className="font-comic sans \ text-green-500"><center>Age: 16 </center> </CardDescription>
        </CardHeader>

        <CardContent><center>Introductions aside, are you ready to dive into the SECRET WORLD of drugs?</center>

        </CardContent>

        <CardFooter>
          <p><center>Hold on to your sanity!</center></p>
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
      {">"}<AlertDialog>
        <AlertDialogTrigger><Button variant="outline"><center>Psst...I have some cool stuff here.</center></Button>
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
      </AlertDialog><div className="h-96 relative w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
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