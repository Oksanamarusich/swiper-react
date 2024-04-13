import { SwiperExample } from "./Swiper/Swiper"
import bags from "./img/reusable-shopping-bags-white-eco-bag-mockup-Photoroom 1 (2).png"
import earrings from "./img/jewellery-earrings-background-with-place-text-banner-fashion-accessories-Photoroom 1 (1).png"
import glasses from "./img/Subtract.png"
import hat from "./img/beautiful-straw-hat-yellow-vibrant-vivid-background-top-view-Photoroom 1 (1).png"
import sunGlasses from "./img/aviator-sunglass-png-c-11545511204soghwydnkq.png"
import jewellery from "./img/5f74c0334fcf9558e1e1902ce49bdac5.png"
import { SwiperExampleS } from "./SwiperExampleS/SwiperExampleS"

const pictures = [bags, earrings, glasses, hat, sunGlasses,jewellery];

export const App = () => {
  return (
    <>
    <SwiperExample pictures={pictures} />
      <SwiperExampleS pictures={pictures} />
      </>
  );
};
