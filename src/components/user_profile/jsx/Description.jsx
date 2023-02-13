import React from 'react'
import '../css/description.css'

const Description = () => {
  return (
    <div>
        <div className='main-description-box'>
            <div className="description-box-heading">
                <div className="description-heading">
                    <h2 className="description-h2">About Robert Kiyosaki</h2>
                </div>
            </div>
            <div className='description-box-details'>
                <div className="description-details-p">
                    <p className='description-p'>I am a photographer based on Raipur</p>
                    <p className='description-p'>I will do wedding photos, wedding photography, wedding photos</p>
                </div>
                <div className='description-packages'>
                    <div className="package-heading">
                        <h2 className="packagae-h2">Extra Package That We Provide</h2>
                        <hr className='package-h2-hr'/>
                    </div>
                    <div className='extra-packages-offers'>
                        <div className='package-details'>
                            <div className="package-grid">
                            <div className="package-details-section">
                                <h4 className="package-name-details">Candid Photography</h4>
                                <ul className='package-details-ul'><li className="package-price-detail">15000 per day</li></ul>
                            </div>
                            <div className="package-details-section">
                                <h4 className="package-name-details">Studio Photography</h4>
                                <ul className='package-details-ul'><li className="package-price-detail">10000 per day</li></ul>
                            </div>
                            <div className="package-details-section">
                                <h4 className="package-name-details">Traditional Photography</h4>
                                <ul className='package-details-ul'><li className="package-price-detail">20000 per day</li></ul>
                            </div>
                            <div className="package-details-section">
                                <h4 className="package-name-details">Budget Photography(Photo Package)</h4>
                                <ul className='package-details-ul'><li className="package-price-detail">30000 per day</li></ul>
                            </div>
                            <div className="package-details-section">
                                <h4 className="package-name-details">Budget (Photo + Video)</h4>
                                <ul className='package-details-ul'><li className="package-price-detail">60000 per day</li></ul>
                            </div>
                            <div className="package-details-section">
                                <h4 className="package-name-details">Package Days</h4>
                                <ul className='package-details-ul'><li className="package-price-detail">2 Days</li></ul>
                            </div>
                            <div className="package-details-section">
                                <h4 className="package-name-details">Small Function (Photo + Video)</h4>
                                <ul className='package-details-ul'><li className="package-price-detail">25000 (4 hours)</li></ul>
                            </div>
                            <div className="package-details-section">
                                <h4 className="package-name-details">Delivery Time</h4>
                                <ul className='package-details-ul'><li className="package-price-detail delivery-time">2 Weeks</li></ul>
                            </div>
                            <div className="package-details-section">
                                <h4 className="package-name-details">Payment Terms</h4>
                                <ul className='package-details-ul'><li className="package-price-detail payment-terms">50% Advance</li></ul>
                            </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Description