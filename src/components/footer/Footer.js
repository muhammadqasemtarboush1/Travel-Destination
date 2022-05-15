import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <div className="social">
        <a href="instagram.com">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href="twitter.com">
          <i className="fa-brands fa-twitter"></i>
        </a>
        <a href="facebook.com">
          <i className="fa-brands fa-facebook-f"></i>
        </a>
      </div>
      <div>
        <span>
          Created By
          <a href="https://github.com/muhammadqasemtarboush1">
            Muhammad Tarboush
          </a>
        </span>
      </div>
      <div className="copyright">Copyright (c) 2022 @Travel Destination</div>
    </footer>
  );
}

export default Footer;
