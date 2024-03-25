import sprite from "assets/categories.svg";
import { Item, List } from "./Details.styled.js";

export const Details = ({ camper }) => {
    const renderDetails = () => {
        const renderedDetails = [];

        Object.entries(camper).forEach(([key, value]) => {
            const lowerCaseKey = key.toLowerCase();
            let renderedValue;

            if (typeof value === 'string') {
                renderedValue = value.charAt(0).toUpperCase() + value.slice(1);
            } else if (typeof value === 'number') {
                if (value > 1) {
                    renderedValue = `${value} ${key}`;
                } else {
                    renderedValue = key;
                }
            }

            if (key === 'airConditioner') {
                renderedValue = 'Air conditioner';
            }

            if (renderedValue) {
                renderedDetails.push(
                    <Item key={lowerCaseKey}>
                        <svg width="20" height="20">
                            <use xlinkHref={`${sprite}#${lowerCaseKey}`} />
                        </svg>
                        <span>{renderedValue}</span>
                    </Item>
                );
            }
        });

        return renderedDetails;
    };

    return (
        <List>
            {renderDetails()}
        </List>
    );
};


