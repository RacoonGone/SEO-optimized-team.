"use client"

import './Sec1.css';
import {useEffect, useRef} from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// import images here
// import sec1Background from './assets/sec1-background.png';

const textData = {
  pc: {
    title: "This is section 1 PC",
    desc: ""
  },
  mb: {
    title: "This is section 1 MB",
    desc: ""
  }
}

export default function Sec1() {
  const ServiceOverviewSec1Ref:any = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // stagger animation saat page load
      gsap.from(".section-1 .content-pc h1, .section-1 .content-mb h1", {
        y: 59, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out"
      })

      // Animation timeline
      const tl = gsap.timeline()
        .to(".section-1 .content-pc h1, .section-1 .content-mb h1", {color: "red", duration: 2}, "0")

      // ScrollTrigger set up
      ScrollTrigger.create({
        trigger: '.section-1',
        scrub: true,
        start: "top top",
        end: "+=100%",
        invalidateOnRefresh: false,
        anticipatePin: 1,
        pinSpacing: true,
        animation: tl
      })
    }, ServiceOverviewSec1Ref)

    return () => ctx.revert();
  }, []);

  return (
    <section ref={ServiceOverviewSec1Ref} className='main-section section-1'>
      <div className="wrap-container">
        <div className='content-pc'>
          <div className="content-container">
            <h1>{textData.pc.title}</h1>
          </div>
        </div>
        <div className='content-mb'>
          <div className="content-container">
            <h1>{textData.mb.title}</h1>
          </div>
        </div>
      </div>
    </section>
  )
}