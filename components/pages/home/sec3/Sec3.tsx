"use client"
import './Sec3.css';
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const textData = {
  title: 'Chats for your distributed teams',
  desc: 'Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones.'
};

export default function Sec3() {
  const ServiceOverviewSec3Ref = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.timeline({
        scrollTrigger: {
          trigger: ".content-container3",
          start: "top center",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      })
          .fromTo(".image-inner1", {
            scale: 0.5,
            opacity: 0,
          }, {
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: "power1.out",
          })

          .fromTo(".gsap-text3", {
            y: 200,
            opacity: 0,
          }, {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: "power1.out",
          }, "-=0.5")

    }, ServiceOverviewSec3Ref)

    return () => ctx.revert();
  }, []);
  return (
    <section ref={ServiceOverviewSec3Ref} className="info-section section-3">
      <div className="wrap-container">
        <div className="content-container content-container3">
          <div className="center-container center-container3">
            <div className="info-offer">
              <div className="info-text-container">
                <span className="info-title gsap-text3">{textData.title}</span>
                <span className="info-desc gsap-text3">{textData.desc}</span>
              </div>
              <div className="info-link gsap-text3">
                <span className="info-link-text">Learn more</span>
                <img className="info-link-action" src="/mock-arrow-right.svg" alt="" />
              </div>
            </div>
            <div className="info-image-container" >
              <img className="image-inner1" src="/sec3-inner.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
