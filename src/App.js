
import './App.css';
import Navbar from './components/Navbar';
import { Outlet, Route, Routes } from 'react-router-dom';
import Dryfruitsweet from './Pages/Dryfruitsweet';
import ThumbnailSlideShow from './ThumbailSlideShow';
import ThumbnailCard from './ThumbnailCard';
import { snacks, snacksdata, sweets } from './components/data/snacks-data';
import { slideshowData } from './components/data/slideshow-data';
import { Categories } from './components/Categories';
import CategoriesTab from './components/CateogoriesTab';
import DescriptionPage from './components/DescriptionPage';
import SnackFilter from './components/SnackFliter';
import Snacks from './components/Snacks';
import Sweets from './components/Sweets';
import Resume1 from './components/ResumeK1';
import ResumeK1 from './components/ResumeK1';
import ResumeK2 from './components/ResumeK2';
import { ResumeK3 } from './components/ResumeK3';
import { dummydata } from './components/data/dummy-data';
import { ResumeK4 } from './components/ResumeK4';
import { ResumeK5 } from './components/ResumeK5';
import { ResumeK6 } from './components/ResumeK6';
import ResumeK7 from './components/ResumeK7';
import { ResumeK8 } from './components/ResumeK8';
import { Resumek9 } from './components/Resumek9';


const items =[ 'snacks']
function App() {
  return (
   <>
      {/* <Navbar pages={items}/> */}
   <Routes>
    <Route path='DryFruitSweet' element={<Dryfruitsweet/>}/>
    <Route  path='/SnackCard' element={<DescriptionPage/>} />
    <Route  path='/Snacks' element={<Snacks/>} />
    <Route  path='/Sweets' element={<Sweets/>} />
    <Route  path='/Cake' element={<Snacks/>} />
   </Routes>
   
{/* <ThumbnailSlideShow data={slideshowData}/> */}
{/* <br/> */}
{/* <Categories /> */}
{/* <CategoriesTab/> */}
{/* <ThumbnailCard  data ={snacksdata} title="Dryfruitsweet"/> */}
{/* <ThumbnailCard  data ={snacks} title="snacks"/> */}
{/* <ThumbnailCard  data ={sweets} title="sweets"/> */}
{/* <DescriptionPage/> */}
{/* <SnackFilter/> */}
{/* <ResumeK1 /> */}
{/* <ResumeK2/> */}
{/* <ResumeK3 /> */}
{/* <ResumeK4/> */}
{/* <ResumeK5/> */}
{/* <ResumeK6/> */}
{/* <ResumeK7/> */}
{/* <ResumeK8/> */}
{/* <Resumek9/> */}

   </>
  );
}

export default App;
