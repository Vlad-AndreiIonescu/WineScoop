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
  useEffect(() => {
    postData();
  }, []);

  async function postData() {
    try {
      const response = await axios.patch("/api/records");
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
  const totalPages = Math.ceil(productsData.length / 9);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
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
      <div class="text-center" style={{ padding: "2rem" }}>
        <ul class="pagination pagination-lg">
          <li class="page-item">
            <a class="page-link" href="#" onClick={goToPreviousPage}>
              Previous
            </a>
          </li>

          <li class="page-item">
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
