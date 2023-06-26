import IconGitHub from "../icons/github-icon";
import IconLinkedin from "../icons/linkedin-icon";
import IconWhatsapp from "../icons/whatsapp-icon";

const NetworksLinks = () => {
    return (
        <div className="networkslinks">
            <a
                href="https://www.linkedin.com/in/christian-camilo-huila-garces/"
                target="_blank">
                <IconLinkedin />
            </a>
            <a
                href="https://api.whatsapp.com/send?phone=573155301177&text=Buen%20dia!%20te%20contacto%20por%20:%20"
                target="_blank">
                <IconWhatsapp />
            </a>
            <a
                href="https://github.com/ChrisHuila"
                target="_blank">
                <IconGitHub />
            </a>
        </div>
    );
};

export default NetworksLinks;
