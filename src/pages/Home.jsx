import Hero from '../components/Hero'
import TrustLedger from '../components/TrustLedger'
import Disciplines from '../components/Disciplines'
import ProjectsGrid from '../components/ProjectsGrid'
import Founders from '../components/Founders'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustLedger />
      <Disciplines />
      <Founders />
      <ProjectsGrid limit={6} />
    </>
  )
}
