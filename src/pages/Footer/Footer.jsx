
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row">
            <div className=" col-md-4 item">
              <h3>OUR OTHER WEBSITES</h3>
              <ul>
                <li>
                  <a href="/">Transport Toys</a>
                </li>
                <li>
                  <a href="/">Barbie</a>
                </li>
                <li>
                  <a href="/">Animal Toys</a>
                </li>
              
              </ul>
            </div>
            
            <div className="col-md-4 item text">
              <h3>MUSICAL TOYS</h3>
              <p>
              This is a comercial Website.Where you can get many toys .Go check the site
              </p>
            </div>
            <div className="col-md-4 item text">
              <h3>CONTACT US</h3>
              <p>
              Mobile: 015438965453
              </p>
              <p>
              Email: Toy@gmail.com
              </p>
            </div>
          </div>
          <p className="copyright">BANGLADESH TOY © 2023</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;