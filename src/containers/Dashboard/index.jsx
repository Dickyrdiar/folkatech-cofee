import Navbar from "../../components/Navbar"
import { useState } from "react";
import { Flex } from "@chakra-ui/react";
import Sidebar from "../../components/sidebar"

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
      <Navbar />
      <Flex>
        <Sidebar filters={filters} setFilters={setFilters} />
      </Flex>
    </>
  )
}

export default DashboardItem