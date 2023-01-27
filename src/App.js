import { useState } from "react";
import { Container } from "react-bootstrap";
import "./App.css";
import Categories from "./component/Categories/Categories";
import Header from "./component/Header/Header";
import ItemList from "./component/ItemList/ItemList";
import NavBar from "./component/NavBar/NavBar";
import { items } from "./Data";

function App() {
  const [itemData, setItemData] = useState(items);

  //get category .. uniqe
  const allCat = ["All", ...new Set(items.map((i) => i.category))];

  // Filter by category
  const felterCategory = (cat) => {
    if (cat === "All") {
      setItemData(items);
    } else {
      const newArray = items.filter((f) => f.category === cat);
      setItemData(newArray);
    }
  };

  // Filter by search
  const searchFun = (word) => {
   
    if (word !== "") {
      const newArray = items.filter((f) => f.title === word);
      setItemData(newArray);
      
    }
  };
  return (
    <div className="App  ">
      <NavBar search={searchFun} />
      <Container>
        <Header />
        <Categories FilterCat={felterCategory} AllCategory={allCat} />
        <ItemList itData={itemData} />
      </Container>
    </div>
  );
}

export default App;
