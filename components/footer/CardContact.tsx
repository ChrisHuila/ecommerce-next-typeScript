import { ReactNode } from "react";

interface Props {
    children: ReactNode;
    title: string;
    description: string;
    span?: string;
}

const CardContact = ({ children, title, description, span }: Props) => {
    return (
        <div className="contact-card">
            <div className="card-icon">{children}</div>
            <div className="card-information">
                <h3>{title}</h3>
                <p>
                    {description} <span>{span}</span>
                </p>
            </div>
        </div>
    );
};

export default CardContact;
