import './App.css';
import Header from './component/Header';
import { Tasks } from './component/Tasks';
function App() {
 return (
 <div className='container'>
 <Header title={'Bhavya'} />
 <Tasks />
 </div>
 );
}
export default App;