import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

export const History = () => {
  const [hasMore, setHasMore] = useState(true);
  const [items, setItems] = useState(Array.from({ length: 20 }));

  const fetchMoreData = () => {
    if (items.length >= 1500) {
      setHasMore(false);
      return;
    }
    // a fake async api call like which sends
    // 20 more records in .5 secs
    setTimeout(() => {
      setItems(items.concat(Array.from({ length: 20 })));
    }, 1500);
  };

  // dispatch(fetchHistoryList({ pageNumber: 1, pageItemsLimit: 10 }));

  return (
    <div>
      <InfiniteScroll
        pageStart={0}
        loadMore={fetchMoreData}
        hasMore={hasMore}
        loader={
          <div className="loader" key={0}>
            Loading ...
          </div>
        }
        useWindow
      >
        {items.map((i, index) => (
          <div
            /* eslint-disable-next-line react/no-array-index-key */
            key={index}
            style={{
              height: 30,
              border: "1px solid green",
              margin: 6,
              padding: 8,
            }}
          >
            {index}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
};

History.propTypes = {};

History.defaultProps = {};
