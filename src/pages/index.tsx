import { MainHero } from 'components/MainHero'
import { AboutSection } from 'components/sections/AboutSection'
import { ProjectsSection } from 'components/sections/ProjectsSection'
import { ServicesSection } from 'components/sections/ServicesSection'
import { Layout } from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | connect gdn">
    <MainHero/>
    <section>
      <AboutSection/>
    </section>
    <section>
      <ProjectsSection/>
    </section>
    <section>
      <ServicesSection/>
    </section>
    <h1>Hello World 👋</h1>
  </Layout>
)

export default IndexPage
