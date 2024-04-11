import "./App.css";
import { Routes , Route} from 'react-router-dom';
import Works from './helpers/Works';
import Blog from './helpers/Blog';
import Contact from './helpers/Contact';
import Home from './Home';
import WorkDetails from './helpers/WorkDetails';
import NotFoundPage from "./helpers/NotFoundPage";

const App = () => {

  return (
    <>
      <div className='container'>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='works' element={<Works/>}/>
      <Route path='blog' element={<Blog/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='works/work__details/:id' element={<WorkDetails/>}/>
      <Route path="*" element={<NotFoundPage/>} />
    </Routes>
      </div>
    </>
  )
}

export default App;