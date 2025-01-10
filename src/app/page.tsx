import { Cards, CardsProps } from '../components/cards'
import { CTAButton } from '../components/cta-button'
import { TimelineNode } from '../components/TimelineNode'
import { HiOutlineLightningBolt } from 'react-icons/hi'
import { IoGameControllerOutline } from 'react-icons/io5'
import { AiOutlineRobot } from 'react-icons/ai'
import { FaRegCircle } from 'react-icons/fa'
import Spline from '@splinetool/react-spline/next'
import Image from 'next/image'

const infoCards: CardsProps[] = [
  {
    icon: <HiOutlineLightningBolt size={42} color="#F5F5F5" />,
    title: 'AI Game Master On-The-Go',
    description:
      'Your personal Game Master powered by Gemini 1.5, available 24/7 on your mobile device. Create and join adventures whenever inspiration strikes.',
  },
  {
    icon: <IoGameControllerOutline size={42} color="#F5F5F5" />,
    title: 'Rich Character Development',
    description:
      "Build your legacy across multiple campaigns. Every decision shapes your character's story, abilities, and relationships in our persistent world.",
  },
  {
    icon: <AiOutlineRobot size={42} color="#F5F5F5" />,
    title: 'Immersive Storytelling',
    description:
      'Experience dynamic storytelling with AI-generated images, adaptive music, and rich narrative descriptions that bring your adventures to life.',
  },
]

function Circle() {
  return (
    <div role="figure" className="flex items-center justify-center py-4">
      <FaRegCircle size={13} className="text-white" />
    </div>
  );
}

function DashedLine() {
  return (
    <div
      role="figure"
      className="border border-dashed border-white h-[75px]"
    ></div>
  );
}

