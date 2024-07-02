import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import Slide1 from "./Slide1";
import { useRef } from "react";

const Sliding = () => {
    const plugin = useRef(
        Autoplay({ delay: 4000, stopOnInteraction: false })
      )
  return (
    <Carousel
    plugins={[plugin.current]}
      opts={{
        align: "start",
        loop: true,
        active : true ,
      }}
      className="w-full"
    >
      <CarouselContent>
        <CarouselItem>
          <Slide1 />
        </CarouselItem>
        <CarouselItem>
            <Slide1/>
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default Sliding;
