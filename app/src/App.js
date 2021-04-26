import React, { useEffect, useState } from 'react'

import { ScrolledToEdge, useScrolledToEdge } from 'scrolled-to-edge/dist';
import classNames from 'classnames/bind';
import ReactMarkdown from 'react-markdown';
import Prism from "prismjs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';

import 'prismjs/themes/prism-okaidia.css';
import readmeFile from 'scrolled-to-edge/README.md'

const App = () => {
  const [windowScrollPosition, setWindowScrollPosition] = useState(null);
  const [examplePosition, setExamplePosition] = useState(null);
  const [navPosition, setNavPosition] = useState(null);
  const [readme, setReadme] = useState(null);
  
  useEffect(() => {
    Prism.highlightAll();
    fetch(readmeFile).then((response) => response.text()).then((text) => {
      setReadme(text);
    });
  });

  useScrolledToEdge(e => {
    if (e.y === 'start') {
      setWindowScrollPosition('at the top');
    }
    if (e.y === 'end') {
      setWindowScrollPosition('at the bottom');
    }
    if (e.y === 'middle') {
      setWindowScrollPosition('somewhere in the middle');
    }
    if (e.y === null) {
      setWindowScrollPosition(null);
    }
  });

  const exampleClasses = classNames({
    'at-top': examplePosition === 'start' || examplePosition === null,
    'at-bottom': examplePosition === 'end' || examplePosition === null
  });

  const navClasses = classNames({
    'at-left': navPosition === 'start' || navPosition === null,
    'at-right': navPosition === 'end' || navPosition === null
  });

  return (
    <>
      <header>
        <h1>Scrolled To Edge</h1>
        <nav>
          <a href="https://github.com/chadspencer/scrolledtoedge" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.npmjs.com/package/scrolled-to-edge" target="_blank"><FontAwesomeIcon icon={faNpm} /></a>
        </nav>
      </header>
      <div className="toast">This page is scrolled {windowScrollPosition}.</div>
      <section className="hero">
        <article>
          <h2>Detect when scroll position is at the top, bottom, left or right.</h2>
          <p>It really seems like there should be a CSS selector for this right? Well, there's not, so now we have this. This is a small react hook and component to detect when an overflowing container or window is scrolled to an edge. Use it however you like and feel free to contribute enhancements, report bugs or just leave comments on GitHub.</p>
          <a className="button" href="https://github.com/chadspencer/scrolledtoedge" target="_blank"><FontAwesomeIcon icon={faGithub} /> <span>View Documentation</span></a>
          <div className="code-window">
            <div className="dots">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <pre>
              <code className="language-javascript">
                {`// Install
npm i scrolled-to-edge
yarn add scrolled-to-edge

// Hook Example
import { useScrolledToEdge } from 'scrolled-to-edge';

const App = () => {
  scrollingContainer = useScrolledToEdge(e => console.log(e.x, e.y));

  return (
    <div className="scrolling-container" ref="scrollingContainer">
      // Content
    </div>
  );
}

// Component Example
import { ScrolledToEdge } from 'scrolled-to-edge';

const App = () => {
  return (
    <ScrolledToEdge onChange={e => console.log(e.x, e.y)}>
      <div className="scrolling-container">
        // Content
      </div>
    </ScrolledToEdge>
  );
}`}
              </code>
            </pre>
          </div>
        </article>
      </section>
      <section>
        <article>
          <h3>Container Example</h3>
          <p>The most common use case I've ran into for needing this component is to conditionally render shadows on a container. Having shadows on a scrollable container subtly let's the user know what to do, especially when scrollbars are not present. It's really nice to hide those shadows when you're at the start or end of the container too.</p>
          <p>A little something like this:</p>
          <div className="example">
            <div>
              Header
              <nav className={navClasses}>
                <ScrolledToEdge onChange={e => setNavPosition(e.x)}>
                  <span>
                    <a href="#">Nav Item</a>
                    <a href="#">Nav Item</a>
                    <a href="#">Nav Item</a>
                    <a href="#">Nav Item</a>
                    <a href="#">Nav Item</a>
                    <a href="#">Nav Item</a>
                    <a href="#">Nav Item</a>
                    <a href="#">Nav Item</a>
                    <a href="#">Nav Item</a>
                    <a href="#">Nav Item</a>
                  </span>
                </ScrolledToEdge>
              </nav>
            </div>
            <div className={exampleClasses}>
              <ScrolledToEdge onChange={e => setExamplePosition(e.y)}>
                <div>
                  <p>Bacon ipsum dolor amet salami pork belly chislic fatback jowl turkey. Tongue prosciutto beef ribs bacon chislic ham ground round filet mignon, pork pork belly chuck hamburger pork chop. Meatloaf chuck strip steak pancetta tri-tip fatback biltong chicken pork belly short ribs short loin landjaeger pork chop. Flank tail spare ribs, salami biltong prosciutto tenderloin brisket buffalo boudin swine ground round rump chislic beef ribs. Andouille cupim pastrami hamburger pancetta kielbasa. Pastrami corned beef pig shank alcatra, turkey cow ribeye landjaeger kevin burgdoggen. Cupim tenderloin pig biltong.</p>
                  <p>Bacon ipsum dolor amet salami pork belly chislic fatback jowl turkey. Tongue prosciutto beef ribs bacon chislic ham ground round filet mignon, pork pork belly chuck hamburger pork chop. Meatloaf chuck strip steak pancetta tri-tip fatback biltong chicken pork belly short ribs short loin landjaeger pork chop. Flank tail spare ribs, salami biltong prosciutto tenderloin brisket buffalo boudin swine ground round rump chislic beef ribs. Andouille cupim pastrami hamburger pancetta kielbasa. Pastrami corned beef pig shank alcatra, turkey cow ribeye landjaeger kevin burgdoggen. Cupim tenderloin pig biltong.</p>
                  <p>Bacon ipsum dolor amet salami pork belly chislic fatback jowl turkey. Tongue prosciutto beef ribs bacon chislic ham ground round filet mignon, pork pork belly chuck hamburger pork chop. Meatloaf chuck strip steak pancetta tri-tip fatback biltong chicken pork belly short ribs short loin landjaeger pork chop. Flank tail spare ribs, salami biltong prosciutto tenderloin brisket buffalo boudin swine ground round rump chislic beef ribs. Andouille cupim pastrami hamburger pancetta kielbasa. Pastrami corned beef pig shank alcatra, turkey cow ribeye landjaeger kevin burgdoggen. Cupim tenderloin pig biltong.</p>
                  <p>Bacon ipsum dolor amet salami pork belly chislic fatback jowl turkey. Tongue prosciutto beef ribs bacon chislic ham ground round filet mignon, pork pork belly chuck hamburger pork chop. Meatloaf chuck strip steak pancetta tri-tip fatback biltong chicken pork belly short ribs short loin landjaeger pork chop. Flank tail spare ribs, salami biltong prosciutto tenderloin brisket buffalo boudin swine ground round rump chislic beef ribs. Andouille cupim pastrami hamburger pancetta kielbasa. Pastrami corned beef pig shank alcatra, turkey cow ribeye landjaeger kevin burgdoggen. Cupim tenderloin pig biltong.</p>
                </div>
              </ScrolledToEdge>
            </div>
            <div>Footer</div>
          </div>
          {/* <h3>Documentation</h3>
          <ReactMarkdown children={readme} /> */}
        </article>
      </section>
      <footer>
        <nav>
          <a href="https://www.npmjs.com/package/scrolled-to-edge" target="_blank">Install</a>
          <a href="https://github.com/chadspencer/scrolledtoedge" target="_blank">Documentation</a>
          <a href="https://github.com/chadspencer/scrolledtoedge/issues" target="_blank">Report Bugs</a>
          <a href="https://chadspencer.com" target="_blank">About the Author</a>
        </nav>
        <p>©{new Date().getFullYear()} Chad Spencer - All Rights Reserved</p>
      </footer>
    </>
  );
}

export default App;
