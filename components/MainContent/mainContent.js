'use client'

import React from 'react';
import Slider from "react-slick";
import { settings } from '@/Util/Helper';
import Card from '@/components/Card/Card';
import { sliderApi } from '@/services/sliderApi';
import { globalImg } from '@/Util/globalImages';
import './mainContent.css';

const MainContent = () => {
    return (
        <main className='main_wrapper'>
            <div className='bookmark_main'>
                <h2>Your Bookmarks</h2>
                <div>
                    <Card img={globalImg.editPdf} heading={'Edit PDF'} text={"Use the best online tool to edit PDFs in your browser."} />
                    <Card img={globalImg.cropPdf} heading={'Crop PDF'} text={"Crop PDF online to a selected area, adjust margin size swiftly."} />
                    <Card img={globalImg.replacePdf} heading={'Replace Text'} text={"The easiest way to replace text online."} />
                    <Card img={globalImg.rotatePdf} heading={'Rotate PDF'} text={"Rotate and save your PDF pages online for free."} />
                </div>
            </div>
            <div className='slider_main'>
                <h2>Convert to PDF</h2>

                <Slider {...settings}>
                    {
                        sliderApi.map((s) => (
                            <Card key={s.id} img={s.img} heading={s.heading} text={s.text} />
                        ))
                    }
                </Slider>
            </div>
        </main>
    )
}
export default MainContent;