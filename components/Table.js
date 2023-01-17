import React from "react";
import PropTypes from "prop-types";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import TableContent from "./TableContent";

const Table = ({ items = [] }) => {
  const isEmpty = items.length === 0;

  return isEmpty ? (
    <div>
      <p>
        {/* <ExclamationCircleIcon className="h-6 w-6 text-blue-500" /> */}
        <span>Unfortunately, there is nothing to display yet.</span>
      </p>
    </div>
  ) : (
    <div>
      <table>
        <thead>
          <tr>
            <th>title</th>
            <th>brand</th>
            <th>price</th>
            <th>cost</th>
            <th>barcode</th>
            <th>size</th>
            <th>color</th>
            <th>stock</th>
            <th>active</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <TableContent key={item.id} {...item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

Table.prototype = {
  items: PropTypes.array,
};

export default Table;
