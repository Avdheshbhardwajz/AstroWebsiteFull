import Image from 'next/image'

interface SectionBackgroundProps {
  children: React.ReactNode;
}

export function SectionBackground({ children }: SectionBackgroundProps) {
  return (
    <div className="relative bg-[#1a0b2e]">
      <Image
        src="https://img.freepik.com/free-vector/gradient-numerology-background_23-2150001894.jpg"
        alt="Section Background"
        layout="fill"
        objectFit="cover"
        className="z-0 opacity-30"
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}

