import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useDispatch, useSelector } from "react-redux";
import { fetchHistoryList, selectHistory } from "../../models/historyList";

export const History = () => {
  const dispatch = useDispatch();
  const { historyList, status, page: pageNumber, hasMoreItems } = useSelector(
    selectHistory
  );

  const isAppLoading = status === "loading";

  const fetchMoreData = () => {
    dispatch(fetchHistoryList({ pageNumber, pageItemsLimit: 10 }));
  };

  return (
    <div>
      <InfiniteScroll
        loadMore={fetchMoreData}
        hasMore={!isAppLoading && hasMoreItems}
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
              height: 150,
              border: "1px solid green",
              margin: 6,
              padding: 8,
            }}
          >
            {dropoff}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

History.propTypes = {};

History.defaultProps = {};
