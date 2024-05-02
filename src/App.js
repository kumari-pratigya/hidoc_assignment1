import './App.css';
import Header from './component/header/Header';
import Banner from './component/banner/Banner';
import Description from './component/description/Description';
import DrugDetails from './component/drugsDetails/DrugDetails';
import ExploreMore from './component/exploreMore/ExploreMore';
import Footer from './component/footer/Footer';
function App() {
  return (
    <div className="App">
     <Header/>
     <Banner/>
     <Description/>
     <DrugDetails/>
     <ExploreMore/>
     <Footer/>
    </div>
  );
}

export default App;
