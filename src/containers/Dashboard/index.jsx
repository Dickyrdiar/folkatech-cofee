/* eslint-disable no-unused-vars */
import Navbar from "../../components/Navbar"
import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/sidebar"
import SidebarWithHeader from "../../components/Layout";
import DashboardController from "../../controller/dashboard.controller";

const DashboardItem = () => {
  const {response} = DashboardController()

  console.log('check response', response);

  return (
    <>
      <SidebarWithHeader>
        <Box>this is data</Box>
      </SidebarWithHeader>
    </>
  )
}

export default DashboardItem