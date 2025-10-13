// app/institutes/[detail]/_detail_property_component/tabs/Gallery.tsx
'use client';
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Counter from "yet-another-react-lightbox/plugins/counter";

export default function GalleryTab() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [currentSlides, setCurrentSlides] = useState<{ src: string }[]>([]);

  const galleries = [
    {
      title: "Hostel Rooms",
      images: [
        "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      title: "Cafeteria",
      images: [
        "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/941861/pexels-photo-941861.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
    {
      title: "Library",
      images: [
        "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/256541/pexels-photo-256541.jpeg?auto=compress&cs=tinysrgb&w=800",
      ],
    },
  ];

  const handleOpen = (galleryImages: string[], i: number) => {
    const slides = galleryImages.map((img) => ({
      src: img,
    }));
    setCurrentSlides(slides);
    setIndex(i);
    setOpen(true);
  };

  return (
    <div className="space-y-10 p-6">
      {galleries.map((gallery, gIdx) => (
        <div key={gIdx}>
          <h2 className="text-xl font-bold text-gray-600 mb-4">
            {gallery.title}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {gallery.images.slice(0, 8).map((img, i) => (
              <div
                key={i}
                className="aspect-square overflow-hidden shadow rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => handleOpen(gallery.images, i)}
              >
                <img
                  src={img}
                  alt={gallery.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      ))}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={currentSlides}
        plugins={[Thumbnails, Zoom, Fullscreen, Slideshow, Counter]}
      />
    </div>
  );
}