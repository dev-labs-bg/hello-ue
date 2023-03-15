import { Box, Flex} from "@chakra-ui/react"
import DashboardInfoNum from "./DashboardInfoNum"
import DashboardInfoText from "./DashboardInfoText"

const DashboardNews  = () => {
    
    const infoArray = 
        [
            {
                nameOfprop: "човека на 2ри куест",
                num: 50
            },
            {
                nameOfprop: "снимките, качени от колеги са",
                num: 36
            },
            {
                nameOfprop: "нови обяви в продавалника",
                num: 3
            },
            {
                nameOfprop: "новите членове са",
                num: 28
            },
            {
                nameOfprop: "събития тази седмица",
                num: 2
            }
        ]

        const stack = {
            alignItems: "center",
            w: {md: "100vw",lg:"25vw"},
            justifyContent: { md:"center",lg:"space-between"}
        }

        const info = infoArray.map((el, index) => {
            
            if(index % 2 === 0){
                return (
                    <Flex sx={stack}>
                        <DashboardInfoNum num={el.num} />
                        <Box w="2em" />
                        <DashboardInfoText text={el.nameOfprop} />
                    </Flex>
                )
            }else{
                return (
                    <Flex sx={stack}>
                        <DashboardInfoText text={el.nameOfprop} />
                        <Box w="2em" />
                        <DashboardInfoNum num={el.num} />
                    </Flex>
                )
            }
        })

    return(
        <Flex 
            bgColor="gray.100" 
            flexDir="column" 
            alignItems="center" 
            w={{lg:"40vw"}}
            pt="3em"
            pb="1em"
            >
            {info}
        </Flex>
    )
}

export default DashboardNews