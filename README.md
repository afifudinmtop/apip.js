<p align="center">
  <img src="logo.png" alt="apip.js logo" width="200" />
</p>

<h1 align="center">apip.js - A Minimalistic JSX-DOM Renderer</h1>

## Description

`apip.js` is a minimalistic JavaScript library designed for rendering UI components using JSX syntax without the overhead of React. It provides a straightforward and lightweight approach to create DOM elements and manage UI rendering, offering an alternative for those who wish to leverage the expressive power of JSX for small projects or for learning purposes. With `apip.js`, you can define components, handle events, and update the DOM, all within a lean and intuitive API.

## Features

- **JSX syntax**: Write your UI code in a declarative syntax that's comfortable and familiar.
- **No virtual DOM**: Directly manipulate the DOM for fine control and less overhead.
- **Component-based**: Encapsulate UI logic and state in reusable components.
- **Event handling**: Attach events in a straightforward manner with JSX.
- **Lightweight**: No heavy dependencies, making it ideal for small to medium-sized projects.

## Getting Started

To get started with `apip.js`, you can include it in your HTML file directly:

```html
<script src="./apip.min.js"></script>
<script src="https://unpkg.com/@babel/standalone"></script>
```

## Usage

Here's a quick example to show how you might use apip.js:

```
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Your App</title>
    <script src="./apip.min.js"></script>
    <script src="https://unpkg.com/@babel/standalone"></script>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/babel">
      /** @jsx apip.createElement */

      function Header() {
        return <header className="header">This is the header</header>;
      }

      function App() {
        return (
          <div>
            <Header />
            <main className="main-content">This is the main content</main>
          </div>
        );
      }

      apip.render(<App />, document.getElementById("root"));
    </script>
  </body>
</html>

```

## Documentation

To dive deeper and to learn more about apip.js, check out the example folder.

## Contributing

We welcome contributions to apip.js! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License

apip.js is available under the MIT license. See the LICENSE file for more info.

## Acknowledgments

Thanks to all the contributors who spend time to improve apip.js.
Special thanks to the React team for the inspiration.
