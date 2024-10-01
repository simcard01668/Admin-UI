import Home from './pages/home/Home'
import List from './pages/list/List'
import Login from './pages/login/Login'
import { BrowserRouter as Router, Route, Switch, BrowserRouter } from 'react-router-dom'

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path='list' element={<List />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
