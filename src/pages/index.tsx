import { MainHero } from 'components/MainHero'
import { Layout } from '../components/Layout'

const IndexPage = () => (
  <Layout title="Home | connect gdn">
    <MainHero/>
    <section>
      <p>Texto para nova section</p>
    </section>
    <h1>Hello World 👋</h1>
  </Layout>
)

export default IndexPage
