/* eslint-disable jsx-a11y/accessible-emoji */

/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from "react";
import styled from "styled-components";
import Link from "next/link";

/* -------------------------- Internal Dependencies ------------------------- */
import Layout, { PageWrapper } from "../components/Layout";
import FooterLink from "../components/Footer";

/* ---------------------------- Image Dependency ---------------------------- */
import { Date, Github, Dribble, Product } from "../components/Icons";

const About = () => {
  return (
    <Layout title="About Me">
      <PageSection>
        <PageWrapper
          className="mb-5"
          aria-label="You are now in my educational background section"
        >
          <h1 className="intro__text">About Me.</h1> <br />
          <article>
            <h6>
              I'm Elad Tayar, a second-year Information Systems Management
              student at the College of Management Academic Studies. My studies
              combine Business Administration with a focus on application
              development, data analysis, and management. I've gained practical
              experience through an Honors Program with the University of
              Bremen, enhancing my skills in research and cross-cultural
              communication.
            </h6>

            <h6>
              Technically skilled in tools like SAP ERP, Python, SQL, and more,
              I've also led teams and managed operations as a Shift Manager at
              Hugo Boss. My military service further sharpened my data
              management and leadership abilities. I'm eager to apply my skills
              in data analysis, development, and business management.
            </h6>

            <br></br>
            

            <ul className="timeline">
              <li className="mt-2">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open College Website Link"
                  href="https://english.colman.ac.il/"
                >
                  Student of Information Systems Management{" "}
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open College website Link"
                  id="cardHover"
                  href="https://intl.colman.ac.il/"
                  className="float-right"
                >
                  View College website
                </a>
                <p>
                The Bachelor's degree in Information Systems Management (ISM) is a dual-major program that integrates technological expertise with managerial knowledge, preparing graduates for a variety of roles in the rapidly evolving digital job market. The curriculum offers hands-on experience through practical courses, industry collaborations, and a year-long practicum, where students tackle real-world challenges. With a strong foundation in programming, AI, data analysis, and business management, graduates are well-equipped for careers in fields such as software development, data analysis, and business intelligence, making them highly sought after in industries like high-tech, finance, and telecommunications.
                </p>
              </li>

            </ul>
          </article>
        </PageWrapper>

        <PageWrapper
          className="mb-5"
          aria-label="You are now in my musical playlist section"
        >
          <article>
            <h4>My Reads.</h4>
            <ul className="timeline">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open College website Link"
                  href="https://intl.colman.ac.il/"
                >
                  B.A. Information Systems Management <small>The College of Management Academic Studies</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2022 - Today</b>
                  <br></br>
                  <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open College website Link"
                  id="cardHover"
                  href="https://intl.colman.ac.il/"
                  className="float-right"
                >
                  View College website
                </a>
                </a>
                <p>
                Secound Year Student of Dual-Major in Information Systems Management.
                <br></br>
                GPA: 89
                <br></br>
                The Bachelor's degree in Information Systems Management (ISM) is a dual-major program that integrates technological expertise with managerial knowledge, preparing graduates for a variety of roles in the rapidly evolving digital job market. The curriculum offers hands-on experience through practical courses, industry collaborations, and a year-long practicum, where students tackle real-world challenges. With a strong foundation in programming, AI, data analysis, and business management, graduates are well-equipped for careers in fields such as software development, data analysis, and business intelligence, making them highly sought after in industries like high-tech, finance, and telecommunications.
                </p>
              </li>

              <li>
                <Link href="/projects" aria-label="Open Products Page">
                Honors Program{" "}
                  <small>
                    <Product />
                  </small>
                </Link>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>Feb-Jul 2024</b>
                </a>
                
                <p>
                During my second year, I participated in the honors program for high-achieving students, which exposed me to academic research and international collaboration. Our research, in partnership with HHN University in Germany, focused on the impact of uncertainty, variation, and diversity in large organizations, using XMCyber as a case study. I was responsible for designing the questionnaire, organizing interview data, and presenting our findings. Our work received a score of 90 and excellent feedback from the program's professors.
                <Link
                  href="/projects"
                  aria-label="Open Products Page"
                  id="cardHover"
                  className="float-right"
                >
                  View The Project
                </Link>
                </p>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Link Hugo Boss"
                  href="https://www.hugoboss.com/"
                >
                  Sales & Shift Manager <small>Hugo Boss</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>Dec 2019 - Jun 2022</b>
                </a>
                <p>
                As a Shift Manager at Hugo Boss, I was instrumental in driving the store's success by consistently meeting and exceeding sales targets, earning the highest performance statistics in the network. My strong leadership skills led to a promotion to Shift Manager after just a year and a half, where I took on greater responsibilities in managing store operations and leading a dynamic team.
                <br></br><br></br>
                In this role, I was responsible for overseeing daily operations, coordinating and managing the shift team, and ensuring that inventory levels were adequately maintained through precise orders. I also handled financial management tasks, ensuring accurate cash handling and sales reconciliation, and maintained continuous communication with senior management to align store activities with company goals.
                <br></br><br></br>
                A key aspect of my role involved working closely with both senior management and store staff, particularly during inventory counts and store organization efforts. My ability to foster teamwork and ensure smooth operational processes contributed significantly to the store's overall performance and customer satisfaction.


                </p>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Link Adaptive Leadership"
                  href="https://www.mitgaisim.idf.il/%D7%AA%D7%A4%D7%A7%D7%99%D7%93%D7%99%D7%9D/%D7%9E%D7%A9%D7%A7%D7%99%D7%AA-%D7%93%D7%99%D7%92%D7%99%D7%98%D7%9C-%D7%9E%D7%A2%D7%A8%D7%9B%D7%95%D7%AA-%D7%9E%D7%A9%D7%90%D7%91%D7%99-%D7%90%D7%A0%D7%95%D7%A9/"
                >
                  Information Systems NCO <small>Israel Defense Forces</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>Mar 2017 - Nov 2019</b>
                </a>
                <p>
                During my military service in the Israel Defense Forces (IDF), I served as an Information Systems Non-Commissioned Officer (NCO) within the Human Resources Branch. Initially responsible for welfare tasks, such as managing housing for lone soldiers and administering special allowances, I was later promoted to the office of the Head of the Personnel Directorate to focus on information systems management.
                <br></br><br></br>
                In this role, I had access to classified military data, where I was responsible for generating transactions, creating reports, and conducting data analysis. I worked extensively with SAP ERP and the "Discoverer" system to automate report generation and manage data effectively. My role required significant interaction with senior military personnel, contributing to various high-impact projects, including the Stars Project, which provided financial assistance to IDF soldiers.
                <br></br><br></br>
                This experience honed my technical skills in data management, report generation, and system maintenance, while also enhancing my ability to work under pressure and maintain strict confidentiality with sensitive information.
                {" "}
                </p>
              </li>

            </ul>
          </article>
        </PageWrapper>

        <PageWrapper
          className="mb-5"
          aria-label="You are now in my musical playlist section"
        >
          <article>
            <h4>My Skills.</h4>
            <ul className="timeline">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                >
                  Technical Aptitude{" "}
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                  id="cardHover"
                  className="float-right"
                >
                </a>
                <p>
                I have a strong technical background across multiple domains:
                <br></br>
                •&nbsp;&nbsp;&nbsp;SAP ERP: Skilled in report generation, transaction creation, and system maintenance.<br></br>
                •&nbsp;&nbsp;&nbsp;Excel: Advanced use of functions, Pivot tables, and data integration.<br></br>
                •&nbsp;&nbsp;&nbsp;Python: Proficient in data manipulation, OOP, API integration, and database operations.<br></br>
                •&nbsp;&nbsp;&nbsp;SQL Server: Experienced in database management, query writing, and data modeling.<br></br>
                •&nbsp;&nbsp;&nbsp;Web Development: Knowledgeable in HTML, CSS, JavaScript, and React for building dynamic, accessible websites.<br></br>
                •&nbsp;&nbsp;&nbsp;Java: Basic syntax and command writing.<br></br>
                <br></br>
                My technical skills are paired with strong problem-solving abilities to deliver effective solutions.
                </p>
              </li>
                            

              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                  href="/projects"
                >
                  Programing{" "}
                  <small>
                    <Dribble />
                  </small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                  id="cardHover"
                  href="/projects"
                  className="float-right"
                >
                  View Projects
                </a>
                <p>
                My programming education was diverse, blending academic studies with independent exploration. Throughout my degree, I gained experience in Python, Java, web development (HTML/CSS/JS), and SQL, with a particular interest in databases and development. Passionate about programming, I delved into libraries like React, NumPy, and Flask, enhancing my skills in dynamic web development and static calculations. Additionally, my affinity for design fuels my creativity in programming, allowing me to craft products that reflect my personal vision and preferences.
                </p>
              </li>
              
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                  href="/projects"
                >
                  Data Analysis{" "}
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                  id="cardHover"
                  href="/projects"
                  className="float-right"
                >
                  View Projects
                </a>
                <p>
                I am a passionate data analyst with a solid foundation in technical and analytical skills, developed through academic studies and hands-on experience. Proficient in Python, SQL, and Excel, I excel in data collection, cleaning, and analysis, uncovering insights from complex datasets. My expertise in data visualization tools like Tableau and Power BI allows me to present clear, actionable insights that drive business strategies. Additionally, my experience with big data analytics, predictive modeling, and machine learning enhances my analytical capabilities, enabling me to solve problems creatively and optimize processes effectively. I am dedicated to continuous learning, ensuring my skills stay relevant in the dynamic field of data analysis.
                </p>
              </li>

              

              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                >
                  Collaborative and Teamwork{" "}
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                  id="cardHover"
                  className="float-right"
                >
                </a>
                <p>
                I excel in collaborative environments, valuing open communication and mutual respect. My experience in diverse teams has taught me the importance of contributing my strengths while supporting others. Whether leading initiatives or being a reliable team member, I focus on fostering innovation and delivering high-quality results. I thrive under pressure, remain proactive, and am committed to creating a positive, inclusive atmosphere where ideas can flourish.
                </p>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                >
                  Time Management & Problem Solving{" "}
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                  id="cardHover"
                  className="float-right"
                >
                </a>
                <p>
                I excel in time management and problem-solving, consistently balancing multiple responsibilities while maintaining a high level of productivity. My ability to prioritize tasks effectively allows me to meet deadlines and achieve goals efficiently, even under pressure. I approach challenges with a methodical mindset, breaking down complex problems into manageable steps. This enables me to identify root causes and implement practical, long-term solutions. My proactive and organized approach ensures that I not only resolve issues swiftly but also anticipate potential obstacles, allowing me to navigate my work with confidence and precision.
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>

        
      </PageSection>

      <PageWrapper>
        <FooterLink goto="/projects" className="mt-3 mb-5">
          Lets Continue To Projects
        </FooterLink>
        <br />
      </PageWrapper>
    </Layout>
  );
};

const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
  h4 {
    font-size: calc(var(--font-md) + 1.5px);
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }

  ul.timeline {
    list-style-type: none;
    position: relative;
    &:before {
      content: " ";
      background: var(--timeline);
      display: inline-block;
      position: absolute;
      left: 0px;
      width: 1px;
      top: 4px;
      height: 100%;
      z-index: 400;
    }
    
    li {
      margin: 3rem 0;
      padding-left: 20px;
      &:before {
        content: " ";
        background: var(--mark);
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 2px solid var(--cw);
        left: -7px;
        width: 15px;
        height: 15px;
        margin-top: 3px;
        z-index: 400;
      }
      a {
        font-size: var(--font-md);
        font-weight: 500;

        color: var(--cw);
        &.float-right {
          text-decoration: underline;
          font-size: calc(var(--font-sm) + 0.9px);
        }
      }
      a svg {
        margin-top: -0.4rem;
        width: 13px;
      }
    }
  }
  @media (max-width: 585px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 989px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 220px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
`;

export default About;
