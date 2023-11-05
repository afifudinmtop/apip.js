// apip.js

// This is the 'apip' equivalent of React's 'createElement' function
function apip(type, props, ...children) {
    if (typeof type === "function") {
      // If the type is a functional component, then call it
      return type(props, ...children);
    }
  
    // Create the DOM element
    const element = document.createElement(type);
  
    // Assign properties to the element
    Object.keys(props || {}).forEach(propName => {
      const propValue = props[propName];
      if (propName.startsWith("on") && propName.toLowerCase() in window) {
        // Handle event listeners
        element.addEventListener(propName.toLowerCase().substring(2), propValue);
      } else if (propName === "style" && typeof value === 'object') {
        // Handle styles
        Object.assign(element.style, propValue);
      } else if (propName in element) {
        // Handle normal attributes
        element[propName] = propValue;
      } else {
        // Set the attribute on the element
        element.setAttribute(propName, propValue.toString());
      }
    });
  
    // Handle children
    children.flat().forEach(child => {
      if (typeof child === 'string') {
        // Handle text nodes
        element.appendChild(document.createTextNode(child));
      } else if (child instanceof Node) {
        // Handle DOM nodes
        element.appendChild(child);
      } else if (Array.isArray(child)) {
        // Handle nested children
        child.forEach(nestedChild => {
          if (typeof nestedChild === 'string') {
            element.appendChild(document.createTextNode(nestedChild));
          } else if (nestedChild instanceof Node) {
            element.appendChild(nestedChild);
          }
        });
      }
    });
  
    // Return the created element
    return element;
  }
  
  // This is the 'apip' equivalent of React's 'render' function
  function render(vnode, container) {
    // If the VNode is a text node
    if (typeof vnode === 'string' || typeof vnode === 'number') {
      container.appendChild(document.createTextNode(vnode));
    } else {
      // Append the element to the container
      container.appendChild(vnode);
    }
  }
  
  // Expose the 'apip' and 'render' functions globally
  window.apip = { createElement: apip, render: render };
  