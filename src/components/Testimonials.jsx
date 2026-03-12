import React from 'react';
import SketchBackground from './SketchBackground';

const REVIEWS = [
    {
        name: 'Yogesh 9965',
        initial: 'Y',
        rating: 5,
        meta: 'Google Review',
        text: "The shopping experience here was smooth and enjoyable. The shop was well-maintained, and everything was easy to locate. What really stood out was the courteous and efficient service by the staff — they were approachable and quick to assist. The product selection was decent, with good value for money. The overall vibe of the shop was comfortable and stress-free, making it a place I'd definitely return to for future needs.",
        reviewLink: 'https://www.google.com/maps/contrib/104341981119329125988/reviews?hl=en',
        borderClass: 'border-lime',
    },
    {
        name: 'Usha Saranraj',
        initial: 'U',
        rating: 5,
        meta: 'Google Review · 5 reviews · 1 photo',
        text: 'I have purchased for the past 2 years. All home needed products are available there — and they also provide loyalty points according to our purchase amount, which is very useful and attractive. I love that system! Please visit here for your home needs!',
        reviewLink: 'https://www.google.com/maps/contrib/110925743305491292039/reviews?hl=en',
        borderClass: 'border-gold',
    },
    {
        name: 'Kirankumar B',
        initial: 'K',
        rating: 5,
        meta: 'Google Review · 3 reviews · 2 photos',
        text: 'Very kind employees — I always love to buy my things there. Customer service is good! The store has a great collection and the staff are always ready to help you find what you need.',
        reviewLink: 'https://www.google.com/maps/contrib/104372412177104406630/reviews?hl=en',
        borderClass: 'border-forest',
    },
];

function Testimonials() {
    return (
        <section id="testimonials" className="testimonials section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            <SketchBackground color="#2ECC71" opacity={0.04} />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="text-center reveal">
                    <span className="section-label">Testimonials</span>
                    <h2 className="section-title">What Our Customers Say</h2>
                </div>

                <div className="reviews-grid reveal">
                    {REVIEWS.map((r, i) => (
                        <div className={`review-card ${r.borderClass}`} key={i}>
                            <span className="review-quote">"</span>
                            <div className="stars">
                                {[...Array(r.rating)].map((_, j) => (
                                    <i className="fa-solid fa-star" key={j}></i>
                                ))}
                            </div>
                            <p className="review-text">"{r.text}"</p>
                            <div className="reviewer">
                                <div className="reviewer-avatar">{r.initial}</div>
                                <div className="reviewer-info">
                                    <h4>{r.name}</h4>
                                    <span>{r.meta}</span>
                                    <a
                                        href={r.reviewLink}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="review-gmap-link"
                                    >
                                        View on Google Maps <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '0.7rem' }}></i>
                                    </a>
                                </div>
                            </div>
                            <a
                                href="https://share.google/qNUCjZ6BnqU81Mlpa"
                                target="_blank"
                                rel="noreferrer"
                                className="review-link"
                            >
                                Leave a Review <i className="fa-solid fa-arrow-up-right-from-square" style={{ fontSize: '0.7rem' }}></i>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
