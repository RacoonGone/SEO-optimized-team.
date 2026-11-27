export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  avatar: string;
  image: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "data-exported-by-team-cloud-organization",
    title: "Data exported by Team Cloud organization",
    excerpt: "An internal investigation recently uncovered a vulnerability (identified as CVE-2022-21706) in Zulip’s invitation links.",
    date: "July 1, 2025",
    author: "Cameron Williamson",
    avatar: "/author1.png",
    image: "/blog1.jpg",
    content: [
      "Administrators in Team Cloud organizations can export account data to review how the platform is being used. During a recent export, we found that some private files were included in the generated report.",
      "We immediately paused the export process and began investigating. Our team identified the cause, corrected the issue, and reviewed the affected accounts to understand what information was involved.",
      "We have notified affected administrators and are updating our export controls. We take privacy seriously and will continue to improve the safeguards that protect information in Team Cloud.",
      "We would like to thank our customers for bringing this issue to our attention."
    ]
  },
  {
    slug: "swap-long-video-calls-and-emails",
    title: "Swap long video calls and emails for asynchronous video",
    excerpt: "Meetings are essential for communication and team building, but they’re often unproductive. Asynchronous video to the rescue.",
    date: "June 21, 2023",
    author: "Robert Fox",
    avatar: "/author2.png",
    image: "/blog2.jpg",
    content: [
      "Not every conversation needs another meeting. Short video updates give teammates the context they need while letting everyone respond when it works for them.",
      "Record a quick walkthrough, share it with the right people, and keep the discussion connected to the work. Teams can spend less time coordinating schedules and more time making progress.",
    ]
  },
  {
    slug: "flexibility-reigns-sky-2023",
    title: "Flexibility reigns: six key takeaways from Frontiers 2023",
    excerpt: "The future of work is having a digital HQ that works for you.",
    date: "June 10, 2023",
    author: "Jenny Wilson",
    avatar: "/author3.png",
    image: "/blog3.jpg",
    content: [
      "The way teams work continues to change. Our latest research points to a growing need for flexibility, clear communication, and tools that fit naturally into each workday.",
      "Here are six ideas leaders can use to help their teams do their best work, wherever they are.",
    ]
  },
  {
    slug: "team-plus-sales-cloud",
    title: "Team plus Sales Cloud: Your sales team’s new digital HQ",
    excerpt: "Why everyone on your sales team will benefit from our app’s killer features.",
    date: "May 11, 2023",
    author: "Kathryn Murphy",
    avatar: "/author4.png",
    image: "/blog4.jpg",
    content: [
      "Sales teams move quickly, and important context can get scattered across tools. Connecting Team with Sales Cloud helps keep customer updates and internal conversations close together.",
      "With a shared view of the work, teammates can follow progress, ask questions, and keep customer relationships moving forward.",
    ]
  },
  {
    slug: "what-is-digital-culture",
    title: "What is digital culture?",
    excerpt: "The teams best prepared for change use modern digital communication tools, feel comfortable learning new ones and continually adapt how they work.",
    date: "May 22, 2023",
    author: "Devon Lane",
    avatar: "/author5.png",
    image: "/blog5.jpg",
    content: [
      "Digital culture is the way people communicate, make decisions, and share knowledge when they work with digital tools.",
      "A healthy culture comes from intentional habits: making information accessible, respecting focus time, and creating space for every teammate to contribute.",
    ]
  },
  {
    slug: "steve-dottos-top-tips",
    title: "Steve Dotto’s top 10 tips for overcoming workplace hiccups",
    excerpt: "The executive producer of Dotto Tech shares his favorite Slack strategies for conquering common challenges in the digital-first workplace.",
    date: "April 4, 2023",
    author: "Theresa Webb",
    avatar: "/author6.png",
    image: "/blog6.jpg",
    content: [
      "Small communication problems can slow down a whole team. A few shared habits can make it easier to keep projects clear and conversations productive.",
      "Start with a clear purpose, capture decisions where everyone can find them, and make it simple for people to ask for help early.",
    ]
  },
  {
    slug: "whats-new-in-team-ipad-updates",
    title: "What’s new in Team: iPad updates, split-screen view and more",
    excerpt: "An internal investigation recently uncovered a vulnerability (identified as CVE-2022-21706) in Zulip’s invitation links.",
    date: "March 18, 2023",
    author: "Eleanor Pena",
    avatar: "/author7.png",
    image: "/blog7.jpg",
    content: [
      "This release makes it easier to stay connected on iPad. Use split-screen to keep Team alongside your other work and move between conversations with less friction.",
      "The update is available now. Open the app to explore the new experience and share your feedback with us.",
    ]
  },
  {
    slug: "drive-more-efficiency",
    title: "Drive more efficiency and cost savings with these updates to Workflow Builder",
    excerpt: "New and upcoming automation features help your teams do more with less.",
    date: "February 12, 2023",
    author: "Jerome Bell",
    avatar: "/author8.png",
    image: "/blog8.jpg",
    content: [
      "The best tools help teams spend less time on repetitive tasks. These updates make common workflows easier to manage and give teams more room to focus.",
      "Explore the new options in your workspace and decide which ones fit the way your team works.",
    ]
  },
  {
    slug: "seven-tips-onboard-sales-reps",
    title: "7 tips to onboard sales reps with ease",
    excerpt: "The executive producer of Dotto Tech shares his favorite Slack strategies for conquering common challenges in the digital-first workplace.",
    date: "January 7, 2023",
    author: "Savannah Nguyen",
    avatar: "/author9.png",
    image: "/blog9.jpg",
    content: [
      "A thoughtful onboarding plan gives new sales reps the context, relationships, and tools they need to succeed.",
      "Set clear milestones, introduce teammates early, and make useful resources easy to find. Regular check-ins help new hires ask questions and build confidence.",
    ]
  },
  {
    slug: "team-security-update",
    title: "Team Security Update",
    excerpt: "Because we take security, privacy, and transparency very seriously, we are sharing the details of a recent incident.",
    date: "December 24, 2022",
    author: "Bessie Cooper",
    avatar: "/author10.png",
    image: "/blog10.jpg",
    content: [
      "Security is an ongoing effort. This update includes improvements to account protection, access controls, and the way we monitor our services.",
      "We will continue to share updates as we strengthen the safeguards that protect your team's work.",
    ]
  },
  {
    slug: "everything-you-need-to-know-about-our-first-price-change",
    title: "Everything you need to know about our first price change and plan updates",
    excerpt: "Over the years, we have transformed TeamApp from a channel-based messaging app to your…",
    date: "December 10, 2022",
    author: "Kristin Watson",
    avatar: "/author11.png",
    image: "/blog11.jpg",
    content: [
      "We are updating our plans to better reflect the features teams use every day. Existing customers will receive details about timing and available options.",
      "If you have questions, our support team is ready to help you find the plan that fits your needs.",
    ]
  },
  {
    slug: "new-profile-updates",
    title: "New profile updates enhance hybrid work experience for teams",
    excerpt: "Introducing new ways to foster connection, collaboration and inclusion with teammates in…",
    date: "November 20, 2022",
    author: "Wade Warren",
    avatar: "/author12.png",
    image: "/blog12.jpg",
    content: [
      "Good teamwork starts with knowing who is working on what. Updated profiles make it easier to share useful details and stay connected across locations.",
      "Add the information your teammates need and keep your profile current as your work changes.",
    ]
  },
  {
    slug: "new-look-and-improved-functionality",
    title: "A new look and improved functionality for the TeamApp iPad",
    excerpt: "Introducing ways to help you stay productive, organized and connected from anywhere.",
    date: "November 4, 2022",
    author: "Jenny Wilson",
    avatar: "/author13.png",
    image: "/blog13.jpg",
    content: [
      "The refreshed Team experience brings a cleaner interface together with improvements to everyday workflows.",
      "Your conversations and files remain close at hand, while updated navigation helps you move through your work with ease.",
    ]
  },
  {
    slug: "leveling-playing-field",
    title: "Leveling the playing field in the new hybrid workplace",
    excerpt: "Data from the TeamForum reveals alarming discrepancies between who is and isn’t coming into the office.",
    date: "October 30, 2022",
    author: "Floyd Miles",
    avatar: "/author14.png",
    image: "/blog14.jpg",
    content: [
      "Hybrid work works best when every teammate can take part, wherever they happen to be. Teams can make meetings more inclusive by sharing context early and documenting decisions.",
      "With thoughtful habits and accessible tools, location becomes less of a barrier to meaningful collaboration.",
    ]
  },
  {
    slug: "everything-you-need-to-know-first-price-change",
    title: "Everything you need to know about our first price change and plan updates",
    excerpt: "Over the years, we have transformed TeamApp from a channel-based messaging app to your…",
    date: "October 14, 2022",
    author: "Cody Fisher",
    avatar: "/author15.png",
    image: "/blog15.jpg",
    content: [
      "We want every customer to understand what is changing and when. This guide explains the updated plans and the steps customers may need to take.",
      "For account-specific questions, contact our team and we will help you review your options.",
    ]
  },
  {
    slug: "exploring-better-ways-to-work",
    title: "Exploring better ways to work",
    excerpt: "Reimagining work and management for a more flexible, productive and balanced future.",
    date: "September 1, 2022",
    author: "Guy Hawkins",
    avatar: "/author16.png",
    image: "/blog16.jpg",
    content: [
      "Better work starts with understanding what helps people focus and collaborate. Teams are experimenting with new routines that balance independent work and shared time.",
      "Try small changes, learn from your team, and keep the practices that make work feel clearer.",
    ]
  },
  {
    slug: "winning-the-war-for-talent",
    title: "Winning the war for talent in the post-pandemic world",
    excerpt: "Future Forum study of 10,000 knowledge workers shows that 93% want flexibility in when and how they work; more than half are open to…",
    date: "July 29, 2022",
    author: "Mark Broklyn",
    avatar: "/author17.png",
    image: "/blog17.jpg",
    content: [
      "People want work that supports their lives and gives them room to grow. Organizations that listen, offer flexibility, and build trust can create stronger employee experiences.",
      "A thoughtful approach to communication helps teams stay connected as those expectations evolve.",
    ]
  },
  {
    slug: "say-hello-to-teamapp-forum",
    title: "Say hello to the updated TeamApp Forum",
    excerpt: "Bring all the magic of the community right into TeamApp.",
    date: "July 11, 2022",
    author: "Jane Cooper",
    avatar: "/author18.png",
    image: "/blog18.jpg",
    content: [
      "The updated TeamApp Forum makes it easier to learn from other teams, share ideas, and get answers to common questions.",
      "Join the conversation, meet fellow users, and help us make the community useful for everyone.",
    ]
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
