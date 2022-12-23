import React from 'react';
import css from './Hero.module.css';
import {RiShoppingBagFill} from 'react-icons/ri';
import {BsArrowRight} from 'react-icons/bs';
import HeroImg from '../../assets/hero.png';


const Hero = () => {
  return (
    <div className={css.container} >
            {/* {Left side} */}
            <div className={css.h_sides}>
                <span className={css.text1} >skin protection cream</span>

                <div className={css.text2}>
                    <span>Trendy Collection</span>
                    <span>Seedily say has suitable disposal and boy. Exercise joy man children rejoiced</span>
                </div>
            </div>

            {/* {Middle side} */}
            <div className={css.wrapper}>
                <div className={css.blueCircle}></div>
                <img src={HeroImg} alt="" width={600} />

                <div className={css.cart2}>
                    <RiShoppingBagFill/>

                    <div className={css.signup} >
                        <span>Best Signup Offers</span>

                        <div>
                            <BsArrowRight/>
                        </div>
                    </div>
                </div>
            </div> 


            {/* right side */}
            <div className={css.h_sides}>
                <div className={css.traffic}>
                    <span>1.5M</span>
                    <span>Monthy Traffic</span>
                </div>

                <div className={css.customers}>
                    <span>100K</span>
                    <samp>Happy Customes</samp>
                </div>
            </div>

    </div>
  )
}

export default Hero