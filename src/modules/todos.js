const CHANGE_INPUT = 'todos/CHANGE_INPUT';
const INSERT = 'todos/INSERT';
const ACTIVE_TAB = 'todos/ACTIVE_TAB';
const TOGGLE = 'todos/TOGGLE';
const REMOVE = 'todos/REMOVE';
const TOGGLE_ALL = 'todos/TOGGLE_ALL';
const REMOVE_COMPLETED =  'todos/REMOVE_COMPLETED';

let id = 1;

export const insert = content => ({
  type: INSERT,
  todo: {
    id: id++,
    content,
    completed: false
  }
});

export const changeInput = input => ({
  type: CHANGE_INPUT,
  input
});

export const toggle = id => ({
  type: TOGGLE,
  id
});

export const remove = id => ({
  type: REMOVE,
  id
});

export const toggleAll = checked => ({
  type: TOGGLE_ALL,
  checked
});

export const removeCompleted = () => ({
  type: REMOVE_COMPLETED,
});

export const activeTab = tab => ({
  type: ACTIVE_TAB,
  tab
});

const initialState = {
  tabState: 'All',
  input: '',
  todos: []
};

function todos( state = initialState, action ) {
  switch ( action.type ) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat( action.todo )
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map( todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo )
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter( todo => todo.id !== action.id )
      };
    case TOGGLE_ALL:
      return {
        ...state,
        todos: state.todos.map( todo => ( { ...todo, completed: action.checked } ) )
      };
    case REMOVE_COMPLETED:
      return {
        ...state,
        todos: state.todos.filter( todo => todo.completed === false )
      };
    case ACTIVE_TAB:
      return {
        ...state,
        tabState: action.tab
      };
    default:
      return state;
  }
}

export default todos;