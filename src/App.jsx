
import Portfolio from './Container/Portfolio'
import {BrowserRouter,Routes ,Route} from 'react-router-dom'
import Landing from './Container/Landing'
import About from './Container/About'
import Contact from './Container/Contact'
import Navbar from './Container/Navbar'


const App = () => {
  return (
    <div>
      <BrowserRouter>
  <Navbar/>
      <Routes>
        <Route path='/' element={<Portfolio/>}></Route>
        <Route path='/Landing' element={<Landing/>}></Route>
        <Route path='/About' element={<About/>}></Route>
        <Route path='/Contact' element={<Contact/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App







// import box1 from '../src/assets/box10.jpg'
// import box2 from '../src/assets/box11.jpg'
// import box3 from '../src/assets/box12.jpg'
// import box4 from '../src/assets/box13.jpg'
// import box5 from '../src/assets/box14.jpg'


// const Navbar = () => {
//   const images =[
//     {id:1,src :box1},
//     {id:2,src :box2},
//     {id:3,src :box3},
//     {id:4,src :box4},
//     {id:5,src :box5},
//     {id:6,src :box5},
//   ]


// // <div className='md:grid md:grid-cols-2 py-10 my-12 p-28 '>
//    for image  

// // {images.map(item => (
// //    <div key={item.id}>
// //    <img src={item.src} className='my-10' />
// //  </div>
// // ))}
// // </div>

// for Icon
// src ko p tag my rakhy gy



{/* <div className='min-h-screen '>
<button className='border-2 bg-slate-100' onClick={()=>setTab("tab1")}>one</button>
<button className='border-2 bg-slate-100' onClick={()=>setTab("tab2")}>two</button>
<button className='border-2 bg-slate-100' onClick={()=>setTab("tab3")}>three</button>
<div className='h-[200px] p-10 border-2 rounded-lg mt-10'>
  {tab === "tab1" &&(
    <div>
      <h1>funny</h1>
    </div>
  )}
 {tab === "tab2" && (
  <div>
    <h2>asi tenu vekh k kosh a</h2>
  </div>
 )}
 {tab === "tab3" && (
  <div>
    <h1>happy</h1>
  </div>
 )}
</div>
</div> */}





