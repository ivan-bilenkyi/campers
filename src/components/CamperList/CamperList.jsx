import { List, ListWrapp, ButtonStyle } from "./CamperList.styled.js";
import { useDispatch, useSelector } from "react-redux";
import { selectorCampers, selectorFilter, selectorIsLoading } from '../../redux/campers/selectors.js';
import { CamperItem } from "../CamperItem/CamperItem.jsx";
import { useEffect, useState, useMemo } from "react";
import { getAll } from "../../redux/campers/operations.js";

export const CamperList = () => {
  const dispatch = useDispatch();
  const campers = useSelector(selectorCampers);
  const isLoading = useSelector(selectorIsLoading)
  const [loadMore, setLoadMore] = useState(false);
  const [page, setPage] = useState(1);
  const limit = 4;
  const valueFilter = useSelector(selectorFilter);


  const config = useMemo(() => ({ page, limit, valueFilter }), [page, limit, valueFilter]);


  useEffect(() => {
    console.log(valueFilter);
    dispatch(getAll(config));
  }, [dispatch, config, page, valueFilter]);

  useEffect(() => {
    setLoadMore(campers.length % limit === 0);
  }, [campers, limit]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage += 1);
  };
  console.log(campers);
    return (
        <ListWrapp>
            <List>
                {campers && campers.length > 0 && campers.map(item => <CamperItem key={item._id} camper={item} />)}
            </List>
            {!isLoading && loadMore && <ButtonStyle onClick={handleLoadMore}>Load more</ButtonStyle>}

        </ListWrapp>
    );
};

