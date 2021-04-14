import { MainHero } from 'components/MainHero'
import { AboutSection } from 'components/sections/AboutSection'
import { Layout } from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | connect gdn">
    <MainHero/>
    <section>
      <AboutSection/>
    </section>
    <h1>Hello World 👋</h1>
  </Layout>
)

export default IndexPage
