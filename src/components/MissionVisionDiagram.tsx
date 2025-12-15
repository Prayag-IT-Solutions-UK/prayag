import './MissionVisionDiagram.css'

interface MissionVisionDiagramProps {
  visionTitle?: string
  visionText?: string
  missionTitle?: string
  missionText?: string
}

const MissionVisionDiagram = ({
  visionTitle = 'Our Vision',
  visionText = 'To be the leading provider of AI-powered technology solutions that transform businesses and drive innovation across industries. We envision a future where every business can leverage the power of artificial intelligence and automation to achieve unprecedented growth and success.',
  missionTitle = 'Our Mission',
  missionText = 'To empower businesses with intelligent, scalable, and cost-effective technology solutions. We are committed to understanding our clients\' unique challenges and delivering customized solutions that exceed expectations. Through innovation, expertise, and dedication, we help businesses thrive in the digital age.',
}: MissionVisionDiagramProps) => {
  return (
    <div className="mission-vision-diagram">
      {/* Vision Circle - Upper Left */}
      <div className="mv-circle mv-vision-circle">
        <h2 className="mv-circle-title">{visionTitle}</h2>
        <p className="mv-circle-text">{visionText}</p>
      </div>

      {/* Mission Circle - Lower Right */}
      <div className="mv-circle mv-mission-circle">
        <h2 className="mv-circle-title">{missionTitle}</h2>
        <p className="mv-circle-text">{missionText}</p>
      </div>
    </div>
  )
}

export default MissionVisionDiagram

