import Button from "../Button/Button.jsx";

import desktopImage from "../../assets/product-image/image-product-desktop.jpg";
import mobileImage from "../../assets/product-image/image-product-mobile.jpg";
import "./preview-card.css";

const PreviewCard = () => {
    return (
        <article className="preview-card | grid">
            <div className="preview-card__image">
                <picture>
                    <source media="(min-width: 765px)" srcSet={desktopImage} />
                    <img src={mobileImage}
                        alt="Gabrielle Essence Eau De Parfum bottle on a cream background with decorative leaves on top left and bottom right corners" />
                </picture>
            </div>
            <div className="preview-card__body | grid" >
                <p className="preview-card__category | uppercase">Perfume</p>

                <h2 className="preview-card__title | primary-heading text-accent fw-bold">
                    Gabrielle Essence Eau De Parfum
                </h2>
                <p>
                    A floral, solar and voluptuous interpretation composed by
                    Olivier Polge, Perfumer-Creator for the House of CHANEL.
                </p>
                <div className="preview-card__price-container flex">
                    <p className="preview-card__price | primary-heading fw-bold text-accent ">
                       <span className="visually-hidden">Price: </span> $149.99
                    </p>
                    <p className="preview-card__price-original">
                        <span className="visually-hidden"> Original price: </span><s>$169.99</s>
                    </p>
                </div>
                <Button text="Add to Cart" dataType="primary" dataIcon="cart" />
            </div>
        </article>
    );
};

export default PreviewCard;
