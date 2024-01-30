import React from 'react'
import { apple, bill , google } from '../assets'
import styles , {layout} from '../style'

const Billing = () => {
  return (
   <section id="product" className={`${layout.sectionReverse}`}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className='w-[90%] h-[90%] relative z-[5]'></img>
    <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient'/>
    <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient'/>
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>Easily control your <br className='sm:block hidden '/>
      billing & invoicing.</h2>
      <p  className={`${styles.paragraph} max-w-[420px] mt-5`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quo voluptates dolorum eaque natus! Necessitatibus ipsamWith our powerful and user-friendly billing system, you can easily manage all of your projects
      </p>
      <div className='flex flex-row flex-wrap sm:mt-10 mt-6'>
        <img className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' src={apple} alt='apple_play'/>
        <img className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer' src={google} alt='google_play'/>
      </div>
    </div>

   </section>
  )
}

export default Billing