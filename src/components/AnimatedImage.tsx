

// "use client"

// import Image from 'next/image'
// import { useEffect, useState } from 'react'

// const OrbitPath = ({ size }: { size: number; opacity?: number }) => (
//   <div 
//     className="absolute rounded-full border border-white/20"
//     style={{
//       width: `${size}px`,
//       height: `${size}px`,
//       left: `${-size/2}px`,
//       top: `${-size/2}px`,
//     }}
//   />
// )

// const OrbitingPlanet = ({ 
//   duration, 
//   size, 
//   color, 
//   orbitSize 
// }: { 
//   duration: number;
//   size: number;
//   color: string;
//   orbitSize: number;
// }) => {
//   const randomStart = Math.random() * 360;
//   return (
//     <div 
//       className="absolute left-1/2 top-1/2"
//       style={{
//         width: `${orbitSize}px`,
//         height: `${orbitSize}px`,
//         marginLeft: `${-orbitSize/2}px`,
//         marginTop: `${-orbitSize/2}px`,
//         animation: `orbit ${duration}s linear infinite`,
//         transform: `rotate(${randomStart}deg)`,
//       }}
//     >
//       <div 
//         className="absolute rounded-full"
//         style={{
//           width: `${size}px`,
//           height: `${size}px`,
//           backgroundColor: color,
//           top: '0',
//           left: '50%',
//           transform: 'translateX(-50%)',
//           boxShadow: `0 0 ${size/2}px ${color}`,
//           filter: 'blur(1px)',
//         }}
//       />
//     </div>
//   )
// }

// export default function AnimatedImage() {
//   const [mounted, setMounted] = useState(false)

//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   if (!mounted) return null

//   return (
//     <div className="relative w-[400px] h-[450px]  flex items-center justify-center">
//       <style jsx global>{`
//         @keyframes orbit {
//           from { transform: rotate(0deg); }
//           to   { transform: rotate(360deg); }
//         }
        
//         @keyframes pulse {
//           0%, 100% { transform: scale(1); opacity: 0.8; }
//           50% { transform: scale(1.05); opacity: 1; }
//         }
//       `}</style>
      
//       {/* Background gradient */}
//       <div 
//         className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black"
//         style={{
//           backgroundImage: 'radial-gradient(circle at center, rgba(88, 28, 135, 0.15), transparent 70%)',
//         }}
//       />

//       {/* Orbit paths */}
//       <div className="absolute left-1/2 top-1/2">
//         <OrbitPath size={300} />
//         <OrbitPath size={400} />
//         <OrbitPath size={500} />
//         <OrbitPath size={600} />
//         <OrbitPath size={700} />
//       </div>
      
//       {/* Orbiting planets */}
//       <div className="absolute">
//         <OrbitingPlanet duration={10} size={12} color="#FFD700" orbitSize={700} />
//         <OrbitingPlanet duration={8} size={8} color="#87CEEB" orbitSize={600} />
//         <OrbitingPlanet duration={12} size={10} color="#FFA500" orbitSize={500} />
//         <OrbitingPlanet duration={15} size={12} color="#ADD8E6" orbitSize={400} />
//         <OrbitingPlanet duration={18} size={8} color="#FF4500" orbitSize={300} />
//       </div>

//       {/* Central image with glow effect */}
//       <div className="relative z-10 ">
//         <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl transform scale-110" />
//         <Image
//           src="/MentorBgRemove.png"
//           alt="Astrological figure"
//           width={450}
//           height={450}
//           className="relative rounded-full"
//         />
//       </div>

//       {/* Optional: Add mystical particles */}
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMyIvPjwvc3ZnPg==')] opacity-50" />
//     </div>
//   )
// }

"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'

const OrbitPath = ({ size }: { size: number }) => (
  <div 
    className="absolute rounded-full border border-white/20"
    style={{
      width: `${size}%`,
      height: `${size}%`,
      left: `${-size/2}%`,
      top: `${-size/2}%`,
    }}
  />
)

const OrbitingPlanet = ({ 
  duration, 
  size, 
  color, 
  orbitSize 
}: { 
  duration: number;
  size: number;
  color: string;
  orbitSize: number;
}) => {
  const randomStart = Math.random() * 360;
  return (
    <div 
      className="absolute left-1/2 top-1/2"
      style={{
        width: `${orbitSize}%`,
        height: `${orbitSize}%`,
        marginLeft: `${-orbitSize/2}%`,
        marginTop: `${-orbitSize/2}%`,
        animation: `orbit ${duration}s linear infinite`,
        transform: `rotate(${randomStart}deg)`,
      }}
    >
      <div 
        className="absolute rounded-full"
        style={{
          width: `${size}%`,
          height: `${size}%`,
          backgroundColor: color,
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          boxShadow: `0 0 ${size/2}px ${color}`,
          filter: 'blur(1px)',
        }}
      />
    </div>
  )
}

export default function AnimatedImage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative w-full aspect-square max-w-[400px] mx-auto">
      <style jsx global>{`
        @keyframes orbit {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.8; }
          50% { transform: scale(1.05); opacity: 1; }
        }
      `}</style>
      
      {/* Background gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black rounded-full"
        style={{
          backgroundImage: 'radial-gradient(circle at center, rgba(88, 28, 135, 0.15), transparent 70%)',
        }}
      />

      {/* Orbit paths */}
      <div className="absolute left-1/2 top-1/2 w-full h-full">
        <OrbitPath size={75} />
        <OrbitPath size={85} />
        <OrbitPath size={95} />
        <OrbitPath size={105} />
        <OrbitPath size={115} />
      </div>
      
      {/* Orbiting planets */}
      <div className="absolute w-full h-full">
        <OrbitingPlanet duration={10} size={3} color="#FFD700" orbitSize={115} />
        <OrbitingPlanet duration={8} size={2} color="#87CEEB" orbitSize={105} />
        <OrbitingPlanet duration={12} size={2.5} color="#FFA500" orbitSize={95} />
        <OrbitingPlanet duration={15} size={3} color="#ADD8E6" orbitSize={85} />
        <OrbitingPlanet duration={18} size={2} color="#FF4500" orbitSize={75} />
      </div>

      {/* Central image with glow effect */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="absolute inset-0 rounded-full bg-purple-500/20 blur-xl transform scale-110" />
        <Image
          src="/MentorBgRemove.png"
          alt="Astrological figure"
          width={300}
          height={300}
          className="relative rounded-full w-[85%] h-[85%] object-cover"
        />
      </div>

      {/* Optional: Add mystical particles */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuMyIvPjwvc3ZnPg==')] opacity-50 rounded-full" />
    </div>
  )
}

