import {Details} from "../Details/Details.jsx";
import {Table} from "../Table/Table.jsx";
import { DetailsInfo, TableTitle } from "./Features.styled.js";
import {BookingForm} from "../Booking/Booking.jsx";

export const Features = ({info}) => {

    const CamperIcons = {
        adults: info.adults,
        transmission: info.transmission,
        engine: info.engine,
        kitchen: info.details.kitchen,
        beds: info.details.beds,
        ac: info.details.airConditioner,
        airConditioner: info.details.airConditioner,
        bathroom: info.details.bathroom,
        tv: info.details.TV,
        cd: info.details.CD,
        radio: info.details.radio,
        shower: info.details.shower,
        toilet: info.details.toilet,
        freezer: info.details.freezer,
        hob: info.details.hob,
        microwave: info.details.microwave,
        gas: info.details.gas,
        water: info.details.water,
    };

    return (
        <>
            <DetailsInfo>
                <div>
                    <Details camper={CamperIcons}/>
                </div>
                <div>
                    <TableTitle>Vehicle details</TableTitle>
                    <Table info={info}/>
                </div>
            </DetailsInfo>
            <BookingForm/>
        </>
    );
};