import { BackgroundBeamsDemo } from "./Home/BackgroundBeams";
import { TypewriterEffectSmoothDemo } from "./Home/TypewriterEffectSmoothDemo.tsx";

const HomePage = () => {
  return (
    <div>
      <BackgroundBeamsDemo type={<TypewriterEffectSmoothDemo />} />
    </div>
  )
}
export default HomePage