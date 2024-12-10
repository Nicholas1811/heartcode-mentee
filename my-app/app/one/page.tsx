import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
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
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

export default function Home(){
    return ( 
      <><div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Drug Abuse</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>More</NavigationMenuLink>
              </NavigationMenuContent>
              <NavigationMenuTrigger>About Me</NavigationMenuTrigger>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div><Card>
          <CardHeader>
            <CardTitle className="font-serif \ text-red-600"> Drugs</CardTitle>
            <CardDescription className="font-serif \ text-orange-400">I consume 100g of Weed every day!</CardDescription>
          </CardHeader>
          <CardContent>
            DON'T DO THIS
          </CardContent>
  
          <CardFooter>
            <p></p>
          </CardFooter>
  
        </Card><AlertDialog>
          <AlertDialogTrigger> Psst...I have some good stuff here.</AlertDialogTrigger>
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
        </AlertDialog></>
      )
    }