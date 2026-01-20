import type { FC } from "react"


const Hero: FC = () => {
  return (
    <section className="hero bg-center h-[20vh] md:h-[30vh] grid-place-items-center rounded-3xl p-5">
      <div className="text-white text-center">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-bold mb-5">  Tripster ile konaklama rezervasyonu yap
        </h1>

        <p className="md:text-lg lg:text-xl">
          Dünya çapında 1,340,076 oda seni bekliyor!
        </p>
      </div>
    </section>
  )
}

export default Hero