import React from "react";
import * as Yup from "yup";

const ItemSchema = Yup.object().shape({
  title: Yup.string().trim().required(),
  description: Yup.string().trim(),
  brand: Yup.string().trim().required(),
  price: Yup.number().positive().integer().min(1).required(),
  cost: Yup.number().positive().integer().min(1),
  sku: Yup.string().trim(),
  barcode: Yup.string().trim().required(),
  weight: Yup.number().positive().integer(),
  size: Yup.number().positive().integer().min(1).required(),
  color: Yup.string().trim().required(),
  stock: Yup.number().positive().integer().required(),
  active: Yup.boolean(),
});

const itemForm = () => {
  return <div></div>;
};

export default itemForm;
