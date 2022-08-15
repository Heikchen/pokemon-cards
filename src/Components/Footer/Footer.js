import "./Footer.css";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-icons">
        <div>
          <a href="#" className="facebook">
            <i className="fa-brands fa-facebook fa-3x"></i>
          </a>
        </div>
        <div>
          <a href="#" className="twitter">
            <i className="fa-brands fa-twitter fa-3x "></i>
          </a>
        </div>
        <div>
          <a href="https://github.com/Heikchen" className="github">
            <i className="fa-brands fa-github fa-3x "></i>
          </a>
        </div>
      </div>
      <div className="footer-links-container">
        <a className="footer-links" href="#">
          About Us
        </a>
        <a className="footer-links" href="#">
          Privacy Protection
        </a>
        <a className="footer-links" href="#">
          Contact Us
        </a>
      </div>
    </div>
  );
}
export default Footer;
