import Logo from "./Logo";
import NetworksLinks from "./NetworksLinks";

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
            </div>
        </div>
    );
};

export default Footer;
