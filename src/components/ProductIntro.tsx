// import "./productIntro.scss";
//*Imgs //
import manUsingGlasses from "/src/assets/img/manUsingGlassesV2.avif";
import amberLensesSideDesktop from "/src/assets/img/product/amberLensesSide.avif";
import amberLensesSideMobile from "/src/assets/img/product/amberLensesSide.avif";
import womanUsingGlassesDesktop from "/src/assets/img/womanUsingAV.avif";
import womanUsingGlassesMobile from "/src/assets/img/womanUsingAV.avif";
import amberLensesSideTwoDesktop from "/src/assets/img/product/amberLensesSideTwoMobile.avif";
import amberLensesSideTwoMobile from "/src/assets/img/product/amberLensesSideTwoMobile.avif";
import amberLensesFrontDesktop from "/src/assets/img/product/amberLensesFrontMobile.avif";
import amberLensesFrontMobile from "/src/assets/img/product/amberLensesFrontMobile.avif";
import manUsingGlassesMini from "/src/assets/img/manUsingGlassesMiniV2.webp";
import womanUsingGlassesMini from "/src/assets/img/womanUsingAV-mini.avif";
import amberLensesSideMini from "/src/assets/img/product/amberLensesSideMini.avif";
import amberLensesSideTwoMini from "/src/assets/img/product/amberLensesSideTwoMini.avif";
import amberLensesFrontMini from "/src/assets/img/product/amberLensesFrontMini.avif";
import type { JSX } from "preact/jsx-runtime";

