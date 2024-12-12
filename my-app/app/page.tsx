"use client";
import { Navbar } from '../app/components/navbar'

import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";
import { Button } from '@/components/ui/button';
import Link from 'next/link'

//This is the page we will be messing around with, our landing page!
export default function Home() {
  return (

    <>
      <WavyBackground>
        <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
          Group 1's Homepage
        </p>
        <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
          Webpage about drugs
        </p>
        <div className = "flex items-center justify-center mt-10">
            <Link href="/two">
              <Button className = "mr-10">
                Yong Jun
              </Button>
            </Link>
            <Link href="/home-jq">
              <Button className = "ml-10">
                Jing Qi
              </Button>
            </Link>
            </div>
      </WavyBackground>
    </>
  );
}


