import React from "react";
import PropTypes from "prop-types";

const TableContent = ({
  id = "",
  title = "",
  brand = "Nike",
  price = 95,
  cost = 0,
  sku = "",
  barcode = "",
  weight = 0,
  size = 0,
  color = "",
  stock = 0,
  active = false,
}) => {
  return (
    <>
      <tr>
        <td>{title}</td>
        <td>{brand}</td>
        <td>{price}</td>
        <td>{cost}</td>
        <td>{barcode}</td>
        <td>{size}</td>
        <td>{color}</td>
        <td>{stock}</td>
        <td>{active}</td>
      </tr>
    </>
  );
};

TableContent.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  brand: PropTypes.string,
  price: PropTypes.number,
  cost: PropTypes.number,
  sku: PropTypes.string,
  barcode: PropTypes.string,
  weight: PropTypes.number,
  size: PropTypes.number,
  color: PropTypes.string,
  stock: PropTypes.number,
  active: PropTypes.bool,
};

export default TableContent;
