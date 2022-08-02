function Drawer(props) {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="d-flex justify-between mb-30">
          Корзина
          <img
            className="remove-btn cu-p"
            src="img/btn-remove.svg"
            alt="remove"
            onClick={props.onClose}
          />
        </h2>
        <div className="items">
          <div className="cart-item d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(img/sneakers/1.jpg)" }}
              className="cart-item-img"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="remove-btn" src="img/btn-remove.svg" alt="remove" />
          </div>
          <div className="cart-item d-flex align-center mb-20">
            <div
              style={{ backgroundImage: "url(img/sneakers/1.jpg)" }}
              className="cart-item-img"
            ></div>
            <div className="mr-20 flex">
              <p className="mb-5">Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img className="remove-btn" src="img/btn-remove.svg" alt="remove" />
          </div>
        </div>
        <div className="cart-total-block">
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21 498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ
            <img src="img/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
