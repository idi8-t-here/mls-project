import React, { useState, useEffect } from "react";
import PreloaderComponent from "./PreloaderComponent";
import ListingCard from "./ListingCard";
import NewsComponent from "./NewsComponent";
import NavigationBar from "./NavigationBar";
import { useNavigate } from 'react-router-dom';

const Listings = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const users = sessionStorage.getItem('user');
  const user = JSON.parse(users);

  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Advanced search state
  const [searchParams, setSearchParams] = useState({
    address: "",
    bathrooms: "",
    bedrooms: "",
    categories: "",
    city: "",
    description: "",
    title: "",
    price: "",
    squareFeet: "",
    state: "",
    status: "",
  });

  useEffect(() => {
    fetchProperties();
  }, [properties]);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 2000);
  // }, []);

  useEffect(() => {
    handleAdvancedSearch();
  }, [searchParams, properties]);

  const fetchProperties = async () => {
    try {
      const response = await fetch("http://localhost:3000/properties").then(
        setLoading(false)
      );
      const data = await response.json();
      const filteredProperties = data.data.properties.filter(
        property => property.approvalStatus === "approved"
      );
      setProperties(filteredProperties);
      
    } catch (error) {
      console.error("Error fetching properties:", error);
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
    const filtered = properties.filter((property) =>
      property.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredProperties(filtered);
    setCurrentPage(1);
  };

  const handleSearchFormSubmit = (e) => {
    e.preventDefault();
    const filtered = properties.filter((property) =>
      property.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProperties(filtered);
    setCurrentPage(1); // Reset to first page
  };

  const handleCategoryClick = (category) => {
    const filtered = properties.filter(
      (property) => property.categories.toLowerCase() === category.toLowerCase()
    );
    setFilteredProperties(filtered);
    setCurrentPage(1); // Reset to first page
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleAdvancedSearchInputChange = (e) => {
    const { name, value } = e.target;
    setSearchParams((prevParams) => ({
      ...prevParams,
      [name]: value,
    }));
  };

  const handleAdvancedSearch = () => {
    const filtered = properties.filter((property) => {
      return Object.keys(searchParams).every((key) => {
        if (!searchParams[key]) return true;

        const propValue = property[key];
        if (propValue === undefined || propValue === null) return false;

        if (key === 'price') {
          return propValue === Number(searchParams[key]);
        }

        if (typeof propValue === "number") {
          return propValue === Number(searchParams[key]);
        }

        return String(propValue).toLowerCase().includes(searchParams[key].toLowerCase());
      });
    });
    setFilteredProperties(filtered);
    setCurrentPage(1); 
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProperties = filteredProperties.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);

  return (
    <>
      {loading ? (
        <PreloaderComponent />
      ) : (
        <>
          <NavigationBar />
          <div className="breadcrumbs">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 offset-lg-3 col-md-12 col-12">
                  <div className="breadcrumbs-content">
                    <h1 className="page-title">All Properties</h1>
                    <ul className="breadcrumb-nav">
                      <li>
                        <a href="index.html">Home</a>
                      </li>
                      <li>properties</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <section className="section blog-grid-page">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-md-12 col-12">
                  <div className="row">
                    {currentProperties.map((property) => (
                      <ListingCard key={property._id} property={property} />
                    ))}
                  </div>
                  {/* Pagination */}
                  <div className="pagination left">
                    <ul className="pagination-list">
                      <li>
                        <a
                          onClick={() => handlePageChange(currentPage - 1)}
                          disabled={currentPage === 1}
                        >
                          Prev
                        </a>
                      </li>
                      {Array.from({ length: totalPages }, (_, index) => index + 1).map((number) => (
                        <li key={number} className={number === currentPage ? "active" : ""}>
                          <a onClick={() => handlePageChange(number)}>
                            {number}
                          </a>
                        </li>
                      ))}
                      <li>
                        <a
                          onClick={() => handlePageChange(currentPage + 1)}
                          disabled={currentPage === totalPages}
                        >
                          Next
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/*/ End Pagination */}
                </div>
                <aside className="col-lg-4 col-md-12 col-12">
                  <div className="sidebar">
                    {/* Start Single Widget */}
                    {/* <div className="widget search-widget">
                      <h5 className="widget-title">Search Realestate</h5>
                      <form onSubmit={handleSearchFormSubmit}>
                        <input
                          type="text"
                          placeholder="Search ..."
                          value={searchQuery}
                          onChange={handleSearchInputChange}
                        />
                        <a type="submit">
                          <i className="lni lni-search-alt" />
                        </a>
                      </form>
                    </div> */}
                    {/* End Single Widget */}
                    {/* Start Single Widget */}
                    

                    <div className="widget search-widget">
                      <h5 className="widget-title">Advanced Search</h5>
                      <form onSubmit={(e) => e.preventDefault()}>
                        {Object.keys(searchParams).map((param) => (
                          
                          <input
                            key={param}
                            type="text"
                            name={param}
                            placeholder={`Search by ${param}`}
                            value={searchParams[param]}
                            onChange={handleAdvancedSearchInputChange}
                          />
                          
                        ))}
                        <button type="button" onClick={handleAdvancedSearch}>
                          Search
                        </button>
                      </form>
                    </div>
                    {/* End Single Widget */}
                    <NewsComponent />
                    {/* Start Single Widget */}
                  
                    {/* End Single Widget */}
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Listings;
