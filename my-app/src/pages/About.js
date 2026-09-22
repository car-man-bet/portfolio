import React, { useEffect, useRef } from 'react';
import './About.css';
import profilePic from '../assets/profile_pic.jpeg';
import thumbtack from '../assets/thumbtack.png';

function About() {
  const headerTextRef = useRef(null);

  useEffect(() => {
    const text = headerTextRef.current;
    if (!text) return;

    const letters = text.textContent.split('');
    text.textContent = '';

    letters.forEach((letter, idx) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.animationDelay = `${idx * 70}ms`;
      text.appendChild(span);
    });
  }, []);

  return (
    <main className="about-page">
      <div className="container">
        <div className="polaroid">
          <div className="thumbtack">
            <img
              src={thumbtack}
              alt=""
              aria-hidden="true"
              className="thumbtack-img"
            />
          </div>

          <img
            src={profilePic}
            alt="Carlos Betancur"
            className="profile-pic"
          />

          <div className="label">Seattle, WA ~ 2022</div>
        </div>

        <section
          className="about-text"
          aria-labelledby="about-heading"
        >
          <h2
            id="about-heading"
            className="about-header"
          >
            <span ref={headerTextRef}>About&nbsp;Me...</span>
            <span className="blink" aria-hidden="true">|</span>
          </h2>

          <p>
            My name is{' '}
            <span className="highlight">Carlos Betancur</span>, a
            Practice Innovation Analyst at Katten Muchin Rosenman LLP
            and a graduate of Brown University, where I studied Computer
            Science and Economics.
          </p>

          <p>
            My professional experience sits at the intersection of{' '}
            <span className="underline">
              technology, legal practice, and innovation
            </span>
            . I have worked as a software engineer, built products in
            legal technology, and now help attorneys integrate emerging
            technologies into their practices. Across these experiences,
            I have become particularly interested in how technology can
            promote social equity while navigating the legal and
            institutional systems that shape its development.
          </p>

          <p>
            I hope to pursue a legal career in the{' '}
            <span className="highlight">
            Emerging Companies, Venture Capital and/or Capital Markets
            </span>{' '} 
              space, employing my legal and tech skills to support innovators from diverse backgrounds.
          </p>
        </section>
      </div>
    </main>
  );
}

export default About;
