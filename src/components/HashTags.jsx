import React from 'react';

const TAGS = [
    { label: "groceries trichy", dept: "groceries" },
    { label: "household cleaning srirangam", dept: "cleaning" },
    { label: "spices cooking trichy", dept: "cooking" },
    { label: "stationery school supplies", dept: "stationery" },
    { label: "fashion accessories trichy", dept: "fashion" },
    { label: "school shoes trichy", dept: "shoes" },
    { label: "gifts decor srirangam", dept: "gifts" },
    { label: "jewellery srirangam", dept: "jewels" },
    { label: "toys kids trichy", dept: "toys" },
    { label: "pet supplies srirangam", dept: "pets" },
    { label: "supermarket trichy", dept: null },
    { label: "departmental store srirangam", dept: null },
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
                                if (!tag.dept) {
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
