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
import { useRef, useEffect, useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import dynamic from 'next/dynamic';
import { Ghost } from "lucide-react";

const Confetti = dynamic(() => import('react-confetti'), { ssr: false });

export default function Home() {
  // for image popup
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
  
    const currentVideoRefs = videoRefs.current;
  
    currentVideoRefs.forEach((video) => {
      if (video) observer.observe(video);
    });
  
    return () => {
      currentVideoRefs.forEach((video) => {
        if (video) observer.unobserve(video);
      });
    };
  }, []);

  const toggleMute = (index: number) => {
    if (videoRefs.current[index]) {
      videoRefs.current[index]!.muted = !videoRefs.current[index]!.muted;
    }
  };

  const [showConfetti, setShowConfetti] = useState(false);

  const handleConfettiClick = useCallback(() => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 5000); // Confetti disappears after 5 seconds
  }, []);

  return (
    <main className="flex flex-col lg:flex-row h-screen items-center justify-between text-white font-manrope bg-black font-extrabold tracking-tighter">
      <div className="h-full w-full 2xl:w-1/4 xl:w-1/3 bg-black items-center text-white p-8 flex flex-col justify-between">
        <div className="hidden lg:block">
            <Image 
              src="/buildspace-kyle.png" 
              alt="Pic of Kyle with buildspace hat" 
              width={300} 
              height={300} 
              className="rounded-full aspect-square object-cover shadow-lg" 
            />
          </div>
        <div className="mt-auto">
          <h1 className="text-7xl font-bold mb-4">hey there, i&apos;m kyle.</h1>
          <p className="text-gray-400 text-lg font-medium 2xl:text-xl">this is why you should hire me as a buildspace intern (ai or full-stack) this fall!</p>
          <div className="py-4 flex justify-center space-x-4">
            <Button 
              onClick={() => window.open('https://github.com/Kylejeong2/whyyoushouldhiremebuildspace', '_blank')}
              variant="outline" 
              className="font-bold h-16 text-lg w-1/2 rounded-none text-black hover:bg-black hover:text-white transition-colors duration-200"
            >
              github repo for this site
            </Button>
            <Button 
              onClick={() => window.open('https://twitter.com/kylejeong21', '_blank')}
              className="h-16 w-1/2 font-bold bg-black text-lg rounded-none text-white border-solid border-white border-2 hover:bg-white hover:text-black transition-colors duration-200"
            >
              my twitter
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full 2xl:w-3/4 xl:w-2/3 h-screen overflow-y-auto p-4 2xl:p-8 bg-gray-950 border-l-2 border-l-gray-800">

      <div className="space-y-8 text-center p-20">
        <div className="mb-4">
          <h1 className="text-6xl font-bold p-6">i love building!</h1>
          <p className="text-gray-400 text-xl">whether it be legos, computers, or programming projects; i love building stuff and it&apos;s something that i&apos;ll do for the rest of my life. </p>
        </div>
        <div className="flex justify-center">
          <Carousel className="w-full bg-gray-600 rounded-lg max-w-6xl">
            <CarouselContent>
              <CarouselItem className="p-8 justify-between">
              <div className="mb-8 text-center justify-between font-extrabold text-xl">
                my feature in the lego magazine after winning a building competition + me programming a lego robot to move around and fight aliens.
                <div className="flex flex-row items-center justify-center space-x-4 mt-4">
                  <Image 
                    src="/legoMagazine.png" 
                    alt="Lego" 
                    width={350} 
                    height={350} 
                    className="rounded-lg shadow-lg cursor-pointer" 
                    onClick={() => openModal("/legoMagazine.png")}
                  />
                  <Image 
                    src="/robotics.jpg" 
                    alt="Lego" 
                    width={400} 
                    height={300} 
                    className="rounded-lg shadow-lg cursor-pointer" 
                    onClick={() => openModal("/robotics.jpg")}
                  />
                </div>
              </div>
              </CarouselItem>
              <CarouselItem className="p-8 justify-between">
              <div className="mb-8 text-center justify-between font-extrabold text-xl">
                here are some pc computers I&apos;ve built:
                  <div className="flex flex-row items-center justify-center space-x-4 mt-4">
                    <Image 
                      src="/pc1.jpeg" 
                      alt="PC Build 1" 
                      width={350} 
                      height={250} 
                      className="rounded-lg shadow-lg cursor-pointer" 
                      onClick={() => openModal("/pc1.jpeg")}
                    />
                    <Image 
                      src="/pc2.jpeg" 
                      alt="PC Build 2" 
                      width={350} 
                      height={250} 
                      className="rounded-lg shadow-lg cursor-pointer" 
                      onClick={() => openModal("/pc2.jpeg")}
                    />
                    <Image 
                      src="/pc3.jpeg" 
                      alt="PC Build 2" 
                      width={350} 
                      height={250} 
                      className="rounded-lg shadow-lg cursor-pointer lg:hidden" 
                      onClick={() => openModal("/pc3.jpeg")}
                    />
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="p-8 justify-between">
                <div className="mb-8 text-center justify-between font-extrabold text-xl">
                  <h1>some cool projects i&apos;ve shipped during n&w s5:</h1>
                  <div className="flex flex-row items-center justify-center space-x-4 mt-4">
                    <Image 
                      src="/hackletter.png" 
                      alt="HackLetter" 
                      width={350} 
                      height={300} 
                      className="rounded-lg shadow-lg cursor-pointer" 
                      onClick={() => window.open('https://www.hackletter.co', '_blank')}                    
                    />
                    <Image 
                      src="/disciple.png" 
                      alt="Disciple AI" 
                      width={400} 
                      height={300} 
                      className="rounded-lg shadow-lg cursor-pointer" 
                      onClick={() => window.open('https://github.com/Kylejeong2/DiscipleAI', '_blank')}                    
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
        <p className="text-gray-400 text-xl">this is me learning to cook with my friend, learning to play the piano, and learning to do a backflip (it&apos;s sick i know). </p>

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

      <div className="text-2xl text-center">
        <h1 className="text-6xl font-bold p-6">i&apos;m relentless in my pursuit (of literally everything).</h1>
        <p className="text-gray-400 text-2xl">if i want something done, i&apos;ll get it done</p>
        <p className="text-gray-400 text-xl">here&apos;s clip of me wrestling through a tough takedown (jiu jitsu jeff knows) + me fighting through a 425 squat.</p>
        <div className="flex justify-between mt-4">
          {['squat.mov', 'wrestling.mov'].map((src, index) => (
            <div key={src} className="w-1/2 px-2 rounded-lg">
              <video
                ref={(el) => { videoRefs.current[index + 3] = el; }}
                src={src}
                className={`border-solid border-white border-2 w-full h-4/5 cursor-pointer rounded-lg ${src === 'wrestling.mov' ? 'object-cover' : ''}`}
                loop
                muted
                playsInline
                onClick={() => toggleMute(index + 3)}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="text-6xl mb-8 text-center">
        <h1 className="p-4">i want to help people build what they care about. </h1>
        <div className="text-gray-400 text-xl">buildspace n&w has had a huge affect on me these past weeks and i want to help spread it to everyone.</div>
      </div>

      <div className="text-4xl mb-4 text-center">
        <div className="flex flex-row">
          <div className="w-1/2">
            this is what i&apos;d work on my first day at buildspace:
          </div>
          <div className="w-1/2">
            video
          </div>
        </div>
      </div>

      <div className="text-4xl flex flex-row items-center mb-4 text-center">
      <Image 
          src="/gmap.png" 
          alt="map" 
          width={700} 
          height={400} 
          className="rounded-lg shadow-lg cursor-pointer" 
          onClick={() => openModal("/gmap.png")}
        />
        i&apos;m also based near sf 📍(~40 mins away)
      </div>

      <div className="flex flex-col items-center justify-center mb-8">
        <h2 className="text-4xl font-bold p-6 mb-2">this is just a bonus, but farza already loves me:</h2>
        <Tweet id="1808350569486270797"/>
      </div>

      {/* <div className="text-4xl mb-4 text-center">my s5 journey behind the scenes.</div>
      <div className="flex justify-center">
          <Carousel className="w-5/6 bg-gray-600 rounded-lg max-w-6xl">
            <CarouselContent>
              <CarouselItem className="p-8 justify-between">
              <div className="mb-8 h-96 text-center justify-between font-extrabold text-xl">
                <iframe 
                  src="https://www.loom.com/embed/5820716da568462ab34b7c29da5df9a4?sid=da032e22-09fd-435a-8014-afd97b4e9470" 
                  className="w-full h-full"
                />
              </div>
              </CarouselItem>
              <CarouselItem className="p-8 justify-between">
                
              <div className="mb-8 h-96 text-center justify-between font-extrabold text-xl">
                <iframe 
                  src="https://www.loom.com/embed/cabbd74cb4dc4b7f92b363d2a7f425fd?sid=80a9266b-a40b-4c9d-9dea-d74fbe3bbdda" 
                  className="w-full h-full"
                />
              </div>
              </CarouselItem>
              <CarouselItem className="p-8 justify-between">
              <div className="mb-8 h-96 text-center justify-between font-extrabold text-xl">
                <iframe 
                  src="https://www.loom.com/embed/5820716da568462ab34b7c29da5df9a4?sid=da032e22-09fd-435a-8014-afd97b4e9470" 
                  className="w-full h-full"
                />
              </div>
              </CarouselItem>
              <CarouselItem className="p-8 justify-between">
              <div className="mb-8 h-96 text-center justify-between font-extrabold text-xl">
                <iframe 
                  src="https://www.loom.com/embed/5820716da568462ab34b7c29da5df9a4?sid=da032e22-09fd-435a-8014-afd97b4e9470" 
                  className="w-full h-full"
                />
              </div>
              </CarouselItem>
              <CarouselItem className="p-8 justify-between">
              <div className="mb-8 h-96 text-center justify-between font-extrabold text-xl">
                <iframe 
                  src="https://www.loom.com/embed/5820716da568462ab34b7c29da5df9a4?sid=da032e22-09fd-435a-8014-afd97b4e9470" 
                  className="w-full h-full"
                />
              </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="bg-black"/>
            <CarouselNext className="bg-black"/>
          </Carousel>
        </div> */}
      

      <div className="text-2xl mb-4 text-center">
        thanks to the buildspace team for a great s5.

        <Button 
          onClick={handleConfettiClick}
          variant="ghost"
          className="font-bold h-16 text-lg w-1/2 rounded-none text-black hover:bg-black hover:text-white transition-colors duration-200"
        >
          surprise button
        </Button>
        <ul className="list-disc list-inside mt-2">
          appreciate you all:
          farza, josh, amit, stavan, jeffrey, dante, aiden, and adrianna
        </ul>
      </div>
      </div>
      
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={500}
          style={{ position: 'fixed', top: 0, left: 0, zIndex: 1000 }}
        />
      )}

      {modalImage && (
        <ImageModal src={modalImage} alt="Enlarged view" onClose={closeModal} />
      )}  {/* need this for img enlargement */}
    </main>
  );
}