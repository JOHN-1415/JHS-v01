import React from 'react';

function ServiceCard({ service, onClick }) {
    return (
        <div className="service-card" onClick={onClick}>
            <span className="service-card-badge">{service.productCount} Products</span>
            <img
                className="service-card-img"
                src={service.coverImg}
                alt={service.label}
            />
            <div className="service-card-body">
                <h3 className="service-card-title">{service.label}</h3>
                <p className="service-card-desc">{service.desc}</p>
                <span className="service-card-link">
                    View Products <i className="fa-solid fa-arrow-right"></i>
                </span>
            </div>
        </div>
    );
}

export default ServiceCard;
