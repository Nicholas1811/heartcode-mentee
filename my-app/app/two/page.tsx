"use client"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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

import Image from 'next/image'
import Picture1 from '@/app/photos/pic1.jpeg'
import Picture2 from '@/app/photos/pic2.jpeg'
import Picture3 from '@/app/photos/pic3.png'




export default function two() {
  const { toast } = useToast()

  return (
    <div>







      <Card>

      <NavigationMenu className='flex flex-row justify-between min-w-full list-none h-16 sticky top-0 p-5'>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>About drug abuse</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <a href = "/about-drugs-yj">Study Material</a>

              </li>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Quiz</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <a href = "/Quiz-yj">Take the test!</a>
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


        <Carousel>

          <CarouselContent>
            <CarouselItem>
              <Image src={Picture1} alt="1" />
            </CarouselItem>
            <CarouselItem>
              <Image src={Picture2} alt="1" />
            </CarouselItem>
            <CarouselItem>
              <Image src={Picture3} alt="1" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="flex justify-center items-center min-l-screen">
          <div className="p-4">
            <Card>
              <HoverCard>
                <HoverCardTrigger>My CCA</HoverCardTrigger>
                <HoverCardContent>
                  National Police Cadet Core (NPCC)
                </HoverCardContent>
              </HoverCard>
              <Button className="text-green-300" variant="outline"
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
            </Card>
          </div>
        </div>

      </Card>




    </div>
  )
}


