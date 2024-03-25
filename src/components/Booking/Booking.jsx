import DatePicker from 'react-date-picker'
import 'react-date-picker/dist/DatePicker.css';
import './CustomDatePicker.css';
import { Formik } from 'formik';
import {FormStyle, FieldStyle, BokingText, Textarea} from "./Boking.styled.js";
import * as Yup from 'yup';
import {useState} from "react";
import { BokingWrap, BokingTitle } from "./Boking.styled.js";
import calendar from "assets/calendar.svg"

import {ButtonStyle} from "../Parts/Button/Button.styled.js";

const validationSchema = Yup.object().shape({
    name: Yup.string()
        .required('Name is required'),
    email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),
    bookingDate: Yup.date()
        .required('Booking date is required'),
    comment: Yup.string()
});

export const BookingForm = () => {
    const [value, onChange] = useState('');


    return (
        <BokingWrap>
            <BokingTitle>Book your campervan now</BokingTitle>
            <BokingText>Stay connected! We are always ready to help you.</BokingText>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                }}
                validationSchema={validationSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 500));
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                <FormStyle>
                    <FieldStyle id="name" name="firstName" placeholder="Name"/>
                    <FieldStyle id="email" name="email" type="email" placeholder="Email"/>
                    <DatePicker
                        className="custom-date-picker"
                        onChange={onChange}
                        value={value}
                        calendarIcon={<img src={calendar} alt="Calendar Icon" />}
                    />
                    <Textarea
                        id="comment"
                        name="comment"
                        label="Comment"
                        as="textarea"
                        placeholder="Comment"
                    />

                    <ButtonStyle type="submit">Send</ButtonStyle>
                </FormStyle>
            </Formik>
        </BokingWrap>
    );
};

