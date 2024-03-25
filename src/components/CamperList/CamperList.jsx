import { List, ListWrapp, ButtonStyle } from "./CamperList.styled.js";
import { useDispatch, useSelector } from "react-redux";
import { selectorCampers } from "../../redux/campers/selectors.js";
import { CamperItem } from "../CamperItem/CamperItem.jsx";
import { useEffect, useState, useMemo } from "react";
import { getAll } from "../../redux/campers/operations.js";

export const CamperList = () => {
    const dispatch = useDispatch();
    const campers = useSelector(selectorCampers);
    const [loadMore, setLoadMore] = useState(false);
    const [page, setPage] = useState(1);
    const limit = 4;

    const config = useMemo(() => ({ page, limit }), [page, limit]);

    useEffect(() => {
        dispatch(getAll(config));
    }, [dispatch, config, page]);

    useEffect(() => {
        setLoadMore(campers.length % limit === 0);
    }, [campers, limit]);

    const handleLoadMore = () => {
        setPage(prevPage => prevPage += 1);
    };

    return (
        <ListWrapp>
            <List>
                {campers && campers.length > 0 && campers.map(item => <CamperItem key={item._id} camper={item} />)}
            </List>
            {loadMore && <ButtonStyle onClick={handleLoadMore}>Load more</ButtonStyle>}
        </ListWrapp>
    );
};

