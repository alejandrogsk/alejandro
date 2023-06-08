import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper";
/**Carousel Images */
import bigcommerce from "../../public/logos/bigcommerce.webp"
import contentful from "../../public/logos/contentful.webp"
import dato from "../../public/logos/dato.webp"
import next from "../../public/logos/next.webp"
import prismic from "../../public/logos/prismic.webp"
import remix from "../../public/logos/remix.webp"
import sanity from "../../public/logos/sanity.webp"
import shopify from "../../public/logos/shopify.webp"
import snipcart from "../../public/logos/snipcart.webp"
import strapi from "../../public/logos/strapi.webp"
const carouselImages = [
  { url: bigcommerce, alt: "bigcommerce" },
  { url: contentful, alt: "contentful" },
  { url: dato, alt: "dato" },
  { url: next, alt: "next" },
  { url: prismic, alt: "prismic" },
  { url: remix, alt: "remix" },
  { url: sanity, alt: "sanity" },
  { url: shopify, alt: "shopify" },
  { url: snipcart, alt: "snipcart" },
  { url: strapi, alt: "strapi" },
]

const Carousel = () => {
  return (
    <Swiper
            modules={[Autoplay]}
            slidesPerView={5}
            spaceBetween={30}
            loop={true}
            autoplay={{
              disableOnInteraction:false,
              pauseOnMouseEnter:true
            }}
            
            speed={500}
            
            grabCursor
            breakpoints={{
              0: {
                  slidesPerView: 3,
                  spaceBetween: 15,
              },
              480: {
                slidesPerView: 4,
                spaceBetween: 15,
              },
              600: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              800: {
                slidesPerView: 4,
                spaceBetween: 25,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 25,
              },
              1351: {
                slidesPerView: 5,
                spaceBetween: 30,
              }
          }}
      >
        {
          carouselImages.map((image) => (
            <SwiperSlide>
              <div className="h-[100px] w-full flex items-center justify-center">
                <img src={image.url} alt={image.alt} />
              </div>
            </SwiperSlide>

          ))
        }
        </Swiper>
  )
}

export default Carousel