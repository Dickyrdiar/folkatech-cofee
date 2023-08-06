/* eslint-disable no-unused-vars */
// import Navbar from "../../components/Navbar"
import { Box, Flex, SimpleGrid } from "@chakra-ui/react";
import SidebarWithHeader from "../../components/Layout";
import DashboardController from "../../controller/dashboard.controller";
import Card from "../../components/Card";
import { dataDummy } from "../../dataDummy";

const DashboardItem = () => {
  const {response, handleClickDetail} = DashboardController()

 const arrayDummy = dataDummy.map((val) => val.data.list)
 console.log('array dummu', response);

  return (
    <>
      <SidebarWithHeader>
        {/* <Box>
          <Card />
        </Box> */}
        <Flex minH={'100vh'}>
          {response[0].map((value) => (
            <SimpleGrid key={value.id} spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr)'>
              <Card 
                key={value.id} 
                title={value.name} 
                description={value.short_description}
                rating={4} 
                image={value.images}
                clicked={value.id}
                // onClick={handleClickDetail(value.id)}
                onClick={handleClickDetail(value.id)}
              />
            </SimpleGrid>
          ))}
        </Flex>
      </SidebarWithHeader>
    </>
  )
}

export default DashboardItem