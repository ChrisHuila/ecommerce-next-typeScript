import Logo from "./Logo";
import NetworksLinks from "../footer/NetworksLinks";
import CardContact from "../footer/CardContact";
import IconPhone from "../icons/gmail-icon";

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
                    <NetworksLinks />
                </div>
                <div className="footer-contact">
                    <h2 className="">contact us</h2>
                    <CardContact
                        title="phone number"
                        description="+57 xxx xx xxxx">
                        <IconPhone />
                    </CardContact>
                </div>
            </div>
        </div>
    );
};

export default Footer;
