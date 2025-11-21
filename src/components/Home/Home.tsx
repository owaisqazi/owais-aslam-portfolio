import React from 'react'

const Home = () => {
  return (
    <>
      <main id="wrapper">
        {/* /Header */}
        {/* Hero Banner */}
        <div className="section-hero-v1">
          <div className="overlay" />
          <div className="bg-video">
            <video className="" muted autoPlay loop playsInline>
              <source src="/assets/images/video/corridor.webm" type="video/mp4" />
            </video>
            <div className="video-overlay" />
            <div className="video-overlay-2" />
            <div className="video-overlay-2" />
          </div>
          <div className="content-wrap">
            <div className="container">
              <div className="row">
                <div className="col-md-8">
                  <div className="col-left">
                    <ul className="tf-list vertical text-caption fw-medium ">
                      <li>
                        <a href="#" className="link effectFade fadeUp">
                          WEB-DEVELOPMENT (FRONTEND)
                        </a>
                      </li>
                      <li>
                        <a href="#" className="link effectFade fadeUp">
                          UI/UX DESIGN & BRANDING
                        </a>
                      </li>
                      <li>
                        <a href="#" className="link effectFade fadeUp">
                          RESPONSIVE & MOBILE-FRIENDLY DESIGN
                        </a>
                      </li>
                      <li>
                        <a href="#" className="link effectFade fadeUp">
                          CUSTOM WEB APPLICATIONS
                        </a>
                      </li>
                      <li>
                        <a href="#" className="link effectFade fadeUp">
                          WEBSITE MAINTENANCE & OPTIMIZATION
                        </a>
                      </li>
                    </ul>
                    <div className="davies-large">
                      <div className="effectFade fadeRotateX">
                        OWAIS<span className="text-primary">_</span><br /> ASLAM
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="col-right">
                    <div className="top text-caption fw-medium d-flex justify-content-between align-items-center effectFade">
                      <p className="title text-has-dot ">
                        <span className="br-dot" />
                        AVAILABLE FOR WORK
                      </p>
                      <span>© 2025</span>
                    </div>
                    <div className="bot">
                      <p className="desc text-white-64 effectFade fadeRight view-visible">
                        I am Owais Aslam, a passionate Web Developer specializing in crafting bold brands and modern, responsive websites. My work combines creativity with functionality, ensuring each project delivers an impactful user experience. I focus on clean design, intuitive navigation, and scalable solutions that adapt as your vision grows. Whether it’s building a brand identity or developing a full-fledged web application, I bring precision, innovation, and attention to detail to every project.
                      </p>
                      <div className="effectFade fadeRight view-visible">
                        <a href="#contactScroll" className="tf-btn ">
                          START A PROJECT
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Hero Banner */}
        {/* Select Work */}
        <div className="section-selected-work flat-spacing pb-0" id="workScroll">
          <div className="bg-img effectFade fadeUp">
            <img
              loading="lazy"
              width={1440}
              height={720}
              src="/assets/images/item/mountain.png"
              alt="Image"
            />
          </div>
          <div className="content-wrap-1 wrap-list-btn">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="col-left mb-md-0">
                    <p className="mini-title text-caption text-white-64 effectFade fadeUp">
                      SELECTED WORKS
                    </p>
                    <div className="position-relative effectFade fadeUp no-div">
                      <div className="slick-nav">
                        {/* Clone 1 */}
                        <div>
                          <p className="text-slide text-display-2 fw-semibold">
                            Future
                          </p>
                        </div>
                        <div>
                          <p className="text-slide text-display-2 fw-semibold">
                            NexoPay
                          </p>
                        </div>
                        <div>
                          <p className="text-slide text-display-2 fw-semibold">
                            Seeson
                          </p>
                        </div>
                        {/* Clone 2 */}
                        <div>
                          <p className="text-slide text-display-2 fw-semibold">
                            Future
                          </p>
                        </div>
                        <div>
                          <p className="text-slide text-display-2 fw-semibold">
                            NexoPay
                          </p>
                        </div>
                        <div>
                          <p className="text-slide text-display-2 fw-semibold">
                            Seeson
                          </p>
                        </div>
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
                <div className="col-md-8">
                  <div className="col-right">
                    <div className="slick-for">
                      {/* Clone 1 */}
                      <div>
                        <div className="image effectFade fadeZoom">
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
                      {/* Clone 2 */}
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
          <div className="content-wrap-2">
            <div className="container position-relative z-5">
              <div className="row">
                <div className="col-md-4">
                  <ul className="work-tag">
                    {/* Clone 1 */}
                    <li>
                      <div className="group-btn">
                        <a href="#" className="tf-btn style-2">
                          BRANDING
                        </a>
                        <a href="#" className="tf-btn style-2">
                          VISUAL IDENTITY
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="group-btn">
                        <a href="#" className="tf-btn style-2">
                          WEBSITE DESIGN
                        </a>
                        <a href="#" className="tf-btn style-2">
                          BRANDING
                        </a>
                        <a href="#" className="tf-btn style-2">
                          VISUAL IDENTITY
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="group-btn">
                        <a href="#" className="tf-btn style-2">
                          BRANDING
                        </a>
                        <a href="#" className="tf-btn style-2">
                          VISUAL IDENTITY
                        </a>
                      </div>
                    </li>
                    {/* Clone 2 */}
                    <li>
                      <div className="group-btn">
                        <a href="#" className="tf-btn style-2">
                          BRANDING
                        </a>
                        <a href="#" className="tf-btn style-2">
                          VISUAL IDENTITY
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="group-btn">
                        <a href="#" className="tf-btn style-2">
                          WEBSITE DESIGN
                        </a>
                        <a href="#" className="tf-btn style-2">
                          BRANDING
                        </a>
                        <a href="#" className="tf-btn style-2">
                          VISUAL IDENTITY
                        </a>
                      </div>
                    </li>
                    <li>
                      <div className="group-btn">
                        <a href="#" className="tf-btn style-2">
                          BRANDING
                        </a>
                        <a href="#" className="tf-btn style-2">
                          VISUAL IDENTITY
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-md-4">
                  <div className="group-btn-slider">
                    <div className="btn-nav-swiper cs-pointer text-caption fw-medium link nav-prev-swiper">
                      <i className="icon icon-arrow-long-left" />
                      PREV
                    </div>
                    <div className="btn-nav-swiper cs-pointer text-caption fw-medium link nav-next-swiper">
                      NEXT
                      <i className="icon icon-arrow-long-right" />
                    </div>
                  </div>
                </div>
                <div className="col-6 col-md-4">
                  <div className="col-right">
                    <p className="text-display-2 letter-space--3 fw-semibold">
                      20<span className="text-primary">25</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* /Select Work */}
        {/* Feature */}
        {/* <section className="section-feature flat-spacing tf-btn-swiper-main">
          <div className="container">
            <div className="s-header">
              <h2 className="text-display-2 fw-semibold letter-space--3 effectFade fadeUp">
                Featured Templates
              </h2>
              <a href="#" className="tf-btn">
                BROWSE ALL
              </a>
            </div>
            <div className="position-relative">
              <div
                dir="ltr"
                className="swiper tf-swiper swiper-feature"
                data-preview={2}
                data-tablet={2}
                data-mobile-sm={1}
                data-mobile={1}
                data-space-lg={40}
                data-space-md={30}
                data-space={15}
                data-pagination={1}
                data-pagination-sm={1}
                data-pagination-md={2}
                data-pagination-lg={2}
              >
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="wg-feature-v01 hover-img main-mouse-hover">
                      <a href="#" className="feature-image img-style">
                        <img
                          loading="lazy"
                          width={628}
                          height={471}
                          src="/assets/images/section/feature-1.jpg"
                          alt="Image"
                        />
                      </a>
                      <div className="feature-content">
                        <div className="info">
                          <p className="tag text-white-64 letter-space--1">
                            Portfolio
                          </p>
                          <h5 className="name letter-space--2">
                            <a href="#" className="link">
                              Portz
                            </a>
                          </h5>
                        </div>
                        <h5 className="price letter-space--2 text-primary">$49</h5>
                      </div>
                      <div className="tf-mouse">
                        <a href="#" className="action tf-btn-2">
                          <i className="icon icon-arrow-long-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="wg-feature-v01 hover-img main-mouse-hover">
                      <a href="#" className="feature-image img-style">
                        <img
                          loading="lazy"
                          width={628}
                          height={471}
                          src="/assets/images/section/feature-2.jpg"
                          alt="Image"
                        />
                      </a>
                      <div className="feature-content">
                        <div className="info">
                          <p className="tag text-white-64 letter-space--1">Agency</p>
                          <h5 className="name letter-space--2">
                            <a href="#" className="link">
                              Agenz
                            </a>
                          </h5>
                        </div>
                        <h5 className="price letter-space--2 text-primary">$49</h5>
                      </div>
                      <div className="tf-mouse">
                        <a href="#" className="action tf-btn-2">
                          <i className="icon icon-arrow-long-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide main-mouse-hover">
                    <div className="wg-feature-v01 hover-img">
                      <a href="#" className="feature-image img-style">
                        <img
                          loading="lazy"
                          width={628}
                          height={471}
                          src="/assets/images/section/feature-1.jpg"
                          alt="Image"
                        />
                      </a>
                      <div className="feature-content">
                        <div className="info">
                          <p className="tag text-white-64 letter-space--1">
                            Portfolio
                          </p>
                          <h5 className="name letter-space--2">
                            <a href="#" className="link">
                              Portz
                            </a>
                          </h5>
                        </div>
                        <h5 className="price letter-space--2 text-primary">$49</h5>
                      </div>
                      <div className="tf-mouse">
                        <a href="#" className="action tf-btn-2">
                          <i className="icon icon-arrow-long-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="group-btn-slider">
                  <div className="btn-nav-swiper text-caption fw-medium link nav-prev-swiper">
                    <i className="icon icon-arrow-long-left" />
                    PREV
                  </div>
                  <div className="btn-nav-swiper text-caption fw-medium link nav-next-swiper">
                    NEXT
                    <i className="icon icon-arrow-long-right" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* /Feature */}
        {/* Service */}
        <section
          className="section-service-2 overflow-hidden flat-spacing"
          id="serviceScroll"
        >
          {/* Background Images */}
          <div className="bg-image-list">
            <div className="bg-image">
              <img
                loading="lazy"
                width={1440}
                height={938}
                src="https://images.unsplash.com/photo-1637775297458-7443ffd545b2?auto=format&fit=crop&w=1440&q=80"
                alt="Black Background 1"
              />
              <div className="img-item">
                <img
                  loading="lazy"
                  width={1440}
                  height={938}
                  src="/assets/images/item/overlay.png"
                  alt="Overlay"
                />
              </div>
            </div>
            <div className="bg-image">
              <img
                loading="lazy"
                width={1440}
                height={938}
                src="https://images.unsplash.com/photo-1581362716668-90cdec6b4882?auto=format&fit=crop&w=1440&q=80"
                alt="Black Background 2"
              />
              <div className="img-item">
                <img
                  loading="lazy"
                  width={1440}
                  height={938}
                  src="/assets/images/item/overlay.png"
                  alt="Overlay"
                />
              </div>
            </div>
            <div className="bg-image">
              <img
                loading="lazy"
                width={1440}
                height={938}
                src="https://plus.unsplash.com/premium_photo-1701091956254-8f24ea99a53b?auto=format&fit=crop&w=1440&q=80"
                alt="Black Background 3"
              />
              <div className="img-item">
                <img
                  loading="lazy"
                  width={1440}
                  height={938}
                  src="/assets/images/item/overlay.png"
                  alt="Overlay"
                />
              </div>
            </div>
          </div>

          {/* Section Header */}
          <div className="container">
            <div className="s-header s-header-scroll">
              <h2 className="text-display-2 fw-semibold effectFade fadeUp">
                Services
              </h2>
            </div>
          </div>

          {/* Services List */}
          <div className="container">
            <div className="wrap-control position-relative">

              {/* Frontend Development */}
              <div className="wg-service-2">
                <div className="main-image">
                  <div className="image">
                    <img
                      loading="lazy"
                      width={424}
                      height={530}
                      src="https://imgv2-1-f.scribdassets.com/img/document/638533542/original/fe4813301e/1716437620?v=1"
                      alt="Frontend Development"
                    />
                  </div>
                  <div className="action tf-btn-2 cs-pointer">
                    <i className="icon icon-arrow-long-right" />
                  </div>
                </div>
                <div className="center">
                  <h5 className="title">Frontend Development</h5>
                  <p className="desc">
                    I build dynamic, high-performance web applications using React.js and Next.js, creating seamless user experiences that are responsive and scalable.
                  </p>
                  <div className="br-line d-flex" />
                  <ul className="tf-list vertical">
                    <li className="letter-space--1">
                      <span className="text-primary">//</span> React.js SPA Development
                    </li>
                    <li className="letter-space--1">
                      <span className="text-primary">//</span> Next.js SSR & SSG Applications
                    </li>
                    <li className="letter-space--1">
                      <span className="text-primary">//</span> Responsive & Mobile-Friendly Layouts
                    </li>
                    <li className="letter-space--1">
                      <span className="text-primary">//</span> State Management (Redux, Zustand)
                    </li>
                    <li className="letter-space--1">
                      <span className="text-primary">//</span> Performance & SEO Optimization
                    </li>
                  </ul>
                  <a href="#contactScroll" className="tf-btn">
                    START A PROJECT
                  </a>
                </div>
                <div className="image-simu"></div>
                <div className="image-2">
                  <img
                    loading="lazy"
                    width={212}
                    height={265}
                    src="https://imgv2-1-f.scribdassets.com/img/document/638533542/original/fe4813301e/1716437620?v=1"
                    alt="Frontend Development"
                  />
                </div>
              </div>

              {/* UI/UX Design & Branding */}
              <div className="wg-service-2">
                <div className="main-image">
                  <div className="image">
                    <img
                      loading="lazy"
                      width={424}
                      height={530}
                      src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/fb65cc151474857.630cee080e74a.jpg"
                      alt="UI/UX Design"
                    />
                  </div>
                  <div className="action tf-btn-2 cs-pointer">
                    <i className="icon icon-arrow-long-left" />
                  </div>
                </div>
                <div className="center">
                  <h5 className="title">UI/UX Design & Branding</h5>
                  <p className="desc">
                    I craft visually appealing and user-friendly interfaces, combining design strategy and branding to leave a lasting impression on your audience.
                  </p>
                  <div className="br-line d-flex" />
                  <ul className="tf-list vertical">
                    <li className="letter-space--1">
                      <span className="text-primary">//</span> UI/UX Design
                    </li>
                    <li className="letter-space--1">
                      <span className="text-primary">//</span> Branding & Visual Identity
                    </li>
                    <li className="letter-space--1">
                      <span className="text-primary">//</span> Logo & Typography
                    </li>
                    <li className="letter-space--1">
                      <span className="text-primary">//</span> Color Palette Creation
                    </li>
                    <li className="letter-space--1">
                      <span className="text-primary">//</span> Brand Guidelines
                    </li>
                  </ul>
                  <a href="#contactScroll" className="tf-btn">
                    START A PROJECT
                  </a>
                </div>
                <div className="image-simu"></div>
                <div className="image-2">
                  <img
                    loading="lazy"
                    width={212}
                    height={265}
                    src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/fb65cc151474857.630cee080e74a.jpg"
                    alt="UI/UX Design"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* /Service */}
        {/* Process */}
        <section className="section-process flat-spacing">
          <div className="container">
            <div className="s-header">
              <h2 className="title text-display-2 letter-space--3 fw-semibold effectFade fadeUp">
                The Process
              </h2>
            </div>
            <div className="process-list">
              <div dir="ltr" className="swiper swiper-process">
                <div className="swiper-wrapper">
                  {/* Frontend Step 1 */}
                  <div className="swiper-slide effectFade fadeUp no-div">
                    <div className="wg-process">
                      <div className="bg-img">
                        <img
                          loading="lazy"
                          width={509}
                          height={509}
                          src="/assets/images/item/bg-1.jpg"
                          alt="Image"
                        />
                      </div>
                      <div className="content position-relative z-5">
                        <div className="img-icon">
                          <img
                            loading="lazy"
                            width={120}
                            height={120}
                            src="/assets/images/item/process-1.png"
                            alt="Frontend Icon"
                          />
                        </div>
                        <div>
                          <h5 className="title letter-space--2">
                            <a href="#" className="link">
                              Plan & Discover <br className="d-none d-sm-block" />
                              Frontend Requirements
                            </a>
                          </h5>
                          <div className="br-line" />
                          <div className="bot">
                            <div className="img-item">
                              <img
                                loading="lazy"
                                width={81}
                                height={68}
                                src="/assets/images/item/S1.svg"
                                alt="Image"
                              />
                            </div>
                            <p className="desc text-body-3 letter-space--1 text-white-64">
                              I start by understanding project goals, frontend requirements, and integration needs. This sets a clear plan for building responsive and scalable applications.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Frontend Step 2 */}
                  <div className="swiper-slide effectFade fadeUp no-div">
                    <div className="wg-process">
                      <div className="bg-img">
                        <img
                          loading="lazy"
                          width={509}
                          height={509}
                          src="/assets/images/item/bg-1.jpg"
                          alt="Image"
                        />
                      </div>
                      <div className="content position-relative z-5">
                        <div className="img-icon">
                          <img
                            loading="lazy"
                            width={120}
                            height={120}
                            src="/assets/images/item/process-2.png"
                            alt="Frontend Icon"
                          />
                        </div>
                        <div>
                          <h5 className="title letter-space--2">
                            <a href="#" className="link">
                              Develop & Integrate <br className="d-none d-sm-block" />
                              React.js & Next.js
                            </a>
                          </h5>
                          <div className="br-line" />
                          <div className="bot">
                            <div className="img-item">
                              <img
                                loading="lazy"
                                width={99}
                                height={68}
                                src="/assets/images/item/S2.svg"
                                alt="Image"
                              />
                            </div>
                            <p className="desc text-body-3 letter-space--1 text-white-64">
                              I implement dynamic components, integrate APIs, and set up state management (Redux/Zustand) to ensure the frontend is performant, scalable, and maintainable.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Frontend Step 3 */}
                  <div className="swiper-slide effectFade fadeUp no-div">
                    <div className="wg-process">
                      <div className="bg-img">
                        <img
                          loading="lazy"
                          width={509}
                          height={509}
                          src="/assets/images/item/bg-1.jpg"
                          alt="Image"
                        />
                      </div>
                      <div className="content position-relative z-5">
                        <div className="img-icon">
                          <img
                            loading="lazy"
                            width={120}
                            height={120}
                            src="/assets/images/item/process-3.png"
                            alt="Frontend Icon"
                          />
                        </div>
                        <div>
                          <h5 className="title letter-space--2">
                            <a href="#" className="link">
                              Test, Optimize & Deploy <br className="d-none d-sm-block" />
                              Frontend Application
                            </a>
                          </h5>
                          <div className="br-line" />
                          <div className="bot">
                            <div className="img-item">
                              <img
                                loading="lazy"
                                width={99}
                                height={68}
                                src="/assets/images/item/S3.svg"
                                alt="Image"
                              />
                            </div>
                            <p className="desc text-body-3 letter-space--1 text-white-64">
                              I ensure cross-device responsiveness, optimize performance, implement SEO best practices, and deploy the app. Users get a fast, smooth, and scalable experience.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div className="sw-dot-default tf-pag-nav justify-content-center d-xl-none" />
              </div>
            </div>
          </div>
        </section>

        {/* /Process */}
        {/* About Me */}
        <section className="section-about-me flat-spacing" id="aboutScroll">
          <div className="s-img-bg">
            <img
              loading="lazy"
              width={1440}
              height={906}
              src="/assets/images/section/bg-about.jpg"
              alt="Background"
            />
          </div>
          <div className="container position-relative z-5">
            <div className="row">
              <div className="col-lg-5">
                <div className="col-left mb-lg-0">
                  <div className="davies-video">
                    <video
                      className="video"
                      muted
                      autoPlay
                      loop
                      playsInline
                    >
                      <source
                        src="/assets/images/video/davies-video.mp4"
                        type="video/mp4"
                      />
                    </video>
                    <div className="overlay v1" />
                    <div className="overlay mark-1" />
                    <div className="overlay mark-2" />
                  </div>
                  <div className="signature">
                    <img
                      loading="lazy"
                      width={111}
                      height={40}
                      src="/assets/images/logo/davies-small.svg"
                      alt="Image"
                    />
                  </div>
                  <div className="badget">
                    <img
                      loading="lazy"
                      width={156}
                      height={156}
                      src="/assets/images/item/badge-design.png"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
              <div className="offset-lg-1 col-lg-6 offset-xl-2 col-xl-5">
                <div className="col-right">
                  <h6 className="mini-title text-caption text-white-64">ABOUT ME</h6>
                  <div className="text-color-change">
                    <h5 className="desc letter-space--2 fw-normal ">
                      I’m a frontend developer specializing in React.js and Next.js, building dynamic, responsive, and high-performance web applications. I focus on creating seamless user experiences and scalable solutions.
                    </h5>
                  </div>
                  <div className="br-line" />
                  <ul className="experience-list overflow-hidden">
                    <li>Work Experience</li>
                    <li className="effectFade fadeRight">
                      <p className="exp_name">Frontend Developer at HNH Soft Tech Solutions</p>
                      <p className="exp_year">2022 - 2025</p>
                    </li>
                    <li className="effectFade fadeRight">
                      <p className="exp_name">Independent Frontend Developer</p>
                      <p className="exp_year">2021 - 2022</p>
                    </li>
                    <li className="effectFade fadeRight">
                      <p className="exp_name">Junior Frontend Developer at Brightline Studio</p>
                      <p className="exp_year">2020 - 2021</p>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>
        {/* About Me */}
        {/* Tech Stack */}
        <section className="section-tech-stack flat-spacing">
          <div className="container">
            <h6 className="mini-title text-caption text-white-64 text-center">
              TECH STACK
            </h6>
          </div>
          <ul className="tech-stack-list main-action-active">
            <li className="wg-tech btn-active active">
              <div className="tech_text letter-space--2">
                <p className="h1 fw-normal">Figma</p>
                <h6 className="fw-normal">96%</h6>
              </div>
              <div className="infiniteSlide_tech_main">
                <div className="infiniteSlide infiniteSlide_tech" data-clone={5}>
                  {/* Clone 1 */}
                  <div className="app_name">
                    <div className="tech_text letter-space--2">
                      <p className="h1 text">Figma</p>
                      <h6 className="process fw-normal">96%</h6>
                    </div>
                  </div>
                  <div className="app_icon">
                    <img
                      loading="lazy"
                      width={136}
                      height={68}
                      src="/assets/images/section/app-figma.png"
                      alt="Image"
                    />
                  </div>
                  {/* Clone 2 */}
                  <div className="app_name">
                    <div className="tech_text letter-space--2">
                      <p className="h1 text">Figma</p>
                      <h6 className="process fw-normal">96%</h6>
                    </div>
                  </div>
                  <div className="app_icon">
                    <img
                      loading="lazy"
                      width={136}
                      height={68}
                      src="/assets/images/section/app-figma.png"
                      alt="Image"
                    />
                  </div>
                  {/* Clone 3 */}
                  <div className="app_name">
                    <div className="tech_text letter-space--2">
                      <p className="h1 text">Figma</p>
                      <h6 className="process fw-normal">96%</h6>
                    </div>
                  </div>
                  <div className="app_icon">
                    <img
                      loading="lazy"
                      width={136}
                      height={68}
                      src="/assets/images/section/app-figma.png"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </li>
            <li className="wg-tech btn-active">
              <div className="tech_text letter-space--2">
                <p className="h1 fw-normal">Framer</p>
                <h6 className="fw-normal">98%</h6>
              </div>
              <div className="infiniteSlide_tech_main">
                <div className="infiniteSlide infiniteSlide_tech" data-clone={5}>
                  {/* Clone 1 */}
                  <div className="app_name">
                    <div className="tech_text letter-space--2">
                      <p className="h1 text">Framer</p>
                      <h6 className="process fw-normal">98%</h6>
                    </div>
                  </div>
                  <div className="app_icon">
                    <img
                      loading="lazy"
                      width={136}
                      height={68}
                      src="/assets/images/section/app-framer.png"
                      alt="Image"
                    />
                  </div>
                  {/* Clone 2 */}
                  <div className="app_name">
                    <div className="tech_text letter-space--2">
                      <p className="h1 text">Framer</p>
                      <h6 className="process fw-normal">98%</h6>
                    </div>
                  </div>
                  <div className="app_icon">
                    <img
                      loading="lazy"
                      width={136}
                      height={68}
                      src="/assets/images/section/app-framer.png"
                      alt="Image"
                    />
                  </div>
                  {/* Clone 3 */}
                  <div className="app_name">
                    <div className="tech_text letter-space--2">
                      <p className="h1 text">Framer</p>
                      <h6 className="process fw-normal">98%</h6>
                    </div>
                  </div>
                  <div className="app_icon">
                    <img
                      loading="lazy"
                      width={136}
                      height={68}
                      src="/assets/images/section/app-framer.png"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </li>
            <li className="wg-tech btn-active">
              <div className="tech_text letter-space--2">
                <p className="h1 fw-normal">Webflow</p>
                <h6 className="fw-normal">92%</h6>
              </div>
              <div className="infiniteSlide_tech_main">
                <div className="infiniteSlide infiniteSlide_tech" data-clone={5}>
                  {/* Clone 1 */}
                  <div className="app_name">
                    <div className="tech_text letter-space--2">
                      <p className="h1 text">Webflow</p>
                      <h6 className="process fw-normal">92%</h6>
                    </div>
                  </div>
                  <div className="app_icon">
                    <img
                      loading="lazy"
                      width={136}
                      height={68}
                      src="/assets/images/section/app-webflow.png"
                      alt="Image"
                    />
                  </div>
                  {/* Clone 2 */}
                  <div className="app_name">
                    <div className="tech_text letter-space--2">
                      <p className="h1 text">Webflow</p>
                      <h6 className="process fw-normal">92%</h6>
                    </div>
                  </div>
                  <div className="app_icon">
                    <img
                      loading="lazy"
                      width={136}
                      height={68}
                      src="/assets/images/section/app-webflow.png"
                      alt="Image"
                    />
                  </div>
                  {/* Clone 3 */}
                  <div className="app_name">
                    <div className="tech_text letter-space--2">
                      <p className="h1 text">Webflow</p>
                      <h6 className="process fw-normal">92%</h6>
                    </div>
                  </div>
                  <div className="app_icon">
                    <img
                      loading="lazy"
                      width={136}
                      height={68}
                      src="/assets/images/section/app-webflow.png"
                      alt="Image"
                    />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </section>
        {/* /Tech Stack */}
        {/* Award */}
        <section className="section-award flat-spacing">
          <div className="container">
            <div className="row">
              <div className="col-md-5 ms-auto">
                <div className="col-right">
                  <h6 className="mini-title text-caption text-white-64">ACHIEVEMENTS</h6>
                  <h5 className="fw-normal letter-space--2 text-color-change">
                    Since 2020, my work in frontend development has been recognized for
                    creating performant, responsive, and user-friendly web applications.
                    Each achievement reflects a project where skill, innovation, and impact came together.
                  </h5>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <div className="col-left">
                  <p className="desc text-white-64 mini-title">
                    30+ projects delivered. <br />
                    Efficient code. Seamless UX.
                  </p>
                  <div
                    dir="ltr"
                    className="swiper tf-swiper"
                    data-preview={3}
                    data-tablet={3}
                    data-mobile={3}
                    data-mobile-sm={3}
                    data-loop="true"
                    data-auto="true"
                    data-delay={1000}
                    data-speed={1000}
                    data-direction="vertical"
                    data-space={4}
                  >
                    <div className="swiper-wrapper">
                      {/* item 1 */}
                      <div className="swiper-slide">
                        <div className="award-item h4 letter-space--2">
                          React Projects
                          <span className="text-body-1 letter-space--1">x12</span>
                        </div>
                      </div>
                      {/* item 2 */}
                      <div className="swiper-slide">
                        <div className="award-item h4 letter-space--2">
                          Next.js Applications
                          <span className="text-body-1 letter-space--1">x8</span>
                        </div>
                      </div>
                      {/* item 3 */}
                      <div className="swiper-slide">
                        <div className="award-item h4 letter-space--2">
                          Open Source Contributions
                          <span className="text-body-1 letter-space--1">x5</span>
                        </div>
                      </div>
                      {/* item 4 */}
                      <div className="swiper-slide">
                        <div className="award-item h4 letter-space--2">
                          Performance Optimizations
                          <span className="text-body-1 letter-space--1">x5</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="wrap-flip-image flat-spacing">
            <div className="container">
              <div className="flip-image-list gsap-anime-2">
                <div className="flip-image">
                  <img
                    loading="lazy"
                    width={300}
                    height={300}
                    src="/assets/images/section/award-1.jpg"
                    alt="Image"
                  />
                </div>
                <div className="flip-image">
                  <img
                    loading="lazy"
                    width={300}
                    height={300}
                    src="/assets/images/section/award-2.jpg"
                    alt="Image"
                  />
                </div>
                <div className="flip-image">
                  <img
                    loading="lazy"
                    width={300}
                    height={300}
                    src="/assets/images/section/award-3.jpg"
                    alt="Image"
                  />
                </div>
                <div className="flip-image">
                  <img
                    loading="lazy"
                    width={300}
                    height={300}
                    src="/assets/images/section/award-4.jpg"
                    alt="Image"
                  />
                </div>
                <div className="flip-image">
                  <img
                    loading="lazy"
                    width={300}
                    height={300}
                    src="/assets/images/section/award-5.jpg"
                    alt="Image"
                  />
                </div>
                <div className="flip-image">
                  <img
                    loading="lazy"
                    width={300}
                    height={300}
                    src="/assets/images/section/award-6.jpg"
                    alt="Image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Award */}
        {/* Testimonial */}
        <section className="section-testimonial flat-spacing tf-btn-swiper-main">
          <h6 className="mini-title text-caption text-white-64 text-center">
            TRUSTED BY FOUNDED
          </h6>
          <div
            dir="ltr"
            className="swiper tf-swiper swiper-testimonial"
            data-preview="2.59"
            data-tablet="2.2"
            data-mobile-sm="1.5"
            data-mobile="1.2"
            data-loop="true"
            data-center="true"
            data-space-lg={40}
            data-space-md={30}
            data-space={15}
            data-init={1}
          >
            <div className="swiper-wrapper">
              {/* item 1 */}
              <div className="swiper-slide">
                <div className="testimonial-v01">
                  <div className="tes-author">
                    <div className="author_image">
                      <img
                        loading="lazy"
                        width={437}
                        height={328}
                        src="/assets/images/section/tes-1.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="author_info">
                      <h6 className="info__name text-body-1 letter-space--1">
                        Ethan Morales
                      </h6>
                      <p className="info__duty">
                        Marketing Director, Horizon Apparel
                      </p>
                    </div>
                  </div>
                  <div className="br-line" />
                  <p className="tes-text text-body-1">
                    Owais reimagined our digital presence. The site is striking,
                    fast, and intuitive—engaging visitors while clearly expressing our
                    brand.”
                  </p>
                </div>
              </div>
              {/* item 2 */}
              <div className="swiper-slide">
                <div className="testimonial-v01">
                  <div className="tes-author">
                    <div className="author_image">
                      <img
                        loading="lazy"
                        width={437}
                        height={328}
                        src="/assets/images/section/tes-2.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="author_info">
                      <h6 className="info__name text-body-1 letter-space--1">
                        Liam Carter
                      </h6>
                      <p className="info__duty">Founder, Arcadia Tech</p>
                    </div>
                  </div>
                  <div className="br-line" />
                  <p className="tes-text text-body-1">
                    “Working with Davies was seamless. He nailed our vision and
                    delivered a modern, functional website that feels distinctly
                    ours.”
                  </p>
                </div>
              </div>
              {/* item 3 */}
              <div className="swiper-slide">
                <div className="testimonial-v01">
                  <div className="tes-author">
                    <div className="author_image">
                      <img
                        loading="lazy"
                        width={437}
                        height={328}
                        src="/assets/images/section/tes-3.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="author_info">
                      <h6 className="info__name text-body-1 letter-space--1">
                        Sofia Carson
                      </h6>
                      <p className="info__duty">Product Manager, Lumos Studio</p>
                    </div>
                  </div>
                  <div className="br-line" />
                  <p className="tes-text text-body-1">
                    “From first concept to launch, Davies exceeded expectations. Every
                    choice was intentional, making our platform beautiful and easy to
                    use.”
                  </p>
                </div>
              </div>
              {/* item 2 */}
              <div className="swiper-slide">
                <div className="testimonial-v01">
                  <div className="tes-author">
                    <div className="author_image">
                      <img
                        loading="lazy"
                        width={437}
                        height={328}
                        src="/assets/images/section/tes-2.jpg"
                        alt="Image"
                      />
                    </div>
                    <div className="author_info">
                      <h6 className="info__name text-body-1 letter-space--1">
                        Ethan Morales
                      </h6>
                      <p className="info__duty">
                        Marketing Director, Horizon Apparel
                      </p>
                    </div>
                  </div>
                  <div className="br-line" />
                  <p className="tes-text text-body-1">
                    Owais reimagined our digital presence. The site is striking,
                    fast, and intuitive—engaging visitors while clearly expressing our
                    brand.”
                  </p>
                </div>
              </div>
            </div>
            <div className="group-btn-slider">
              <div className="nav-prev-swiper lh-1">
                <i className="icon icon-arrow-caret-left fs-8" />
              </div>
              <div className="sw-dot-default tf-sw-pagination" />
              <div className="nav-next-swiper lh-1">
                <i className="icon icon-arrow-caret-right fs-8" />
              </div>
            </div>
          </div>
          <div className="indicator-wrap flat-spacing">
            <div className="container">
              <div className="row">
                <div className="col-md-4">
                  <div className="wg-indicator mb-md-0">
                    <p className="indicate-title text-body-1">
                      <span className="text-primary">//</span> Projects Delivered
                    </p>
                    <p className="indicate-counter wg-counter text-display-1 fw-medium">
                      <span className="odometer" data-number={40}>
                        30
                      </span>{" "}
                      <span className="text-primary">+</span>
                    </p>
                    <p className="indicate-sub">
                      Creative work that drive <br />
                      real results
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="wg-indicator mb-md-0">
                    <p className="indicate-title text-body-1">
                      <span className="text-primary">//</span> Clients Satisfaction
                    </p>
                    <p className="indicate-counter wg-counter text-display-1 fw-medium">
                      <span className="odometer" data-number={96}>
                        50
                      </span>{" "}
                      <span className="text-primary">%</span>
                    </p>
                    <p className="indicate-sub">
                      I mostly focus on <br />
                      exceeding expectations
                    </p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="wg-indicator mb-0">
                    <p className="indicate-title text-body-1">
                      <span className="text-primary">//</span> Years of Experience
                    </p>
                    <p className="indicate-counter wg-counter text-display-1 fw-medium">
                      <span className="odometer" data-number={10}>
                        2.5
                      </span>{" "}
                      <span className="text-primary">+</span>
                    </p>
                    <p className="indicate-sub">
                      Mastering the art of animation <br />
                      content and design
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-img-item">
            <img
              loading="lazy"
              width={1440}
              height={800}
              src="/assets/images/item/grid.png"
              alt="Image"
            />
          </div>
        </section>
        {/* /Testimonial */}
        {/* Pricing */}
        <section className="section-pricing flat-spacing flat-animate-tab">
          <div className="bg-img">
            <img
              loading="lazy"
              width={1440}
              height={1081}
              src="/assets/images/item/bg-4.png"
              alt="Image"
            />
          </div>
          <div className="container">
            <div className="s-header justify-content-center">
              <h2 className="text-display-2 letter-space--3 effectFade fadeUp">
                Pricing made easy
              </h2>
            </div>
            <ul className="pricing-tab_btn" role="tablist">
              <li className="nav-tab-item" role="presentation">
                <a
                  href="#monthly"
                  data-bs-toggle="tab"
                  className="tf-btn-tab fw-medium letter-space--1 active"
                >
                  <span className="dot-active" />
                  Monthly
                </a>
              </li>
              <li className="nav-tab-item" role="presentation">
                <a
                  href="#annual"
                  data-bs-toggle="tab"
                  className="tf-btn-tab fw-medium letter-space--1"
                >
                  <span className="dot-active" />
                  <span>
                    Annualy - <span className="text-primary">Save 20%</span>
                  </span>
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div className="tab-pane active show" id="monthly" role="tabpanel">
                <div className="tf-grid-layout md-col-2 lg-col-3">
                  <div className="wg-plan">
                    <div className="br-line" />
                    <p className="plan-name letter-space--1 fw-medium">Basic</p>
                    <h4 className="plan-price">
                      $640{" "}
                      <span className="text-body-2 fw-normal text-white-64 letter-space--1">
                        /month
                      </span>
                    </h4>
                    <p className="plan-desc text-white-64">
                      Perfect for early-stage teams or startups ready to launch their
                      first online presence.
                    </p>
                    <a
                      href="#contactScroll"
                      className="btn-action tf-btn style-troke w-100"
                    >
                      <span className="text-caption fw-medium">CHOOSE THIS PLAN</span>
                    </a>
                    <ul className="benefit-list tf-list vertical">
                      <li className="benefit_title text-white-64">
                        What’s included:
                      </li>
                      <li>
                        <span>//</span> Custom website design
                      </li>
                      <li>
                        <span>//</span> Responsive layouts
                      </li>
                      <li>
                        <span>//</span> Basic SEO setup
                      </li>
                      <li>
                        <span>//</span> Tool integrations
                      </li>
                      <li>
                        <span>//</span> Ongoing support
                      </li>
                    </ul>
                  </div>
                  <div className="wg-plan style-2">
                    <div className="bg-img bg-img_1 d-xl-block" />
                    <div className="bg-img bg-img_2">
                      <img
                        loading="lazy"
                        width={416}
                        height={625}
                        src="/assets/images/item/bg-2.png"
                        alt="Image"
                      />
                    </div>
                    <div className="br-line bg-primary" />
                    <p className="plan-name letter-space--1 fw-medium">Pro</p>
                    <h4 className="plan-price">
                      <span>
                        <span className="text-primary">$</span>1,280
                      </span>
                      <span className="text-body-2 fw-normal text-white-64 letter-space--1">
                        /month
                      </span>
                    </h4>
                    <p className="plan-desc text-white-64">
                      Ideal for growing brands that require added features and
                      enhanced creative flexibility.
                    </p>
                    <a
                      href="#contactScroll"
                      className="btn-action tf-btn style-fill w-100 animate-btn animate-dark"
                    >
                      <span className="text-caption fw-medium">CHOOSE THIS PLAN</span>
                    </a>
                    <ul className="benefit-list tf-list vertical">
                      <li className="benefit_title text-white-64">
                        What’s included:
                      </li>
                      <li>
                        <span className="text-primary">//</span> Advanced web design
                      </li>
                      <li>
                        <span className="text-primary">//</span> Interactive elements
                      </li>
                      <li>
                        <span className="text-primary">//</span> Full SEO services
                      </li>
                      <li>
                        <span className="text-primary">//</span> E-commerce setup
                      </li>
                      <li>
                        <span className="text-primary">//</span> Monthly reports
                      </li>
                    </ul>
                  </div>
                  <div className="wg-plan style-2">
                    <div className="bg-img bg-img_1" />
                    <div className="br-line bg-white" />
                    <p className="plan-name letter-space--1 fw-medium">Max</p>
                    <h4 className="plan-price">
                      $2,560{" "}
                      <span className="text-body-2 fw-normal text-white-64 letter-space--1">
                        /month
                      </span>
                    </h4>
                    <p className="plan-desc text-white-64">
                      Designed for established companies seeking a completely bespoke
                      digital solution.
                    </p>
                    <a
                      href="#contactScroll"
                      className="btn-action tf-btn style-fill-white w-100 animate-btn animate-dark"
                    >
                      <span className="text-caption fw-medium">CHOOSE THIS PLAN</span>
                    </a>
                    <ul className="benefit-list tf-list vertical">
                      <li className="benefit_title text-white-64">
                        What’s included:
                      </li>
                      <li>
                        <span>//</span> Complete branding
                      </li>
                      <li>
                        <span>//</span> Premium visuals
                      </li>
                      <li>
                        <span>//</span> Enterprise systems
                      </li>
                      <li>
                        <span>//</span> Dedicated manager
                      </li>
                      <li>
                        <span>//</span> Priority support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="tab-pane" id="annual" role="tabpanel">
                <div className="tf-grid-layout md-col-2 lg-col-3">
                  <div className="wg-plan">
                    <div className="br-line" />
                    <p className="plan-name letter-space--1 fw-medium">Basic</p>
                    <h4 className="plan-price">
                      $6,400{" "}
                      <span className="text-body-2 fw-normal text-white-64 letter-space--1">
                        /annual
                      </span>
                    </h4>
                    <p className="plan-desc text-white-64">
                      Perfect for early-stage teams or startups ready to launch their
                      first online presence.
                    </p>
                    <a
                      href="#contactScroll"
                      className="btn-action tf-btn style-troke w-100"
                    >
                      <span className="text-caption fw-medium">CHOOSE THIS PLAN</span>
                    </a>
                    <ul className="benefit-list tf-list vertical">
                      <li className="benefit_title text-white-64">
                        What’s included:
                      </li>
                      <li>
                        <span>//</span> Custom website design
                      </li>
                      <li>
                        <span>//</span> Responsive layouts
                      </li>
                      <li>
                        <span>//</span> Basic SEO setup
                      </li>
                      <li>
                        <span>//</span> Tool integrations
                      </li>
                      <li>
                        <span>//</span> Ongoing support
                      </li>
                    </ul>
                  </div>
                  <div className="wg-plan style-2">
                    <div className="bg-img bg-img_1 d-xl-block" />
                    <div className="bg-img bg-img_2">
                      <img
                        loading="lazy"
                        width={416}
                        height={625}
                        src="/assets/images/item/bg-2.png"
                        alt="Image"
                      />
                    </div>
                    <div className="br-line bg-primary" />
                    <p className="plan-name letter-space--1 fw-medium">Pro</p>
                    <h4 className="plan-price">
                      <span>
                        <span className="text-primary">$</span>12,800
                      </span>
                      <span className="text-body-2 fw-normal text-white-64 letter-space--1">
                        /annual
                      </span>
                    </h4>
                    <p className="plan-desc text-white-64">
                      Ideal for growing brands that require added features and
                      enhanced creative flexibility.
                    </p>
                    <a
                      href="#contactScroll"
                      className="btn-action tf-btn style-fill w-100 animate-btn animate-dark"
                    >
                      <span className="text-caption fw-medium">CHOOSE THIS PLAN</span>
                    </a>
                    <ul className="benefit-list tf-list vertical">
                      <li className="benefit_title text-white-64">
                        What’s included:
                      </li>
                      <li>
                        <span className="text-primary">//</span> Advanced web design
                      </li>
                      <li>
                        <span className="text-primary">//</span> Interactive elements
                      </li>
                      <li>
                        <span className="text-primary">//</span> Full SEO services
                      </li>
                      <li>
                        <span className="text-primary">//</span> E-commerce setup
                      </li>
                      <li>
                        <span className="text-primary">//</span> Monthly reports
                      </li>
                    </ul>
                  </div>
                  <div className="wg-plan style-2">
                    <div className="bg-img bg-img_1" />
                    <div className="br-line bg-white" />
                    <p className="plan-name letter-space--1 fw-medium">Max</p>
                    <h4 className="plan-price">
                      $25,600{" "}
                      <span className="text-body-2 fw-normal text-white-64 letter-space--1">
                        /annual
                      </span>
                    </h4>
                    <p className="plan-desc text-white-64">
                      Designed for established companies seeking a completely bespoke
                      digital solution.
                    </p>
                    <a
                      href="#contactScroll"
                      className="btn-action tf-btn style-fill-white w-100 animate-btn animate-dark"
                    >
                      <span className="text-caption fw-medium">CHOOSE THIS PLAN</span>
                    </a>
                    <ul className="benefit-list tf-list vertical">
                      <li className="benefit_title text-white-64">
                        What’s included:
                      </li>
                      <li>
                        <span>//</span> Complete branding
                      </li>
                      <li>
                        <span>//</span> Premium visuals
                      </li>
                      <li>
                        <span>//</span> Enterprise systems
                      </li>
                      <li>
                        <span>//</span> Dedicated manager
                      </li>
                      <li>
                        <span>//</span> Priority support
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Pricing */}
        {/* Faq */}
        <section className="section-faq flat-spacing">
          <div className="container">
            <div className="s-header d-block">
              <h2 className="text-display-2 letter-space--3 text-center effectFade fadeUp">
                Frequently <br />
                asked questions
              </h2>
            </div>
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="accordion-faq_list" id="accordion-faq_list">
                  <div className="accordion-faq_item" role="presentation">
                    <div
                      className="accordion-action text-body-1 letter-space--1 fw-medium collapsed"
                      data-bs-target="#faq-1"
                      role="button"
                      data-bs-toggle="collapse"
                      aria-controls="faq-1"
                      aria-expanded="true"
                    >
                      <span className="accordion-order">01</span>
                      <p className="accordion-text">
                        How long does a project usually take?
                      </p>
                      <div className="ic-wrap d-flex">
                        <i className="icon icon-arrow-caret-down fs-10" />
                      </div>
                    </div>
                    <div
                      id="faq-1"
                      className="collapse"
                      data-bs-parent="#accordion-faq_list"
                    >
                      <p className="accordion-content">
                        Most projects are completed within 4–8 weeks, depending on
                        complexity, revisions, and scope. I’ll always provide a clear
                        timeline before starting.
                      </p>
                    </div>
                  </div>
                  <div className="accordion-faq_item" role="presentation">
                    <div
                      className="accordion-action text-body-1 letter-space--1 fw-medium "
                      data-bs-target="#faq-2"
                      role="button"
                      data-bs-toggle="collapse"
                      aria-controls="faq-2"
                      aria-expanded="false"
                    >
                      <span className="accordion-order">02</span>
                      <p className="accordion-text">
                        Do you work with international clients?
                      </p>
                      <div className="ic-wrap d-flex">
                        <i className="icon icon-arrow-caret-down fs-10" />
                      </div>
                    </div>
                    <div
                      id="faq-2"
                      className="collapse show"
                      data-bs-parent="#accordion-faq_list"
                    >
                      <p className="accordion-content">
                        Yes, I collaborate with clients worldwide using online
                        meetings, project management tools, and shared design
                        platforms to ensure smooth communication.
                      </p>
                    </div>
                  </div>
                  <div className="accordion-faq_item" role="presentation">
                    <div
                      className="accordion-action text-body-1 letter-space--1 fw-medium collapsed"
                      data-bs-target="#faq-3"
                      role="button"
                      data-bs-toggle="collapse"
                      aria-controls="faq-3"
                      aria-expanded="false"
                    >
                      <span className="accordion-order">03</span>
                      <p className="accordion-text">
                        Can you help with both design and development?
                      </p>
                      <div className="ic-wrap d-flex">
                        <i className="icon icon-arrow-caret-down fs-10" />
                      </div>
                    </div>
                    <div
                      id="faq-3"
                      className="collapse"
                      data-bs-parent="#accordion-faq_list"
                    >
                      <p className="accordion-content">
                        Absolutely. I handle branding, UI/UX design, and no-code or
                        coded development to deliver a complete end-to-end solution.
                      </p>
                    </div>
                  </div>
                  <div className="accordion-faq_item" role="presentation">
                    <div
                      className="accordion-action text-body-1 letter-space--1 fw-medium collapsed"
                      data-bs-target="#faq-4"
                      role="button"
                      data-bs-toggle="collapse"
                      aria-controls="faq-4"
                      aria-expanded="false"
                    >
                      <span className="accordion-order">04</span>
                      <p className="accordion-text">What’s your payment process?</p>
                      <div className="ic-wrap d-flex">
                        <i className="icon icon-arrow-caret-down fs-10" />
                      </div>
                    </div>
                    <div
                      id="faq-4"
                      className="collapse"
                      data-bs-parent="#accordion-faq_list"
                    >
                      <p className="accordion-content">
                        I typically require a 50% deposit to begin work, with the
                        remaining balance due upon project completion and approval.
                      </p>
                    </div>
                  </div>
                  <div className="accordion-faq_item" role="presentation">
                    <div
                      className="accordion-action text-body-1 letter-space--1 fw-medium collapsed"
                      data-bs-target="#faq-5"
                      role="button"
                      data-bs-toggle="collapse"
                      aria-controls="faq-5"
                      aria-expanded="false"
                    >
                      <span className="accordion-order">05</span>
                      <p className="accordion-text">
                        Do you provide ongoing support after launch?
                      </p>
                      <div className="ic-wrap d-flex">
                        <i className="icon icon-arrow-caret-down fs-10" />
                      </div>
                    </div>
                    <div
                      id="faq-5"
                      className="collapse"
                      data-bs-parent="#accordion-faq_list"
                    >
                      <p className="accordion-content">
                        Yes. I offer maintenance, updates, and performance monitoring
                        packages to keep your website or product running smoothly
                        long-term.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /Faq */}
        {/* CTA */}
        <section className="section-cta flat-spacing" id="contactScroll">
          <div className="bg-img">
            <img
              loading="lazy"
              width={1440}
              height={1081}
              src="/assets/images/item/bg-3.png"
              alt="Image"
            />
          </div>
          <div className="s-header d-block">
            <div className="container">
              <div className="row">
                <div className="col-2 offset-lg-2 col-lg-2">
                  <div className="col-left">
                    <a href="index.html" className="logo-custom">
                      <div className="logo-site-sv">
                        <svg
                          width={34}
                          height={41}
                          viewBox="0 0 34 41"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M9.21094 0.400391C15.9908 0.392629 21.8983 0.597548 27.1426 5.65918C35.1922 13.4293 35.2468 26.7035 27.5312 34.7549C22.0053 40.1145 16.6295 40.3989 9.48535 40.4004L0.75 40.3945L0.751953 0.407227L9.21094 0.400391ZM21.5244 6.83496C16.6613 3.86011 10.4273 4.54391 4.91113 4.55664L17.2607 22.3262C19.5017 25.5466 21.7744 28.9254 24.0615 32.0889C24.847 31.468 25.7087 30.3488 26.2646 29.5088C28.7144 25.5207 29.444 20.7119 28.2871 16.1777C27.305 12.2252 25.0035 8.9637 21.5244 6.83496Z"
                            fill="#07C42C"
                          />
                        </svg>
                      </div>
                      <span className="line-vertical left" />
                      <span className="line-vertical right" />
                      <span className="line-horizontal top" />
                      <span className="line-horizontal bottom" />
                    </a>
                  </div>
                </div>
                <div className="col-10 col-lg-6">
                  <h2 className="text-display-2 letter-space--3 text-end effectFade fadeUp">
                    Let’s start <br />
                    creating together
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <form className="form-cta">
                  <div className="form-content">
                    <div className="tf-grid-layout sm-col-2">
                      <fieldset className="tf-field">
                        <input
                          className="tf-input"
                          type="text"
                          placeholder=""
                        // required=""
                        />
                        <label className="tf-lable">
                          Name <span className="text-primary">*</span>
                        </label>
                      </fieldset>
                      <fieldset className="tf-field">
                        <input
                          className="tf-input"
                          type="email"
                          placeholder=""
                        // required=""
                        />
                        <label className="tf-lable">
                          Email <span className="text-primary">*</span>
                        </label>
                      </fieldset>
                    </div>
                    <div className="tf-grid-layout sm-col-2">
                      <div className="nc-wrap">
                        <p className="select-label fs-14 text-white-64 d-sm-none">
                          Select an option <span className="text-primary">*</span>
                        </p>
                        <div className="nice-select">
                          <span className="current letter-space--1">
                            You are interested in
                          </span>
                          <ul className="list">
                            <li className="option disabled">
                              -- Select an option --
                            </li>
                            <li className="option">Web Development</li>
                            <li className="option">UI/UX Design</li>
                            <li className="option">Digital Marketing</li>
                          </ul>
                        </div>
                      </div>
                      <div className="nc-wrap">
                        <p className="select-label fs-14 text-white-64 d-sm-none">
                          Select your budget <span className="text-primary">*</span>
                        </p>
                        <div className="nice-select">
                          <span className="current letter-space--1">
                            Budget in USD
                          </span>
                          <ul className="list">
                            <li className="option disabled">
                              -- Select your budget --
                            </li>
                            <li className="option">$0 – $100</li>
                            <li className="option">$100 – $500</li>
                            <li className="option">$500 – $1,000</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <fieldset className="tf-field">
                      <input
                        className="tf-input"
                        type="text"
                        placeholder=""
                      //   required=""
                      />
                      <label className="tf-lable">Project details</label>
                    </fieldset>
                  </div>
                  <div className="form-action">
                    <button type="submit" className="tf-btn">
                      <span className="text-caption">SUBMIT MESSAGE</span>
                    </button>
                    <p className="text-body-1">
                      SEY HELLO -{" "}
                      <a href="#" className="text-primary">
                        OWAISOFFICIAL22@GMAIL.COM
                      </a>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/* /CTA */}
      </main>
      <div className="offcanvas-menu">
        <div className="offcanvas-content">
          <div className="container h-100">
            <div className="offcanvas-content_wrapin">
              <div className="canvas_head">
                <a href="index.html" className="logo-site">
                  <i className="icon icon-davies-logo" />
                </a>
                <div className="btn-mobile-menu close-mb-menu text-caption link">
                  <i className="icon icon-close" />
                  CLOSE
                </div>
              </div>
              <div className="canvas_center">
                <ul className="nav-ul-mb">
                  <li>
                    <div className="item close-mb-menu">
                      <a href="#workScroll" className="mb-menu-link text-display-1">
                        <span className="text">Works</span>
                        <div className="infiniteSlide_text_main">
                          <div
                            className="infiniteSlide infiniteSlide_text"
                            data-clone={5}
                          >
                            <p className="text-body-2 letter-space--1">
                              <span className="text-primary">//</span> View Works
                            </p>
                            <p className="text-body-2 letter-space--1">
                              <span className="text-primary">//</span> View Works
                            </p>
                            <p className="text-body-2 letter-space--1">
                              <span className="text-primary">//</span> View Works
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="item close-mb-menu">
                      <a
                        href="#aboutScroll"
                        className="mb-menu-link text-display-1"
                      >
                        <span className="text">About</span>
                        <div className="infiniteSlide_text_main">
                          <div
                            className="infiniteSlide infiniteSlide_text"
                            data-clone={5}
                          >
                            <p className="text-body-2 letter-space--1">
                              <span className="text-primary">//</span> View About
                            </p>
                            <p className="text-body-2 letter-space--1">
                              <span className="text-primary">//</span> View About
                            </p>
                            <p className="text-body-2 letter-space--1">
                              <span className="text-primary">//</span> View About
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="item close-mb-menu">
                      <a
                        href="#serviceScroll"
                        className="mb-menu-link text-display-1"
                      >
                        <span className="text">Services</span>
                        <div className="infiniteSlide_text_main">
                          <div
                            className="infiniteSlide infiniteSlide_text"
                            data-clone={5}
                          >
                            <p className="text-body-2 letter-space--1">
                              <span className="text-primary">//</span> View Services
                            </p>
                            <p className="text-body-2 letter-space--1">
                              <span className="text-primary">//</span> View Services
                            </p>
                            <p className="text-body-2 letter-space--1">
                              <span className="text-primary">//</span> View Services
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="item close-mb-menu">
                      <a
                        href="#contactScroll"
                        className="mb-menu-link text-display-1"
                      >
                        <span className="text">Contact</span>
                        <div className="infiniteSlide_text_main">
                          <div
                            className="infiniteSlide infiniteSlide_text"
                            data-clone={5}
                          >
                            <p className="text-body-2 letter-space--1">
                              <span className="text-primary">//</span> View Contact
                            </p>
                            <p className="text-body-2 letter-space--1">
                              <span className="text-primary">//</span> View Contact
                            </p>
                            <p className="text-body-2 letter-space--1">
                              <span className="text-primary">//</span> View Contact
                            </p>
                          </div>
                        </div>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="canvas_foot">
                <div className="left">
                  <a href="mailto:owaisofficial22@gmail.com" className="link text-caption">
                    OWAISOFFICIAL22@GMAIL.COM
                  </a>
                  <p className="text-caption">
                    CUP <span className="clock" />
                  </p>
                </div>
                <div className="right">
                  <a href="#" className="tf-link-icon text-caption link">
                    <i className="icon icon-arrow-top-right" />
                    TWITTER (X)
                  </a>
                  <a href="#" className="tf-link-icon text-caption link">
                    <i className="icon icon-arrow-top-right" />
                    DRIBBBLE
                  </a>
                  <a href="#" className="tf-link-icon text-caption link">
                    <i className="icon icon-arrow-top-right" />
                    LINKEDIN
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Mobile Menu */}
      {/* Setting Color */}
      <div
        className="offcanvas offcanvas-end offcanvas-color"
        id="settingColorMenu"
      >
        <div className="offcanvas-content">
          <span className="icon-close-popup" data-bs-dismiss="offcanvas">
            <i className="icon-close" />
          </span>
          <div className="canvas-header">
            <h3 className="fw-semibold">Configuration</h3>
          </div>
          <div className="canvas-body">
            <h6 className="title fw-semibold">COLORS</h6>
            <div className="settings-color list-choose">
              <button type="button" className="choose-item link-no-action active" />
              <button type="button" className="choose-item link-no-action" />
              <button type="button" className="choose-item link-no-action" />
              <button type="button" className="choose-item link-no-action" />
              <button type="button" className="choose-item link-no-action" />
              <button type="button" className="choose-item link-no-action" />
              <button type="button" className="choose-item link-no-action" />
              <button type="button" className="choose-item link-no-action" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home