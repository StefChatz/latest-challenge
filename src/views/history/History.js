import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useDispatch, useSelector } from "react-redux";
import { fetchHistoryList, selectHistory } from "../../models/historyList";

export const History = () => {
  const dispatch = useDispatch();
  const { historyList, status, page } = useSelector(selectHistory);

  const isAppLoading = status === "loading";
  // const { page } = useSelector(selectPage);
  // eslint-disable-next-line no-unused-vars

  const fetchMoreData = () => {
    if (isAppLoading) return;
    dispatch(fetchHistoryList({ pageNumber: page, pageItemsLimit: 10 }));
  };

  console.log(">>>>", isAppLoading);

  return (
    <div>
      <InfiniteScroll
        initialLoad
        loadMore={fetchMoreData}
        hasMore={!isAppLoading}
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
