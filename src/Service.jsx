import React from 'react';
import Card from './Card';
import CardData from './CardData';

function Service() {
    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'>Our Services</h1>
            </div>
            <div className='container-fluid mb-5'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <div className='row gy-5'>
                            {
                                CardData.map((val,ind)=>{
                                    return (
                                        <Card key={ind}
                                         title={val.tittle}
                                         imgsrc={val.imgsrc} />
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Service