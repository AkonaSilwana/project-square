const Footer = () => {
  return (
    <div className="footer">
      <p className="sub-title">Contact us</p>
      <div className="footer-content">
        <div className="container-1">
          <h2>
            Have a project in mind?
            <br /> Let's make it happen
          </h2>
          <div className="list-container">
            <ul className="list-unstyled">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>Impressum</li>
            </ul>
            <ul className="list-unstyled">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
            <ul className="list-unstyled">
              <li>Github</li>
              <li>LinkedIn</li>
              <li>Teams</li>
            </ul>
            <ul className="list-unstyled">
              <li>Youtube</li>
              <li>Behance</li>
              <li>Dribble</li>
            </ul>
          </div>
        </div>
        <div className="container-2">
          <h6>
            22 Street name, Surbub, 8000,
            <br /> Cape Town, South Africa <br /> +27 21 431 0001 <br />
            <a href="mailto:enquiries@website.co.za">enquiries@website.co.za</a>
          </h6>
          <ul className="list-unstyled">
            <li>Explore more jobs</li>

            <li>&copy; 2000- 2023 company name</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
