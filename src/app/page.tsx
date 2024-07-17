import Image from "next/image";
import { Tweet } from 'react-tweet'
import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 text-white font-sans bg-black">
      <div className="text-4xl font-bold mb-4">
        Hey👋, I'm Kyle Jeong.
      </div>

      <div className="text-xl mb-4">
        I'm 19 and a rising junior at UCLA studying math and cs.
      </div>

      <div className="text-3xl font-bold mb-8 text-center">
        This is why you should hire me as a Buildspace Intern (ai or full-stack) this fall!
      </div>

      <div className="space-y-8 text-center align-center">
        <div className="text-2xl mb-4">
          I LOVE BUILDING!
          Building is my passion, whether it be legos, computers, programming projects, or even muscles and it's something that I'll do for the rest of my life. 
        </div>
        <Carousel className="w-full max-w-4xl">
          <CarouselContent>
            <CarouselItem>
            <div className="mb-8 text-center">
              This is me getting featured in the lego magazine after winning a building competition + me programming a lego robot to move around and fight aliens on a table.
              <div className="flex flex-row items-center justify-center space-x-4 mt-4">
                <Image src="/legoMagazine.png" alt="Lego" width={300} height={300} className="rounded-lg shadow-lg" />
                <Image src="/robotics.jpg" alt="Lego" width={300} height={300} className="rounded-lg shadow-lg" />
              </div>
            </div>
            </CarouselItem>
            <CarouselItem>
            <div className="mb-8 text-center">
              Here are some PC computers I've built:
                <div className="flex flex-row items-center justify-center space-x-4 mt-4">
                  <Image src="/legoMagazine.png" alt="Lego" width={300} height={300} className="rounded-lg shadow-lg" />
                  <Image src="/robotics.jpg" alt="Lego" width={300} height={300} className="rounded-lg shadow-lg" />
                </div>
              </div>
            </CarouselItem>
            <CarouselItem>
            <div className="mb-8 text-center">
              My favorite programming projects:
                <div className="flex flex-row items-center justify-center space-x-4 mt-4">
                  <Image src="/legoMagazine.png" alt="Lego" width={300} height={300} className="rounded-lg shadow-lg" />
                  <Image src="/robotics.jpg" alt="Lego" width={300} height={300} className="rounded-lg shadow-lg" />
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext className="bg-black"/>
        </Carousel>
       
      </div>

      <div className="text-2xl mb-4">
        I work and learn fast 
      </div>

      <div className="text-2xl mb-4">
        I'm relentless in my pursuit.
        <div className="mt-2">(wrestling clip, 425 squat)</div>
      </div>

      <div className="text-2xl mb-4">
        I want to help build the future of AI and help other people build what they care about. 
        <div className="mt-2">Buildspace n&w has had a huge affect on me these past weeks and I want to help spread it to everyone as much as possible</div>
      </div>

      <div className="text-2xl mb-4">
        Video of me explaining how I could help improve Sage full-stack / AI side
      </div>

      <div className="flex flex-col items-center justify-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Farza already loves me:</h2>
        <Tweet id="1808350569486270797"/>
      </div>

      <div className="text-2xl mb-4">
        Please contact me here: 
        <ul className="list-disc list-inside mt-2">
          <li>Email</li>
          <li>Website</li>
          <li>LinkedIn</li>
          <li>Twitter</li>
        </ul>
      </div>

      <div className="text-2xl mb-4">
        Thanks to the Buildspace team for a great s5.
        <ul className="list-disc list-inside mt-2">
          <li>List Buildspace team</li>
        </ul>
      </div>
    </main>
  );
}