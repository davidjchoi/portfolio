import Image from 'next/image'

// NYC Skyline Component
const NYCSkyline = () => {
  return (
    <>
      {/* NYC Skyline - Main */}
      <div className="absolute bottom-0 left-0 w-full h-100 opacity-20">
        <Image
          src="/nyc.png" // Replace with your actual file path
          alt="NYC Skyline"
          fill
          className="object-cover object-bottom"
          style={{
            filter: 'hue-rotate(240deg) saturate(150%) brightness(0.7)',
            maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)'
          }}
          priority={false}
          sizes="100vw"
        />
      </div>

      {/* NYC Skyline - Duplicate for depth effect */}
      <div className="absolute bottom-0 right-0 w-full h-100 opacity-10 transform scale-x-[-1]">
        <Image
          src="/nyc.png" // Replace with your actual file path
          alt="NYC Skyline Background"
          fill
          className="object-cover object-bottom"
          style={{
            filter: 'hue-rotate(280deg) saturate(100%) brightness(0.6)',
            maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0) 100%)'
          }}
          priority={false}
          sizes="100vw"
        />
      </div>
    </>
  )
}

export default NYCSkyline

