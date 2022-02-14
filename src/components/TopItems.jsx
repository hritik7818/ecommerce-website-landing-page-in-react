import React from 'react';
import TopItem from './TopItem.jsx'
import topImg1 from '../utils/top_img1.png';
import topImg2 from '../utils/top_img2.png';
import topImg3 from '../utils/top_img3.png';
import topImg4 from '../utils/top_img4.png';
import topImg5 from '../utils/top_img5.png';
import topImg6 from '../utils/top_img6.jpg';
import topImg7 from '../utils/top_img7.png';
import topImg8 from '../utils/top_img8.png';
import topImg9 from '../utils/top_img9.png';

export default function TopItems() {
    return (
        <>
            <div className="flex bg-white shadow-sm" >
                <TopItem title="Top Offers" img={topImg1} />
                <TopItem title="Grocery" img={topImg2} />
                <TopItem title="Mobiles" img={topImg3} />
                <TopItem title="Fashion" img={topImg4} />
                <TopItem title="Electronics" img={topImg5} />
                <TopItem title="Home" img={topImg6} />
                <TopItem title="Appliances" img={topImg7} />
                <TopItem title="Travel" img={topImg8} />
                <TopItem title="Beauty, Toys & More" img={topImg9} />
            </div>
            <hr />
        </>
    );
}
