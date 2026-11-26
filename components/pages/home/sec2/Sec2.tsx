"use client"
import './Sec2.css';
import {useEffect, useRef} from "react";
import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const textData = {
  pc: {
    title: "Chats for your distributed teams",
    desc: "Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones."
  },
  mb: {
    title: "Chats for your distributed teams",
    desc: "Team combines the immediacy of real-time chat with an email threading model. With Team, you can catch up on important conversations while ignoring irrelevant ones."
  }
}

export default function Sec2() {
  const ServiceOverviewSec2Ref:any = useRef<HTMLElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.timeline({
        scrollTrigger: {
          trigger: ".content-container2",
          start: "top center",
          end: "bottom top",
          toggleActions: "play none none reverse",
        },
      })
        .fromTo(".task-today-img, .dashboard-img, .mentors-img, .send-img", {
            scale: 0.5,
            opacity: 0,
          }, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            stagger: 0.3,
            ease: "power1.out",
          })

          .fromTo(".gsap-text2", {
            y: 200,
            opacity: 0,
          }, {
            y: 0,
            opacity: 1,
            stagger: 0.2,
            duration: 1,
            ease: "power1.out",
          }, "-=0.5")

    }, ServiceOverviewSec2Ref)

    return () => ctx.revert();
  }, []);
  return (
    <section ref={ServiceOverviewSec2Ref} className="mockup-section section-2">
      <div className="wrap-container">
        <div className='content-container content-container2'>
          <div className="center-container center-container2">
            <div className="mock-offer">
              <div className="mock-text-container">
                <span className="mock-title gsap-text2">{textData.pc.title}</span>
                <span className="mock-desc gsap-text2">{textData.pc.desc}</span>
              </div>
              <div className="mock-link gsap-text2">
                <span className="mock-link-text">Learn more</span>
                <img className="mock-link-action" src="/mock-arrow-right.svg" alt="Arrow Right"/>
              </div>
            </div>
            <div className="mockup">
              <img className="task-today-img" src="/task-today.png" alt="Task Today"/>
              <img className="dashboard-img" src="/dashboard.png" alt="Dashboard"/>
              <div className="mentors-wrap">
                <img className="mentors-img" src="/mentors.png" alt="Mentors"/>
                <img className="send-img" src="/send.png" alt="Send"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
