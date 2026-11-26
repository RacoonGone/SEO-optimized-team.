"use client"
import './Sec5.css';
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const textData = {
  title: 'Move faster with your Team tools',
  desc: 'With your other work apps connected to Team, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks.'
};

export default function Sec5() {
  const ServiceOverviewSec5Ref:any = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.timeline({
        scrollTrigger: {
          trigger: ".content-container5",
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

          .fromTo(".gsap-text5", {
            y: 200,
            opacity: 0,
          }, {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: "power1.out",
          }, "-=0.5")

    }, ServiceOverviewSec5Ref)

    return () => ctx.revert();
  }, []);
  return (
    <section ref={ServiceOverviewSec5Ref} className="info-section section-5">
      <div className="wrap-container">
        <div className="content-container content-container5">
          <div className="center-container center-container5">
            <div className="info-offer">
              <div className="info-text-container">
                <span className="info-title gsap-text5">{textData.title}</span>
                <span className="info-desc gsap-text5">{textData.desc}</span>
              </div>
              <div className="info-link gsap-text5">
                <span className="info-link-text">Learn more</span>
                <img className="info-link-action" src="/mock-arrow-right.svg" alt="" />
              </div>
            </div>
            <div className="info-image-container" >
              <div className="image-inner-container">
                <img className="image-inner1" src="/sec5-inner2.png" alt=""/>
                <img className="image-inner2" src="/sec5-inner1.png" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
