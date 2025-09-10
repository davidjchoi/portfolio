import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (

    <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between p-4">

    <section id="header"className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24 bg-blue-200">
      <div className="relative w-500">
        <h1 className="relative text-4xl font-bold pt-20 w-200" >David Choi</h1>

    <p className="relative text-lg text-gray-600 pt-20">Software Developer  JavaScript  Next.js</p>
    <p className="relative text-lg text-gray-600 pt-20">Software engineer who loves turning ideas into code and is always eager to learn new technologies.</p>

    <div id="links" className="mt-4 space-x-4 pt-20" >
      <Link href="https://github.com/davidjchoi" className="button">
        GitHub
      </Link>
      <Link href="https://linkedin.com/in/davidj-choi" className="button">
        LinkedIn
      </Link>
      </div>
    </div>
  </section>

    <div id="content" className="pt-24 lg:w-[52%] lg:py-24 bg-yellow-200">
      <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-center font-bold text-1xl">
      About
      </section>

      <p className="static pt-10">I'm a passionate Software Engineer with a strong foundation in building scalable, user-friendly applications. My background combines programming expertise with problem-solving skills, allowing me to create solutions that are both efficient and impactful. I enjoy working across the full stack-- developing intuitive front-end experiences with React/Next.js and building reliable back-end systems with Node.js, Express, and SQL/NoSQL databases.</p>

      <p className="pt-20">Beyond coding, I thrive in collaborative environments where I can learn from others and share my own knowledge. I'm always looking to grow, whether that's by exploring new technologies, refining my technical skills, or tackling challenging projects.</p>
      <p className="pt-20">When I'm not coding, you'll often find me learning about emerging tech trends, contributing to personal projects, or brainstorming innovative ideas that can make everyday life easier.</p>


      <section id="experiences">
        Experiences
      </section>

    </div>



    </div>
    </main>
  );
}
