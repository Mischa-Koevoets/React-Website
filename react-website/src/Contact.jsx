import { Link } from "react-router-dom";
import Header from "./Header";
import "./Contact.css";

export const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

function Contact(props) {
  return (
    <>
      <Header />
      <h1>Welcome to the contact page!</h1>
      <h3>Please see one of these links below</h3>
      <div className="contact-links">
        <Link
          onClick={() =>
            openInNewTab(
              "https://www.linkedin.com/in/mischa-koevoets-27880b279/"
            )
          }
        >
          LinkedIn
        </Link>
        <Link
          onClick={() => openInNewTab("https://github.com/Mischa-Koevoets")}
        >
          GitHub
        </Link>
      </div>
      <h5>or write me an email at mischakoevoets@gmail.com</h5>
    </>
  );
}

export default Contact;
