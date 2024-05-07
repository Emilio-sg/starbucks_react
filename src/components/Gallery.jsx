import React from 'react'
import "../css/gallery.css"
import GALLERY_1 from "../image/gallery-1.png"
import GALLERY_2 from "../image/gallery-2.png"
import GALLERY_3 from "../image/gallery-3.png"


const Gallery = () => {
  return (
    <section className="gallery">
      <img
        className="gallery__photo"
        src={GALLERY_1}
        alt="foto galeria 1"
      />
      <img
        className="gallery__photo"
        src={GALLERY_2}
        alt="foto galeria 2"
      />
      <img
        className="gallery__photo"
        src={GALLERY_3}
        alt="foto galeria 3"
      />
    </section>
  )
}

export default Gallery