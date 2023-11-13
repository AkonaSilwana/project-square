import confidence from "../assets/images/confidence.jpeg";

const Hero = () => {
  return (
    <div className="hero">
      <img src={confidence} alt="Jose Mourinho" />
      <div className="hero-content">
        <h1>Live with Confidence</h1>
        <p>
          Jos&#233; Mourinho brings confidence to pan-Africa Sanlam campaign.
        </p>
        <button>View project</button>
      </div>
    </div>
  );
};

export default Hero;
