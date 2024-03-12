import Link from "next/link"
import GrommetIconsLinkedin from "./Icons/GrommetIconsLinkedin"
import MaterialSymbolsLocationOn from "./Icons/MaterialSymbolsLocationOn"
import GrommetIconsCode from "./Icons/GrommetIconsCode"

export const Section = () => {
  return (
    <>
        <section id="Home" className="section py-16 md:py-36 scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl"> 
          <div className="max-w-xl">
            <div className="flex gap-4 mb-4">
              <img className="rounded-full shadow-lg size-16" src="https://media.licdn.com/dms/image/D4E03AQGB_sT88tOTHA/profile-displayphoto-shrink_800_800/0/1705286550033?e=1715817600&v=beta&t=fGSTAqpaUpPU8WpxYxaWKxj9nziRHQ-bmS_j3kCVNQc" alt="Emmanuel Anguiano" />
              <h1 className="text-4xl font-bold tracking-tight text-gray-800 sm:text-5xl dark:text-white">Hola, soy Emmanuel Anguiano</h1>
            </div>
          </div>
          <p className="mt-6 text-xl text-gray-800 dark:[&>strong]:text-red-400 [&>strong]:text-red-400 [&>strong]:font-semibold dark:text-gray-300">
            Graduado en Ingeniería en Tecnologías de Internet en la Universidad De Colima, México.
            <strong> Actualmente estoy aprendiendo tencologías como React, Next, TypeScript y AWS. </strong>
          </p>
          <nav className="flex flex-wrap gap-4 mt-8">
            <Link href='https://www.linkedin.com/in/emmanuel-anguiano-058021291/' className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md hover:bg-gray-900 hover:border-gray-700 group max-w-fit hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black">
              <GrommetIconsLinkedin />
              LinkedIn
            </Link>
            <p className="inline-flex items-center justify-center gap-2 px-4 py-1 text-gray-800 transition bg-gray-100 border border-gray-300 rounded-full dark:bg-gray-800 dark:border-gray-600 dark:text-white focus-visible:ring-yellow-500/80 text-md group max-w-fit focus:outline-none focus-visible:outline-none focus-visible:ring focus-visible:ring-white focus-visible:ring-offset-2 active:bg-black">
              <MaterialSymbolsLocationOn />
              Colima, México
            </p>
          </nav>
        </section>
    </>
  )
}
