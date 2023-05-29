import React, { useEffect, useState } from "react";
import axios from "axios";
import TextEncoder from "text-encoding";

const Products = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await axios.get("/api/records");
      setProductsData(response.data.data);
    } catch (error) {
      console.log(error);
    }
  }

  const [currentPage, setCurrentPage] = useState(1);
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const totalPages = Math.ceil(productsData.length / 10);

  const goToNextPage = () => {
    const nextPage = currentPage + 1;
    const hasNextPage = nextPage <= totalPages;
    if (hasNextPage) {
      setCurrentPage(nextPage);
    }
  };


  return (
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "2rem" }}
      >
        <a
          className="btn-outline-primary"
          href="/"
          role="button"
          style={{
            color: "#fff",
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          Home
        </a>
      </div>
      <div className="divProducts" style={{}}>
        {productsData
          .slice((currentPage - 1) * 10, currentPage * 10)
          .map((product) => (
            <div className="card" style={{ transform: "scale(1.1)" }}>
              <img src={product.image} className="card-img-top" alt="image" />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.summary}</p>
                <button className="buton">Go somewhere</button>
              </div>
            </div>
          ))}
      </div>
      <div className="text-center" style={{ padding: "2rem" }}>
        <ul className="pagination pagination-lg">
          <li className="page-item">
            <a className="page-link" href="#" onClick={goToPreviousPage}>
              Previous
            </a>
          </li>
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              onClick={goToNextPage}
              style={{ color: currentPage >= totalPages ? "red" : "" }}
            >
              Next
            </a>
          </li>
        </ul>
        
      </div>
      
    </div>
  );
};

export default Products;
