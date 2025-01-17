import React from 'react'
import classes from "./home.module.css"
import Hero from "./hero/Hero.jsx"
import illustration1 from './assets/male-delivery-guy-riding-scooter.jpg'
import illustration2 from './assets/delivery-location.jpg'
import illustration3 from './assets/deliveryman-with-pizza.jpg'
import Foods from "./foods/Foods.jsx"
import NewSletter from "./newSletter/NewSletter.jsx"

const Home = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Hero />
        <div className={classes.delivery}>
          <div className={classes.titles}>
            <span className={classes.deliverySubtitle}>Delivery</span>
            <h2 className={classes.deliveryTitle}>Always on time for you</h2>
          </div>
          <div className={classes.deliveryInfos}>
            <div className={classes.deliveryInfo}>
              <img src={illustration1} alt="" className={classes.firstImg}/>
              <h3>Our delivery guy is always on time</h3>
            </div>
            <div className={classes.deliveryInfo}>
              <img src={illustration2} alt="" className={classes.secondImg}/>
              <h3>He works very hard</h3>
            </div>
            <div className={classes.deliveryInfo}>
              <img src={illustration3} alt="" className={classes.thirdImg}/>
              <h3>He is friendly and social</h3>
            </div>
          </div>
        </div>
        <Foods />
        <NewSletter />
      </div>
    </div>
  )
}

export default Home