import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useDispatch, useSelector } from "react-redux";
import { fetchHistoryList, selectHistory, selectRide } from "../../models";

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
            key={id + index}
            style={{
              height: 150,
              border: "1px solid green",
              margin: 6,
              padding: 8,
            }}
          >
            {dropoff}
            <button onClick={() => dispatch(selectRide(id))}> click </button>
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

History.propTypes = {};

History.defaultProps = {};
