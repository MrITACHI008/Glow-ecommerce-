import React from 'react'
import css from './Testimonial.module.css'
import Hero from '../../assets/testimonialHero.png'


const Testimonial = () => {
  return (
    <div  className={css.testimonials}>
        <div className={css.wrapper} >
            <div className={css.container}>
            <span>Top Rated</span>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, doloremque? Labore vero illum aliquam eaque ex quo delectus corrupti nihil, eligendi nam? Ad quidem assumenda quod modi doloribus, nisi necessitatibus.</span>
            </div>
        </div>

        <img src={Hero} alt="" />

        <div className={css.container} >
            <span>
                100k
            </span>
            <span>Happy Customers with us</span>
        </div>
    </div>
  )
}

export default Testimonial