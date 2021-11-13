import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
            <div className='mx-auto my-5 about-us-section'>
                <div className='about-us-left'>
                    <h2>About Us</h2>
                    <p>Four wheel vehicle industry is not much reach here in Bangladesh points of view. But the local industry is progressing. Already some of the local brand started vehicle localization. But this local industry depends on Japanese used vehicle. Almost 80% four wheeler here in Bangladesh is pre-owned vehicles, and near about 30% vehicles are brand new.But general peoples of Bangladesh are not aware about private and public vehicles price, availability as well as safety aspects. Car Bd started work to aware all about public and private vehicle including safety awareness and vehicle overview.</p>
                </div>
                <div className='about-us-right'>
                    <div>
                        <img className='w-100 about-us-img' src="https://image.freepik.com/free-vector/car-led-lights-realistic-composition-with-dark-silhouette-automobile-with-dimmed-headlights-shadows-illustration_1284-28532.jpg" alt="" />
                    </div>
                    <div>
                        <img className='w-100 about-us-img' src="https://image.freepik.com/free-photo/white-offroader-jeep-parking_114579-4007.jpg" alt="" />
                    </div>
                    <div>
                        <img className='w-100 about-us-img' src="https://image.freepik.com/free-photo/black-luxury-sport-sedan-car-standing-race-trace_114579-1169.jpg" alt="" />
                    </div>
                    <div>
                        <img className='w-100 about-us-img' src="https://image.freepik.com/free-photo/car-travelling-by-sunny-road_1088-51.jpg" alt="" />
                    </div>
                </div>
            </div>
    );
};

export default AboutUs;