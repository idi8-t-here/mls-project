import React from "react";

const SearchComponent = () => {
  return (
    <div className="widget search-widget">
      <h5 className="widget-title">Search Realestate</h5>
      <form action="#">
        <input type="text" placeholder="Search ..." />
        <button type="submit">
          <i className="lni lni-search-alt" />
        </button>
      </form>
    </div>
  );
};

export default SearchComponent;
