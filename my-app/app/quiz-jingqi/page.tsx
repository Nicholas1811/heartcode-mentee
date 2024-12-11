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

import tape2 from ".//../assets/tape2.png"
import { Heading1 } from "lucide-react";
const formSchema = z.object({
    username: z.string().min(2).max(50),
    drugs:z.string().min(2).max(50),
    effects :z.string().min(5).max(50),
})

export default function QuizJQ() {


    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            drugs: "",
            effects: "",
        },
    })

    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        if (values.drugs == "cannabis"){
            console.log("Right answer!")
        }
        if (values.drugs == "meth"){
            console.log("Right answer!")
        }
    }
    return (
        <>
            <Image
                src={tape2}
                width={500}
                height={500}
                alt="crime tape"
                className="w-screen h-60 mt-40" />
            <div className="flex items-center justify-center">
                <Form {...form}>

                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">



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

                            )}
                        />

                        <FormField
                            control={form.control}
                            name="drugs"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Without looking at the other webpages, name one commonly used drug.</FormLabel>
                                <FormControl>
                                    <Input placeholder="(Drug 1), (Drug 2),..." {...field} />
                                </FormControl>
                                <FormDescription>
                                    Some examples of commonly used drugs...
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="effects"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>What are some effects of consuming drugs?</FormLabel>
                                <FormControl>
                                    <Input placeholder="hallucinations, maybe ?" {...field} />
                                </FormControl>
                                <FormDescription>
                                    Some examples of commonly used drugs...
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                            )}
                        />




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

            </div></>
    )
}
