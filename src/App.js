import Header from "./components/Header";
import Drawer from "./components/Drawer";
import Card from "./components/Card";
import React from "react";

function App() {
  const [items, setItems] = React.useState([]);
  const [isCartOpened, setIsCartOpened] = React.useState(false);

  React.useEffect(() => {
    fetch("https://62e90d10249bb1284eb93992.mockapi.io/items")
    .then((res) => res.json())
    .then((items) => setItems(items));
  }, []);

  return (
    <div className="wrapper clear">
      {isCartOpened && <Drawer onClose={() => setIsCartOpened(false)} />}
      <Header onClickCart={() => setIsCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="img/search.svg" alt="search" />
            <input placeholder="Поиск..." />
          </div>
        </div>

        <div className="d-flex flex-wrap">
          {items.map((x) => (
            <Card
              title={x.title}
              imageUrl={x.imageUrl}
              price={x.price}
              onFavourite={() => ""}
              onPlus={() => ""}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
