"use client";

import { useState } from "react";

// Each card is drawn with CSS, so no image files or web images are needed.
// "glyph" is the big symbol on the card, "style" picks the look (see globals.css).
const items = [
  { title: "Programming Practice", category: "Technology", caption: "Exploring programming and improving my coding skills.", glyph: "</>", style: "dark grid" },
  { title: "Learning and Growing in IT", category: "School Life", caption: "Learning new things every day as an IT student.", glyph: "IT", style: "light dots" },
  { title: "Technology and Innovation", category: "Technology", caption: "Curious about how technology can solve problems.", glyph: "{ }", style: "light lines" },
  { title: "Student Life", category: "School Life", caption: "Balancing classes, practice, and time with friends.", glyph: "BSIT", style: "dark lines" },
  { title: "School Project", category: "Projects", caption: "Applying what I learn in class to small projects.", glyph: "01", style: "light grid" },
  { title: "Exploring Web Development", category: "Projects", caption: "Practicing HTML, CSS, JavaScript, and Next.js.", glyph: "#", style: "dark dots" },
  { title: "School Activities", category: "Activities", caption: "Taking part in activities that help me grow.", glyph: "+", style: "light lines" },
];

const categories = ["All", "School Life", "Activities", "Projects", "Technology"];

export default function GalleryGrid() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? items : items.filter((i) => i.category === filter);

  return (
    <>
      <div className="filters">
        {categories.map((c) => (
          <button
            key={c}
            className={`chip ${filter === c ? "active" : ""}`}
            aria-pressed={filter === c}
            onClick={() => setFilter(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {shown.map((item) => (
          <figure key={item.title} className="photo">
            <div className={`art ${item.style}`} role="img" aria-label={`${item.title} illustration`}>
              <span>{item.glyph}</span>
            </div>
            <figcaption>
              <div>
                <strong>{item.title}</strong>
                <p>{item.caption}</p>
              </div>
              <small className="tag">{item.category}</small>
            </figcaption>
          </figure>
        ))}
      </div>

      {shown.length === 0 && <p className="note">Nothing in this category yet.</p>}
    </>
  );
}
