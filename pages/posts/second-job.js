import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
      <Layout>
        <Head>
          <title>Second Job</title>
        </Head>
     
        <h1>Second Job</h1>
        <div className="job-experience">
  <h3>Web Developer</h3>
  <p className="company">Operion Ecommerce & Software Sdn Bhd · Full-time</p>
  <p className="duration">Jun 2022 - Present · 1 yr 4 mos</p>
  <p className="location">Penang, Malaysia</p>
  <ul className="responsibilities">
    <li>Led and managed web development projects, coordinating with clients to understand requirements and allocating tasks to team members.</li>
    <li>Developed and implemented backend functions to support website functionality, utilizing PHP, MySQL, and other technologies.</li>
    <li>Optimized server performance to handle high traffic loads, resulting in improved website responsiveness and user experience.</li>
    <li>Utilized indexing, array structures, and recursion to improve code efficiency and eliminate duplicate code segments.</li>
    <li>Conducted one-on-one meetings with team members, providing guidance on business logic understanding and code improvement.</li>
    <li>Reviewed team members' code to ensure adherence to best practices, maintain code quality, and foster a collaborative learning environment.</li>
  </ul>
  <p className="skills">Skills: Project Leadership · Node.js · HTML · Cascading Style Sheets (CSS) · JavaScript · PHP · MySQL · Customer Service · Communication</p>
</div>

      </Layout>
    );
  }