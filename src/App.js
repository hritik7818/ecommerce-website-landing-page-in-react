import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TopItems from './components/TopItems';
import ItemGalary from './components/ItemGalary';
import Carosuel from './components/Carosuel';
import Footer from './components/Footer';

function App() {
  const itemsData1 = {
    title: "Men Footwear",
    images: ["https://source.unsplash.com/1600x900/?laptops", "https://source.unsplash.com/1600x900/?glasses", "https://source.unsplash.com/1600x900/?mobiles", "https://source.unsplash.com/1600x900/?cricket,bat", "https://source.unsplash.com/1600x900/?ball", "https://source.unsplash.com/1600x900/?cloths", "https://source.unsplash.com/1600x900/?televisions"],
    productNames: ["product1", "product2", "product3", "product4", "product5", "product6", "product6"],
    offers: ["offer1", "offer2", "offer3", "offer4", "offer5", "offer6", "offer7"],
    desp: ["desp1", "desp2", "desp3", "desp4", "desp5", "desp6", "desp7"]
  };
  const itemsData2 = {
    title: "Top Offers On",
    images: ["https://source.unsplash.com/1600x900/?shop", "https://source.unsplash.com/1600x900/?ecommerce,shopping", "https://source.unsplash.com/1600x900/?ecommerce", "https://source.unsplash.com/1600x900/?shoes", "https://source.unsplash.com/1600x900/?watches", "https://source.unsplash.com/1600x900/?bulb", "https://source.unsplash.com/1600x900/?books"],
    productNames: ["product1", "product2", "product3", "product4", "product5", "product6", "product6"],
    offers: ["offer1", "offer2", "offer3", "offer4", "offer5", "offer6", "offer7"],
    desp: ["desp1", "desp2", "desp3", "desp4", "desp5", "desp6", "desp7"]
  };
  const itemsData3 = {
    title: "Top Rated Appliances For You",
    images: ["https://source.unsplash.com/1600x900/?laptops", "https://source.unsplash.com/1600x900/?glasses", "https://source.unsplash.com/1600x900/?mobiles", "https://source.unsplash.com/1600x900/?cricket,bat", "https://source.unsplash.com/1600x900/?ball", "https://source.unsplash.com/1600x900/?cloths", "https://source.unsplash.com/1600x900/?televisions"],
    productNames: ["product1", "product2", "product3", "product4", "product5", "product6", "product6"],
    offers: ["offer1", "offer2", "offer3", "offer4", "offer5", "offer6", "offer7"],
    desp: ["desp1", "desp2", "desp3", "desp4", "desp5", "desp6", "desp7"]
  };
  const itemsData4 = {
    title: "Home Makeover",
    images: ["https://source.unsplash.com/1600x900/?shop", "https://source.unsplash.com/1600x900/?ecommerce,shopping", "https://source.unsplash.com/1600x900/?ecommerce", "https://source.unsplash.com/1600x900/?shoes", "https://source.unsplash.com/1600x900/?watches", "https://source.unsplash.com/1600x900/?bulb", "https://source.unsplash.com/1600x900/?books"],
    productNames: ["product1", "product2", "product3", "product4", "product5", "product6", "product6"],
    offers: ["offer1", "offer2", "offer3", "offer4", "offer5", "offer6", "offer7"],
    desp: ["desp1", "desp2", "desp3", "desp4", "desp5", "desp6", "desp7"]
  };
  return (
    <div className="bg-[#F1F3F6]">
      <Navbar />
      <TopItems />
      <Carosuel />
      <ItemGalary productDetails={itemsData1} />
      <ItemGalary productDetails={itemsData2} />
      <ItemGalary productDetails={itemsData3} />
      <ItemGalary productDetails={itemsData4} />
      <Footer />

    </div>
  );
}

export default App;
