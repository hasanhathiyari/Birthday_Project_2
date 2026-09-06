import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const MemoryGallery = ({ nextPage }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const container = useRef(null);

  const photos = [
    "/memories/photo1.jpg",
    "/memories/photo2.jpg",
    "/memories/photo3.jpg",
    "/memories/photo4.jpg",
    "/memories/photo5.jpg",
    "/memories/photo6.jpg",
    "/memories/photo7.jpg",
    "/memories/photo8.jpg",
    "/memories/photo9.jpg",
    "/memories/photo10.jpg",
  ];

  useGSAP(
    () => {
      gsap.from(".memory-photo", {
        opacity: 0,
        y: 50,
        scale: 0.9,
        stagger: 0.1,
        duration: 0.7,
        ease: "power3.out",
      });
    },
    { scope: container }
  );

  return (
    <section className="memory-page" ref={container}>
      <div className="memory-content">
        <p className="memory-small-title">
          CLASSIFIED MEMORIES
        </p>

        <h1>
          OUR <span>MEMORIES</span>
        </h1>

        <p className="memory-description">
          Every picture has a memory. Every memory has you. ❤️
        </p>

        <div className="photo-grid object-contain ">
          {photos.map((photo, index) => (
            <button
              type="button"
              className="memory-photo"
              key={index}
              onClick={() => setSelectedImage(photo)}
            >
              <img
                src={photo}
                alt={`Memory ${index + 1}`}
              />

              <span className="photo-number">
                MEMORY {String(index + 1).padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>

        <button
          type="button"
          className="continue-button"
          onClick={nextPage}
        >
          START THE TEST →
        </button>
      </div>

      {selectedImage && (
        <div
          className="image-popup"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="popup-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="close-image"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>

            <img
              src={selectedImage}
              alt="Selected memory"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default MemoryGallery;