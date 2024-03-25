import {useSelector} from "react-redux";
import {selectorFavorite} from "../redux/favorite/selectors.js";
import { List, ListWrapp, Wrapper} from "../components/CamperList/CamperList.styled.js";
import {CamperItem} from "../components/CamperItem/CamperItem.jsx";
import { Section } from '../components/Container.styled.js';

export default function Favorite() {
    const campers = useSelector(selectorFavorite)
    return (
        <Section>
            <Wrapper>
                <ListWrapp>
                    <List>
                        {campers && campers.length > 0 && campers.map(item => <CamperItem key={item._id} camper={item} />)}
                    </List>
                </ListWrapp>
            </Wrapper>
        </Section>
    );
}