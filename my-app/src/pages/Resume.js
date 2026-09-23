import React, { useEffect, useRef, useState } from 'react';
import './Resume.css';

import thumbtack from '../assets/thumbtack.png';

function Resume() {
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true); // Open sidebar when component mounts
    return () => setIsOpen(false); // Close sidebar when component unmounts
  }, []);

  useEffect(() => {
    const text = headerRef.current;
    if (text) {
      const letters = text.textContent.split('');
      text.textContent = '';

      letters.forEach((letter, idx) => {
        const span = document.createElement('span');
        span.textContent = letter;
        span.style.animationDelay = `${idx * 100}ms`;
        text.appendChild(span);
      });
    }
  }, []);

  const handleLinkClick = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToResumeTitle = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="container">
      <div className={isOpen ? "resume-sidebar open" : "resume-sidebar"}>
        <h2 ref={headerRef} className="about-header" onClick={scrollToResumeTitle}>Resume...<span className="blink">|</span></h2>
        <ul className="resume-links">
          <li onClick={() => handleLinkClick('education')}>Education</li>
          <li onClick={() => handleLinkClick('awards')}>Awards</li>
          <li onClick={() => handleLinkClick('work-experience')}>Work Experience</li>
          <li onClick={() => handleLinkClick('campus-community')}>Campus & Community Engagement</li>
          <li onClick={() => handleLinkClick('skills-interests')}>Skills & Interests</li>
        </ul>
      </div>
      <div className="resume-content">
        <div className="resume-title">
          <img src={thumbtack} alt="Thumbtack" className="thumbtack-img" />
          <h1>Carlos Betancur</h1>
          <p>268 Smith Street, Brooklyn, NY 11231 | E-Mail: carlos_betancur@alumni.brown.edu | Mobile: (401) 660-7599</p>
          <p>
            <a href="https://github.com/car-losb" target="_blank" rel="noopener noreferrer">Github</a> |{' '}
            <a href="https://www.linkedin.com/in/carlosmbetancur/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </p>
          <p><span className="index-card">hello</span></p>
        </div>

        <div id="education" className="resume-section">
          <h2>EDUCATION</h2>
          <p><strong>Brown University</strong>, <em>Bachelor of Science in Computer Science-Economics</em></p>
          <p>Providence, Rhode Island | JAN 2021 - MAY 2024</p>

          <p><strong>Paris 8 University Vincennes-Saint-Denis</strong>, <em>Brown in Paris Exchange</em></p>
          <p>Paris, France | SEP 2022 - DEC 2022</p>
          <ul>
            <li>Completed coursework entirely in French</li>
          </ul>

          <p><strong>Toll Gate High School</strong>, <em>High School Diploma</em></p>
          <p>Warwick, Rhode Island | SEP 2016 - JUN 2020</p>
        </div>

        <div id="awards" className="resume-section">
          <h2>AWARDS</h2>
          <p><strong>LAWBound Fellow</strong> (August 2025): Selected by LatinoJustice, a New York-based civil rights organization, for a competitive fellowship offering legal exposure and pre-law mentorship</p>
          <p><strong>Kleiner Perkins Product Fellow Finalist</strong> (March 2024): Selected as a finalist for a national product management fellowship, based on demonstrated skill in product design and programming</p>
          <p><strong>Amazon Future Engineer</strong> (June 2022): Awarded a $40,000 scholarship in recognition of demonstrated aptitude in programming and computer science</p>
        </div>

        <div id="work-experience" className="resume-section">
          <h2>WORK EXPERIENCE</h2>
          <div className="experience">
            <h3>Katten Muchin Rosenman LLP, <em>Practice Innovation Analyst</em></h3>
            <p>New York City, New York | SEP 2025 – Present</p>
            <ul>
              <li>Advise attorneys on how to responsibly use artificial intelligence (“AI”) in their legal work, training lawyers on AI research and drafting tools while incorporating this technology into their existing workflows</li>
              <li>Built an AI agent that pulls data from client websites and prepares corresponding Privacy Policies, cutting drafting time in half</li>
              <li>Collaborate with the firm’s data team to apply programming languages to litigation discovery, transactional precedent searches, and other practice issues involving large volumes of data</li>
            </ul>
          </div>
          <div className="experience">
            <h3>Robin AI, <em>Legal & Product Specialist</em></h3>
            <p>New York City, New York | JUN 2024 – SEP 2025</p>
            <ul>
              <li>Tested and developed drafting assistants, contract translation features, and other AI-powered legal tech products at Robin AI, a tech startup aimed at reducing legal costs through technological automation</li>
              <li><em>Promoted to product specialist</em>; put in charge of leading internal and client-facing training on Robin products while collecting user feedback to inform product development roadmaps</li>
            </ul>
          </div>
          <div className="experience">
            <h3>Paragon Fellowship, <em>Tech Policy Fellow</em></h3>
            <p>Remote | JAN 2025 – MAY 2025</p>
            <ul>
              <li>Worked 10–15 hours per week examining accessibility gaps in the City of Madison, WI’s digital platforms and evaluating compliance with the Americans with Disabilities Act (ADA) to expand digital accessibility citywide</li>
              <li>Co-authored <a href="https://www.paragonfellowship.org/projects/digital-accessibility-policy-and-implementation-strategy" target="_blank" rel="noopener noreferrer">policy recommendations and accessibility assessment protocols</a> for the city, drawing on interviews with local stakeholders and policy research to help bring city services into compliance with federal law</li>
            </ul>
          </div>
          <div className="experience">
            <h3>Amazon AWS, <em>Software Engineering Intern</em></h3>
            <p>New York City, New York | JUN 2023 – SEP 2023</p>
            <ul>
              <li>Studied Amazon’s cloud server architecture and designed a new system that cut service outages by 80%, improving reliability and reducing susceptibility to data breaches; received an invitation to return for a full-time position</li>
            </ul>
          </div>
          <div className="experience">
            <h3>Amazon Prime Video, <em>Software Engineering Intern</em></h3>
            <p>Seattle, Washington | JUN 2022 – AUG 2022</p>
            <ul>
              <li>Expanded Prime Video’s revenue tracking system to support multiple currencies and scale to global user bases; invited back for an internship the following summer</li>
              <li>Won the <em>People’s Choice Award</em> at a company-wide hackathon for a tool that helped families agree on what to watch on Prime Video by matching everyone’s viewing preferences</li>
            </ul>
          </div>
          <div className="experience">
            <h3>Rhode Island Department of Health, <em>Contact Tracer</em></h3>
            <p>Providence, Rhode Island | SEP 2020 – JAN 2022</p>
            <ul>
              <li>Coordinated with state health officials, educators, and medical professionals to provide quarantine and isolation guidance to over 5,000 patients infected with COVID-19</li>
              <li>Promoted to supervisor to manage and evaluate a team of 20 information line agents, overseeing communication across teams and maintaining a patient database covering more than 500k residents</li>
            </ul>
          </div>
        </div>

        <div id="campus-community" className="resume-section">
          <h2>CAMPUS & COMMUNITY ENGAGEMENT EXPERIENCE</h2>
          <div className="experience">
            <h3>Sprout & STEM, <em>STEM Teaching/Research Assistant</em></h3>
            <p>Providence, Rhode Island | JAN 2023 – SEP 2024</p>
            <ul>
              <li>Developed best-practice teaching methods for underrepresented STEM students in public schools alongside Brown University medical student researchers through Sprout & STEM, a volunteer organization connecting university mentors with underserved public high schools in Providence</li>
              <li>Taught weekly foundational mathematics classes in both English and Spanish for students in the Providence Public School District</li>
            </ul>
          </div>
          <div className="experience">
            <h3>Fullstack at Brown, <em>Project Manager</em></h3>
            <p>Providence, Rhode Island | SEP 2023 – MAY 2024</p>
            <ul>
              <li>Managed a team of 5 student engineers building websites free of charge for Brown University clubs and local organizations as part of Fullstack, a student-led web development club</li>
            </ul>
          </div>
          <div className="experience">
            <h3>Ivy Film Festival, <em>Outreach Coordinator</em></h3>
            <p>Providence, Rhode Island | JAN 2023 – MAY 2024</p>
            <ul>
              <li>Coordinated outreach for the Ivy Film Festival, communicating with over 200 film schools, students, directors, and alumni</li>
              <li>Helped launch the festival’s first annual short-film competition for high school filmmakers by securing outside donor support, awarding over $300 in prizes</li>
            </ul>
          </div>
          <div className="experience">
            <h3>College Hill Independent (“Indy”), <em>Spanish Translator</em></h3>
            <p>Providence, Rhode Island | JAN 2021 – DEC 2021</p>
            <ul>
              <li>Translated articles into Spanish for the College Hill Independent, Brown’s independent weekly student newspaper, meeting with editors every two weeks to coordinate assignments</li>
            </ul>
          </div>
        </div>

        <div id="skills-interests" className="resume-section">
          <h2>SKILLS & INTERESTS</h2>
          <p><strong>Technical Skills:</strong> Programming Languages (JavaScript, Python, etc.); Data Analysis (SQL, Stata, etc.); Legal Technology (Harvey, Legora, DraftWise, etc.)</p>
          <p><strong>Languages:</strong> Spanish (<em>Heritage Speaker</em>), French (<em>C1 - Advanced</em>), Portuguese (<em>B1 - Intermediate</em>)</p>
          <p><strong>Music Ensembles:</strong></p>
          <ul className="ensembles">
            <li><span>Paris 8 University Vincennes-Saint-Denis, <em>2nd Violin</em></span><span className="ensemble-dates">SEP 2022 - DEC 2022</span></li>
            <li><span>Brown University Old Time String Band, <em>Fiddler</em></span><span className="ensemble-dates">SEP 2023 - DEC 2023</span></li>
            <li><span>NYC Broadway Bach Ensemble, <em>1st Violin</em></span><span className="ensemble-dates">SEP 2024 - MAY 2025</span></li>
            <li><span>NYC Queer Urban Orchestra, <em>2nd Violin</em></span><span className="ensemble-dates">SEP 2024 - MAY 2025</span></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;
