import React, { useState } from 'react';
import SketchBackground from './SketchBackground';

const faqs = [
    {
        q: 'What are your store timings?',
        a: 'We are open every day from 7:00 AM to 10:00 PM, including Sundays and public holidays.',
    },
    {
        q: 'Where is Jeya Hyper Store located?',
        a: 'We are at Somarasampettai, opposite Holy Cross School, Vayalur Road, Shanmuga Nagar, Srirangam, Trichy — 620102.',
    },
    {
        q: 'What products do you sell?',
        a: 'We sell across 6 departments: Groceries, School Shoes, Gifts, Toys, Jewels, and Stationeries. Truly a one-stop shop for your family!',
    },
    {
        q: 'Can I place orders on WhatsApp?',
        a: 'Yes! Send your order or enquiry on WhatsApp at +91 93454 91984 and we\'ll reply shortly.',
    },
    {
        q: 'Do you offer home delivery?',
        a: 'Please contact us on WhatsApp or call us to check delivery availability for your area.',
    },
    {
        q: 'Do you accept UPI and card payments?',
        a: 'Yes! We accept cash, UPI (GPay, PhonePe, Paytm) and card payments for your convenience.',
    },
    {
        q: 'Do you have school shoes for all sizes?',
        a: 'Yes! Our school shoes section covers all sizes from KG to Class 12, for boys and girls.',
    },
    {
        q: 'Do you have a loyalty/points system?',
        a: 'Yes! We provide reward points based on your purchase amount — making every visit more rewarding.',
    },
];

function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (i) => {
        setOpenIndex(openIndex === i ? null : i);
    };

    return (
        <section id="faq" className="faq section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
            <SketchBackground color="#1E3A8A" opacity={0.04} />
            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                <div className="text-center reveal">
                    <span className="section-label">FAQ</span>
                    <h2 className="section-title">Frequently Asked Questions</h2>
                </div>

                <div className="faq-container reveal">
                    {faqs.map((faq, i) => (
                        <div className={`faq-item ${openIndex === i ? 'open' : ''}`} key={i}>
                            <button className="faq-question" onClick={() => toggle(i)}>
                                <span>{faq.q}</span>
                                <span className="faq-chevron">
                                    <i className="fa-solid fa-chevron-down"></i>
                                </span>
                            </button>
                            <div className="faq-answer">
                                <div className="faq-answer-inner">{faq.a}</div>
                            </div>
                        </div>
                    ))}

                    <div className="faq-cta">
                        <p>Still have questions? Chat with us instantly!</p>
                        <a
                            href="https://wa.me/919345491984?text=Hi!%20I%20have%20a%20question%20about%20Jeya%20Hyper%20Store."
                            target="_blank"
                            rel="noreferrer"
                            className="btn btn-whatsapp"
                        >
                            <i className="fa-brands fa-whatsapp"></i> Chat on WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FAQ;