export default function Home() {
  return (
    <main className="max-w-[1060px] w-full mx-auto">
      <div className="flex flex-col items-center justify-center h-[500px] sm:h-[480px] gap-2 mt-8">
        <h1 className="text-[45px] font-bold text-center">
          Your AI Game Master{' '}
          <span className="gradient-text text-transparent animate-gradient">
            Anywhere, Anytime
          </span>
        </h1>

        <p className="max-w-[675px] w-full text-center text-[18px] mb-8">
          Experience the future of  RPGs with Questoria: An AI-powered experience 
          that brings immersive adventures to your pocket. Play solo or with friends, develop 
          your character across multiple campaigns, and dive into endless worlds.
        </p>

        <CTAButton />
      </div>

      <section className="w-full flex flex-col items-center justify-center lgp:items-start lgp:justify-start gap-8 lgp:gap-6">
        <div className="w-full flex items-center justify-center gap-8 lgp:justify-between lgp:gap-0 flex-wrap">
          {infoCards.map((card) => (
            <Cards
              key={card.title}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>

        <div className="bg-marfin text-black rounded-3xl p-8 flex flex-col md:flex-row items-center justify-center gap:6 md:justify-between md:gap-10">
          <div className="flex flex-col gap-2 ">
            <h3 className="text-[18px] font-madefor-display font-bold text-black">
              Why Questoria?
            </h3>
            <p className="text-[15px]">
              Experience tabletop RPGs reimagined for the modern era. Our AI Game Master adapts 
              to your schedule, offering personalized adventures whenever you are ready to play. 
              Choose from multiple game settings and dice systems, or create your own. Whether 
              solo or with friends, your next adventure is just a tap away.
            </p>
          </div>
        </div>
      </section>
      <section
        id="caracteristicas"
        className="w-full flex flex-col lgp:flex-row items-center justify-center lgp:justify-between gap-12 lgp:gap-34 py-[120px]"
      >
        <div className="flex flex-col gap-3 lgp:max-w-[480px] w-full">
          <h2 className="text-white text-[28px] font-madefor-display font-bold">
            Intelligent Storytelling
          </h2>
          <h3 className="text-beige text-2xl font-madefor-display font-bold mb-4">
            Powered by Gemini 1.5
          </h3>
          <p className="text-[15px] leading-7">
            Our AI Game Master crafts dynamic narratives that respond to your every decision. 
            With advanced context understanding and memory, each session builds upon your 
            character's history, creating truly personal and meaningful adventures. Experience 
            storytelling that adapts to your playstyle and grows with you.
          </p>
        </div>

        <div className="image-wrapper">
          <div className="w-[calc(100%-2px)] h-[calc(100%-2px)] z-20 relative rounded-2xl overflow-hidden bg-[#111]">
            <Image
              src="/images/character-creation.png"
              alt="Questoria Character Creation Screen"
              className="object-scale-down"
              objectFit="cover"
              quality={100}
              fill
              sizes="(min-width: 726px) 70vw, 100vw"
            />
          </div>
        </div>

        

        
      </section>

      <section
        id="personalizacion"
        className="w-full flex flex-col-reverse lgp:flex-row items-center justify-center lgp:justify-between gap-12 lgp:gap-4 py-[120px]"
      >
        <div className="image-wrapper">
          <div className="w-[calc(100%-2px)] h-[calc(100%-2px)] z-20 relative rounded-2xl overflow-hidden bg-[#111]">
            <Image
              src="/images/character-creation.png"
              alt="Questoria Character Creation Screen"
              className="object-scale-down"
              objectFit="cover"
              quality={100}
              fill
              sizes="(min-width: 726px) 70vw, 100vw"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3 lgp:max-w-[480px] w-full">
          <h2 className="text-white text-[28px] font-madefor-display font-bold">
            Multiplayer Adventures
          </h2>
          <h3 className="text-purple text-2xl font-madefor-display font-bold mb-4">
            Play Solo or Join Forces
          </h3>
          <p className="text-[15px] leading-7">
            Whether you prefer solo adventures or want to team up with friends, Questoria 
            adapts to your playstyle. Engage in competitive scenarios, join cooperative 
            campaigns, or craft your own worlds and share them with the community. With 
            multiple game settings and dice systems, every session is a unique experience.
          </p>
        </div>
      </section>

      <section
        id="caracteristicas"
        className="w-full flex flex-col lgp:flex-row items-center justify-center lgp:justify-between gap-12 lgp:gap-34 py-[120px]"
      >
        <div className="flex flex-col gap-3 lgp:max-w-[480px] w-full">
          <h2 className="text-white text-[28px] font-madefor-display font-bold">
          Game Systems & Settings
          </h2>
          <h3 className="text-beige text-2xl font-madefor-display font-bold mb-4">
          Your Rules, Your World
          </h3>
          <p className="text-[15px] leading-7">
          Choose from a variety of game systems or create your own. Each setting offers unique mechanics and possibilities:
  
          </p>
          <ul className="space-y-3">
        <li className="flex items-start gap-2">
          <span className="text-purple-500 font-bold">•</span>
          <span>Fantasy D20: Traditional dice-based combat with enhanced critical systems</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-purple-500 font-bold">•</span>
          <span>Story Mode: Narrative-focused gameplay with flexible outcome resolution</span>
        </li>
        <li className="flex items-start gap-2">
          <span className="text-purple-500 font-bold">•</span>
          <span>Custom Systems: Design your own rules and share them with the community</span>
        </li>
      </ul>
        </div>

        <div className="image-wrapper">
          <div className="w-[calc(100%-2px)] h-[calc(100%-2px)] z-20 relative rounded-2xl overflow-hidden bg-[#111]">
            <Image
              src="/images/character-creation.png"
              alt="Questoria Character Creation Screen"
              className="object-scale-down"
              objectFit="cover"
              quality={100}
              fill
              sizes="(min-width: 726px) 70vw, 100vw"
            />
          </div>
        </div>

        

        
      </section>

      <section className="w-full flex flex-col lgp:flex-row items-center justify-center lgp:justify-between gap-12 lgp:gap-20 py-[120px]">
        <div className="flex flex-col gap-3 lgp:max-w-[480px] w-full">
          <h2 className="text-white text-[28px] font-madefor-display font-bold">
            Flexibility Without Limits
          </h2>
          <h3 className="text-blue text-2xl font-madefor-display font-bold mb-4">
            Your Schedule, Your Rules
          </h3>
          <p className="text-[15px] leading-7 mb-5">
            No more scheduling conflicts or dependency on other players. Questoria offers 
            complete freedom to play whenever and wherever you want. Choose from various 
            game settings, create custom content, and share your creations with the community.
          </p>

          <div className="w-full flex items-center gap-10 sm:gap-28">
            <div className="flex flex-col gap-2 text-white font-madefor-display font-bold text-2xl">
              <div className="flex items-center justify-start text-[38px]">
                <p className="">
                  <span className="">2</span>
                </p>
                <span>+</span>
              </div>
              <p>Languages</p>
            </div>

            <div className="flex flex-col gap-2 text-white font-madefor-display font-bold text-2xl">
              <div className="flex items-center justify-start text-[38px]">
                <p className="">
                  <span className="">15</span>
                </p>
                <span>min</span>
              </div>
              <p>Avg Session</p>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center flex-grow w-full lgp:justify-between gap-8 lgp:gap-0 flex-wrap lgp:w-auto">
          {/* MVP Timeline */}
          <div className="max-w-[240px] w-full border border-[#333] rounded-xl text-[13px] p-3">
            <div className="flex items-center justify-between mb-3">
              <p>Path to MVP</p>
              <span>Core Features</span>
            </div>
            Development Path
            <div className="flex items-center mt-6 gap-3">
              <div className="pl-2 flex flex-col items-center justify-center">
                <Circle />
                <DashedLine />
                <Circle />
                <DashedLine />
                <Circle />
                <DashedLine />
                <Circle />
              </div>
              <div className="flex-grow flex flex-col items-start justify-center">
                <div className="flex flex-col items-center justify-center gap-8">
                  <TimelineNode
                    name="Character Creation"
                    description="Character Creation & Progression"
                    features={[
                      'Deep character customization',
                      'Persistent progression',
                      'Multiple character slots',
                      'Background generation'
                    ]}
                    label="Foundation"
                  />
                  <TimelineNode
                    name="AI Narratives"
                    description="Dynamic Story Generation"
                    features={[
                      'AI-powered storytelling',
                      'Adaptive campaigns',
                      'Context memory',
                      'Branching narratives'
                    ]}
                    label="Core Engine"
                  />
                  <TimelineNode
                    name="Game Systems"
                    description="Core Gameplay Mechanics"
                    features={[
                      'Multiple dice systems',
                      'Combat mechanics',
                      'Skill challenges',
                      'Character progression'
                    ]}
                    label="Current Focus"
                  />
                  <TimelineNode
                    name="User Experience"
                    description="Mobile Interface & Features"
                    features={[
                      'Intuitive controls',
                      'Quick actions',
                      'Offline support',
                      'Session management'
                    ]}
                    label="MVP Release"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Post-MVP Timeline */}
          <div className="max-w-[240px] w-full border border-[#333] rounded-xl text-[13px] p-3">
            <div className="flex items-center justify-between mb-3">
              <p>Future Evolution</p>
              <span>Expansion</span>
            </div>
            Growth Path
            <div className="flex items-center mt-6 gap-3">
              <div className="pl-2 flex flex-col items-center justify-center">
                <Circle />
                <DashedLine />
                <Circle />
                <DashedLine />
                <Circle />
                <DashedLine />
                <Circle />
              </div>
              <div className="flex-grow flex flex-col items-start justify-center">
                <div className="flex flex-col items-center justify-center gap-8">
                  <TimelineNode
                    name="Competitive Play"
                    description="PvP Adventures & Challenges"
                    features={[
                      'Player vs Player campaigns',
                      'Competitive ranking',
                      'Tournament system',
                      'Balanced mechanics'
                    ]}
                    label="PvP Mode"
                  />
                  <TimelineNode
                    name="Group Play"
                    description="Multiplayer Adventures"
                    features={[
                      'Party system',
                      'Shared campaigns',
                      'Real-time cooperation',
                      'Group chat'
                    ]}
                    label="Multiplayer"
                  />
                  <TimelineNode
                    name="New Settings"
                    description="Additional Game Worlds"
                    features={[
                      'Fantasy settings',
                      'Sci-fi universe',
                      'Horror campaigns',
                      'Custom themes'
                    ]}
                    label="Worlds"
                  />
                  <TimelineNode
                    name="Community"
                    description="Content Creation Tools"
                    features={[
                      'World builder',
                      'Custom rules',
                      'Asset sharing',
                      'Community events'
                    ]}
                    label="Creation"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-full flex flex-col items-center justify-center py-16 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl">
        <h2 className="text-3xl font-bold text-white mb-4">
          Begin Your Epic Journey
        </h2>
        <p className="text-white text-lg mb-8 text-center max-w-2xl px-4">
          Join the future of tabletop gaming. Create your character, choose your setting, and let our 
          AI Game Master guide you through unforgettable adventures - all from your mobile device.
        </p>
        <CTAButton />
        <p className="text-sm text-white/80 mt-4">
          +100 players have already joined
        </p>
      </div>
    </main>
  );
}