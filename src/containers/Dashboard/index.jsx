/* eslint-disable no-unused-vars */
import Navbar from "../../components/Navbar"
import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import Sidebar from "../../components/sidebar"
import SidebarWithHeader from "../../components/Layout";

const DashboardItem = () => {
  const [filters, setFilters] = useState({
    price: 50,
    origin: [],
    species: [],
    roastLevel: [],
    tested: [],
    processing: [],
  });

  return (
    <>
     <SidebarWithHeader />
    </>
  )
}

export default DashboardItem