# scrolled-to-edge

> A simple react hook and component to detect when the scroll position of the window or a container is at the top, bottom, left or right.

<p>Version: 1.0.0</p>

<h2>Homepage</h2>

https://chadspencer.dev/scrolledtoedge/

<h2>Usage</h2>

<h3>Hook</h3>

The hook adds an event listener on the window to detect whether the window is scrolled to the start or end of the x and y axis. The hook can be used in any functional component.

```
import { useScrolledToEdge } from 'scrolled-to-edge';

useScrolledToEdge(callback, offset);
```

The hook receives in an inline callback function, which is required, and an optional offset value. <code>useScrolledToEdge</code> will return an event object to the callback that is called when an edge is reached. The returned event object will look something like this:

```
// At the end of a vertical scroll

{
  x: null,
  y: "end"
}
```

```
// At the start of a vertical scroll and at the end of a horizontal scroll

{
  x: "end",
  y: "start"
}
```

A null value indicates the axis is not overflowing or not at the start or end.

Additionally, the hook can be assigned directly to an element via a <code>ref</code> and the scroll listener will be attached to that element. When using this method the attached component must be able to receive a <code>ref</code>, so functional components will work only when using <code>forwardRef</code>. If you are consuming a functional component that you cannot add <code>forwardRef</code> to, you must use a wrapper element to attach the <code>ref</code> to and style that container accordingly.

```
import { useScrolledToEdge } from 'scrolled-to-edge';

const container = useScrolledToEdge(callback, offset);

<div ref={container} />
```

<h4>Parameters</h4>

```
useBottomScrollListener(
  // Required callback that is invoked when an edge is scrolled to.
  onChange: () => void,
  // Optional offset value in pixels from each edge.
  offset?: number
);
```

<h3>Component</h3>

Similar to the above <code>ref</code> example, you can attach the scroll listener to the container by wrapping it in a <code>ScrolledToEdge</code> component. This component internally uses the same ref method above so the same limitations apply.

```
import { ScrolledToEdge } from 'scrolled-to-edge';

<ScrolledToEdge callback={() => {}}, offset={number}>
  // Container and content here.
</ScrolledToEdge>;
```

<h4>Props</h4>

| Property          |           Type           |     Default     | Description                                                                                                                                                                                                                                                                                 |
| ----------------- | :----------------------: | :-------------: | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| onChange         |         function         |      null       | <b>Required</b> callback that is invoked when an edge is scrolled to.
| offset            |          number          |        0        | Optional offset value in pixels from each edge 

<h2>Examples</h2>

<h3>Hook on Window</h3>

```
import { useScrolledToEdge } from 'scrolled-to-edge';

const App = () => {
  useScrolledToEdge(e => console.log(e.x, e.y));

  return (
    // Content
  );
}
```

<h3>Hook on Container</h3>

```
import { useScrolledToEdge } from 'scrolled-to-edge';

const App = () => {
  scrollingContainer = useScrolledToEdge(e => console.log(e.x, e.y));

  return (
    <div className="scrolling-container" ref="scrollingContainer">
      // Content
    </div>
  );
}
```

<h3>Component</h3>

```
import { ScrolledToEdge } from 'scrolled-to-edge';

const App = () => {
  return (
    <ScrolledToEdge onChange={e => console.log(e)}>
      <div className="scrolling-container">
        // Content
      </div>
    </ScrolledToEdge>
  );
}
```

<h2>Package Contents</h2>

The package contains the following directories and files:

```html
package.json
CHANGELOG.md
README.md
/dist
  └───/hook
      └───index.js - 2 KB
  └───index.js - 1.08 KB
  └───Scroll.js - 5.12 KB
````

<h2>Dependencies</h2>

<code>scrolled-to-edge</code> does not have any dependencies. However, it does make use of React Hooks so it does have a peer dependency of <code>"react": ">=16.8.0"</code>.