import React from 'react';

const TAGS = [
    { label: "stationary trichy", dept: "stationary" },
    { label: "groceries srirangam", dept: "groceries" },
    { label: "school shoes trichy", dept: "shoes" },
    { label: "gifts srirangam", dept: "gifts" },
    { label: "toys trichy", dept: "toys" },
    { label: "jewellery srirangam", dept: "jewels" },
    { label: "supermarket trichy", dept: "groceries" },
    { label: "departmental store srirangam", dept: "groceries" },
    { label: "wedding gifts trichy", dept: "gifts" },
    { label: "kids toys srirangam", dept: "toys" },
    { label: "school stationary trichy", dept: "stationary" },
    { label: "fancy jewels srirangam", dept: "jewels" },
];

function HashTags({ setCurrentPage }) {
    return (
        <section className="hashtags-section reveal">
            <div className="container">
                <div className="hashtag-container">
                    {TAGS.map((tag, i) => (
                        <div 
                            key={i} 
                            className="hashtag-item"
                            onClick={() => {
                                if (tag.label === "supermarket trichy" || tag.label === "departmental store srirangam") {
                                    window.scrollTo({ top: 0, behavior: 'auto' });
                                } else {
                                    setCurrentPage(tag.dept);
                                }
                            }}
                        >
                            {tag.label}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default HashTags;
