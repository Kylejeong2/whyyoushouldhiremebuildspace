import Image from "next/image";
import { Tweet } from 'react-tweet'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        Hey👋, I'm Kyle Jeong.
      </div>

      <div>
        I'm 19 and a rising junior at UCLA studying math and cs. 
      </div>

      <div>
        This is why you should hire me as a Buildspace Intern (ai or full-stack) this fall!
      </div>

      <div>
        I LOVE BUILDING!

        Building is literally my passion, and it's something that I'll do for the rest of my life. 

        This is me building Legos and getting featured in the lego magazine for winning a building competition.
        
        Here are the PC computers I've built:
        
        My favorite programming projects: 

      </div>

      <div>
        I work and learn fast 

      </div>

      <div>
        I'm relentless in my pursuit.

        here's some physical evidence ( wrestling clip, 425 squat )

      </div>

      <div>
        I want to help build the future of AI and help other people build what they care about. 

        buildspace n&w has had a huge affect on me these past weeks and I want to help spread it to everyone as much as possible

      </div>

      <div>
        video of me explaining how i could help improve sage full-stack / ai side
      </div>

      <div className="flex flex-col items-center justify-center">
        <h2>Farza already loves me: </h2>
        <Tweet id="1808350569486270797"/>
      </div>

      <div>
        Please contact me here: 

        email
        website
        linkedin
        twitter

      </div>

      <div>
        Thanks to the Buildspace team for a great s5.

        list buildspace team
      </div>
    </main>
  );
}