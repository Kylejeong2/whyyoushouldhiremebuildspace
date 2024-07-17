"use client"
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
import ImageModal from '@/components/ImageModal';
import { useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';

export default function Home() {
  const [modalImage, setModalImage] = React.useState<string | null>(null);

  const openModal = (src: string) => setModalImage(src);
  const closeModal = () => setModalImage(null);

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const video = entry.target as HTMLVideoElement;
            video.play();
          } else {
            const video = entry.target as HTMLVideoElement;
            video.pause();
          }
        });
      },
      { threshold: 0.5 }
    );

    videoRefs.current.forEach((video) => {
      if (video) observer.observe(video);
    });

    return () => {
      videoRefs.current.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  const toggleMute = (index: number) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index]!.muted = !videoRefs.current[index]!.muted;
    }
  };

  return (
    <main className="flex flex-col 2xl:flex-row h-screen items-center justify-between text-white font-manrope bg-black font-extrabold tracking-tighter">
      <div className="h-full w-full 2xl:w-1/4 bg-black text-white p-8 flex flex-col justify-between">
        <div className="hidden lg:block">
            picture 
          </div>
        <div className="mt-auto">
          <h1 className="text-5xl 2xl:text-7xl font-bold mb-4">hey there, i'm kyle.</h1>
          <p className="text-gray-400 text-lg font-medium 2xl:text-xl">this is why you should hire me as a buildspace intern (ai or full-stack) this fall!</p>
          <div className="py-4 flex justify-center space-x-4">
            <Button variant="outline" className="font-bold h-16 text-lg w-auto rounded-none text-black hover:bg-black hover:text-white transition-colors duration-200">
              github repo for this site
            </Button>
            <Button className="h-16 w-auto font-bold bg-black text-lg rounded-none text-white border-solid border-white border-2 hover:bg-white hover:text-black transition-colors duration-200">
              cue background music
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full 2xl:w-3/4 h-screen overflow-y-auto p-4 2xl:p-8 bg-gray-950 border-l-2 border-l-gray-800">

      <div className="space-y-8 text-center p-20">
        <div className="mb-4">
          <h1 className="text-6xl font-bold p-6">i love building!</h1>
          <p className="text-gray-400 text-xl">building is my passion, whether it be legos, computers, programming projects, or even muscles and it's something that i'll do for the rest of my life. </p>
        </div>
        <div className="flex justify-center">
          <Carousel className="w-full bg-gray-600 rounded-lg max-w-6xl">
            <CarouselContent>
              <CarouselItem className="p-10">
              <div className="mb-8 text-center font-extrabold text-xl">
                this is me getting featured in the lego magazine after winning a building competition + me programming a lego robot to move around and fight aliens.
                <div className="flex flex-row items-center justify-center space-x-4 mt-4">
                  <Image 
                    src="/legoMagazine.png" 
                    alt="Lego" 
                    width={350} 
                    height={400} 
                    className="rounded-lg shadow-lg cursor-pointer" 
                    onClick={() => openModal("/legoMagazine.png")}
                  />
                  <Image 
                    src="/robotics.jpg" 
                    alt="Lego" 
                    width={600} 
                    height={300} 
                    className="rounded-lg shadow-lg cursor-pointer" 
                    onClick={() => openModal("/robotics.jpg")}
                  />
                </div>
              </div>
              </CarouselItem>
              <CarouselItem className="p-10">
              <div className="mb-8 text-center font-extrabold text-xl">
                here are some pc computers I've built:
                  <div className="flex flex-row items-center justify-center space-x-4 mt-4">
                    <Image 
                      src="/pc1.jpeg" 
                      alt="PC Build 1" 
                      width={350} 
                      height={300} 
                      className="rounded-lg shadow-lg cursor-pointer" 
                      onClick={() => openModal("/pc1.jpg")}
                    />
                    <Image 
                      src="/pc2.jpeg" 
                      alt="PC Build 2" 
                      width={350} 
                      height={300} 
                      className="rounded-lg shadow-lg cursor-pointer" 
                      onClick={() => openModal("/pc2.jpg")}
                    />
                    <Image 
                      src="/pc3.jpeg" 
                      alt="PC Build 2" 
                      width={350} 
                      height={300} 
                      className="rounded-lg shadow-lg cursor-pointer" 
                      onClick={() => openModal("/pc2.jpg")}
                    />
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="p-10">
                <div className="mb-8 text-center font-extrabold text-xl">
                  some cool projects i've shipped during n&w s5:
                  <div className="flex flex-row items-center justify-center space-x-4 mt-4">
                    {/* change to github repo links */}
                    <Image 
                      src="/project1.png" 
                      alt="Project 1" 
                      width={300} 
                      height={300} 
                      className="rounded-lg shadow-lg cursor-pointer" 
                      onClick={() => openModal("/project1.png")}
                    />
                    <Image 
                      src="/project2.png" 
                      alt="Project 2" 
                      width={300} 
                      height={300} 
                      className="rounded-lg shadow-lg cursor-pointer" 
                      onClick={() => openModal("/project2.png")}
                    />
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="bg-black"/>
            <CarouselNext className="bg-black"/>
          </Carousel>
        </div>
       
      </div>

      <div className="text-2xl mb-4 text-center">
        <h1 className="text-6xl font-bold p-6">i work and learn fast. (click videos to unmute)</h1>
        <p className="text-gray-400 text-xl">this is me learning to cook with my friend, learning to play the piano, and learning to do a backflip (it's sick i know). </p>

        <div className="flex justify-between mt-4">
          {['cooking.mov', 'piano.mov', 'backflip.mov'].map((src, index) => (
            <div key={src} className="w-1/3 px-2 rounded-lg">
              <video
                ref={(el) => { videoRefs.current[index] = el; }}
                src={src}
                className="w-full h-auto cursor-pointer rounded-lg" 
                loop
                muted
                playsInline
                onClick={() => toggleMute(index)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="text-2xl mb-4 text-center">
        <h1 className="text-6xl font-bold p-6">i'm relentless in my pursuit.</h1>
        <p className="text-gray-400 text-2xl">if i want something done, i'll get it done</p>
        <p className="text-gray-400 text-xl">here's clip of me wrestling through a tough point deficit + me fighting through a 425 squat.</p>
        <div className="flex justify-between mt-4">
          {['squat.mov', 'wrestling.mov'].map((src, index) => (
            <div key={src} className="h-1/2 px-2 rounded-lg">
              <video
                ref={(el) => { videoRefs.current[index] = el; }}
                src={src}
                className="w-full h-auto cursor-pointer rounded-lg" 
                loop
                muted
                playsInline
                onClick={() => toggleMute(index)}
              />
            </div>
          ))}
        </div>

      </div>

      <div className="text-4xl mb-4 text-center">
        i want to help build the future of AI and help other people build what they care about. 
        <div className="text-gray-400 text-xl">buildspace n&w has had a huge affect on me these past weeks and i want to help spread it to everyone as much as possible</div>
      </div>

      <div className="text-4xl mb-4 text-center">
        <div className="flex flex-row">
          <div className="w-1/2">
            this is what i'd work on my first day at buildspace:
          </div>
          <div className="w-1/2">
            video
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mb-8">
        <h2 className="text-4xl font-bold mb-2">this is just a bonus, but farza already loves me:</h2>
        <Tweet id="1808350569486270797"/>
      </div>

      <div>My S5 journey behind the scenes + loom videos carousel. </div>

      <div className="text-2xl mb-4 text-center">
        thanks to the Buildspace team for a great s5.

        shoot confetti and play buildspace grant song
        <ul className="list-disc list-inside mt-2">
          farza josh amit stavan jeffrey dante aiden adrianna
        </ul>
      </div>
      </div>
      
      {modalImage && (
        <ImageModal src={modalImage} alt="Enlarged view" onClose={closeModal} />
      )}  {/* need this for img enlargement */}
    </main>
  );
}