import React, { useState } from 'react';
import SketchBackground from './SketchBackground';

const faqs = [
    {
        q: 'What are your store timings?',
        a: 'We are open every day from 8:00 AM to 10:00 PM, including Sundays.',
    },
    {
        q: 'Where is Jeya Hyper Store located?',
        a: (
            <span>
                We are at <a href="https://www.google.com/maps/place/Jeya+Hyper+Store/@10.8127737,78.6358536,17z/data=!3m1!4b1!4m6!3m5!1s0x3baa5fb9f1bf1109:0x5695552fc3be3160!8m2!3d10.8127737!4d78.6358536!16s%2Fg%2F11tfv_0x8y?entry=ttu&g_ep=EgoyMDI2MDMxMS4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noreferrer" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>RJ7P+37V, Vayalur Rd, Somarasempettai, Tiruchirappalli</a>.
            </span>
        ),
    },
    {
        q: 'What products do you sell?',
        a: 'We offer products across 10 categories: Groceries & Food, Household & Cleaning, Spices & Cooking Essentials, Stationery & School Supplies, Fashion & Accessories, School Shoes, Gift Items & Decor, Jewels, Toys & Kids, and Pet Supplies. Truly a one-stop shop for your family!',
    },
    {
        q: 'Can I place orders on WhatsApp?',
        a: (
            <span>
                Yes! Send your order or enquiry on <a href="https://wa.me/919345491984" target="_blank" rel="noreferrer" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>WhatsApp at +91 93454 91984</a> and we'll reply shortly.
            </span>
        ),
    },
    {
        q: 'Do you offer home delivery?',
        a: 'Please contact us on WhatsApp or call us to check delivery availability for your area.',
    },
    {
        q: 'Do you accept UPI and card payments?',
        a: 'Yes! We accept cash, UPI (GPay, PhonePe, Paytm), Pluxee (Sodexo), and card payments including RuPay, Visa, and Mastercard for your convenience.',
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
            <SketchBackground color="#1E3A8A" opacity={0.02} />
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
