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
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
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

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import meth3 from ".//../assets/meth3.png"
import meth5 from ".//../assets/meth5.png"
import tape2 from ".//../assets/tape2.png"
import { Heading1 } from "lucide-react";
import { useToast } from "@/hooks/use-toast"
import methdone from ".//../assets/methdone.png"


const formSchema = z.object({
    username: z.string().min(2).max(50),
    drugs: z.string().min(2).max(50),
    effects: z.string().min(5).max(50),
    identify: z.string().min(2).max(10)
})

export default function QuizJQ() {
    const { toast } = useToast()

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            drugs: "",
            effects: "",
            identify: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        //cannabis, addiction, ice
        console.log(values)
        let newScore = 0
        if (values.drugs === "cannabis") newScore++
        if (values.effects === "opium poppy") newScore++
        if (values.identify === "meth") newScore++
        toast({
            title: `Thanks for helping us ${values.username}!`,
            description: <div>
                YOU GOT {newScore}/3! If you have done well, awesome! Else try again later.
                <Image src = {methdone}
                alt = "tap"/>
            </div>
        })
    }
    return (

        <><div>
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



        </div><ul>

            </ul><>
                <Image
                    src={tape2}
                    width={500}
                    height={500}
                    alt="crime tape"
                    className="w-screen h-60 mt-12" />
                <div className="flex items-center justify-center">
                    <Form {...form}>

                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-7">



                            <p className="font-extrabold text-4xl / text-red-600"><center>DRUG ALERT!</center></p>



                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <><FormItem>
                                        <FormLabel>Username</FormLabel>
                                        <FormControl>
                                            <Input placeholder="sillycat32" {...field} />
                                        </FormControl>
                                        <FormDescription>
                                            This is your public display name.
                                        </FormDescription>
                                    </FormItem>
                                        <div>

                                        </div></>

                                )} />

                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: "center",
                                }}
                            >

                            </div>

                            <FormField
                                control={form.control}
                                name="drugs"
                                render={({ field }) => (
                                    <FormItem>
                                        <Image
                                            src={meth5}
                                            width={500}
                                            height={500}
                                            alt="meth" />
                                        <FormLabel>What drug is pictured above?</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Type your answer here" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )} />

                            <FormField
                                control={form.control}
                                name="effects"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Which plant is the drug Heroin obtained from?</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Type your answer here" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )} />

                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: "center",
                                }}
                            >
                                <Image
                                    src={meth3}
                                    width={500}
                                    height={500}
                                    alt="meth" />
                            </div>

                            <FormField
                                control={form.control}
                                name="identify"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Help Officer Lim identify the type of drug.</FormLabel>
                                        <FormControl>
                                            <Input placeholder="What could this be?" {...field} />
                                        </FormControl>

                                        <FormMessage />
                                    </FormItem>
                                )} />





                            <Button type="submit">Submit</Button>
                        </form>
                    </Form>
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: "center",
                    }}
                >

                </div></></>
    )
}
