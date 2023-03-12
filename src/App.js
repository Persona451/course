import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Total from './components/Total/Total';

function App() {
  const course = "IT-RUN React Web Dev"
  const part1 = "Вводный курс по React"
  const task1 = 7
  const part2 = "Состояние компонента"
  const task2 = 10
  const part3 = "Декомпозиция компонентов"
  const task3 = 5
  return (
    <div>
      <Header course = {course}/>
      <Content
      part1 = {part1} task1 = {task1}
      part2 = {part2} task2 = {task2}
      part3 = {part3} task3 = {task3}
      />
      <Total task1 = {task1} task2 = {task2} task3 = {task3} />
    </div>
  );
}

export default App;
