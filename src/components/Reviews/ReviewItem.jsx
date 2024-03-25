import sprite from "assets/categories.svg";
import {BoxName, Circle, WrappCircle} from "./Reviews.styled.js";

export const Review = ({ review: {comment, reviewer_name, reviewer_rating} }) => {
    const defaultStar = 5;

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= defaultStar; i++) {
            const starType = i <= (reviewer_rating || defaultStar) ? 'star' : 'default-star';
            stars.push(
                <svg key={i} width="16" height="16">
                    <use xlinkHref={`${sprite}#${starType}`} />
                </svg>
            );
        }
        return stars;
    };

    return (
        <div>
            <BoxName>
                <WrappCircle>
                    <Circle>{reviewer_name.charAt(0)}</Circle>
                </WrappCircle>
                <div>
                    <p>{reviewer_name}</p>
                    {renderStars()}
                </div>
            </BoxName>
            <p>{comment}</p>
        </div>
    );
};
