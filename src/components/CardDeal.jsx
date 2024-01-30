import React from 'react'
import { card } from '../assets'
import styles , {layout} from '../style'
import Button from './Button'

const CardDeal = () => {
  return (
    <section className={`${layout.section}`}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Find a better card deal <br className='sm:block hidden'/> in few easy steps.
        </h2>
        <p className={`${styles.paragraph} max-w-[420px] mt-5`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quas, officiis. Nihil esse voluptate modi, blanditiis ex debitis placeat aspernatur harum.
        </p>
      <Button  styles="mt-10"/>
      </div>
      <div className={layout.sectionImg}>
        <img src={card} alt="card" className='w-[90%] h-[90%]'/>
      </div> 
    </section>
  )
}

export default CardDeal