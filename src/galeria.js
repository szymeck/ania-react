import React from "react";
import Bar from "./components/Bar";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

function Galeria() {
  const images = [
    {
      original: "/image00001.jpg",
      thumbnail: "/image00001.jpg",
    },
    {
      original: "/image00002.jpg",
      thumbnail: "/image00002.jpg",
    },
    {
      original: "/image00003.jpg",
      thumbnail: "/image00003.jpg",
    },
    {
      original: "/image00004.jpg",
      thumbnail: "/image00004.jpg",
    },
    {
      original: "/image00005.jpg",
      thumbnail: "/image00005.jpg",
    },
    {
      original: "/image00006.jpg",
      thumbnail: "/image00006.jpg",
    },
    {
      original: "/image00007.jpg",
      thumbnail: "/image00007.jpg",
    },
    {
      original: "/image00008.jpg",
      thumbnail: "/image00008.jpg",
    },
    {
      original: "/image00009.jpg",
      thumbnail: "/image00009.jpg",
    },
    {
      original: "/image00010.jpg",
      thumbnail: "/image00010.jpg",
    },
    {
      original: "/image00011.jpg",
      thumbnail: "/image00011.jpg",
    },
    {
      original: "/image00012.jpg",
      thumbnail: "/image00012.jpg",
    },

    {
      original: "/gallery-17.jpg",
      thumbnail: "/gallery-17.jpg",
    },

    {
      original: "/gallery-6.jpg",
      thumbnail: "/gallery-6.jpg",
    },
    {
      original: "/gallery-7.jpg",
      thumbnail: "/gallery-7.jpg",
    },
    {
      original: "/gallery-8.jpg",
      thumbnail: "/gallery-8.jpg",
    },
    {
      original: "/gallery-9.jpg",
      thumbnail: "/gallery-9.jpg",
    },
    {
      original: "/gallery-10.jpg",
      thumbnail: "/gallery-10.jpg",
    },
    {
      original: "/gallery-11.jpg",
      thumbnail: "/gallery-11.jpg",
    },
    {
      original: "/gallery-12.jpg",
      thumbnail: "/gallery-12.jpg",
    },

    {
      original: "/gallery-14.jpg",
      thumbnail: "/gallery-14.jpg",
    },
    {
      original: "/gallery-15.jpg",
      thumbnail: "/gallery-15.jpg",
    },
    {
      original: "/gallery-16.jpg",
      thumbnail: "/gallery-16.jpg",
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
      original: "/gallery-19.jpg",
      thumbnail: "/gallery-19.jpg",
    },
    {
      original: "/gallery-20.jpg",
      thumbnail: "/gallery-20.jpg",
    },
    {
      original: "/gallery-21.jpg",
      thumbnail: "/gallery-21.jpg",
    },
    {
      original: "/gallery-22.jpg",
      thumbnail: "/gallery-22.jpg",
    },
    {
      original: "/gallery-23.jpg",
      thumbnail: "/gallery-23.jpg",
    },
    {
      original: "/gallery-24.jpg",
      thumbnail: "/gallery-24.jpg",
    },
    {
      original: "/gallery-25.jpg",
      thumbnail: "/gallery-25.jpg",
    },
    {
      original: "/gallery-26.jpg",
      thumbnail: "/gallery-26.jpg",
    },
    {
      original: "/gallery-27.jpg",
      thumbnail: "/gallery-27.jpg",
    },
    {
      original: "/gallery-28.jpg",
      thumbnail: "/gallery-28.jpg",
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
