import React, { useState } from "react";

const ProductList = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const products = [
    // Пример товаров
    {
      id: 1,
      title: "Детский кастюм",
      description: "с возраста 1-3",
      price: 2500,
      image: "https://th.bing.com/th/id/OIP.TNe1yN0pexX8H4d8rYkCLAHaHa?rs=1&pid=ImgDetMain",
    },
    {
      id: 2,
      title: "Chrome Hearts",
      description: "с возвраста 14-17",
      price: 7000,
      image: "https://th.bing.com/th/id/OIP.2IApXuv-ettWtusvZMbqiQHaHa?rs=1&pid=ImgDetMain",
    },
    {
      id: 3,
      title: "Худи Chrome Hearts",
      description: "с возвраста 20-24",
      price: 4000,
      image: "https://th.bing.com/th/id/OIP.81uniJLh06X1ffqX_dU7UAHaHa?w=192&h=191&c=7&r=0&o=5&dpr=1.4&pid=1.7",
    },
    {
      id: 4,
      title: "Кеды VS PACE 2.0",
      description: "с возвраста 17-45",
      price: 2400,
      image: "https://basket-12.wbbasket.ru/vol1716/part171620/171620472/images/c516x688/1.webp",
    },
    {
      id: 5,
      title: "Лонгслив белый футболка",
      description: "с возвраста 18-34",
      price: 9000,
      image: "https://basket-01.wbbasket.ru/vol134/part13458/13458162/images/c246x328/1.webp",
    },
    {
      id: 6,
      title: "Спортивные шорты",
      description: "с возвраста 18-20",
      price: 6700,
      image: "https://basket-15.wbbasket.ru/vol2248/part224854/224854630/images/c246x328/1.webp",
    },
    {
      id: 7,
      title: "Носки ",
      description: "с возвраста 15-20",
      price: 620,
      image: "https://basket-17.wbbasket.ru/vol2623/part262317/262317606/images/c246x328/1.webp",
    },
    {
      id: 8,
      title: "Лонгслив хлопковый футболка",
      description: "с возвраста 18-34",
      price: 3000,
      image: "https://basket-20.wbbasket.ru/vol3315/part331543/331543311/images/c246x328/1.webp",
    },
  ];

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (indexToRemove) => {
    setCartItems(cartItems.filter((_, index) => index !== indexToRemove));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div id="two">
      <form className="search-box" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          name="search"
          placeholder="Поиск..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit" className="submit">
          🔍
        </button>
      </form>

      <button className="cart-toggle" onClick={toggleCart}>
        🛒
      </button>

      {isCartOpen && (
        <div className="shopping-cart open">
          <h2 className="h2">Моя корзина</h2>
          {cartItems.length === 0 ? (
            <p>Корзина пуста</p>
          ) : (
            cartItems.map((item, index) => (
              <div className="cart-item" key={index}>
                <img src={item.image} alt={item.title} />
                <div className="item-details">
                  <h3>{item.title}</h3>
                  <p>Описание: {item.description}</p>
                  <p>Цена: {item.price}Тг</p>
                </div>
                <button className="remove-btn" onClick={() => removeFromCart(index)}>
                  Удалить
                </button>
              </div>
            ))
          )}
          <div className="cart-total">
            <strong>Итого: {totalPrice}Тг</strong>
          </div>
        </div>
      )}

      <div className="card-container">
        {filteredProducts.map((product) => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <div className="card-content">
              <h3>{product.title}</h3>
              <p className="productclass">{product.description}</p>
              <p className="productclass">Цена: {product.price}Тг</p>
              <button onClick={() => addToCart(product)}>Добавить в корзину</button>
            </div>
          </div>
        ))}
        {filteredProducts.length === 0 && <p>Ничего не найдено</p>}
      </div>
    </div>
  );
};

export default ProductList;
