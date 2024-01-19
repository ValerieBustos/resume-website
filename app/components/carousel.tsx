import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/16/solid";
import { useState } from "react";
import { Button } from "react-aria-components";

export interface CarouselProps {
  slides: { src: any; alt: string }[];
}

export default function Carousel({ slides }: CarouselProps) {
  let [current, setCurrent] = useState<number>(0);

  let previousSlide = () => {
    if (current === 0) {
      setCurrent(slides.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  let nextSlide = () => {
    if (current === slides.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
    console.log("current: ", current);
  };

  return (
    <div className="overflow-hidden relative">
      <div
        className="flex transition ease-out duration-40"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {slides.map((slide) => (
          <img src={slide.src} alt={slide.alt} />
        ))}
      </div>
      <div className="flex absolute w-full top-1/2 justify-between align-center text-white px-6">
        <Button className="rounded-full outline-none" onPress={previousSlide}>
          <ArrowLeftCircleIcon className="h-10 w-10" />
        </Button>
        <Button className="rounded-full outline-none" onPress={nextSlide}>
          <ArrowRightCircleIcon className="h-10 w-10" />
        </Button>
      </div>
    </div>
  );
}
