import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Categories({ name, productCount = 0}) {
  return (
    <div>
        <Link to="/cua-hang">
          <i className="fas fa-arrow-right me-2" />
          {name}
        </Link>
        <span>({productCount})</span>
      </div>
  );
}
Categories.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.number.isRequired, // Bạn có thể cần điều chỉnh theo kiểu dữ liệu của status
  productCount: PropTypes.number.isRequired,
};

export default Categories;
