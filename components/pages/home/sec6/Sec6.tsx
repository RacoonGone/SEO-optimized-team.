"use client"
import './Sec6.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { Swiper as SwiperInstance } from 'swiper';
import 'swiper/css';
import {useEffect, useRef, useState} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Sec6() {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const ServiceOverviewSec6Ref:any = useRef<HTMLElement>(null);
  const [isCompact, setIsCompact] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1199px)");
    const mobileQuery = window.matchMedia("(max-width: 767px)");
    const updateLayout = () => setIsCompact(mediaQuery.matches);
    const updateMobileLayout = () => setIsMobile(mobileQuery.matches);

    updateLayout();
    updateMobileLayout();
    mediaQuery.addEventListener("change", updateLayout);
    mobileQuery.addEventListener("change", updateMobileLayout);
    return () => {
      mediaQuery.removeEventListener("change", updateLayout);
      mobileQuery.removeEventListener("change", updateMobileLayout);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.timeline({
        scrollTrigger: {
          trigger: ".content-container6",
          start: "top center",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      })
          .fromTo(".title-sec6, .swiper6", {
            y: 200,
            opacity: 0,
          }, {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.3,
            ease: "power1.out",
          })
    }, ServiceOverviewSec6Ref)

    return () => ctx.revert();
  }, []);
  return (
    <section ref={ServiceOverviewSec6Ref} className="testimonial-section section-6">
      <div className="wrap-container">
        <div className="content-container content-container6">
          <div className="center-container center-container6">
            <span className="title-sec6">What people say about Team</span>
            <Swiper
              className="swiper6"
              slidesPerView={isMobile ? 1 : 2}
              slidesPerGroup={1}
              spaceBetween={isMobile ? 16 : isCompact ? 8 : 28}
              slidesOffsetBefore={isMobile ? 24 : isCompact ? 8 : 0}
              slidesOffsetAfter={isMobile ? 24 : isCompact ? 8 : 0}
              speed={800}
              onSwiper={(swiper) => {swiperRef.current = swiper;}}
            >
              <SwiperSlide>
                <img className="review-image" src="/review1.png" alt="Customer review" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="review-image" src="/review2.png" alt="Customer review" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="review-image" src="/review3.png" alt="Customer review" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="review-image" src="/review4.png" alt="Customer review" />
              </SwiperSlide>
              <SwiperSlide>
                <img className="review-image" src="/review5.png" alt="Customer review" />
              </SwiperSlide>
            </Swiper>
            <div className="swiper-navigations">
              <button onClick={() => swiperRef.current?.slidePrev()}>
                <img className="swiper-nav swiper-nav-left" src="/swipe-arrow-left.svg" alt="Swipe Left" />
              </button>
              <button onClick={() => swiperRef.current?.slideNext()}>
                <img className="swiper-nav swiper-nav-right" src="/swipe-arrow-right.svg" alt="Swipe Right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
