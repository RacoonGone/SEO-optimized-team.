"use client"
import './Sec4.css';
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const textData = {
  title: 'Choose how you want to work',
  desc: 'In Team, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or hop on a huddle to talk things out live.'
};

export default function Sec4() {
  const ServiceOverviewSec4Ref:any = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.timeline({
        scrollTrigger: {
          trigger: ".content-container4",
          start: "top center",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      })
          .fromTo(".image-inner1, .image-inner2", {
            scale: 0.5,
            opacity: 0,
          }, {
            scale: 1,
            opacity: 1,
            duration: 1,
            stagger: 0.3,
            ease: "power1.out",
          })

          .fromTo(".gsap-text4", {
            y: 200,
            opacity: 0,
          }, {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: "power1.out",
          }, "-=0.5")

    }, ServiceOverviewSec4Ref)

    return () => ctx.revert();
  }, []);
  return (
    <section ref={ServiceOverviewSec4Ref} className="info-section section-4">
      <div className="wrap-container">
        <div className="content-container content-container4">
          <div className="center-container center-container4">
            <div className="info-offer">
              <div className="info-text-container">
                <span className="info-title gsap-text4">{textData.title}</span>
                <span className="info-desc gsap-text4">{textData.desc}</span>
              </div>
              <div className="info-link gsap-text4">
                <span className="info-link-text">Learn more</span>
                <img className="info-link-action" src="/mock-arrow-right.svg" alt="" />
              </div>
            </div>
            <div className="info-image-container" >
              <div className="image-inner-container">
                <img className="image-inner1" src="/sec4-inner1.png" alt=""/>
                <img className="image-inner2" src="/sec4-inner2.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
