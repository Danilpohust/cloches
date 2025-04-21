import React from "react";

const Home = () => {
  return (
    <div id="homeIntroSection">
      <div className="introCard">
        <div className="introImageBox">
          <img
            src="https://th.bing.com/th/id/OIP.RytPlK3FgAoU4towrJOUIQHaLH?rs=1&pid=ImgDetMain"
            alt="Модное фото"
            className="introImage"
          />
        </div>
        <div className="introTextBox">
          <h2 className="introTitle">Добро пожаловать в DanielCloches</h2>
          <p className="introParagraph">
            В мире моды, где тренды меняются стремительно, мы остаёмся островком
            стиля и индивидуальности. <strong>DanielCloches</strong> — это не просто
            магазин, а команда профессионалов, помогающая вам выразить себя через
            одежду.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
