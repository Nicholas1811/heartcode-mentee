"use client";

import image from "my-app/app/drugs-jingqi/cannabis.jpeg";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import Image from "next/image";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"



import cannabis from ".//../assets/weed.jpeg"
import heroin from ".//../assets/heroin.jpg"
import meth from ".//../assets/meth.jpeg"
import NPS from ".//../assets/NPS.jpeg"
import cocaine from ".//../assets/cocaine.jpeg"
import drug1 from ".//../assets/drug1.png"
import web1 from ".//../assets/web1.png"
import web2 from ".//../assets/web2.png"
import web3 from ".//../assets/web3.png"

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



export default function One() {

    const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
        null
    );
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        if (active && typeof active === "object") {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <><>
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
                <CardHeader>
                    <CardTitle className="font-extrabold text-4xl \ text-red-600"><center>Common Drugs To Know</center></CardTitle>
                    <CardDescription className="font-sans \ text-cyan-400"><center>Drugs come in many forms, shapes, and sizes, so be sure to equip yourself with the necessary knowledge!</center> </CardDescription>
                    <CardContent className="font-extrabold text 2xl"><center>Get to know our residents.</center>

                    </CardContent>
                </CardHeader>

                

                <CardFooter>
                    <p></p>
                </CardFooter>
            </Card>

            <div className="h-full flex justify-center">
                <Carousel className="w-full max-w-xs-100">
                    <CarouselContent>
                        <CarouselItem>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-rectangular items-center justify-center p-6">
                                        <Image src={web2}
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
                                        <Image src={web1}
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
                                        <Image src={web3}
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


            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10" />
                )}
            </AnimatePresence>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="fixed inset-0  grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                            }}
                            exit={{
                                opacity: 0,
                                transition: {
                                    duration: 0.05,
                                },
                            }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                        >
                            <motion.div layoutId={`image-${active.title}-${id}`}>
                                <Image
                                    priority
                                    width={100}
                                    height={100}
                                    src={active.src}
                                    alt={active.title}
                                    className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top" />
                            </motion.div>

                            <div>
                                <div className="flex justify-between items-start p-4">
                                    <div className="">
                                        <motion.h3
                                            layoutId={`title-${active.title}-${id}`}
                                            className="font-bold text-neutral-700 dark:text-neutral-200"
                                        >
                                            {active.title}
                                        </motion.h3>
                                        <motion.p
                                            layoutId={`description-${active.description}-${id}`}
                                            className="text-neutral-600 dark:text-neutral-400"
                                        >
                                            {active.description}
                                        </motion.p>
                                    </div>

                                    <motion.a
                                        layoutId={`button-${active.title}-${id}`}
                                        href={active.ctaLink}
                                        target="_blank"
                                        className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                                    >
                                        {active.ctaText}
                                    </motion.a>
                                </div>
                                <div className="pt-4 relative px-4">
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                    >
                                        {typeof active.content === "function"
                                            ? active.content()
                                            : active.content}
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
            <ul className="max-w-2xl mx-auto w-full gap-4">
                {cards.map((card, index) => (
                    <motion.div
                        layoutId={`card-${card.title}-${id}`}
                        key={`card-${card.title}-${id}`}
                        onClick={() => setActive(card)}
                        className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
                    >
                        <div className="flex gap-4 flex-col md:flex-row ">
                            <motion.div layoutId={`image-${card.title}-${id}`}>
                                <Image
                                    width={100}
                                    height={100}
                                    src={card.src}
                                    alt={card.title}
                                    className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top" />
                            </motion.div>
                            <div className="">
                                <motion.h3
                                    layoutId={`title-${card.title}-${id}`}
                                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                                >
                                    {card.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${card.description}-${id}`}
                                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                                >
                                    {card.description}
                                </motion.p>
                            </div>
                        </div>
                        <motion.button
                            layoutId={`button-${card.title}-${id}`}
                            className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
                        >
                            {card.ctaText}
                        </motion.button>
                    </motion.div>
                ))}
            </ul>



        </><><Image
            src={drug1}
            width={900}
            height={900}
            alt="drug border"
            className="w-screen h-60 mt-35" /><div className="flex items-center justify-center"></div></></>
    )
}

       

const CloseIcon = () => {
    return (
        <motion.svg
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 0.05,
                },
            }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};

const cards = [
    {
        description: <p className="font-extrabold text / text-red-600">Just a Plant!</p>,
        title: "Wanna inhale the scent of nature?",
        src: cannabis,
        ctaText: "Who Am I?",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p>

                    Hi, I'm Cannabis! (Nickname Weed/Pot)
                    I'm made from the dried leaves, flowers, stems,
                    and seeds of the cannabis plant.
                    My products with THC can cause changes in mood, thoughts,
                    and perceptions of reality.
                </p>
            );
        },
    },
    {
        description: <p className="font-extrabold text / text-red-600">A "Hero"...or Not.</p>,
        title: "I can be your saviour!",
        src: heroin,
        ctaText: "Who Am I?",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p>
                    The name's Heroin! (Nickname White/Smack/Junk)
                    I'm a powerful and very addictive drug obtained from the opium poppy. I come in many forms. Consuming me can lead to effects such as lowered heart rate and respiration, and may be even fatal.
                </p>
            );
        },
    },

    {
        description: <p className="font-extrabold text / text-red-600">Why So Cold?</p>,
        title: "I may be familiar...",
        src: meth,
        ctaText: "Who Am I?",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p>
                    I'll freeze you in your tracks! I'm Methamphetamine (Nickname Ice/Quartz/Crystal), a lab-made drug mainly used as a performance-enhancing drug. I cause a range of effects, including but not limited to depression, confusion, and psychosis.
                </p>
            );
        },
    },
    {
        description: <p className="font-extrabold text / text-red-600">Spice Your Life Up!</p>,
        title: "You Only Live Once.",
        src: NPS,
        ctaText: "Who Am I?",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p>
                    Move over Spice Girls, NPS (New Psychoactive Substances, nickname Spice/Bath Salts) are the new fad! We're just as harmful as other drugs and can cause severe intoxications leading to death!
                </p>
            );
        },
    },
    {
        description: <p className="font-extrabold text / text-red-600">Coca-Cola?</p>,
        title: "Am I drinkable?",
        src: cocaine,
        ctaText: "Who Am I?",
        ctaLink: "https://ui.aceternity.com/templates",
        content: () => {
            return (
                <p>
                    I'm Cocaine! (Nickname Coke/Snow) I'm derived from the leaves of the Erthroxylum coca. Consuming me can result in increased heart rate, aggressive behaviour, irritability and nausea.
                </p>
            );
        },


    },




];

