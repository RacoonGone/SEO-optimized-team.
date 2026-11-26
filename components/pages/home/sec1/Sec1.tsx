"use client"

import './Sec1.css';
import {useEffect, useRef} from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// import images here
// import sec1Background from './assets/sec1-background.png';

const textData = {
  pc: {
    title: "Instant collaboration for remote teams",
    desc: "All-in-one place for your remote team to chat, collaborate and track project progress."
  },
  mb: {
    title: "Instant collaboration for remote teams",
    desc: "All-in-one place for your remote team to chat, collaborate and track project progress."
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
        <div className='content-container content-container1'>
          <div className="center-container center-container1">
            <div className="hero-offer">
              <div className="hero-text-container">
                <span className="hero-title">{textData.pc.title}</span>
                <span className="hero-desc">{textData.pc.desc}</span>
              </div>
              <div className="hero-inputs">
                <div className="hero-input">
                  <span className="hero-input-placeholder">Email</span>
                  <img className="hero-input-arrow" src="/arrow-right.svg" alt="Arrow Input"/>
                </div>
                <div className="hero-button">
                  <span className="hero-button-text">Get Early Access</span>
                </div>
              </div>
            </div>
          </div>
          <img className="hero-img" src="/hero-img.jpg" alt="Hero Background Image"/>
        </div>
      </div>
    </section>
  )
}