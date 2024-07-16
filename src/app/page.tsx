import Image from "next/image";
import { Tweet } from 'react-tweet'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        Hey👋, I'm Kyle Jeong.
      </div>

      <div>
        This is why you should hire me as a Buildspace Intern this fall!
      </div>

      <div>
        I LOVE BUILDING!

        This is me building legos and getting featured in the lego magazine.
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
    </main>
  );
}