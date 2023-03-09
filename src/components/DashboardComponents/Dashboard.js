import { Flex } from "@chakra-ui/react"
import DashboardMain from "./DashboardMain"
import DashboardNews from "./DashboardNews"

const Dashboard = () => {
    return (
        <Flex 
            flexDir={{base: "column",sm: "column",md:"column", lg:"row"}} 
            h="90vh"
            >
            <DashboardMain />
            <DashboardNews />
        </Flex>
    )
}

export default Dashboard
