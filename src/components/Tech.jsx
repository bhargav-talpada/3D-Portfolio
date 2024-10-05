import { technologies } from "../constants"
import { SectionWrapper } from "../hoc"
import { BallCanvas } from "./canvas"

const Tech = () => {
  return (
    <div className="flex flex-wrap flex-row justify-center gap-10">
      {
        technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))
      }
    </div>
  )
}

export default SectionWrapper(Tech, "tech")