"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
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

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function two(){
    const { toast } = useToast()

    return(
        <div>

        <Card>
          <CardHeader>
            <CardTitle className="text-red-500">
              Dont do drugs
            </CardTitle>
            <CardDescription>
              drugs are bad
            </CardDescription>
          </CardHeader>
        </Card>
  
  
        <Carousel>
          <CarouselContent>
            <CarouselItem>Drugs</CarouselItem>
            <CarouselItem>are</CarouselItem>
            <CarouselItem>bad</CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
  
        <Card>
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
        </Card>
  
        <HoverCard>
          <HoverCardTrigger>My CCA</HoverCardTrigger>
          <HoverCardContent>
            National Police Cadet Core (NPCC)
          </HoverCardContent>
        </HoverCard>
  
  
  
          <Button className="text-green-300"
            variant="outline"
            onClick={() => {
              toast({
                title: "Don't take drugs ",
                description: "Its not worth it",
                action: (
                  <ToastAction altText="Goto schedule to undo">Undo</ToastAction>
                ),
              })
            } }
            >Free Drugs</Button>
             <p className="text-white italic text-9xl8">
          Hello
        </p>


        <DropdownMenu>
  <DropdownMenuTrigger className = "font-bold">List of common drugs</DropdownMenuTrigger>
  <DropdownMenuContent>
    <DropdownMenuLabel>Drugs</DropdownMenuLabel>
    <DropdownMenuSeparator />
    <DropdownMenuItem>Heroin</DropdownMenuItem>
    <DropdownMenuItem>Cocaine</DropdownMenuItem>
    <DropdownMenuItem>Alcohol</DropdownMenuItem>
    <DropdownMenuItem>Methamphetamine</DropdownMenuItem>
  </DropdownMenuContent>
</DropdownMenu>


            </div>
    )

}