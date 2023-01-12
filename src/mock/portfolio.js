import uuid from 'react-uuid';

const allProjects = [
  {
    id: uuid(),
    title: 'Konnect Networks ( Backend-engineer )',
    image: 'konnect.png',
    demo: 'https://konnect.network/',
  },
  {
    id: uuid(),
    title: 'Edorer ( Full stack-engineer )',
    image: 'edorer.png',
    demo: 'https://edorer.com/',
  },
  {
    id: uuid(),
    title: 'Baid hunt ( Full stack-engineer )',
    image: 'bairdhunt.png',
    demo: 'https://bairdhunt.com/',
  },
  {
    id: uuid(),
    title: 'Tik Tac Toe',
    image: 'tic-tac-toe.png',
    github:
      'https://github.com/97Fakhreddine/97Fakhreddine-ticTacToe.github.io',
    demo: 'https://97fakhreddine.github.io/97Fakhreddine-ticTacToe.github.io/',
  },
  {
    id: uuid(),
    title: 'Bounce Ball ( Flappy bird V1 )',
    image: 'flappybird.png',
    github: 'https://github.com/97Fakhreddine/Flappy-bird.github.io',
    demo: 'https://97fakhreddine.github.io/Flappy-bird.github.io/',
  },
  {
    id: uuid(),
    title: 'TypeScript React App quiz',
    image: 'react-quizz.png',
    github: 'https://github.com/97Fakhreddine/typeScript-React-Quizz-App',
    demo: 'https://typescript-react-quiz-app.netlify.app',
  },
];

export default allProjects;
