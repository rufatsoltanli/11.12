import React, { useEffect, useState } from 'react'
import "./style.scss"
import Sliders from '../../Components/slider'


function HomePage() {

  const [apiData, setApiData] = useState([])

  useEffect(() => {
    fetch("https://6573ac96f941bda3f2af125e.mockapi.io/juan-store/api/v1/products")
      .then(res => res.json())
      .then(data => setApiData(data))

  }, [])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <>
      <section id='homePage'>
        <div className="banner">
        </div>
        <div className="trendCont ">
          <div className="trendCard clothes ">
            <h1>Clothes</h1>
            <h4>Winter 2023-2024</h4>
            <div className="hoverCard">
              <h1>Clothes</h1>
              <h4>Winter 2023-2024</h4>
              <div className="text">
                <span>
                  SHOP NOW
                </span>
              </div>
            </div>
          </div>
          <div className="trendCard watch">
            <h1>Accessories</h1>
            <h4>Winter 2023-2024</h4>
            <div className="hoverCard">
              <h1>Accessories</h1>
              <h4>Winter 2023-2024</h4>
              <div className="text">
                <span>
                  SHOP NOW
                </span>
              </div>
            </div>
          </div>
          <div className="trendCard pourHomme">
            <h1>Pour hommes</h1>
            <h4>Winter 2023-2024</h4>
            <div className="hoverCard">
              <h1>Pour hommes</h1>
              <h4>Winter 2023-2024</h4>
              <div className="text">
                <span>
                  SHOP NOW
                </span>
              </div>
            </div>
          </div>
        </div>
        <section id='products'>
          <div className="productsFilter">
            <div className="text"></div>
            <div className="filterCont"></div>
          </div>
          <div className="cardCont">
            {apiData && apiData.map((x) => (
              <>
                <div className="card" key={x.id}>
                  <div className="img">
                    <img src={x.images} alt="" />
                    <div className="hoverCard"></div>
                  </div>
                  <div className="nameIcons">
                    <div className="name">{x.name}</div>
                    <div className="icons"></div>
                  </div>
                  <div className="price">${x.price}</div>
                </div>
              </>
            ))}
          </div>
        </section>
      </section>
    </>)
}

export default HomePage