import { Box, Flex, Image } from "@chakra-ui/react";
import reactIcon from '../../assets/icons/7423887_react_react native_icon.png'
import javascript from '../../assets/icons/icons8-javascript-144.png'
import cssIcon from '../../assets/icons/css-3.png'
import htmlIcon from '../../assets/icons/html-5.png'
import awsIcon from '../../assets/icons/icons8-amazon-web-services-144.png'
import mysqlIcon from '../../assets/icons/mysql.png'
import nodeIcon from '../../assets/icons/icons8-nodejs-144.png'
import typescript from '../../assets/icons/typescript.png'
import chakra from '../../assets/icons/icons8-chakra-ui-144.png'
import styledComponents from '../../assets/icons/icons8-styled-components-96.png'

export default function Skills() {

    return (
        <Box my='15px'  p='8px 12px' rounded={'10px'} bg={'blackAlpha.200'} >


            <Flex flexWrap={'wrap'}  w={'full'}  justifyContent="center" alignItems={'center'}  >
                <Image rounded='10px' w={['20%','10%']} h={'full'} src={javascript} />
                <Image w={['17%','7%']} src={typescript} />
                <Image w={['20%','10%']} src={reactIcon} />
                <Image w={['20%','10%']} src={nodeIcon} />
                <Image w={['20%','10%']} src={cssIcon} />
                <Image w={['20%','10%']} src={htmlIcon} />
                <Image w={['20%','10%']} src={awsIcon} />
                <Image w={['20%','10%']} src={mysqlIcon} />
                <Image w={['20%','10%']} src={chakra} />
                <Image w={['18%','9%']} src={styledComponents} />


            </Flex>
        </Box>
    )
}