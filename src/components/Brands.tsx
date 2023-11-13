import visa from "../assets/images/visa-black.svg";
import wesgrow from "../assets/images/wesgrow-black.svg";
import tyme from "../assets/images/tyme-bank-black.svg";
import tfg from "../assets/images/tfg-black.svg";
import spotify from "../assets/images/spotify-black.svg";
import santam from "../assets/images/santam-black.svg";
import sanlam from "../assets/images/sanlam-black.svg";
import pnp from "../assets/images/pnp-black.svg";
import nike from "../assets/images/nike-black.svg";
import multichoice from "../assets/images/multichoice-black.svg";
import microsoft from "../assets/images/microsoft-black.svg";
import liquid from "../assets/images/liquid-black.svg";
import engen from "../assets/images/engen-black.svg";
import distell from "../assets/images/distell-black.svg";
import bbc from "../assets/images/bbc-black.svg";

const brandImages: string[] = [
  visa,
  tyme,
  distell,
  spotify,
  microsoft,
  engen,
  nike,
  wesgrow,
  multichoice,
  pnp,
  liquid,
  tfg,
  sanlam,
  santam,
  bbc,
];
const Brands = () => {
  return (
    <div className="brands">
      <p className="sub-title">You'll be in good company</p>
      <h2>Trusted by leading brands</h2>
      <div className="brand-gallery">
        {brandImages.map((brandImage, index) => (
          <div key={index} className="gallery-image">
            <img src={brandImage} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
