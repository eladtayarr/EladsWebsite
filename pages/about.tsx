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
            <h5>
            I’m Elad Tayar, currently in the third year of a double-major degree in Information Systems and Management at the College of Management Academic Studies.
            </h5>
            
            <h6>
            I'm highly motivated, assertive, with strong technical skills, quick learning abilities, spatial awareness, the ability to work well in a team, and excellent communication skills in both Hebrew and English.
            </h6>

            <h6>
            Currently I'm seeking a part-time position, available 3 days a week, to gain industry experience as a student.
            </h6>
            <br></br>
            

            
          </article>
        </PageWrapper>

        <PageWrapper
          className="mb-5"
          aria-label="You are now in my musical playlist section"
        >
          <article>
            <h4>My Timeline.</h4>
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
                A Dual-Major combining Information Systems & Management.
                <br></br>
                GPA: 89
                <br></br>
                The curriculum offers practical experience through courses in the field of Information Systems, such as Data Structures and Algorithms, Object-Oriented Development, Web Development, Data Mining and Machine Learning, Data Analysis, and more. Throughout the degree, many programming and development languages were learned, including Python, HTML/CSS/JavaScript, Java, SQL Server, Excel, and others.
                <br></br>
                Additionally, as part of the program, courses in Business Administration, such as Statistics, Finance, Accounting, Economics, and more, are also studied.
                </p>
              </li>

              <li>
                <Link href="https://github.com/eladtayarr/Honors-Program/tree/main" aria-label="Open Products Page">
                Honors Program{" "}
                  <small>
                    <Product />
                  </small>
                </Link>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>Feb-Jul 2024</b>
                  <br></br>
                  <Link
                  href="https://github.com/eladtayarr/Honors-Program/tree/main"
                  aria-label="Open Products Page"
                  id="cardHover"
                  className="float-right"
                    >
                  View The Project
                  </Link>
                </a>
                
                <p>
                During my third year, I participated in the honors program for high-achieving students, which exposed me to academic research and international collaboration. Our research, in partnership with HHN University in Germany, focused on the impact of uncertainty, variation, and diversity in large organizations, using XMCyber as a case study. I was responsible for designing the questionnaire, organizing interview data, and presenting our findings. Our work received a score of 90 and excellent feedback from the program's professors.
                
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
                During my military service in the Israel Defense Forces (IDF), I served as an Information Systems Non-Commissioned Officer (NCO) within the Human Resources Branch. 
                Initially responsible for welfare tasks, such as managing housing for lone soldiers and administering special allowances, I was later promoted to the office of the Head of the Personnel Directorate to focus on information systems management.
                <br></br><br></br>
                In this role, I was responsible for generating transactions with ABAP queries, creating and organization reports, and conducting data analysis. 
                I worked extensively with SAP ERP and the Discoverer Viewer Oracle system to automate report generation and manage data effectively. 
                My role required significant interaction with senior military personnel, contributing to various high-impact projects, including the Increasing rent for single soldiers by 23%, and issuing holiday vouchers for single soldiers and soldiers with financial difficulties. 
                The work was carried out in front of senior military officials and officials in the field.
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
            <h4>My Technical Skills.</h4>
            <ul className="timeline">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                >
                  Python{" "}
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
                During my degree studies, I acquired significant and extensive knowledge of programming in Python. Additionally, I invested heavily in independent learning to enhance and strengthen my technical abilities. I am familiar with the Pandas and NumPy libraries and know how to create visual displays of data analysis using CSV files. I am proficient in sending GET and POST commands using the HTTP protocol, interacting with API interfaces, and working with SQL-based databases such as SQLite and SQLAlchemy, as well as NoSQL databases like MongoDB. Furthermore, I am also experienced in creating GUIs using Tkinter and PyQt6.
                </p>
              </li>
                            

              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                  href="/projects"
                >
                  HTML, CSS, JavaScript{" "}
                </a>
                
                <br></br>
                <p>The combination of my knowledge in HTML, CSS, and JavaScript enables me to develop complete and interactive web pages that are accessible to all users and compatible with a wide variety of devices and browsers.</p>
                <h6>HTML5</h6>
                <p>
                Proficient in building clear, organized, and accessible web pages, using appropriate tags to create headings, tables, forms, links, and images. I also understand the importance of accessibility and ensure the use of proper tags to provide a positive user experience for all visitors.
                </p>
                <h6>CSS3</h6>
                <p>
                Skilled in using CSS to design and build attractive, intuitive user interfaces. My expertise includes advanced page design, such as layouts, typography, color schemes, background images, and the addition of animations and visual effects.
                </p>
                <h6>JavaScript</h6>
                <p>
                Well-versed in developing interactive features on web pages, such as dynamic forms, drop-down menus, and user-triggered actions (e.g., button clicks or mouse movements).
                </p>
              </li>
              
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                  href="/projects"
                >
                  React.js/py, Node.js & TypeScript {" "}
                </a>
                <p>
                I have working knowledge of React and Node.js. 
                As part of my expertise, I am familiar with the logical and modular structure of components, inheritance between files, building dummy pages, using React Router to navigate between application pages , I know and know how to work with different databases, such as MongoDB and SQL, to build flexible and scalable systems, and integrating third-party libraries to enhance performance and display.
                </p>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                  href="/projects"
                >
                  SQL Server {" "}
                </a>
                <p>
                As part of my expertise, I am skilled in writing complex SQL queries for data retrieval, updating, and performing advanced analyses on large databases. I use SQL Server to optimize queries, improving performance and ensuring fast data access. Additionally, I have experience in creating data dashboards that enable real-time visual analysis and data presentation. I am proficient in setting up and implementing dashboards that provide relevant business insights and contribute to improving organizational workflows.
                </p>
              </li>
              
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                  href="/projects"
                >
                Java {" "}
                </a>
                <p>
                Basic understanding of Java syntax and can write simple commands in the language. I am familiar with the principles of object-oriented programming (OOP) in Java, including the creation and use of classes, objects, methods, and fields. Additionally, I have experience working with control structures such as loops, conditional statements, and variables, as well as writing basic functions for computational operations and data manipulation. My knowledge also extends to working with various data types and understanding fundamental concepts like inheritance and polymorphism.
                </p>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                >
                  Microsoft Office{" "}
                </a>
                <br></br>
                <br></br>
                <h6>Excel</h6>
                <p>
                I work with advanced functions for data management and analysis. I am skilled in building complex spreadsheets and using functions such as VLOOKUP, IF, and SUMIFS to streamline workflows and create customized reports. I also have experience with text and data functions for information analysis, including CONCATENATE, TEXT, LEFT, and RIGHT. Additionally, I am proficient in creating Pivot Tables to analyze large datasets, generating charts and diagrams for visual insights, and using Power Query to automate data cleaning processes and import data from external sources.
                </p>
                <br></br>
                <h6>PowerPoint</h6>
                <p>
                I have experience in creating professional and impactful presentations. I am skilled in building effective presentations in terms of both content and design, tailored to various audiences. I am proficient in using design patterns, adding animations, and applying transitions to maintain audience engagement. Additionally, I utilize advanced graphic tools to create diagrams, graphs, and images for clear and persuasive data presentation. I have used PowerPoint to present academic projects, data analysis results, and business plans, customizing the design and structure to meet the objectives and needs of each target audience.
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
