import React from 'react';
import ImageWithLaptopFrame from './ImageWithLaptopFrame';
// import upnotesImg from '';

const FeatureTemplate = function (props) {
    const { title, description, backgroundColor,list , imageSrc, flexDirection = 'flex-row' } = props;
    return <div className="flex justify-center items-center p-10" style={{ background: backgroundColor }}>
        <div className={`max-w-screen-xl pt-16 pb-16 flex flex-col lg:${flexDirection} items-start`} >
            <div className="flex flex-col justify-center items-center py-10 lg:w-4/6 lg:px-10">
                <h2 className="text-4xl tracking-wider text-center ">{title}</h2>
                <p className="text-xl tracking-wide text-center pt-10 leading-8">{description}</p>
                <ul className="list-disc p-10">
                    {list && list.map((l)=><li>{l}</li>)}
                </ul>
            </div>
            <div className="pt-5">
                <ImageWithLaptopFrame imageUrl={imageSrc} />
            </div>
        </div>
        <div className="lg:flex-row "></div><div className="lg:flex-row-reverse"></div>
        <div></div>
    </div>;
}


export default FeatureTemplate;