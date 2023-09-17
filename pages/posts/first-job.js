import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
      <Layout>
        <Head>
          <title>First Job</title>
        </Head>
     
        <h1>First Job</h1>
        <div className="job-experience">
  <h3>Senior Customer Service Representative</h3>
  <p className="company">AIA Shared Services · Full-time</p>
  <p className="duration">May 2017 - Jun 2022 · 5 yrs 2 mos</p>
  <p className="location">Selangor, Malaysia</p>
  <ul className="responsibilities">
    <li>Providing professional services to agents via email.</li>
    <li>Maintaining a working knowledge of the company's products to assist with specific inquiries.</li>
    <li>Collaborating with management to effectively train and mentor junior staff.</li>
  </ul>
  <p className="skills">Skills: Project Leadership · Customer Service · Communication</p>
</div>

      </Layout>
    );
  }