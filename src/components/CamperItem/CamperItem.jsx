import { useState } from "react";
import { Modal } from "../Modal/Modal.jsx";
import {
    Img,
    Item,
    ItemTitle,
    Button,
    InfoWrapp,
    UseFavorite,
    ItemInfo,
    ItemText,
    ButtonModal,
    ItemTitleWrap,
} from "./CamperItem.styled.js";
import sprite from "assets/categories.svg";
import { Details } from "../Details/Details.jsx";
import { selectorFavorite } from "../../redux/favorite/selectors.js";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../../redux/favorite/favoriteSlice.js";
import {TextRating} from "../CamperList/CamperList.styled.js";

export const CamperItem = ({ camper }) => {
    const dispatch = useDispatch();
    const favorites = useSelector(selectorFavorite);
    const [isActive, setIsActive] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useState(() => {
        const isFavorite = favorites.some((item) => item._id === camper._id);
        setIsActive(isFavorite);
    }, [favorites, camper]);

    const handleFavoriteClick = () => {
        if (isActive) {
            setIsActive(false);
            dispatch(removeFromFavorites(camper));
        } else {
            setIsActive(true);
            dispatch(addToFavorites(camper));
        }
    };

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    const сamperIcons = {
        adults: camper.adults,
        transmission: camper.transmission,
        engine: camper.engine,
        kitchen: camper.details.kitchen,
        beds: camper.details.beds,
        ac: camper.details.airConditioner,
    };

    return (
        <Item>
            <Img src={camper.gallery[0]} alt="" />
            <InfoWrapp>
                <ItemTitleWrap>
                    <ItemTitle>{camper.name}</ItemTitle>
                    <p style={{ marginLeft: "auto" }}>€{camper.price}.00</p>
                    <Button className={isActive ? "active" : ""} onClick={handleFavoriteClick}>
                        <svg width="24" height="24">
                            <UseFavorite xlinkHref={`${sprite}#favorite`} />
                        </svg>
                    </Button>
                </ItemTitleWrap>
                <ItemInfo>
                    <div>
                        <svg width="16" height="16">
                            <use xlinkHref={`${sprite}#star`} />
                        </svg>
                        <TextRating>{camper.rating} ({camper.reviews.length} Reviews)</TextRating>
                    </div>
                    <div>
                        <svg width="16" height="16">
                            <use xlinkHref={`${sprite}#location`} />
                        </svg>
                        <p>{camper.location}</p>
                    </div>
                </ItemInfo>
                <ItemText>{camper.description}</ItemText>
                <Details camper={сamperIcons} />
                <ButtonModal onClick={openModal}>Show more</ButtonModal>
                <Modal isOpen={isOpen} onClose={closeModal} camper={camper} />
            </InfoWrapp>
        </Item>
    );
};
