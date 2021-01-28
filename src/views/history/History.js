import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchHistoryList,
  selectHistoryList,
  selectPage,
} from "../../models/historyList";

export const History = () => {
  const dispatch = useDispatch();
  const { historyList } = useSelector(selectHistoryList);
  // const { page } = useSelector(selectPage);
  // eslint-disable-next-line no-unused-vars
  const [pageNumber, setPageNumber] = useState(1);

  const fetchMoreData = () => {
    dispatch(fetchHistoryList({ pageNumber: page, pageItemsLimit: 1 }));
    // setPageNumber(pageNumber + 1);
  };

  // dispatch(fetchHistoryList({ pageNumber: 1, pageItemsLimit: 10 }));

  return (
    <div>
      <InfiniteScroll
        loadMore={fetchMoreData}
        hasMore
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
        useWindow
      >
        {historyList.map(({ id, ride: { dropoff } }, index) => (
          <div
            /* eslint-disable-next-line react/no-array-index-key */
            key={id + index}
            style={{
              height: 30,
              border: "1px solid green",
              margin: 6,
              padding: 8,
            }}
          >
            {console.log(">>>>", dropoff)}
            {dropoff}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

History.propTypes = {};

History.defaultProps = {};
