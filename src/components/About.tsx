import webIcon from "../assets/images/Web-Dev-Icon.svg";
import uxIcon from "../assets/images/UX-Icon.svg";
import icon from "../assets/images/icon.svg";
import appDev from "../assets/images/App-Dev-Icon.svg";

const offerings = [
  {
    icon: webIcon,
    title: "Web development",
    overview:
      "We use cutting-edge web development technologies to help our clients fulfill their business goals through functional, reliable solutions.",
  },
  {
    icon: uxIcon,
    title: "User experience & design",
    overview:
      "Our Complete web design services will bring your ideas to life and provide you with a sleek, high-performing product that elevates your business.",
  },
  {
    icon: appDev,
    title: "Mobile app development",
    overview:
      "Our extensive mobile development experience allows us to create custom native and cross-platform iOS and Android mobile solutions for our clients.",
  },
  {
    icon: icon,
    title: "Blockchain solutions",
    overview:
      "We conduct market research to determine the optimal blockchain-based solutions to help you grow your company and achieve your business goals.",
  },
];
function About() {
  return (
    <div className="about">
      <h2 className="sub-title">What we do</h2>
      <h1>
        We offer a complete range of bespoke design and development services to
        help you turn your ideas into digital masterpieces
      </h1>
      <div className="about-data">
        {offerings.map((offering, index) => (
          <div key={index}>
            <img src={offering.icon} alt={offering.title} />
            <h4>{offering.title}</h4>
            <p>{offering.overview}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
