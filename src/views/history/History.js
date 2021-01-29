import React from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useDispatch, useSelector } from "react-redux";
import { HistoryCard } from "../../components";
import { fetchHistoryList, selectHistory } from "../../models";

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
    <InfiniteScroll
      loadMore={fetchMoreData}
      hasMore={!isAppLoading && hasMoreItems}
      loader={
        <div className="loader" key={0}>
          Loading ...
        </div>
      }
    >
      {historyList.map(
        ({ id, ride: { dropoff, created_at, pickup, total } }, index) => (
          <HistoryCard
            key={id + index}
            id={id}
            dropoff={dropoff}
            createdAt={created_at}
            pickup={pickup}
            total={total}
          />
        )
      )}
    </InfiniteScroll>
  );
};
