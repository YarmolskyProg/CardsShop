import React from 'react'

export default function ProductGallery({ product }) {
    return (
        <>
            <div className="col-lg-6">
                <div className="details_image">
                    <div className="details_image_large">
                        <img src={product.img} alt="" />
                    </div>
                    {/* <div className="details_image_thumbnails d-flex flex-row align-items-start justify-content-between">
                        <div className="details_image_thumbnail active" data-image="images/details_1.jpg"><img src="images/details_1.jpg" alt="" /></div>
                        <div className="details_image_thumbnail" data-image="images/details_2.jpg"><img src="images/details_2.jpg" alt="" /></div>
                        <div className="details_image_thumbnail" data-image="images/details_3.jpg"><img src="images/details_3.jpg" alt="" /></div>
                        <div className="details_image_thumbnail" data-image="images/details_4.jpg"><img src="images/details_4.jpg" alt="" /></div>
                    </div> */}
                </div>
            </div>
        </>
    )
}
