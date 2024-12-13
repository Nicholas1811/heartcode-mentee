"use client";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { useToast } from "@/hooks/use-toast"

import { useState } from "react"

const formSchema = z.object({
  username: z.string().min(2).max(50),
  q1: z.string(),
  q2: z.string(),
  q3: z.string(),
  q4: z.string(),
  q5: z.string(),
});

export default function QuizYj() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      q1: "",
      q2: "",
      q3: "",
      q4: "",
      q5: "",
    },
  });

  const { toast } = useToast()
  const [score, setScore] = useState(0)
  const [showResults, setShowResults] = useState(false)

  function onSubmit(values: z.infer<typeof formSchema>) {
    let newScore = 0
    if (values.q1 === "ice") newScore++
    if (values.q2 === "poppy") newScore++
    if (values.q3 === "altersthinking") newScore++
    if (values.q4 === "leaves") newScore++
    if (values.q5 === "alcohol") newScore++

    setScore(newScore)
    setShowResults(true)

    toast({
     title: `Thank you, ${values.username}!`,
     description:`You scored ${newScore} out of 5`
    })

  }

  return (
    <div>
      <NavigationMenu className="flex flex-row justify-between min-w-full list-none h-16 sticky top-0 p-5">
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
            <NavigationMenuTrigger>About drug abuse</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <li>
                  <a href="/about-drugs-yj">Study Material</a>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

   

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Please enter your name" {...field} />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />


          <FormField
            control={form.control}
            name="q1"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What is another name for methamphetamine</FormLabel>
                <FormControl>
                <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                >
                  <div className="flex items-center space-x-2">
                    <FormItem>
                    <FormControl>
                    <RadioGroupItem value="snow" id="option-one" />
                    </FormControl>
                    <Label htmlFor="option-one">Snow</Label>
                    </FormItem>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FormControl>
                    <RadioGroupItem value="tar" id="option-two" />
                    </FormControl>
  
                    <Label htmlFor="option-two">Tar</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FormControl>
                    <RadioGroupItem value="ice" id="option-three" />
                    </FormControl>
                
                    <Label htmlFor="option-two">Ice</Label>
                  </div>
                </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />


          <FormField
            control={form.control}
            name="q2"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What flowers provide the seed pods used in the production of heroin</FormLabel>
                <FormControl>
                <RadioGroup onValueChange={field.onChange}
                defaultValue={field.value}>
                  <div className="flex items-center space-x-2">
                    <FormControl>
                    <RadioGroupItem value="hibiscus" id="option-one" />
                    </FormControl>
                    <Label htmlFor="option-one">Hibiscus</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FormControl>
                    <RadioGroupItem value="poppy" id="option-two" />
                    </FormControl>
                    <Label htmlFor="option-two">Poppy</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FormControl>
                    <RadioGroupItem value="datura" id="option-three" />
                    </FormControl>
                    <Label htmlFor="option-two">Datura</Label>
                  </div>
                </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="q3"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What effects does cannabis have on a person</FormLabel>
                <FormControl>
                <RadioGroup onValueChange={field.onChange}
                defaultValue={field.value}>
                  <div className="flex items-center space-x-2">
                    <FormControl>
                    <RadioGroupItem value="inflamation" id="option-one" />
                    </FormControl>
                    <Label htmlFor="option-one">Inflamation</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FormControl>
                    <RadioGroupItem value="altersthinking" id="option-two" />
                    </FormControl>
        
                    <Label htmlFor="option-two">Alters their thinking</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FormControl>
                    <RadioGroupItem value="sleepdeprevation" id="option-three" />
                    </FormControl>
                    <Label htmlFor="option-two">Sleep deprevation</Label>
                  </div>
                </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="q4"
            render={({ field }) => (
              <FormItem>
                <FormLabel>What part of the coca plant is used to make cocaine</FormLabel>
                <FormControl>
                <RadioGroup onValueChange={field.onChange}
                defaultValue={field.value}>
                  <div className="flex items-center space-x-2">
                    <FormControl>
                    <RadioGroupItem value="leaves" id="option-one" />
                    </FormControl>
                    <Label htmlFor="option-one">Leaves</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FormControl>
                    <RadioGroupItem value="roots" id="option-two" />
                    </FormControl>
                    <Label htmlFor="option-two">roots</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FormControl>
                    <RadioGroupItem value="flower" id="option-three" />
                    </FormControl>
                    <Label htmlFor="option-two">Flower</Label>
                  </div>
                </RadioGroup>
                </FormControl>
              </FormItem>
            )}
          />

<FormField
            control={form.control}
            name="q5"
            render={({ field }) => (
              <FormItem>
            <FormLabel>What drug is the most commonly abused in America</FormLabel>
            <FormControl>
            <RadioGroup onValueChange={field.onChange}
                defaultValue={field.value}>
              <div className="flex items-center space-x-2">
                <FormControl>
                <RadioGroupItem value="fetanyl" id="option-one" />
                </FormControl>
                <Label htmlFor="option-one">fentanyl</Label>
              </div>
              <div className="flex items-center space-x-2">
                <FormControl>
                <RadioGroupItem value="alcohol" id="option-two" />
                </FormControl>
                <Label htmlFor="option-two">Alcohol</Label>
              </div>
              <div className="flex items-center space-x-2">
                <FormControl>
                <RadioGroupItem value="cocaine" id="option-three" />
                </FormControl>
                <Label htmlFor="option-two">Cocaine</Label>
              </div>
            </RadioGroup>
            </FormControl>
          </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
      {showResults && (
        <p className="text-sm">
        Your score: {score} out of 5. 
        </p>
        
      )}
    </div>
  );
}
