import Image from "next/image";


export default function Home() {
  return (

    <main className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
      <div className="lg:flex lg:justify-between p-4">

    <section id="header"className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div className="relative w-500">
        <h1 className="relative text-6xl font-bold pt-50 ml-10" >David Choi</h1>

    <p className="relative text-lg mt-20 mb-50 ml-15">Software Developer / Designer</p>
    <p className="relative text-lg text-gray-600  ml-5 mt-30 mr-20">Software engineer who loves turning ideas into code and is always eager to learn new technologies.</p>

    </div>

      {/* maybe email me (contact me function here) */}


    <nav id="nav" className="nav hidden lg:block">
      <a className="group flex items-center py-10 active" href="#about">
        <span className="nav-indicator mr-2 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
        </span>
        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">ABOUT</span>
      </a>

      <a className="group flex items-center py-10 active" href="#experience">
        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
        </span>
        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Experience</span>
      </a>

      <a className="group flex items-center py-10 active" href="#project">
        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none">
        </span>
        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">Projects</span>
      </a>
    </nav>
    <div id="links" className="mb-100 space-x-20 pt-50 ml-15" >
      <a className="group inline-block rounded-sm bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:ring-3 focus:outline-hidden button" href="https://github.com/davidjchoi" rel="noopener noreferrer" target="_blank">
      <span className="block rounded-xs bg-black px-8 py-3 text-sm font-medium group-hover:bg-transparent">GitHub</span>
      </a>

      <a className="group inline-block rounded-sm bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-[2px] hover:text-white focus:ring-3 focus:outline-hidden button" href="https://linkedin.com/in/davidj-choi" rel="noopener noreferrer" target="_blank">
      <span className="block rounded-xs bg-black px-8 py-3 text-sm font-medium group-hover:bg-transparent">LinkedIn</span>
      </a>
      </div>

  <section id="intro">


  </section>



  </section>

    <div id="content" className="pt-24 lg:w-[52%] lg:py-24">
      <section id="about">
      <h1 id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-center font-bold uppercase text-lg pt-100">
      About
      </h1>

      <p className="static pt-10">I'm a passionate Software Engineer with a strong foundation in building scalable, user-friendly applications. My background combines programming expertise with problem-solving skills, allowing me to create solutions that are both efficient and impactful. I enjoy working across the full stack-- developing intuitive front-end experiences with React/Next.js and building reliable back-end systems with Node.js, Express, and SQL/NoSQL databases.</p>

      <p className="pt-20">Beyond coding, I thrive in collaborative environments where I can learn from others and share my own knowledge. I'm always looking to grow, whether that's by exploring new technologies, refining my technical skills, or tackling challenging projects.</p>
      <p className="pt-20">When I'm not coding, you'll often find me learning about emerging tech trends, contributing to personal projects, or brainstorming innovative ideas that can make everyday life easier.</p>
      </section>


      <section id="experience">

        <h1 className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-center font-bold uppercase text-lg pt-100">Experiences
          </h1>

      <h3 id="experienceTitle" className="font-bold pt-50">Permanent Mission of the Republic of Korea to the United Nations</h3>

        <h2 className= "z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 top-5 ">2022, 2023</h2>

          <p id="experienceDescription" className="pt-5 text-sm mt-30">Aided Korean government officials in the General Assembly of the United Nations for the Annual UNGA Event. Collaborated in reconciling the Korean government's demands with external partners. Proficiently handled managing multiple tasks simultaneously in dynamic, fast-paced settings. Established a secure workspace and network infrastructure.</p>


        <h3 id="experienceTitle" className="font-bold pt-150">Fullstack Academy</h3>

        <h2 className= "z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 top-5">2020 - 2023</h2>

         <p id="experienceDescription" className="pt-5 text-sm mt-30">Delivered and deployed full-stack web and mobile apps using modern services. Familiarity with continuous integration and continuous deployment pipelines. Experience in software design principles and documenting technical specifications.</p>

        <h3 id="experienceTitle" className="font-bold pt-150">Private IT Service Provider</h3>

        <h2 className= "z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2 top-5">2019 - 2021</h2>

          <p id="experienceDescription" className="pt-5 text-sm mt-30">Performed on-site commercial and residential computer dignostics, software and hardware installation, network installation, and optimization. Upgraded hardware and software for the business work environment. Assisting in setting up and repairing computers, routers, phones, printers, and establishing internet connections.</p>
      </section>


      <section id="other experiences">
<h1 className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-center font-bold uppercase text-lg pt-100">Non-tech Experiences</h1>

<h3 id="nonTitle" className="font-bold pt-100">Partners Coffee Roaster</h3>
    <p id="nondescription" className="pt-5 text-sm mt-30">Responsible for supervising and leading a team on daily tasks during shifts, supporting staff, and meeting customers' needs. Trained new employees and provided on-the-job coaching. Evaluated coffee quality through tastings to ensure consistency and satisfaction. Represented the brand by organizing and leading coffee tasting events to drive promotion and outreach. Certified Food Handlers License.</p>

  <h3 id="nonTitle"className="font-bold pt-150">Hair IB</h3>
    <p id="nondescription" className="pt-5 text-sm mt-30">Managed workload and deadlines to deliver assets in a fast-paced environment. Developed and designed graphical assets for agency clients. Organized and helped the company grow its business using strategic social media marketing campaigns.</p>

    <h3 id="nonTitle"className="font-bold  pt-150">Gotan Tribeca</h3>
    <p id="nondescription" className="pt-5 text-sm mt-30">Joined a newly founded cafe as an early employee, where personally played a key role in building foundation of the business by managing supply chain orders reducing costs by 25%, optimizing day-today operations, and collaborating closely with the CEO to develop systems that supported the cafe's successful growth into a franchise model.</p>

      <section id="project">
      <h1 className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24 text-center font-bold text-lg pt-100">Projects</h1>

      <div class="max-w-1xl p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Coordinate XY</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Web application platform built with PERN stack, permitting users to import CSV files directly, visualize their content, manipulate data, and generate graphs. The application supports simultaneous interaction among multiple users and provides functionality to export CSV data into alternative formats like JPG, JPEG, or PDF files.</p>
    <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 ">
        ThreeJS
    </div>
    <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 ml-10">
        ReactJS
    </div>
    <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 ml-10">
        Express
    </div>
    <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 ml-10">
        PostSQL
    </div>
    <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 ml-10">
        SequelizeJS
    </div>
    <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 ml-10">
        AWS EC3
    </div>
</div>

<div class="max-w-1xl p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mt-30">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">To do list</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Developed a to-do list web application using vanilla JavaScript, enabling users to add tasks and track completion with a click.</p>
    <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
        VanillaJS
    </div>
    <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 ml-10">
        JasmineJS
    </div>
</div>

<div class="max-w-1xl p-6 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 mt-30">
    <a href="#">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Voice Assistant AI</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Created an interactive web application that takes user input and transforms it into dynamic, spoken responses using AI-generated voice. This project blends functionality with creativity, showcasing how simple text inputs can evolve into engaging, conversational experiences.</p>
    <div class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
        TensorFlowJS
    </div>
</div>


      </section>


    <footer id="footer" className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0 pt-50 text-left">
        <p>Designed in <span className="font-bold underline decoration-pink-500 ">Figma</span> and coded in <span className="font-bold underline decoration-sky-500">Visual Studio code</span>. Built using <span className="underline decoration-wavy decoration-yellow-300">Next.js</span> and   <span className="underline decoration-wavy decoration-indigo-300">Tailwind CSS.</span></p>

      </footer>

</section>


    </div>
    </div>

    </main>
  );
}
