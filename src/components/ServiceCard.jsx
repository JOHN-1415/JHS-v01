import React from 'react';

function ServiceCard({ service, onClick }) {
    return (
        <div className="service-card" onClick={onClick}>
            <img
                className="service-card-img"
                src={service.coverImg}
                alt={service.label}
            />
            <div className="service-card-body">
                <span className="service-card-link">
                    View Products <i className="fa-solid fa-arrow-right"></i>
                </span>
            </div>
        </div>
    );
}

export default ServiceCard;
