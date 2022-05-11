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
      <p>
        Created By
        <div>
          <a href="https://github.com/muhammadqasemtarboush1">
            Muhammad Tarboush
          </a>
        </div>
      </p>
      <div className="copyright">Copyright (c) 2022 @Travel Destination</div>
    </footer>
  );
}

export default Footer;