const ProductIntro = () => {
  const changeSlide = (slideId: string) => {
    const targetSlide = document.getElementById(slideId);

    if (targetSlide) {
      targetSlide.scrollIntoView({ block: "nearest", inline: "center" });
    }
    const miniImgs = document.querySelectorAll<HTMLImageElement>(".miniImg");
    miniImgs.forEach((img) => (img.style.borderColor = "#697172"));
    miniImgs.forEach((img) => {
      if (img.dataset.img == slideId) {
        img.style.borderColor = "#ff9068";
      }
    });
  };

  const handleMiniImgs = (e: JSX.TargetedMouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const parent = target.parentElement as HTMLElement | null; // Use parentElement (better than parentNode)

    if (!parent) return; // Ensure parent exists before accessing dataset

    const slideNumber = parent.dataset.img;
    if (slideNumber) changeSlide(slideNumber);

    const miniImgs = document.querySelectorAll<HTMLImageElement>(".miniImg");

    miniImgs.forEach((img) => (img.style.borderColor = "#697172"));

    (e.currentTarget as HTMLElement).style.borderColor = "#ff9068";
  };

  return (
    <>
      <div
        className="h-full w-full md:w-[70%] lg:w-full md:flex md:items-center lg:items-start"
        id="product"
      >
        <div
          className="flex flex-col xl:flex-row gap-4 mt-2 p-2 rounded-[20px] h-full 
  shadow-[4px_4px_4px_4px_rgba(0,0,0,0.35)] 
  bg-gradient-to-br from-gray-100 via-[#1e1e1e] to-slate-500 md:self-center"
          id="productSlider"
        >
          <div className="flex-1 max-w-full h-full items-center">
            <div
              id="carouselImgs"
              className="w-full carousel rounded-box xl:h-[450px]"
            >
              <div id="slide1" className="carousel-item relative w-full h-full">
                <img
                  src={manUsingGlasses.src}
                  className="w-full"
                  alt="allModels"
                  loading="eager"
                />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-0.5 right-5 top-1/2 w-[98%]">
                  <button
                    className="btn btn-circle btn-md text-lg bg-[#FFAC57]/50 border-none text-white"
                    onClick={() => changeSlide("slide5")}
                  >
                    ❮
                  </button>
                  <button
                    className="btn btn-circle btn-md text-lg bg-[#FFAC57]/50 border-none text-white"
                    onClick={() => changeSlide("slide2")}
                  >
                    ❯
                  </button>
                </div>
              </div>
              <div id="slide2" className="carousel-item relative w-full">
                <picture className="w-full">
                  {/* <!-- Mobile --> */}
                  <source
                    media="(max-width: 480px)"
                    srcSet={amberLensesSideMobile.src}
                  />
                  {/* <!-- Desktop --> */}
                  <source
                    media="(min-width: 1200px)"
                    srcSet={amberLensesSideDesktop.src}
                  />
                  <img
                    src={amberLensesSideDesktop.src}
                    className="w-full slide2"
                    alt="Amber lenses Side"
                    loading="eager"
                  />
                </picture>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-0.5 right-5 top-1/2 w-[98%]">
                  <button
                    className="btn btn-circle btn-md text-lg bg-[#FFAC57]/60 border-none text-white"
                    onClick={() => changeSlide("slide1")}
                  >
                    ❮
                  </button>
                  <button
                    className="btn btn-circle btn-md text-lg bg-[#FFAC57]/60 border-none text-white"
                    onClick={() => changeSlide("slide3")}
                  >
                    ❯
                  </button>
                </div>
              </div>
              <div id="slide3" className="carousel-item relative w-full ">
                <picture className="w-full">
                  {/* <!-- Mobile --> */}
                  <source
                    media="(max-width: 480px)"
                    srcSet={womanUsingGlassesMobile.src}
                    rel="preload"
                  />
                  {/* <!-- Desktop --> */}
                  <source
                    media="(min-width: 1200px)"
                    srcSet={womanUsingGlassesDesktop.src}
                    rel="preload"
                  />
                  <img
                    src={amberLensesFrontDesktop.src}
                    className="w-full slide2"
                    alt="Amber lenses Side"
                    loading="eager"
                  />
                </picture>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-0.5 right-5 top-1/2 w-[98%]">
                  <button
                    className="btn btn-circle btn-md text-lg bg-[#FFAC57]/60 border-none text-white"
                    onClick={() => changeSlide("slide2")}
                  >
                    ❮
                  </button>
                  <button
                    className="btn btn-circle btn-md text-lg bg-[#FFAC57]/60 border-none text-white"
                    onClick={() => changeSlide("slide4")}
                  >
                    ❯
                  </button>
                </div>
              </div>
              <div id="slide4" className="carousel-item relative w-full">
                <picture className="w-full">
                  {/* <!-- Mobile --> */}
                  <source
                    media="(max-width: 480px)"
                    srcSet={amberLensesFrontMobile.src}
                    rel="preload"
                  />
                  {/* <!-- Desktop --> */}
                  <source
                    media="(min-width: 1200px)"
                    srcSet={amberLensesFrontDesktop.src}
                    rel="preload"
                  />
                  <img
                    src={amberLensesFrontDesktop.src}
                    className="w-full slide2"
                    alt="Amber lenses Side"
                    loading="lazy"
                  />
                </picture>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-0.5 right-5 top-1/2 w-[98%]">
                  <button
                    className="btn btn-circle btn-md text-lg bg-[#FFAC57]/60 border-none text-white"
                    onClick={() => changeSlide("slide3")}
                  >
                    ❮
                  </button>
                  <button
                    className="btn btn-circle btn-md text-lg bg-[#FFAC57]/60 border-none text-white"
                    onClick={() => changeSlide("slide5")}
                  >
                    ❯
                  </button>
                </div>
              </div>
              <div id="slide5" className="carousel-item relative w-full">
                <picture className="w-full">
                  {/* <!-- Mobile --> */}
                  <source
                    media="(max-width: 480px)"
                    srcSet={amberLensesSideTwoMobile.src}
                    rel="preload"
                  />
                  {/* <!-- Desktop --> */}
                  <source
                    media="(min-width: 1200px)"
                    srcSet={amberLensesSideTwoDesktop.src}
                    rel="preload"
                  />
                  <img
                    src={amberLensesSideTwoDesktop.src}
                    className="w-full slide2"
                    alt="Amber lenses Side"
                    loading="lazy"
                  />
                </picture>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-0.5 right-5 top-1/2 w-[98%]">
                  <button
                    className="btn btn-circle btn-md text-lg bg-[#FFAC57]/60 border-none text-white"
                    onClick={() => changeSlide("slide4")}
                  >
                    ❮
                  </button>
                  <button
                    className="btn btn-circle btn-md text-lg bg-[#FFAC57]/60 border-none text-white"
                    onClick={() => changeSlide("slide1")}
                  >
                    ❯
                  </button>
                </div>
              </div>
            </div>
            <div className="flex w-full gap-2 mt-2 xl:mt-8">
              {[
                manUsingGlassesMini,
                amberLensesSideMini,
                womanUsingGlassesMini,
                amberLensesFrontMini,
                amberLensesSideTwoMini,
              ].map((img, i) => (
                <div
                  key={i}
                  className="flex-1 h-[60px] w-[60px] rounded-md overflow-hidden border-2 border-[#697172] cursor-pointer hover:border-[#ff9068] transition-all miniImg"
                  data-img={`slide${i + 1}`}
                  onClick={handleMiniImgs}
                >
                  <img src={img.src} alt="" className="w-full h-full" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductIntro;
