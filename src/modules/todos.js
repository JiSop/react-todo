import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const ACTIVE_TAB = 'todos/ACTIVE_TAB';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';
const TOGGLE_ALL = 'todos/TOGGLE_ALL';
const REMOVE_COMPLETED = 'todos/REMOVE_COMPLETED';

let id = 1;

export const insert = createAction( INSERT, content => ( {
  id: id++,
  content,
  completed: false
} ) );

export const changeInput = createAction( CHANGE_INPUT, input => input );

export const toggle = createAction( TOGGLE, id => id );

export const remove = createAction( REMOVE, id => id );

export const toggleAll = createAction( TOGGLE_ALL, checked => checked );

export const removeCompleted = createAction( REMOVE_COMPLETED );

export const activeTab = createAction( ACTIVE_TAB, tab => tab );

const initialState = {
  tabState: 'All',
  input: '',
  todos: []
};

const todos = handleActions(
  {
    [CHANGE_INPUT]: ( state, { payload: input } ) => ( { ...state, input } ),
    [INSERT]: ( state, { payload: todo } ) => ( {
      ...state,
      todos: state.todos.concat( todo ),
    } ),
    [TOGGLE]: ( state, { payload: id }) => ( {
      ...state,
      todos: state.todos.map( todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo ),
    }),
    [REMOVE]: ( state, { payload: id} ) => ( {
      ...state,
      todos: state.todos.filter( todo => todo.id !== id ),
    }),
    [TOGGLE_ALL]: ( state, { payload: checked }) => ({
      ...state,
      todos: state.todos.map( todo => ( { ...todo, completed: checked } ) ),
    }),
    [REMOVE_COMPLETED]: ( state ) => ( {
      ...state,
      todos: state.todos.filter( todo => todo.completed === false ),
    }),
    [ACTIVE_TAB]: ( state, { payload: tab }) => ( {
      ...state,
      tabState: tab
    }),
  },
  initialState,
);

export default todos;