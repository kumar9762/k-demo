import React from 'react'

import Slider from './Slider'
import Products from './pages/Products'
import Sli3 from './pages/Sli3'
import FeaturedProducts from './pages/FeaturedProducts'

const Home = () => {
  return (
    <div>
<Slider />
<Sli3/>
<FeaturedProducts/>
       <Products/>
    </div>
  )
}

export default Home