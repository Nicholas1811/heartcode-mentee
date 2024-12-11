
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"


import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import React from "react";
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";
import Image from "next/image";

import Picture4 from '@/app/photos/alcohol.jpg'
import Picture5 from '@/app/photos/cannabis.jpeg'
import Picture6 from '@/app/photos/cocaine.jpg'
import Picture7 from '@/app/photos/heroin.jpeg'
import Picture8 from '@/app/photos/meth.webp'
import Picture9 from '@/app/photos/Your Cheat Sheet.png'
import { Move } from "lucide-react";

import { FocusCards } from '@/components/ui/focus-cards'

const content = [
  {
    title: "Methamphetamine",
    description:
      "Methamphetamine is a lab-made (synthetic) stimulant with high addiction potential. When sold as shiny bluish-white rocks or crystals, it may be called “crystal meth,” “Tina,” or “ice.” Methamphetamine’s short-term effects typically include feelings of euphoria and increased alertness and energy. It can also cause serious negative health effects, including paranoia, anxiety, rapid heart rate, irregular heartbeat, stroke, or even death. Long-term use may lead to insomnia, memory loss, development of a substance use disorder, and other health problems.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={Picture8}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Heroin",
    description:
      "Heroin is an opioid drug made from morphine, a natural substance taken from the seed pod of the various opium poppy plants grown in Southeast and Southwest Asia, Mexico, and Colombia. Heroin can be a white or brown powder, or a black sticky substance known as black tar heroin. Short term effects of Heroin can include euphoria; dry mouth; itching; nausea; vomiting; analgesia; slowed breathing and heart rate. Long term abuse can result in collapsed veins; abscesses (swollen tissue with pus); infection of the lining and valves in the heart; constipation and stomach cramps; liver or kidney disease; pneumonia.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={Picture7}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Cannabis",
    description:
      "Cannabis refers to the dried leaves, flowers, stems, and seeds of the cannabis plant. The plant has many different chemical compounds, including tetrahydrocannabinol (THC), which has intoxicating—mind altering—effects. Cannabis products with THC can cause changes in mood, thoughts, and perceptions of reality. These products can also cause harmful health effects on the brain and other parts of the body like respiratory issues, increased risk of stroke, cardiac arrest and cancer among others. In recent years, there have been big increases in the variety of cannabis products and how much THC they have, as well as a greater variety of ways people can consume them.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={Picture5}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Cocaine",
    description:
      "Cocaine is an addictive stimulant drug made from the leaves of the coca plant (Erythroxylon coca) which is native to South America. Cocaine can be snorted through the nose, rubbed into gums, injected into the bloodstream, or smoked. Serious medical complications can occur with cocaine use, including cocaine use disorder and overdose. Also, adulteration of cocaine with highly potent fentanyl and related substances is a major contributor to the rising drug overdose deaths.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={Picture6}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Alcohol",
    description:
      "Alcohol is among the most used drugs, plays a large role in many societies and cultures around the world and greatly impacts public health. More people over age 12 in the United States have used alcohol in the past year than any other drug or tobacco product, and alcohol use disorder is the most common type of substance use disorder in the United States. Organs known to be damaged by long-term alcohol misuse include the brain and nervous system, heart, liver and pancreas. Heavy drinking can also increase your blood pressure and blood cholesterol levels, both of which are major risk factors for heart attacks and strokes.",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <Image
          src={Picture4}
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
];

export default function AboutDrugs() {

  const cards = [
    {
      title: 
      <HoverCard>
      <HoverCardTrigger>Hover over me</HoverCardTrigger>
      <HoverCardContent>
      View summurized info like this
      </HoverCardContent>
    </HoverCard>
      ,
      src: Picture9,
    },
    {
      title: 
      <HoverCard>
      <HoverCardTrigger>Methamphetamine</HoverCardTrigger>
      <HoverCardContent>
      It may be called “crystal meth,” “Tina,” or “ice
      </HoverCardContent>
    </HoverCard>
      ,
      src: Picture8,
    },
    {
      title: 
      <HoverCard>
      <HoverCardTrigger>Heroin</HoverCardTrigger>
      <HoverCardContent>
      A natural substance taken from the seed pod of the various opium poppy plants
      </HoverCardContent>
    </HoverCard>
      
      ,
      src: Picture7,
    },
    {
      title:
      <HoverCard>
      <HoverCardTrigger>Cannabis</HoverCardTrigger>
      <HoverCardContent>
      Cannabis contains tetrahydrocannabinol (THC), which has intoxicating—mind altering—effects
      </HoverCardContent>
    </HoverCard>
      ,
      src: Picture5,
    },
    {
      title:
      <HoverCard>
      <HoverCardTrigger>Cocaine</HoverCardTrigger>
      <HoverCardContent>
      Cocaine is an addictive stimulant drug made from the leaves of the coca plant
      </HoverCardContent>
    </HoverCard>
      ,
      src: Picture6,
    },
    {
      title:
      <HoverCard>
      <HoverCardTrigger>Alcohol</HoverCardTrigger>
      <HoverCardContent>
      Most common type of substance use disorder in the United States
      </HoverCardContent>
    </HoverCard>
      ,
      src: Picture4,
    },
  ];


  return (
    <>
      <div>


        <NavigationMenu className='flex flex-row justify-between min-w-full list-none h-16 sticky top-0 p-5'>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Me</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <li className="row-span-3">
                    <a href="/two">About Myself</a>

                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Quiz</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                  <a href="/Quiz-yj">Take the test!</a>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="h-14 bg-gradient-to-r from-white to-black"></div>

        <DropdownMenu>
          <DropdownMenuTrigger className="font-bold">List of common drugs</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Drugs</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Methamphetamine</DropdownMenuItem>
            <DropdownMenuItem>Heroin</DropdownMenuItem>
            <DropdownMenuItem>Cannabis</DropdownMenuItem>
            <DropdownMenuItem>Cocaine</DropdownMenuItem>
            <DropdownMenuItem>Alcohol</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="p-10">
          <StickyScroll content={content} />
        </div>
        <FocusCards cards={cards} />;


      </div>
    </>
  )
}