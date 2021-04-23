import React, { useEffect, useState } from 'react'

import { useScrolledToEdge } from './dist';
import Prism from "prismjs";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faNpm } from '@fortawesome/free-brands-svg-icons';

import 'prismjs/themes/prism-okaidia.css';

const App = () => {
  const [windowScrollPosition, setWindowScrollPosition] = useState('somewhere in the middle');
  useEffect(() => {
    Prism.highlightAll();
  });

  useScrolledToEdge(e => {
    if (e.y === 'start') {
      setWindowScrollPosition('at the top');
    } else if (e.y === 'end') {
      setWindowScrollPosition('at the bottom');
    } else {
      setWindowScrollPosition('somewhere in the middle');
    }
  });

  return (
    <>
      <header>
        <h1>Scrolled To Edge</h1>
        <nav>
          <a href="" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
          <a href="" target="_blank"><FontAwesomeIcon icon={faNpm} /></a>
        </nav>
      </header>
      <div class="toast">This page is scrolled {windowScrollPosition}.</div>
      <section className="hero">
        <article>
          <h2>Detect when scroll position is at the top, bottom, left or right.</h2>
          <p>Test lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eros est, facilisis auctor ante in, semper vehicula ipsum. Nulla varius ipsum id turpis lacinia blandit. Nunc et est dapibus, consectetur velit in, volutpat dolor. Maecenas ullamcorper elit rutrum.</p>
          <a className="button" href=""><FontAwesomeIcon icon={faGithub} /> <span>Contribute</span></a>
          <div className="code-window">
            <div className="dots">
              <div></div>
              <div></div>
              <div></div>
            </div>
            <pre>
              <code className="language-javascript">
                {`// Hook Usage
import { useScrolledToEdge } from 'scrolled-to-edge';

const App = () => {
  scrollingContainer = useScrolledToEdge(e => console.log(e));

  return (
    <div className="scrolling-container" ref="scrollingContainer">
      // Content
    </div>
  );
}

// Component Usage
import { ScrolledToEdge } from 'scrolled-to-edge';

const App = () => {
  return (
    <ScrolledToEdge onChange={e => console.log(e)}>
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
        <p>test</p>
      </section>
      <footer>
        <p>©{new Date().getFullYear()} Chad Spencer - All Rights Reserved</p>
      </footer>
    </>
  );
}

export default App;
