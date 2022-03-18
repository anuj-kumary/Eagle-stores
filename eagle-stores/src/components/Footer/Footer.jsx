import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <p className="footer__text">Made with ❤️ by Anujkumar Yadav</p>
        <div className="footer__icon">
          <a href="https://github.com/anuj-kumary/Eagle-Store">
            <i className="icon fab fa-github-square"></i>
          </a>
          <a href="https://twitter.com/TheRealAnujK">
            <i className="icon fab fa-twitter-square"></i>
          </a>
          <a href="https://www.linkedin.com/in/anujkumar-yadav-29b2521aa/">
            <i className="icon fab fa-linkedin"></i>
          </a>
        </div>
        <p className="footer__text">© EagleStore, 2022 All rights reserved. </p>
      </footer>
    </>
  );
};
