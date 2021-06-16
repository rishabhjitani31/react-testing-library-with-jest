const Todo = ({todo}) => {
	const {id, title, completed} = todo;
	const h1 = <h1>u{title}</h1>;
	const display = completed ? <strike>{h1}</strike> : h1
	return <div data-testid={`todo-${id}`}>{display}</div>
}

export default Todo;