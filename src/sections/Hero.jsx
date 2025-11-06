import HeroText from "../components/HeroText"
import ParallaxBackground from "../components/ParallaxBackground"

const Hero = () => {
  return (
    <section className="z-10 relative w-full h-75 md:h-120 overflow-hidden items-center mask-b-from-90%">
        <HeroText />
        <ParallaxBackground />

    </section>
)
}

export default Hero