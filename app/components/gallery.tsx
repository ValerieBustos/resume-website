export interface Gallery {
  slides: { src: any; alt: string }[];
}

export default function Gallery({ slides }: Gallery) {
  return (
    <div className="flex w-full space-x-4" aria-label="gallery">
      {slides.map((slide) => (
        <div className="w-1/3">
          <img src={slide.src} alt={slide.alt} className="object-stretch" />
        </div>
      ))}
    </div>
  );
}
