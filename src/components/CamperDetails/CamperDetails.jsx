import { UseFavorite } from "../CamperItem/CamperItem.styled.js";
import sprite from "assets/categories.svg";
import {
    Img,
    ImgWrapp,
    ModalInner,
    Title,
    ItemInfo,
    ItemList,
    Item,
    ItemText,
    ItemBtn, ItemListWrapp, CloseModalBtn, Container, Price
} from "./CamperDetails.styled.jsx";
import {Features} from "../Features/Features.jsx";
import {Reviews} from "../Reviews/Reviews.jsx";
import {useState} from "react";
import {TextRating} from "../CamperList/CamperList.styled.js";

export const CamperDetails = ({ item, onClose }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <ModalInner>
            <CloseModalBtn onClick={onClose}>
                <svg width="20" height="20">
                    <use xlinkHref={`${sprite}#icon-close`}/>
                </svg>
            </CloseModalBtn>
            <Title>{item.name}</Title>
            <ItemInfo>
                <div>
                    <svg width="16" height="16">
                        <UseFavorite xlinkHref={`${sprite}#star`}/>
                    </svg>
                    <TextRating>{item.rating} ({item.reviews.length} Reviews)</TextRating>
                </div>
                <div>
                    <svg width="16" height="16">
                        <UseFavorite xlinkHref={`${sprite}#location`}/>
                    </svg>
                    <p>{item.location}</p>
                </div>
            </ItemInfo>
            <Price>€{item.price}.00</Price>
            <ImgWrapp>
                {item.gallery.map((item, index) => (
                    <li key={index}>
                        <Img src={item} alt={`Image ${index}`}/>
                    </li>
                ))}
            </ImgWrapp>
            <ItemText>{item.description}</ItemText>

            <ItemListWrapp>
                <ItemList>
                    <Item>
                        <ItemBtn onClick={() => setIsOpen(false)} className={!isOpen ? 'active' : ''}>
                            Features
                        </ItemBtn>
                    </Item>
                    <Item>
                        <ItemBtn onClick={() => setIsOpen(true)} className={isOpen ? 'active' : ''}>
                            Reviews
                        </ItemBtn>
                    </Item>
                </ItemList>
            </ItemListWrapp>


            <Container>
                {!isOpen ? <Features info={item}/> : <Reviews info={item}/>}
            </Container>
        </ModalInner>
    );
};

