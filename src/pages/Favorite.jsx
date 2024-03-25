import {useSelector} from "react-redux";
import {selectorFavorite} from "../redux/favorite/selectors.js";
import { List, ListWrapp, Wrapper} from "../components/CamperList/CamperList.styled.js";
import {CamperItem} from "../components/CamperItem/CamperItem.jsx";

export default function Favorite() {
    const campers = useSelector(selectorFavorite)
    return (
        <Wrapper>
            <ListWrapp>
                <List>
                    {campers && campers.length > 0 && campers.map(item => <CamperItem key={item._id} camper={item} />)}
                </List>
            </ListWrapp>
        </Wrapper>

    );
}