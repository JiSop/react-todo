# react-todo

step by step으로 react-todo-app 만들어 보기

- [**react-todo-v1-class**](https://github.com/JiSop/react-todo/tree/version/react-todo-v1-class): Class 버전
- [**react-todo-v1-hook**](https://github.com/JiSop/react-todo/tree/version/react-todo-v1-hook): Hook 버전
- [**react-todo-v2-class**](https://github.com/JiSop/react-todo/tree/version/react-todo-v2-class): Class 컨포넌트 분리
- [**react-todo-v2-hook**](https://github.com/JiSop/react-todo/tree/version/react-todo-v2-hook): Hook 컴포넌트 분리
- [**react-todo-v3-hook-context**](https://github.com/JiSop/react-todo/tree/version/react-todo-v3-hook-context): contextAPI 적용, 최적화 작업
- [**react-todo-v4-hook-redux**](https://github.com/JiSop/react-todo/tree/version/react-todo-v4-hook-redux): redux 적용

## 최적화 비교

Todo list item 2499개 중 아이템 하나의 체크박스 토글링 했을때 반영되는 시간으로 테스트

**최적화 전**

- TodosProvider: 725.60 ms
- TodoList: 714.52 ms

**useCallback, memo 적용**

useCallback을 사용해도 성능상 차이를 못느껴서 천천히 살펴보니 기존 코드에서

```javascript
const { state, action } = useContext( TodosContext );

const genCompletedTodos = useCallback(() => {
    return todos.filter( todo => todo.completed === true ).length;
  }, [ state.todos ] );

  const chkAllCompletedTodos = useCallback(e => {
    setTodos( todos => todos.map( todo => ( { ...todo, completed: e.target.checked } ) ) );
  }, [ action.setTodos ]);
```

useContext를 사용해서 값이나 함수를 받아올때 아래와 같이 다시 구조분해 할당을 해줘야 했다.

 ```javascript
const { state, action } = useContext( TodosContext );
const { setTodos } = action;
const { todos } = state;

const genCompletedTodos = useCallback(() => {
    return todos.filter( todo => todo.completed === true ).length;
  }, [ todos ] );

  const chkAllCompletedTodos = useCallback(e => {
    setTodos( todos => todos.map( todo => ( { ...todo, completed: e.target.checked } ) ) );
  }, [ setTodos ]);
 ```

**위와 같이 적용 후**

- TodosProvider: 126.55 ms
- TodoList: 114.81 ms

여러번 테스트를 해보지 않았지만 대략적으로 5배 이상 빨라졌다. 세상에나!

- TodosProvider: 537.10 ms -> **126.55 ms**
- TodoList: 532.25 ms -> **114.81 ms**