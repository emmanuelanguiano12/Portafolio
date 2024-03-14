import { CardHoverEffectDemo } from "./Hover-Card"
import GrommetIconsCode from "./Icons/GrommetIconsCode"

export const SectionProjects = () => {
  return (
    <>
        <section
          id="Proyectos"
          className="section undefined scroll-m-20 w-full mx-auto container lg:max-w-4xl md:max-w-2xl"
        >
          <h2 className="flex items-center mb-6 text-3xl font-semibold gap-x-3 text-black/80 dark:text-white">
            <GrommetIconsCode />
            Proyectos
          </h2>
          <CardHoverEffectDemo />
        </section>
    </>
  )
}
