// import Contact from "./component/Contact"


import './App.css'
import Contact from './component/Contact'
import Content from './component/Content'
function App() {
  return (
   
    <div className="container  bg-blue-700"> 
      <div className='flex mx-auto shadow-lg shadow-black p-10 justify-center items-center'>
        <div className="contact"> <Contact/> </div>
        <div className="content"> <Content/></div>
      </div>
      
    </div>
  )
}

export default App