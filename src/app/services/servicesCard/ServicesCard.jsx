import Image from 'next/image';
import React from 'react';

const ServicesCard = ({ name, feature, image, location }) => {

    return (
        <div className={`card bg-base-100 border-2 hover:shadow-2xl h-[350px] ${location === '/' ? "rounded-none h-[400px]" : ""}`}>
            <div className='flex justify-center items-center  w-full'>
                <Image
                    src={image}
                    width={400}
                    height={60}
                    alt="img">
                </Image>
            </div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{feature}</p>

            </div>
        </div>
    );
};

export default ServicesCard;