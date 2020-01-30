import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    picture:
      "https://recipe1.ezmember.co.kr/cache/recipe/2015/04/02/238f0a3e8b567db1229b0f27220033341.jpg",
    rating: 3.2
  },
  {
    id: 2,
    name: "doncasu",
    picture:
      "https://www.nadrifood.co.kr/wp-content/uploads/2018/06/nadri_pro_don_05.jpg",
    rating: 4.9
  },
  {
    id: 3,
    name: "ramen",
    picture:
      "https://w.namu.la/s/9f15f198aab1b14c8aa47e96a91a9d03331ecb7b5b892c803159d39b0d77ab4be30e2f15f66191284d7dad8371989329cc1c80810745e980a6949ae5e3589df66c38f7ca109728914c668c37eaa50b119ac32adf5bce5adebabba306e5cb1aa0",
    rating: 5.0
  }
];

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} width="300px" alt={name} />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div className="App">
      <h1>Hello!!!</h1>
      {foodILike.map(dish => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.picture}
          rating={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
