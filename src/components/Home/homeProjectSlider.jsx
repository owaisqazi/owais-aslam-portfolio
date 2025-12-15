import React, { useEffect } from 'react';
import '../../../public/assets/js/carousel'; // make sure slick is imported

const HomeProjectSlider = () => {
  useEffect(() => {
    const $nav = $(".slick-nav");
    const $for = $(".slick-for");

    if ($nav.length && !$nav.hasClass("slick-initialized")) {
      $nav.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true, // ✅ important for iOS
        infinite: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        swipe: true,
        touchMove: true,
        asNavFor: ".slick-for",
        accessibility: false,
      });
    }

    if ($for.length && !$for.hasClass("slick-initialized")) {
      $for.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        arrows: false,
        fade: true,
        swipe: true,
        adaptiveHeight: true,
        asNavFor: ".slick-nav",
        accessibility: false,
      });
    }

    // Cleanup
    return () => {
      if ($nav.hasClass("slick-initialized")) $nav.slick("unslick");
      if ($for.hasClass("slick-initialized")) $for.slick("unslick");
    };
  }, []);

  return (
    <div className="section-selected-work flat-spacing pb-0" id="workScroll" style={{ touchAction: 'pan-y' }}>
      <div className="bg-img effectFade fadeUp">
        <img
          loading="lazy"
          width={1440}
          height={720}
          src="/assets/images/item/mountain.png"
          alt="Image"
          className="w-full object-cover"
        />
      </div>

      <div className="content-wrap-1 wrap-list-btn">
        <div className="container">
          <div className="row">
            {/* LEFT */}
            <div className="col-md-4">
              <div className="col-left">
                <p className="mini-title text-caption text-white-64">SELECTED WORKS</p>
                <div className="position-relative no-div">
                  <div className="slick-nav">
                    <div><p className="text-slide text-display-2 fw-semibold">Future</p></div>
                    <div><p className="text-slide text-display-2 fw-semibold">NexoPay</p></div>
                    <div><p className="text-slide text-display-2 fw-semibold">Seeson</p></div>
                  </div>
                  <div className="image-award">
                    <img
                      loading="lazy"
                      width={80}
                      height={80}
                      src="/assets/images/item/award.svg"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-md-8">
              <div className="col-right">
                <div className="slick-for">
                  <div>
                    <div className="image">
                      <img src="/assets/images/section/work-1.jpg" alt="Image" />
                    </div>
                  </div>
                  <div>
                    <div className="image">
                      <img src="/assets/images/section/work-2.jpg" alt="Image" />
                    </div>
                  </div>
                  <div>
                    <div className="image">
                      <img src="/assets/images/section/work-3.jpg" alt="Image" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="content-wrap-2">
        <div className="container position-relative z-5">
          <div className="row">
            <div className="col-md-4">
              <ul className="work-tag">
                <li>
                  <div className="group-btn">
                    <a className="tf-btn style-2">BRANDING</a>
                    <a className="tf-btn style-2">VISUAL IDENTITY</a>
                  </div>
                </li>
                <li>
                  <div className="group-btn">
                    <a className="tf-btn style-2">WEBSITE DESIGN</a>
                    <a className="tf-btn style-2">BRANDING</a>
                    <a className="tf-btn style-2">VISUAL IDENTITY</a>
                  </div>
                </li>
                <li>
                  <div className="group-btn">
                    <a className="tf-btn style-2">BRANDING</a>
                    <a className="tf-btn style-2">VISUAL IDENTITY</a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-4">
              <div className="group-btn-slider">
                <div className="btn-nav-swiper nav-prev-swiper">PREV</div>
                <div className="btn-nav-swiper nav-next-swiper">NEXT</div>
              </div>
            </div>

            <div className="col-6 col-md-4">
              <div className="col-right">
                <p className="text-display-2 fw-semibold">
                  20<span className="text-primary">25</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProjectSlider;
