import React from 'react';
import './App.css'
import imade from './imgs/not.png'
import made from './assets/av.png'
import card1 from './assets/1.png'
import card2 from './assets/6.png'
import cov from './assets/cov.png'
import love from './assets/heart.png'
import {
  ChakraProvider,
  Box,
  Text,Flex,
  Heading,
  VStack,
  Center,GridItem,
  Grid,Stack,CircularProgress,Avatar,Image,
 
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import ProductSimple from './footer'
import Sidebar from './sidebar/sidebar'
import theme from './layout';
function App() {
 
  return (
    <ChakraProvider theme={theme} >
       <Flex  h={[null, null, "100vh"]}
        maxW="2000px"
        flexDir={["column", "column", "row"]}
       >
          <Sidebar />
       
      <Box direction='column' marginLeft={'40px'}  >
      



<Text fontFamily= 'Circular Std-Medium'
fontStyle= 'normal'
fontWeight= '400'
fontSize= '14px'
lineHeight= '20px'>Welcome back</Text>
<Grid templateColumns='repeat(5, 1fr)' gap={4}>
  <GridItem colSpan={2} h='10' ><Flex direction='row'>
<Text fontFamily= 'Circular Std-Medium'
fontStyle= 'normal'
fontWeight= '400'
fontSize= '18px'
lineHeight= '20px'>Boluwatife Sokunbi</Text>
<Text>😀</Text></Flex></GridItem> 
  <GridItem  colStart={4} colEnd={6} h='10' marginRight={'40px'}  >
  <Flex justifyContent={'flex-end'}>     
 <img  src={imade} alt=""/> <Center marginLeft={'12px'} className="notify normal">Notifications</Center></Flex>
  </GridItem>
</Grid>

<GridItem  colStart={4} colEnd={6} h='10' marginRight={'40px'}  >
  <Flex position= 'absolute'
width= '366px'
height= '163px'
left= '364px'
marginTop={'60px'}

bg= 'rgba(254, 246, 227, 0.3)'
border= '0.5px solid #FFD49B'
backdropFilter= 'blur(16px)'
/* Note: backdrop-filter has minimal browser support */

borderRadius= '5px'> <Flex marginLeft={'29px'} marginTop={'20px'}>
 <Box
    bgImage={cov} boxSize="sm" alignContent={'center'}
    backgroundRepeat={'no-repeat'} backgroundSize='136px 136px'
  >   <Center marginTop={3} marginLeft={3} bg='#008CEF' w={114} h={114} borderRadius='50%'> 
 <Avatar marginTop={1} marginLeft={1} size='xl' bg='#008CEF' icon={<img height='88px' width='88px' src={made} />} /></Center>
 </Box>
 <Center flexDirection={'column'} marginLeft={'-230px'} marginTop={'-90px'}>
 <Center flexDirection={'row'} ><Text  fontFamily= 'Circular Std-Medium'

fontSize= '48px'
lineHeight= '20px 'marginLeft={'12px'} className="notify normal">120</Text><Text marginTop={4}>bpm</Text></Center><Text></Text></Center></Flex>
 </Flex></GridItem>
<Text className="dash-title" fontFamily= 'Circular Std-Medium'
fontStyle= 'normal'
fontWeight= '400' marginTop={'-32px'}
fontSize= '36px'
lineHeight= '20px'>Dashboard</Text>

        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
            <Logo h="40vmin" pointerEvents="none" zIndex='-1' transitionTimingFunction={'cubic-bezier(0.25, 0.1, 0.25, 1)'}  transition={'ease-in-out 0.2s'}    >
</Logo>        
          
        </Grid>
        <Flex  direction='column' align={'center'} marginTop={'-280px'}>
        <Grid 
  h='200px' marginTop={'-200px'} marginBottom={'202px'}
  templateRows='repeat(3, 1fr)'
  templateColumns='repeat(7, 1fr)'
  gap={7}
>
  <GridItem bg={'#655EB0'} height={'328px'} width={'222px'} borderRadius={'20px'} 
  boxShadow={'0px 4px 12px rgba(0, 0, 0, 0.05);'}
  rowSpan={2} colSpan={1}  ><Flex direction={'column'} justifyItems={'center'} alignContent={'center'}>
    <Box justifyItems={'center'} alignContent={'center'}>
      <CircularProgress marginLeft={'50px'} marginTop={'20px'} 
      alignSelf={'center'} size={118} value={80} color='#DEDDEE' thickness='5px' />
      <Stack  direction={'column'}justifyContent={'space-evenly'} >
      
<Text color={'#F5FBFF;'} marginTop={'-100px'} fontFamily= 'Circular Std-Medium'
fontStyle= 'normal' marginLeft={'90px'}
fontWeight= '400' alignItems={'center'}
fontSize= '36px' marginBottom={'-18px'}
line-Height= '20px' >68</Text><Box >
<Text color={'#F5FBFF;'} 
fontStyle= 'normal' 
fontWeight= '400'
fontSize= '12px' align={'center'} paddingBottom={35}
line-Height= '20px' >of 8500 steps</Text></Box>
</Stack>
      </Box></Flex></GridItem>
  <GridItem height={'142px'} width={'222px'} borderRadius='20px'
  boxShadow={'0px 4px 12px rgba(0, 0, 0, 0.05)'}colSpan={2} bg='white' >
<Grid templateColumns='repeat(6, 1fr)' gap={2}>
  <GridItem marginLeft={'15px'} rowSpan={4} colSpan={3} h='10'alignContent={'center'} alignSelf='center'><Flex direction='row' maxHeight={'100%'}>
  <Image
    boxSize='100px'
    objectFit='cover'
    src={card1}
    alt='Dan Abramov'
  />
</Flex></GridItem> 
  <GridItem  colSpan={3} h='10' marginRight={'40px'} w='100%' >
  <Flex marginTop={4} direction={'column'}>     
  <Box direction={'row'} width='100%'
  ><Text fontStyle= 'normal'
  fontWeight= '400' fontFamily= 'Circular Std-Medium'
  fontSize= '12px' 
  lineHeight= '20px'>General Health </Text></Box>
  <Text fontFamily= 'Circular Std-Medium' width= '40px'
height='20px' marginTop={5} 
fontStyle= 'normal'
fontWeight= '400'
fontSize= '20px' color=' #008CEF'
lineHeight= '20px'>82%</Text>
  <Box flexDirection={'row'}></Box></Flex>
  </GridItem>
</Grid>

  </GridItem>
  <GridItem height={'142px'} width={'222px'} borderRadius={'20px'} 
  boxShadow={'0px 4px 12px rgba(0, 0, 0, 0.05)'} colSpan={2} bg='white' />
  <GridItem colSpan={2} bg='white' height={'142px'} width={'222px'} borderRadius={'20px'} 
  boxShadow={'0px 4px 12px rgba(0, 0, 0, 0.05)'} transform='matrix(-1, 0, 0, 1, 0, 0)' />
   <GridItem height={'142px'} width={'222px'} borderRadius={'20px'} 
  boxShadow={'0px 4px 12px rgba(0, 0, 0, 0.05)'}colSpan={2} bg='white' >
    
<Grid templateColumns='repeat(6, 1fr)' gap={2}>
  <GridItem marginLeft={'15px'} rowSpan={4} colSpan={3} h='10'alignContent={'center'} alignSelf='center'><Flex direction='row' maxHeight={'100%'}>
  <Image
    boxSize='100px'
    objectFit='cover'
    src={card2}
    alt='Dan Abramov'
  />
</Flex></GridItem> 
  <GridItem  colSpan={3} h='10'w='100%' marginRight={'40px'}  >
  <Flex marginTop={4} direction={'column'}>     
  <Box direction={'row'}
  ><Text fontStyle= 'normal'
  fontWeight= '400'
  fontSize= '12px' fontFamily={'Circular Std-Book'}
  lineHeight= '20px'>Water Balance </Text></Box>
  <Text fontFamily= 'Circular Std-Medium' width= '40px'
height='20px' marginTop={5}
fontStyle= 'normal'
fontWeight= '400'
fontSize= '20px' color=' #008CEF'
lineHeight= '20px'>82%</Text>
  <Box flexDirection={'row'}></Box></Flex>
  </GridItem>
</Grid>
  </GridItem>
  <GridItem height={'142px'} width={'222px'} borderRadius={'20px'} 
  boxShadow={'0px 4px 12px rgba(0, 0, 0, 0.05)'} colSpan={2} bg='white' ></GridItem>
  <GridItem height={'142px'} width={'222px'} borderRadius={'20px'} 
  boxShadow={'0px 4px 12px rgba(0, 0, 0, 0.05)'}colSpan={2} bg='white'></GridItem>
  
  </Grid>
        <Grid templateColumns='repeat(4, 1fr)' gap={6} >
  <GridItem w='100%' h='90'  ><Text fontSize={'35px'}>Scheduled Appointment and Reminder</Text></GridItem>
  
  <GridItem w='100%' h='90' >
<ProductSimple date={'Today'} color={true} text={true} />
    </GridItem> 
  <GridItem w='100%' h='90'  ><ProductSimple date={'Sept 21'} /></GridItem>
  <GridItem w='100%' h='10' ><ProductSimple date={'Oct 2'} /></GridItem>
  
</Grid></Flex>
      </Box></Flex>
    </ChakraProvider>
  );
}

export default App;
