const initalState = {
  something: "don't look at me",
  users: [
    {
      name: 'Carter Childs',
      age: 21,
      catchPhrase: 'Yo',
    },
    {
      name: 'Ben',
      age: 30,
      catchPhrase: 'Howdy',
    },
    {
      name: 'Quagmire',
      age: 42,
      catchPhrase: 'giggity giggity',
    },
    {
      name: 'cthulhu',
      age: 9999,
      catchPhrase: 'HE COMES',
    },
    {
      name: 'robert',
      age: 10,
      catchPhrase: 'HEY HEY HEY',
    },
    {
      name: 'scott',
      age: 48,
      catchPhrase: 'wazzzah',
    },
    {
      name: 'jesse',
      age: 29,
      catchPhrase: 'sometimes the toughest opponent is yourself.',
    },
  ],
};

const ADD_PERSON = 'ADD_PERSON';
const DELETE_PERSON = 'DELETE_PERSON';

export default function reducer(state = initalState, action) {
  console.log(action);
  switch (action.type) {
    case DELETE_PERSON:
      const newPeople = state.users.filter(e => e.name !== action.payload.name);
      return Object.assign({}, state, { users: newPeople });
    case ADD_PERSON:
      return Object.assign({}, state, { users: [...state.users, action.payload] });
    default:
      return state;
  }
}

export function deletePerson(person) {
  return {
    type: DELETE_PERSON,
    payload: person,
  };
}

export function addPerson(person) {
  console.log(person);
  return {
    type: ADD_PERSON,
    payload: person,
  };
}
