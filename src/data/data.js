import { v4 as uuid } from "uuid";

const todos = [
  {
    id: uuid(),
    todoTitle: "Basic in React",
    todoTopic:
      "Components, JSX, Props, State, Events and Conditional Rendering",
    complete: false,
    date: "20.04.2023",
  },
  {
    id: uuid(),
    todoTitle: "React hooks",
    todoTopic:
      "useState, useEffect, useContext, useMemo, useRef, useReducer,  and useCallback",
    complete: false,
    date: "25.04.2023",
  },
  {
    id: uuid(),
    todoTitle: "React UI Frameworks",
    todoTopic: "Material UI, Ant Design and Chakra UI",
    complete: false,
    date: "15.05.2023",
  },
  {
    id: uuid(),
    todoTitle: "React packages",
    todoTopic:
      "React Router, React Query, Axios, React Hook Form, Styled Components, Storybook and Framer Motion",
    complete: false,
    date: "20.07.2023",
  },
  {
    id: uuid(),
    todoTitle: "React Routers",
    todoTopic: "BrowserRouter, Router, Routers",
    complete: false,
    date: "20.05.2023",
  },
  {
    id: uuid(),
    todoTitle: "React State Management",
    todoTopic: "Redux and hookstate",
    complete: false,
    date: "22.05.2023",
  },
  {
    id: uuid(),
    todoTitle: "After learning React",
    todoTopic: "Next JS, TypeScript, Gatsby and React Native",
    complete: false,
    date: "28.08.2023",
  },
  {
    id: uuid(),
    todoTitle: "Next.js",
    todoTopic:
      "Static Site Generation, Server Side Rendering, Dynamic Pages, Lazy loading Modules, CSS / SASS Modules and API Routes",
    complete: false,
    date: "14.08.2023",
  },
  {
    id: uuid(),
    todoTitle: "React test frameworks",
    todoTopic: "Jest and Testing Library",
    complete: false,
    date: "10.07.2023",
  },
];

export default todos;
