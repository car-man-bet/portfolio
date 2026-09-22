import React, { useEffect, useRef, useState } from 'react';
import './Works.css';

import capeVerde from '../assets/cape_verde_webpage.png';
import eCommerce from '../assets/e_commerce_webpage.png';
import timeManagement from '../assets/time_management_app.png';
import thumbtack from '../assets/thumbtack.png';

import lofi from '../assets/lofi-desktop.png';
import sketches from '../assets/short-sketches.png';
import style from '../assets/style-guide.png';

import figma_lofi from '../assets/figma-lofi.png';
import data from '../assets/data.png';
import restrictions from '../assets/nada.png';
import objectives from '../assets/objectives.png';

import wireframe from '../assets/wireframe.png';

import stockScrapers from '../assets/stock_scrapers_poster.png';
import stockScrapersLogo from '../assets/stock_scrapers_logo.png';
import twitterPie from '../assets/twitter_mentions_pie.png';
import redditPie from '../assets/reddit_mentions_pie.png';
import kmeansMarketCap from '../assets/kmeans_marketcap.png';
import regressionScatter from '../assets/regression_scatter.png';

import paragonLogo from '../assets/paragon_logo.png';

function Works({ activeWork, setActiveWork }) { 
  const headerRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open sidebar when the component mounts
    setIsOpen(true);
    // Close sidebar when the component unmounts
    return () => setIsOpen(false);
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

  const CapeVerdeContent = () => (
    <div className="cape-verde-content">
      <div className="project-header">
        <img src={thumbtack} alt="Thumbtack" className="work-thumbtack-img" />
        <h2>Cape Verdean Museum Webpage Redesign</h2>

        <a href="https://car-losb.github.io/responsive_redesign_repo/">
          <img src={capeVerde} className="project-image" alt="Cape Verdean Museum" />
        </a>
        <div className="project-details">
          <div className="project-section context">
            <h3>Context/Problem</h3>
            <p>The Cape Verdean Museum is a cultural institution dedicated to preserving and celebrating the history, art, and heritage of Cape Verdean people. This design is aimed at remedying the <a href="https://capeverdeanmuseum.org/"><span className="link">existing webpage's</span></a> design inconsistencies, to increase visitor traffic and enhance user experiences.</p>
          </div>
          <div className="project-section role"> {/* Assigned class 'role' */}
            <h3>Role</h3>
            <p>UX Researcher, Designer, Engineer</p>
          </div>
          <div className="project-section timeline"> {/* Assigned class 'timeline' */}
            <h3>Timeline</h3>
            <p>4 Weeks</p>
          </div>
          </div>
        </div>
        <div className="project-body">
        <div className="project-section">
          <h3>Research</h3>
          <p>
            In examining the Cape Verdean Museum's home webpage, I noticed several usability problems that are likely harming digital visitors' experiences. These issues largely fell into three categories: <strong>lack of hierarchy, poor visual contrast, and unintuitive design.</strong>
          </p>

          <p>
            An analysis on <a href="https://wave.webaim.org/"><span className="link">WAVE</span></a> and <a href="https://validator.w3.org/"><span className="link">HTML Validator</span></a> confirmed my concerns to be true, as the errors returned coincided with the accessibility criteria I mentioned.
          </p>

        </div>
        <div className="project-section">
          <h3>Design Process</h3>
          <p>I began by identifying key usability problems to inspire my brainstorming sketches. The page had a very long navigation bar with many different pages to choose from, none of which were organized in any particular order. 
            Gray font on dark gray banners make it difficult to distinguish text, particularly for readers with visual impairments. Finally, various sections were laid out with no direction and with little labeling.</p>
            <div className="project-subImages-container">
              <a href="https://drive.google.com/file/d/1JmxZlRM1sCaEki9zi2KV7UWsXqhYf4Q8/view">
                <img src={sketches} className="project-subImage"></img>
              </a>
            </div>

            <p>In these designs, I attempted to reorganize the navigation links and create a more cohesive flow throughout the webpage. 
              I identified key areas in the webpage that I felt were important to highlight in my low fidelity mockup: <strong>navigation bars, mission statements, events schedule, hours/location, and outreach resources (social media, newsletter, etc).</strong></p>
              <div className="project-subImages-container">
                <a href="https://drive.google.com/file/d/1RV4T_Pv68LZGConkzrkt6y2u8s9BP85a/view">
                  <img src={lofi} className="project-subImage"></img>
                </a>
              </div>
        </div>
        <div className="project-section">
          <h3>Figma and Prototype Solution</h3>
          <p>My design adopted a color scheme inspired by the Cape Verdean flag, offering visual appeal and contrast. Many of these details are outlined in my <a href="https://www.figma.com/design/1mqlHE57qRwcseX4OVFHLp/Untitled?node-id=3-174&t=UUZYwATBzENVr5C4-0"><span className="link">figma style guide</span></a>:</p>
          <div className="project-subImages-container">
            <a href="https://www.figma.com/design/1mqlHE57qRwcseX4OVFHLp/Untitled?node-id=3-174&t=UUZYwATBzENVr5C4-0">
                <img src={style} className="project-subImage"></img>
            </a>
          </div>
          <p>As shown at the top of this page, the <a href="https://car-losb.github.io/responsive_redesign_repo/"><span className="link">redesigned webpage</span></a> features intuitive navigation, visually appealing layouts, and interactive elements showcasing Cape Verdean artifacts and history using HTML/CSS. The impact of these design choices includes increased user engagement, improved access to museum resources, and enhanced cultural representation online.</p>
        </div>
        <div className="project-section">
          <h3>Learnings</h3>
          <p>Working on this project as a UX Researcher and Engineer highlighted the importance of user-centered design principles, including responsiveness and accessbilility, as well as the value of iterative design processes in addressing complex usability challenges. The impact of this design underscores the significant role of digital platforms in preserving and promoting heritage.</p>
        </div>
      </div>
    </div>
  );
  
  const ECommerceContent = () => (
    <div className="cape-verde-content">
      <div className="project-header">
        <img src={thumbtack} alt="Thumbtack" className="work-thumbtack-img" />
        <h2>Sustainable E-Commerce Shopping Cart</h2>

        <a href="https://development-project-ten.vercel.app/">
          <img src={eCommerce} className="project-image" alt="Sustainable E-Commerce Shopping Cart" />
        </a>
        <div className="project-details">
          <div className="project-section context">
            <h3>Context/Problem</h3>
            <p>Traditional e-commerce adopt various UI features to optimize conversion rates and enhance user experiences. This project contributes to the integration of user-focused e-commerce features to enhance sustainable shopping experience.</p>
          </div>
          <div className="project-section role"> {/* Assigned class 'role' */}
            <h3>Role</h3>
            <p>UI/UX Researcher, Designer, Engineer</p>
          </div>
          <div className="project-section timeline"> {/* Assigned class 'timeline' */}
            <h3>Timeline</h3>
            <p>3 Weeks</p>
          </div>
          </div>
        </div>
        <div className="project-body">
        <div className="project-section">
          <h3>Research</h3>
          <p>
            I was inspired by recent movements for sustainable online retail, such as <a href="https://www.trashie.io/new-home"><span className="link">Trashie</span></a>, and chose to focus my research on online clothing retail platforms.
          </p>

          <p>
          I performed a competitive analysis comparing differing list and aggregator features from the following top fast-fashion retailers: 
          <a href="https://us.shein.com/?url_from=usgooglebrandshein_sheinshein_srsa_20210930&cid=370313608&setid=25652838688&adid=549022341969&pf=GOOGLE&gad_source=1&gclid=CjwKCAjw_LOwBhBFEiwAmSEQARegFpqaRknuQC8uptcpHKhGd2X-8MbiSGO8AUlzTrr6KYr47gcyERoCo0wQAvD_BwE">
          <span className="link"> Shein</span></a>, <a href="https://www.temu.com/"><span className="link">Temu</span></a>, and <a href="https://www.wish.com/feed/reach-cids-000000000000000000000000-from_ad-19808826207?filter=reach-cids-000000000000000000000000-from_ad-19808826207&utm_source=ggl&utm_medium=pmax&utm_campaign=19808826207&from_ad=19808826207&gad_source=1&gclid=CjwKCAjw_LOwBhBFEiwAmSEQAYW56onIhzfJ1L_1AZWpdqLHLJMyF5WMuAyoWKWXD7F3i4KDzTR2WhoC7vUQAvD_BwE&hide_login_modal=true">
          <span className="link">Wish</span></a>.
          </p>

          <div class="table_section">
        <table>
            <thead>
                <tr>
                    <th></th>
                    <th>Shein</th>
                    <th>Temu</th>
                    <th>Wish</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><strong>Categorical Sorting (Article of Clothing)</strong></td>
                    <td>X</td>
                    <td></td>
                    <td>X</td>
                </tr>
                <tr>
                    <td><strong>Cart Pop-Up</strong></td>
                    <td>X</td>
                    <td>X</td>
                    <td></td>
                </tr>
                <tr>
                    <td><strong>Cart Quick-Add</strong></td>
                    <td>X</td>
                    <td>X</td>
                    <td></td>
                </tr>
                <tr>
                    <td><strong>Price Filtering</strong></td>
                    <td>X</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td><strong>1-Click-Buy </strong></td>
                    <td>X</td>
                    <td></td>
                    <td></td>
                </tr>

            </tbody>
        </table>
        </div>

        </div>
        <div className="project-section">
          <h3>Design Process</h3>
          <p>
            I chose to implement a second-hand clothing shopping experience for users called "Eco-Fashion". Below are the major features I chose to incorporate, many of which were inspired by my competitive research analysis:
          </p>

          <ul>
            <li><strong>Clothing Article Filtering</strong> - Users can filter list results by clothing type</li>
            <li><strong>Maximum Price Filtering</strong> - Items can be filtered according to a maximum price slider</li>
            <li><strong>Price Sorting</strong> - Items list can be sorted by price from cheapest to most expensive</li>
            <li><strong>Cart Pop-Up</strong> - A user's shopping cart is displayed adjacent to the clothing items as they shop</li>
            <li><strong>Cart Quick-Add Button</strong> - Users can add an item to their card with the press of a button without having to switch windows/screens</li>
            <li><strong>Remove Item/Clear Cart Button</strong> - Users can remove a single type of item from a cart or clear their cart completely as they shop</li>
          </ul>

          <p>
          Before starting development I decided to create a <a href="https://www.figma.com/design/pVeVTdgRlPiCEHQc4Hphx7/Development-Lofi-Mockup?node-id=0-1&t=C7UZ7siQsUt50Jcn-0"><span className="link">low fidelity wireframe</span></a> on figma to get a better sense of the structure I wanted for my webpage. 
          </p>

            <div className="project-subImages-container">
              <a href="https://www.figma.com/design/pVeVTdgRlPiCEHQc4Hphx7/Development-Lofi-Mockup?node-id=0-1&t=C7UZ7siQsUt50Jcn-0">
                <img src={figma_lofi} className="project-subImage"></img>
              </a>
            </div>

            <p>In the theme of sustainability, I opted for greens and natural oranges for the color scheme, making sure to create enough contrast to ensure accessibility.</p>
        </div>
        <div className="project-section">
          <h3>Figma and Prototype Solution</h3>
          <p>In the theme of sustainability, I opted for greens and natural oranges for the color scheme, making sure to create enough contrast to ensure accessibility.</p>
          <p>As shown at the top of this page, the <a href="https://development-project-ten.vercel.app/"><span className="link">final prototype</span></a> features an intuitive navigation hierarchy, visually contrasting interface elements, and several user-focused shopping tool features created using ReactJS.</p>
        </div>
        <div className="project-section">
          <h3>Learnings</h3>
          <p>Throughout the development of the Sustainable Shopping Cart project, I gained valuable insights into several aspects of e-commerce design and development, as well as sustainability in online retail:</p>
          <ul>
            <li><strong>User-Centered Design:</strong> Understanding the importance of user-centered design principles was crucial in creating an intuitive and engaging shopping experience for users.</li>
            <li><strong>Sustainability:</strong> Exploring sustainable design principles and incorporating marketing and UI/UX strategies targeted to eco-friendly consumers.</li>
            <li><strong>Iterative Development:</strong> Adopting an iterative development approach allowed for continuous improvement and refinement of the prototype.</li>
          </ul>
          <p>As a Designer and Engineer, this project not only enhanced my technical skills but also broadened my understanding of the intersection between technology, design, and sustainability in the context of e-commerce.</p>
        </div>
      </div>
    </div>
  );
  
  const TimeManagementContent = () => (
    <div className="cape-verde-content">
      <div className="project-header">
        <img src={thumbtack} alt="Thumbtack" className="work-thumbtack-img" />
        <h2>TimeWise: An Ethical Time Management App</h2>

        <a href="https://www.figma.com/design/7rAhHYF2uw5JId1kZxRsdv/Untitled?node-id=0-1&t=0HeCyjVjzvf7W8Tw-0">
          <img src={timeManagement} className="project-image" alt="Time Management App" />
        </a>
        <div className="project-details">
          <div className="project-section context">
            <h3>Context/Problem</h3>
            <p>TimeWise is a time management application designed to help users effectively manage their tasks and optimize their productivity. The project involved the development of various features aimed at empowering users to take control of their time and achieve their goals.</p>
          </div>
          <div className="project-section role"> {/* Assigned class 'role' */}
            <h3>Role</h3>
            <p>Ethicist, Auditor, Designer</p>
          </div>
          <div className="project-section timeline"> {/* Assigned class 'timeline' */}
            <h3>Timeline</h3>
            <p>2 Weeks</p>
          </div>
          </div>
        </div>
        <div className="project-body">
        <div className="project-section">
          <h3>Research</h3>
          <p>I performed a market analysis to identify some of the leading time management softwares/apps:
          <a href="https://hourstack.com/">
          <span className="link"> Hour Stack</span></a>, <a href="https://toggl.com/"><span className="link">Toggl Track</span></a>, and <a href="https://timelyapp.com/home-v3">
          <span className="link">Timely</span></a>.
          </p>
          <p>
            From the competitive research, I identified key philosophical principles to emphasize when creating a time management app that respects the wishes of user and enables them to manage their time as they intend:
          </p>
          <ul>
            <li><strong>User Autonomy:</strong> Understanding the importance of user-centered design principles was crucial in creating an intuitive and engaging shopping experience for users.</li>
            <li><strong>Data Privacy:</strong> Exploring sustainable design principles and incorporating marketing and UI/UX strategies targeted to eco-friendly consumers.</li>
            <li><strong>Transparency:</strong> Adopting an iterative development approach allowed for continuous improvement and refinement of the prototype.</li>
          </ul>

        </div>
        <div className="project-section">
          <h3>Design Process</h3>
          <p>I wanted to address three main user pain points: <strong>privacy concerns, app-related distractions, and being able to quantify progress</strong>. My product's following features are aimed to remedy these issues:</p>
          <ul>
            <li><strong>Data Analytics:</strong> This feature collects a users' behaviors and time spent on certain apps or tasks to better measure their time management effectiveness.</li>
            <li><strong>Objectives:</strong> Users can define objectives for themselves that allows them to shape their time management journey, the app collects data that allows AI suggested objectives based on previous user behavior.</li>
            <li><strong>App Restrictions:</strong> To provide users with greater autonomy, they are able to restrict access to specific apps on their phone according to time limits they define.</li>
          </ul>
            <div className="project-subImages-container time">
              <a href="https://www.figma.com/design/7rAhHYF2uw5JId1kZxRsdv/Untitled?node-id=0-1&t=0HeCyjVjzvf7W8Tw-0">
                <img src={data} className="time-img"></img>
                <img src={objectives} className="time-img"></img>
                <img src={restrictions} className="time-img"></img>
              </a>
            </div>

            <p>Once I defined minimum requirements for the product, I created a workflow of the app, emphasizing user behavior and intuition. In an effort to enhance user autonomy, I adopted a color scheme of soft greens
              and used passive language in order to avoid aggressive nudging. 
            </p>

        </div>
        <div className="project-section">
          <h3>Figma and Prototype Solution</h3>
          <p>The <a href="https://www.figma.com/design/7rAhHYF2uw5JId1kZxRsdv/Untitled?node-id=0-1&t=0HeCyjVjzvf7W8Tw-0"><span className="link">wireframe</span></a> below outlines the different screens on the app, including the aforementioned features.
            Users are provided with the tools to set time management goals for themselves, measure their achievements, and limit the granularity and access to their data.</p>
          <div className="project-subImages-container">
                <a href="https://www.figma.com/design/7rAhHYF2uw5JId1kZxRsdv/Untitled?node-id=0-1&t=0HeCyjVjzvf7W8Tw-0">
                  <img src={wireframe} className="project-subImage"></img>
                </a>
              </div>
          <p>The design adopts language and disclosures in order ot provide users with transparency regarding the use of their data and the purpose of certain app features. Additionally, it is important to note the <strong>privacy considerations</strong> made throughout the product's design. Users are given several settings features from which they can dictate the use of certain features and dictate the collection of their data.</p>
        </div>
        <div className="project-section">
          <h3>Learnings</h3>
          <p>As the leading Ethicist and Designer for this project, I explored the intersection of ethical frameworking and product development while learning the importance of <strong>user privacy, autonomy, and transparency</strong>. This app provided insight into the user considerations and ethical responsibilities of tech developers when it comes to shaping user behavior. </p>
        </div>
      </div>
    </div>
  );

  const StockScrapersContent = () => (
    <div className="cape-verde-content">
      <div className="project-header">
        <img src={thumbtack} alt="Thumbtack" className="work-thumbtack-img" />
        <h2>Social Media Mentions & Stock Performance</h2>

        <img src={stockScrapersLogo} className="project-image" alt="Stock Scrapers" />

        <div className="project-details">
          <div className="project-section context">
            <h3>Context/Problem</h3>
            <p>Social media has become a powerful, if unproven, force in shaping investor behavior, with platforms like Twitter and Reddit hosting constant speculation about the stock market. This project set out to test whether that influence shows up in the data: does the volume of social media mentions a stock receives actually predict its future price volatility?</p>
          </div>
          <div className="project-section role">
            <h3>Role</h3>
            <p>Data Engineer</p>
          </div>
          <div className="project-section timeline">
            <h3>Timeline</h3>
            <p>3 Months</p>
          </div>
        </div>
      </div>
      <div className="project-body">
        <div className="project-section">
          <h3>Team</h3>
          <p>Carlos Betancur, John Ryan Byers, Nathan DePiero, and Hunter Adrian.</p>
        </div>

        <div className="project-section">
          <h3>Data & Methodology</h3>
          <p>
            We pulled from three sources and merged them into a single SQL database: the <strong>WallStreetBets dataset</strong> (Reddit posts mentioning stock tickers, 1/28/21–8/16/21), the <strong>Stock Market Tweets dataset</strong> (Twitter posts mentioning tickers, 4/9/20–7/16/20), and the <strong>Yahoo Finance API</strong> for daily price and volatility data on the mentioned stocks. We aggregated post counts per ticker per day, cleaned duplicates, and standardized ticker formatting across datasets to align them. We deliberately excluded post content, authors, or other personal information from our database given the sensitive nature of that data.
          </p>
          <p>
            For hypothesis testing, we ran two-sample t-tests (to compare volatility means between independent groups) and a paired t-test (to compare matched before/after volatility pairs, since those samples weren't independent). For the machine learning component, we ran a linear regression to look for a trend between mention volume and next-day volatility, and a k-means clustering analysis to explore relationships between mentions, volatility, and trading volume.
          </p>
          <div className="project-subImages-container pie">
            <img src={twitterPie} className="pie-img" alt="Twitter stock mention distribution by company" />
            <img src={redditPie} className="pie-img" alt="Reddit stock mention distribution by company" />
          </div>
          <p className="image-caption">Share of mentions by ticker on each platform. Twitter's mentions skewed toward large-cap staples (S&P 500, Apple, AT&T); Reddit's were dominated by a single ticker — GameStop made up nearly 63% of all mentions in our window, a clear WallStreetBets-era artifact.</p>
        </div>

        <div className="project-section">
          <h3>Findings</h3>
          <p>
            <strong>Mentions vs. volatility:</strong> A two-sample t-test comparing next-day volatility after high vs. low mention days returned an insignificant result (t = 1.371, p = 0.171) — no statistical evidence that mention volume predicts volatility.
          </p>
          <p>
            <strong>Twitter vs. Reddit:</strong> Comparing next-day volatility after high-mention days on each platform also returned no significant difference (t = 0.448, p = 0.657).
          </p>
          <p>
            <strong>Before vs. after high mentions:</strong> A paired t-test comparing volatility the day before vs. the day after a spike in mentions did return a significant result (p = 0.0047) — but in the opposite direction we expected. Volatility tended to <em>decrease</em> after high-mention days. Our read on this: volatility likely drives the posts, rather than posts driving volatility — people react to already-volatile stocks with mentions, and the stock settles afterward.
          </p>
        </div>

        <div className="project-section">
          <h3>Machine Learning</h3>
          <p>
            Our linear regression modeled next-day volatility as a function of mention count, using an 80/20 train/test split. The model generalized well (MSE of 1.46 train vs. 1.71 test), but the r-squared values (0.001 train, 0.0005 test) confirmed there was essentially no linear relationship to capture.
          </p>
          <div className="project-subImages-container">
            <img src={regressionScatter} className="project-subImage" alt="Linear regression of stock volatility against normalized number of mentions" />
          </div>
          <p>
            The k-means clustering (across mentions, volatility, and trading volume) didn't cleanly separate by mention count, but the clusters lined up along the volume axis in a way that resembled groupings by market capitalization — suggesting a stock's size, not its social media buzz, was the stronger signal for trading volume.
          </p>
          <div className="project-subImages-container">
            <img src={kmeansMarketCap} className="project-subImage" alt="K-means clustering of stock mentions, volatility, and trading volume, colored by market capitalization" />
          </div>
        </div>

        <div className="project-section">
          <h3>Visualization Design</h3>
          <p>
            We used pie charts for the mention-share breakdowns since the goal was to show each company's mentions relative to the whole — something a bar chart doesn't communicate as intuitively. For the k-means and market-cap comparison, we chose a 3D scatter plot over a density-based option like a hexbin plot, since our data spanned three variables (mentions, volatility, and volume) and a scatter plot preserved the distinction between individual data points. Getting the two 3D charts to visually align was the trickiest part — the k-means cluster colors were assigned randomly, so we manually matched them to the market-cap color scheme, and had to correct an inverted axis so both charts shared the same viewing angle. For the regression, a scatter plot with a fitted line was the clearest way to show both the raw data and the (lack of a) trend at once.
          </p>
        </div>

        <div className="project-section">
          <h3>Socio-Historical Context</h3>
          <p>
            This project sits downstream of a real shift in how retail investing works. The rise of platforms like Reddit's r/WallStreetBets showed that online communities could move real markets — most visibly during the 2021 GameStop episode — while zero-fee trading apps like Robinhood lowered the barrier for everyday people to act on what they saw online. Our findings complicate the popular narrative, though: we found no statistical link between mention volume and volatility. Even so, the scale of retail chatter we saw in the data (GameStop alone accounted for the large majority of Reddit mentions in our window) speaks to a real behavioral shift toward retail participation, even without a measurable price effect.
          </p>
          <p>
            We identified four groups with a stake in this question: <strong>retail investors</strong>, who gain easier access to information but are also more exposed to misinformation and hype; <strong>institutional investors</strong>, whose strategies may need to account for social-media-driven volatility; <strong>regulators</strong> like the SEC, who may need to monitor these platforms for manipulation; and the <strong>platforms themselves</strong> (Twitter, Reddit), which shape investor sentiment through what they choose to surface.
          </p>
        </div>

        <div className="project-section">
          <h3>Ethical Considerations</h3>
          <p>
            Our data carried a few likely biases worth naming: it only captured Twitter and Reddit, leaving out other forums and platforms; it reflects whoever posts on those two platforms, not a representative cross-section of investors; and it's skewed toward already-popular tickers, since larger companies simply get mentioned more. We also excluded post content and author IDs from our database specifically to avoid exposing anything about an individual's trading activity or sentiment, even though the underlying platforms make that data technically public. All of our source datasets were released under open-source or open-access terms, so our use of them was consistent with how they were shared.
          </p>
          <p>
            The clearest misuse risk is someone citing our one significant result — the before/after paired t-test — without the context that it points the causal arrow the <em>opposite</em> way from what people usually assume (posts following volatility, not causing it). We were careful throughout to state plainly that our findings shouldn't inform anyone's actual investment decisions.
          </p>
        </div>

        <div className="project-section">
          <h3>Conclusions & Limitations</h3>
          <p>
            Overall, our data didn't support the popular narrative that social media chatter moves stock prices — a reasonable outcome given how efficient public markets tend to be. The main limitations were dataset scope: our Twitter and Reddit data each spanned about a year from different time windows, and we only tracked mention counts rather than sentiment. A follow-up study could pull longer time spans, add platforms like Instagram or TikTok, and incorporate sentiment analysis rather than raw mention volume.
          </p>
        </div>

        <div className="project-section">
          <h3>Learnings</h3>
          <p>Working on Stock Scrapers was a hands-on lesson in the discipline of hypothesis-driven analysis — designing tests before looking at results, and being willing to report a negative finding rather than reaching for a conclusion the data didn't support. It also pushed us to think beyond the statistics: grounding the project in its socio-historical context and working through its ethical considerations made clear that even a "negative" result carries a responsibility to be communicated carefully.</p>
        </div>
      </div>
    </div>
  );

  const ParagonContent = () => (
    <div className="cape-verde-content">
      <div className="project-header">
        <img src={thumbtack} alt="Thumbtack" className="work-thumbtack-img" />
        <h2>Digital Accessibility Policy & Implementation Strategy</h2>

        <img src={paragonLogo} className="project-image paragon-banner" alt="Paragon Policy Fellowship" />

        <div className="project-details">
          <div className="project-section context">
            <h3>Context/Problem</h3>
            <p>As part of the Paragon Policy Fellowship, our eight-person team was engaged by the City of Madison, Wisconsin to prepare it for upcoming federal accessibility enforcement. Under Title II of the ADA, municipalities serving populations over 50,000 must bring their digital services into compliance with WCAG 2.1 Level AA by April 24, 2026 — and Madison wanted to get ahead of it rather than scramble to meet the deadline.</p>
          </div>
          <div className="project-section role">
            <h3>Role</h3>
            <p>Policy Fellow</p>
          </div>
          <div className="project-section timeline">
            <h3>Timeline</h3>
            <p>4 Months</p>
          </div>
        </div>
      </div>
      <div className="project-body">
        <div className="project-section">
          <h3>Team</h3>
          <p>Wendy Zeng (Project Lead), Allie Ladjeva, Carlos Betancur, Claudia Hebert, Colin Angel, Zinan Yue, Noreen Ahmed, and Alexis Eskenazi.</p>
        </div>

        <div className="project-section">
          <h3>Aims</h3>
          <p>
            We set out to analyze the City of Madison's current digital accessibility landscape, benchmark it against comparable municipalities, and identify the key opportunities and gaps standing between Madison and full compliance. The goal wasn't just to check a regulatory box — it was to give Madison a long-term path toward digital accessibility that ensures residents with disabilities can fully access and benefit from public services.
          </p>
        </div>

        <div className="project-section">
          <h3>Methodology</h3>
          <p>
            We followed a five-stage process to ground our recommendations in evidence: a literature review of ADA/WCAG requirements and best practices, a comparative analysis benchmarking Madison against peer cities, direct stakeholder outreach, a review of Madison's existing digital policies, and finally policy development and recommendations synthesizing everything we'd found.
          </p>
        </div>

        <div className="project-section">
          <h3>Deliverables</h3>
          <p>
            Our final report to the City consisted of three parts: a digital accessibility policy and implementation strategy designed to achieve Title II ADA compliance, policy guidance for drafting current and future Administrative Policy Memoranda (APMs), and an executive summary distilling our key research findings and recommendations for city leadership.
          </p>
        </div>

        <div className="project-section">
          <h3>Impact & Future Work</h3>
          <p>
            The report lays out both what Madison is already doing well and the structural gaps it needs to close ahead of the federal compliance deadline. Beyond meeting the letter of the law, our recommendations aim to position Madison as a leader in municipal digital accessibility. We flagged three priorities for the City going forward: building internal capacity through staff training, formalizing an ongoing accessibility review process rather than a one-time fix, and establishing clear mechanisms for accountability and community feedback — alongside continuing to track federal guidance and emerging best practices as they evolve.
          </p>
        </div>

        <div className="project-section">
          <h3>Learnings</h3>
          <p>This project pushed me to translate dense regulatory language (ADA Title II, WCAG 2.1 AA) into a clear implementation roadmap a city government could actually act on. Working across an eight-person team through a structured five-stage process also reinforced how much a shared methodology helps keep a large group's research and recommendations coherent by the time they reach a client.</p>
        </div>
      </div>
    </div>
  );

  const handleClick = (work) => {
    setActiveWork(work); // Toggle activeWork
  
    // Scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="container">
      <div className={isOpen ? "works-sidebar open" : "works-sidebar"}>
        <h2 ref={headerRef} className="works-header" onClick={() => setActiveWork(null)}>Works...<span className="blink">|</span></h2>
        <ul className="work-links">
          <li><a onClick={() => handleClick('paragon')}>Paragon Policy Fellowship</a></li>
          <li><a onClick={() => handleClick('stockScrapers')}>Stock Scrapers</a></li>
          <li><a onClick={() => handleClick('capeVerde')}>Cape Verdean Museum Redesign</a></li>
          <li><a onClick={() => handleClick('eCommerce')}>Sustainable E-Commerce Shopping Cart</a></li>
          <li><a onClick={() => handleClick('timeManagement')}>Time Management App</a></li>
        </ul>
      </div>
      <div className="works-content">
        {!activeWork && (
          <>
          <WorkCard
            thumbtack={thumbtack}
            image={paragonLogo}
            title="Paragon Policy Fellowship"
            skills="Policy Research, Writing, Analysis"
            date="Spring 2025"
            onClick={() => handleClick('paragon')}
          />
          <WorkCard
            thumbtack={thumbtack}
            image={stockScrapers}
            title="Stock Scrapers"
            skills="Python, SQL, Statistical Testing, ML"
            date="Fall 2024"
            onClick={() => handleClick('stockScrapers')}
          />
          <WorkCard
            thumbtack={thumbtack}
            image={capeVerde}
            title="Cape Verdean Museum Redesign"
            skills="Figma, HTML/CSS, Design"
            date="Spring 2024"
            onClick={() => handleClick('capeVerde')}
          />
          <WorkCard
            thumbtack={thumbtack}
            image={eCommerce}
            title="Sustainable Shopping Cart"
            skills="ReactJS, Node.js, Market Research"
            date="Spring 2024"
            onClick={() => handleClick('eCommerce')}
          />
          <WorkCard
            thumbtack={thumbtack}
            image={timeManagement}
            title="Time Management App"
            skills="Figma, Ethical Frameworks, AI"
            date="Spring 2024"
            onClick={() => handleClick('timeManagement')}
          />
        </>
        )}
        {activeWork === 'capeVerde' && <CapeVerdeContent />}
        {activeWork === 'eCommerce' && <ECommerceContent />}
        {activeWork === 'timeManagement' && <TimeManagementContent />}
        {activeWork === 'stockScrapers' && <StockScrapersContent />}
        {activeWork === 'paragon' && <ParagonContent />}
      </div>
    </div>
  );
}

const WorkCard = ({ thumbtack, image, title, skills, date, onClick }) => {
  return (
    <div className="work-card" onClick={onClick}>
      <div className="thumbtack">
        <img src={thumbtack} alt="Thumbtack" className="thumbtack-img" />
      </div>
      <img src={image} alt={title} className="work-image" />
      <h3>{title}</h3>
      <div className="work-details">
        <p className="skills">{skills}</p>
        <p className="date">{date}</p>
      </div>
    </div>
  );
};

export default Works;
