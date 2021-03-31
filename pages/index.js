import Layout from "../components/Layout"
import Experiences from "../components/molecular/Experiences"
import Header from "../components/molecular/Header"
import Skills from "../components/molecular/Skills"
import getExperiences from "../services/getExperiences"
import getSkills from "../services/getSkills"

const Index = ({ skills, experiences }) => (
  <Layout footer={false} >
    <Header />
    <section className="row">
      <Skills skills={skills.data} statusCode={skills.statusCode} />
      <Experiences experiences={experiences.data} statusCode={experiences.statusCode} />
    </section>
  </Layout>
)


export async function getServerSideProps() {

  const { skills, statusCode: statusCodeSkills } = await getSkills()
  const { experiences, statusCode: statusCodeExperiences } = await getExperiences()

  return {
    props: {
      skills: {
        data: skills,
        statusCode: statusCodeSkills > 200 ? statusCodeSkills : false
      },
      experiences: {
        data: experiences,
        statusCode: statusCodeExperiences > 200 ? statusCodeExperiences : false
      }
    }
  }
}

export default Index