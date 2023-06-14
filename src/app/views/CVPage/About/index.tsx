import CardOutline, {
  ICardOutlineProps,
} from "app/components/base/CardOutLine";
import Intro from "app/components/layout/Intro";

const About: React.FC = () => {
  const cardItems: ICardOutlineProps[] = [
    {
      icon: <img src="assets/icons/icon-design.svg" alt="about-img"></img>,
      title: "Web design",
      content:
        "The most modern and high-quality design made at a professional level.",
    },
    {
      icon: <img src="assets/icons/icon-dev.svg" alt="about-img"></img>,
      title: "Web Development",
      content: "High-quality development of sites at the professional level.",
    },
    {
      icon: <img src="assets/icons/icon-app.svg" alt="about-img"></img>,
      title: "Mobile Apps",
      content: "Professional development of applications for iOS and Android.",
    },
    {
      icon: <img src="assets/icons/icon-photo.svg" alt="about-img"></img>,
      title: "Photography",
      content:
        "I make high-quality photos of any category at a professional level.",
    },
  ];

  return (
    <>
      <Intro title="About Me">
        <p>
          I'm a Full-Stack Developer skilled in diverse technologies including
          ReactJs, Angular, Python, Docker, Postgres, and NodeJs. I bring a
          unique perspective to software development, backed by 5 years of
          experience as a System Admin, providing me with a comprehensive
          understanding of systems and networking. Previously, I contributed to
          the IT department of a bank, building and maintaining complex
          applications.
        </p>
        <p>
          Currently, I'm applying my skills at a Singaporean startup
          specializing in vehicle trading, navigating the exciting challenges of
          a fast-paced and innovative environment. Parallel to my professional
          journey, I'm pursuing a Master's degree in Information Security at
          UIT, expanding my knowledge in a field I deeply value and continuously
          aim to improve in.
        </p>

        <div className="mt-1">
          <h2 className="title title--h3">What I'm Doing</h2>
          <div className="row">
            {cardItems.map((item, idx) => (
              <div key={idx} className="col-12 col-lg-6">
                <CardOutline
                  icon={item.icon}
                  title={item.title}
                  content={item.content}
                ></CardOutline>
              </div>
            ))}
          </div>
        </div>
      </Intro>
    </>
  );
};

export default About;
