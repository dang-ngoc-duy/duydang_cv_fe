import Chip from '@mui/material/Chip';
import TimeLine, { TimelineItem } from 'app/components/base/TimeLine';
import Intro from 'app/components/layout/Intro';

const Resume: React.FC = () => {
  const expItems: TimelineItem[] = [
    {
      title: 'UCARS Pte Ltd - (Full-stack Developer)',
      time: ['2022', 'Present'],
      children: (
        <div>
          <p>
            - Contributed to the design and development of the company's ERP
            system and E-commerce projects, focusing on vehicle trading and
            accounting applications.
          </p>
          <p>
            - Played a pivotal role in multiple projects, including a major
            project that generated hundreds of thousands of dollars in revenue.
          </p>
          <p>
            - Implemented new technologies to improve application performance
            and took on critical tasks involving GST calculations, sales
            contract management, and user authentication.
          </p>
        </div>
      ),
    },
    {
      title: 'Sai Gon Joint Stock Commercial Bank - (Full-stack Developer)',
      time: ['2021', '2022'],
      children: (
        <div>
          <p>
            - Developed the library of shared React components for all projects
            using React Hook Form, Yup, Mapbox, ECharts, Rollup, and StoryBook..
          </p>
          <p>
            - Developed web-based application interfaces and mapping APIs for
            bank projects using TypeScript, HTML, Sass, Lodash, Redux Toolkit,
            Redux-Saga, and Material UI/Ant Design.
          </p>
          <p>
            - Incorporated with the E-Banking team to design templates and
            modify logical code to ensure timely release using VueJS.
          </p>
          <p>
            - Learned FastAPI and Python syntax to support BE team to unify the
            return structure of JSON data.
          </p>
          <p>
            - Maintained, and redesigned the interfaces and fixed logic codes of
            the Teller and Tablet applications using ASP.Net MVC5, SOAP, Oracle
            - Store procedure, and EPPlus.
          </p>
        </div>
      ),
    },
    {
      title: 'Freelancer',
      time: ['2019', '2021'],
      children: (
        <div>
          <p>
            - Build an open-source website according to customer requirements
            using WordPress, PHP, MySQL, and VPS Hosting.
          </p>
        </div>
      ),
    },
    {
      title: 'Platinum Living Corporation - (System Administrator)',
      time: ['2016', '2021'],
      children: (
        <div>
          <p>
            - Developed applications and tools to reduce workload for
            departments and save money on purchasing software for businesses.
          </p>
          <p>- Implemented systems on VMWare, Hyper-V, and Docker.</p>
          <p>- Implemented systems on Apache, Nginx, and SQL Server.</p>
          <p>- Analyzed data and build reports with Excel(VBA), Power BI.</p>
        </div>
      ),
    },
    {
      title: 'IFB Holdings Ltd - (IT Staff)',
      time: ['2014', '2015'],
      children: (
        <div>
          <p>
            - Deploying and training cashiers using POS systems at stores of
            "The Coffee Bean & Tea Leaf" chain.
          </p>
          <p>- Take care Mesh Access Point, network at Head Office.</p>
        </div>
      ),
    },
  ];

  const eduItems: TimelineItem[] = [
    {
      title:
        'University of Information Technology - (Master of Information Security)',
      time: ['2022', 'Present'],
      children: null,
    },
    {
      title:
        'Ho Chi Minh City University of Technology - (Software engineering)',
      time: ['2019', '2021'],
      children: null,
    },
    {
      title:
        'Ho Chi Minh City University of Technology - (Computer network administration)',
      time: ['2013', '2016'],
      children: null,
    },
  ];

  return (
    <>
      <Intro title="Resume">
        <div className="row">
          <div className="col-12">
            <TimeLine
              timeLineItems={expItems}
              title={'Experience'}
              icon={
                <img
                  className="title-icon"
                  src="..\assets\icons\dark\icon-experience.svg"
                  alt=""
                />
              }></TimeLine>
            <TimeLine
              timeLineItems={eduItems}
              title={'Education'}
              icon={
                <img
                  className="title-icon"
                  src="..\assets\icons\dark\icon-education.svg"
                  alt=""
                />
              }></TimeLine>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <h2 className="title title--h3">My Skills</h2>
            <div className="box box__border">
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <Chip color="primary" label="JavaScript" />
                <Chip color="primary" label="TypeScript" />
                <Chip color="primary" label="Java" />
                <Chip color="primary" label="Python" />
                <Chip color="primary" label="C#" />
                <Chip color="primary" label="Angular" />
                <Chip color="primary" label="React" />
                <Chip color="primary" label="VueJS" />
                <Chip color="primary" label="ASP.NET MVC" />
                <Chip color="primary" label="FastAPI" />
                <Chip color="primary" label="Spring Boot" />
                <Chip color="primary" label="NodeJS" />
                <Chip color="primary" label="ASP.NET CORE" />
                <Chip color="primary" label="MS SQL" />
                <Chip color="primary" label="Oracle" />
                <Chip color="primary" label="PostgreSQL" />
                <Chip color="primary" label="Cypress" />
                <Chip color="primary" label="Playwright" />
              </div>
            </div>
          </div>
        </div>
      </Intro>
    </>
  );
};

export default Resume;
