import { render, screen, cleanup} from '@testing-library/react';
import Todo from '../todo';
import renderer from 'react-test-renderer';

afterEach(() => {
	cleanup();
})

test('should render non completed todo Component' ,() => {
	const todo = {
		id: 1,
		title: 'Make Dinner',
		completed: false
	      }
	render(<Todo todo={todo}/>);
	const todoElemnet = screen.getByTestId('todo-1');
	expect(todoElemnet).toBeInTheDocument();
	expect(todoElemnet).toHaveTextContent('Make Dinner');
})

test('should render completed todo Component' ,() => {
	const todo = {
		id: 2,
		title: 'Wash Dishes',
		completed: true
	      }
	render(<Todo todo={todo}/>);
	const todoElemnet = screen.getByTestId('todo-2');
	expect(todoElemnet).toBeInTheDocument();
	expect(todoElemnet).toHaveTextContent('Wash Dishes');
})

test('snapshot testing', () => {
	const todo = {
		id: 2,
		title: 'Wash Dishes',
		completed: true
	}
	const tree = renderer.create(<Todo todo={todo} />).toJSON()
	expect(tree).toMatchSnapshot();
})



