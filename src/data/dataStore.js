export const settings = {
  columnCreatorText: 'Add new column',
  cardCreatorText: 'Add new card',
  creator: {
    buttonOK: 'OK',
    buttonCancel: 'Cancel',
    defaultText: 'Add new item',
  },
  search: {
    defaultText: 'Search...',
    icon: 'search',
  },
  defaultListDescription: '<p>I can do all the things!!!</p>',
  defaultColumnIcon: 'list-alt',
  FAQ: {
    title: 'FAQ',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
  Info: {
    title: 'Info',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
  },
};

export const pageContents = {
  title: 'My first React app',
  subtitle: 'A simple to-do app, with lists, columns and cards',
};

export const listData = {
  title: 'Things to do <sup>soon!</sup>',
  description: 'Interesting things I want to check out!',
  image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  columns: [
    {
      key: 0,
      title: 'Books',
      icon: 'book',
      cards: [
        {
          key: 0,
          title: 'This Is Going to Hurt',
        },
        {
          key: 1,
          title: 'Interpreter of Maladies',
        },
      ],
    },
    {
      key: 1,
      title: 'Movies',
      icon: 'film',
      cards: [
        {
          key: 0,
          title: 'Harry Potter',
        },
        {
          key: 1,
          title: 'Star Wars',
        },
      ],
    },
    {
      key: 2,
      title: 'Games',
      icon: 'gamepad',
      cards: [
        {
          key: 0,
          title: 'The Witcher',
        },
        {
          key: 1,
          title: 'Skyrim',
        },
      ],
    },
  ],
};

const lists = [
  {
    id: 'list-1',
    title: 'Things to do <sup>soon!</sup>',
    description: 'Interesting things I want to check out!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-2',
    title: 'Things to do <sup>later!</sup>',
    description: 'Beautiful places I want to visit!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
  {
    id: 'list-3',
    title: 'Things to do <sup>in the future!</sup>',
    description: 'Long-term personal vision!',
    image: 'http://uploads.kodilla.com/bootcamp/fer/11.react/space.png',
  },
];

const columns = [
  {
    id: 'column-1',
    listId: 'list-1',
    title: 'Books',
    icon: 'book',
  },
  {
    id: 'column-2',
    listId: 'list-1',
    title: 'Movies',
    icon: 'film',
  },
  {
    id: 'column-3',
    listId: 'list-1',
    title: 'Games',
    icon: 'gamepad',
  },
  {
    id: 'column-4',
    listId: 'list-2',
    title: 'Lakes',
    icon: 'water',
  },
  {
    id: 'column-5',
    listId: 'list-2',
    title: 'Pools',
    icon: 'swimming-pool',
  },
];

const cards = [
  {
    id: 'card-1',
    listId: 'list-1',
    columnId: 'column-1',
    title: 'This Is Going to Hurt',
  },
  {
    id: 'card-2',
    listId: 'list-1',
    columnId: 'column-1',
    title: 'Interpreter of Maladies',
  },
  {
    id: 'card-3',
    listId: 'list-1',
    columnId: 'column-2',
    title: 'Harry Potter',
  },
  {
    id: 'card-4',
    listId: 'list-1',
    columnId: 'column-2',
    title: 'Star Wars',
  },
  {
    id: 'card-5',
    listId: 'list-1',
    columnId: 'column-3',
    title: 'The Witcher',
  },
  {
    id: 'card-6',
    listId: 'list-1',
    columnId: 'column-3',
    title: 'Skyrim',
  },
  {
    id: 'card-7',
    listId: 'list-2',
    columnId: 'column-4',
    title: 'Plitvice Lakes National Park, Croatia',
  },
  {
    id: 'card-8',
    listId: 'list-2',
    columnId: 'column-4',
    title: 'Carrera Lake (Lake Buenos Aires), Santa Cruz, Argentina',
  },
  {
    id: 'card-9',
    listId: 'list-2',
    columnId: 'column-5',
    title: 'Natural Pool - Santorini, Greece',
  },
];

const initialStoreData = {
  app: { ...pageContents },
  lists: [...lists],
  columns: [...columns],
  cards: [...cards],
};

export default initialStoreData;
