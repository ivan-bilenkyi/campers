import {BookingForm} from "../Booking/Booking.jsx";
import {Review} from "./ReviewItem.jsx";
import { Wrapper } from "./Reviews.styled.js";

export const Reviews = ({ info: { reviews } }) => {
    return (
        <>
            <Wrapper>
                {reviews?.map((el, index) => (
                    <Review key={index} review={el}/>
                ))}
            </Wrapper>
            <BookingForm/>
        </>
    );
};