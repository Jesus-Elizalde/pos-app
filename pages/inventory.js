import React from "react";
import Table from "../components/Table";
import prisma from "../utils/db";

import SideNavbar from "../components/SideNavbar";

const inventory = ({ items = [] }) => {
  return (
    <div className="main__container">
      <SideNavbar />
      <div>
        <Table items={items} />
      </div>
    </div>
  );
};

export default inventory;
export async function getServerSideProps() {
  const items = await prisma.item.findMany();
  return {
    props: {
      items: JSON.parse(JSON.stringify(items)),
    },
  };
}
