import IconGitHub from "../icons/github-icon";
import IconLinkedin from "../icons/linkedin-icon";
import IconWhatsapp from "../icons/whatsapp-icon";
import Logo from "./Logo";

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-box container">
                <div className="footer-header">
                    <Logo />
                    <p>
                        Lorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi
                        tempora.
                    </p>
                    <a
                        href="https://www.linkedin.com/in/christian-camilo-huila-garces/"
                        target="_blank">
                        <IconLinkedin />
                    </a>
                    <a href="">
                        <IconWhatsapp />
                    </a>
                    <a href="">
                        <IconGitHub />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
