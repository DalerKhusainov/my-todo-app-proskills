import { v4 as uuid } from "uuid";

const todos = [
  {
    id: uuid(),
    todoTitle: "Basics HTML",
    todoTopic: "emmet, forms, sematic html, seo basics",
    complete: true,
    date: "01.01.2024",
  },
  {
    id: uuid(),
    todoTitle: "Basics CSS",
    todoTopic:
      "selectors, positioning, box model, display, specifity, flexbox, grid, media queries, pseudo elements, pseudo classes and animations",
    complete: true,
    date: "01.01.2024",
  },
  {
    id: uuid(),
    todoTitle: "Basics JavaScript",
    todoTopic:
      "basic syntax, dom manipulation, fetch api / ajax, async wait, event listeners, es6+ JavaScript, promises, classes, array methods, scoping, hoisting and closures",
    complete: true,
    date: "01.01.2024",
  },
  {
    id: uuid(),
    todoTitle: "CSS Framework",
    todoTopic: "bootstrap or tailwind",
    complete: false,
    date: "01.01.2024",
  },
  {
    id: uuid(),
    todoTitle: "CSS Preprocessor",
    todoTopic: "sass / scss",
    complete: false,
    date: "01.01.2024",
  },
  {
    id: uuid(),
    todoTitle: "Version Control System",
    todoTopic: "git and github",
    complete: false,
    date: "01.01.2024",
  },
  {
    id: uuid(),
    todoTitle: "Package Managers",
    todoTopic: "npm and yarn",
    complete: false,
    date: "01.01.2024",
  },
  {
    id: uuid(),
    todoTitle: "JavaScript Frameworks / Library",
    todoTopic: "React.js, angular.js or vue.js",
    complete: false,
    date: "01.01.2024",
  },

  {
    id: uuid(),
    todoTitle: "Basic React",
    todoTopic:
      "Components, JSX, Props, State, Events and Conditional Rendering",
    complete: false,
    date: "01.01.2024",
  },
  {
    id: uuid(),
    todoTitle: "React Hooks",
    todoTopic:
      "useState, useEffect, useContext, useMemo, useRef, useReducer, and useCallback",
    complete: false,
    date: "01.01.2024",
  },
  {
    id: uuid(),
    todoTitle: "React UI Frameworks",
    todoTopic: "Material UI, Ant Design and Chakra UI",
    complete: false,
    date: "01.01.2024",
  },
  {
    id: uuid(),
    todoTitle: "React Packages",
    todoTopic:
      "React Router, React Query, Axios, React Hook Form, Styled Components, Storybook and Framer Motion",
    complete: false,
    date: "01.01.2024",
  },
  {
    id: uuid(),
    todoTitle: "Routing + React Router",
    todoTopic: "BrowserRouter, Route, Routes",
    complete: false,
    date: "01.01.2024",
  },
  {
    id: uuid(),
    todoTitle: "React State Management",
    todoTopic: "Redux and hookstate",
    complete: false,
    date: "01.01.2024",
  },
  {
    id: uuid(),
    todoTitle: "After React",
    todoTopic: "Next JS, TypeScript, Gatsby and React Native",
    complete: false,
    date: "01.01.2024",
  },
  {
    id: uuid(),
    todoTitle: "Next.js",
    todoTopic:
      "Static Site Generation, Server Side Rendering, Dynamic Pages, Lazy loading Modules, CSS / SASS Modules and API Routes",
    complete: false,
    date: "01.01.2024",
  },
  {
    id: uuid(),
    todoTitle: "React Test Frameworks",
    todoTopic: "Jest and Testing Library",
    complete: false,
    date: "01.01.2024",
  },
  {
    id: uuid(),
    todoTitle: "Deploy your websites",
    todoTopic: "netlify, vercel, firebase, github pages, heroku or render",
    complete: false,
    date: "01.01.2024",
  },
  {
    id: uuid(),
    todoTitle: "Other important topics should know",
    todoTopic:
      "pwa, web sockets, cors, json, restful api, graphql api, basic security and web accessibility",
    complete: false,
    date: "01.01.2024",
  },
  {
    id: uuid(),
    todoTitle: "Optional Thing to Learn",
    todoTopic: "webpack, parcel, snowpack, rollup.js and gulp",
    complete: false,
    date: "01.01.2024",
  },
];

export default todos;
