"use client";
import { Navbar } from  './components/ui/navbar-menu'

//This is the page we will be messing around with, our landing page!
export default function Home() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}
