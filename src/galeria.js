import React from "react";
import Bar from "./components/Bar";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function Galeria() {
  const images = [
    {
      original: "/1.jpg",
      thumbnail: "/1.jpg",
    },
    {
      original: "/1-4.jpg",
      thumbnail: "/1-4.jpg",
    },
    {
      original: "/2.jpg",
      thumbnail: "/2.jpg",
    },
    {
      original: "/1-1.jpg",
      thumbnail: "/1-1.jpg",
    },
    {
      original: "/1-2.jpg",
      thumbnail: "/1-2.jpg",
    },
    
    {
      original: "/6.jpg",
      thumbnail: "/6.jpg",
    },
    {
      original: "/9.jpg",
      thumbnail: "/9.jpg",
    },
    {
      original: "/10.jpg",
      thumbnail: "/10.jpg",
    },
    {
      original: "/2-1.jpg",
      thumbnail: "/2-1.jpg",
    },
    {
      original: "/2-2.jpg",
      thumbnail: "/2-2.jpg",
    },

    {
      original: "/11.jpg",
      thumbnail: "/11.jpg",
    },

    {
      original: "/12.jpg",
      thumbnail: "/12.jpg",
    },
    {
      original: "/13.jpg",
      thumbnail: "/13.jpg",
    },
    {
      original: "/14.jpg",
      thumbnail: "/14.jpg",
    },
    {
      original: "/15.jpg",
      thumbnail: "/15.jpg",
    },
    {
      original: "/16.jpg",
      thumbnail: "/16.jpg",
    },
    {
      original: "/17.jpg",
      thumbnail: "/17.jpg",
    },
    {
      original: "/18.jpg",
      thumbnail: "/18.jpg",
    },

    {
      original: "/19.jpg",
      thumbnail: "/19.jpg",
    },
    {
      original: "/20.jpg",
      thumbnail: "/20.jpg",
    },
    {
      original: "/36.jpg",
      thumbnail: "/36.jpg",
    },
    {
      original: "/24.jpg",
      thumbnail: "/24.jpg",
    },
    {
      original: "/25.jpg",
      thumbnail: "/25.jpg",
    },
    {
      original: "/26.jpg",
      thumbnail: "/26.jpg",
    },
    {
      original: "/27.jpg",
      thumbnail: "/27.jpg",
    },
    {
      original: "/28.jpg",
      thumbnail: "/28.jpg",
    },
    {
      original: "/29.jpg",
      thumbnail: "/29.jpg",
    },
    {
      original: "/31.jpg",
      thumbnail: "/31.jpg",
    },
    {
      original: "/32.jpg",
      thumbnail: "/32.jpg",
    },
    {
      original: "/33.jpg",
      thumbnail: "/33.jpg",
    },
    {
      original: "/36.jpg",
      thumbnail: "/36.jpg",
    },
    {
      original: "/38.jpg",
      thumbnail: "/38.jpg",
    },
    {
      original: "/39.jpg",
      thumbnail: "/39.jpg",
    },
    {
      original: "/40.jpg",
      thumbnail: "/40.jpg",
    },
    {
      original: "/gallery-10.jpg",
      thumbnail: "/gallery-10.jpg",
    },
    {
      original: "/gallery-17.jpg",
      thumbnail: "/gallery-17.jpg",
    },
    {
      original: "/gallery-18.jpg",
      thumbnail: "/gallery-18.jpg",
    },
    {
      original: "/gallery-20.jpg",
      thumbnail: "/gallery-20.jpg",
    },
    
  ];

  return (
    <div>
      <Bar title={"Galeria"} />

      <div className="przedszkole5">
        <ReactImageGallery items={images} />
      </div>
    </div>
  );
}

export default Galeria;
