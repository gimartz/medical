import React from 'react';
import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,VStack,Circle
  } from '@chakra-ui/react';
  

  export default function ProductSimple({date,color,text}) {
    const layer1 = color ? '#655EB0' : '#DEDDEE'
    const txtcol= text? 'white' :'#655EB0'
    return (
        <Center w='210px' paddingTop='53px'>
        <Stack direction={'column'} align={'Left'}>
            <Box
            bg={layer1} paddingTop='3px'
            color={txtcol}
              mt={-10} w='83px'
              pos={'absolute'}
              height={'26px'}
             borderRadius= {'20px'}
            align={'center'}
            fontFamily= {'Circular Std-Medium'}
  fontStyle={'normal'}
  fontWeight={ '400'}
  fontSize= {`12px`}
  lineHeight= {'20px'}
             >
             {date}
            </Box>
            
              <Text color={'#00133D'} fontSize={'14px'} lineHeight={'20px'} fontStyle={'normal'}>
               General body checkup
              </Text>
              <Heading marginLeft ={50} fontSize={'12px'} fontFamily={'Circular Std-Book'} fontWeight={400}>
              6391 Elgin St. Celina, Delaware 10299
              </Heading>
             
                <Text fontWeight={400} fontSize={'10px'}>
                 12:30pm
                </Text>
               
              </Stack>
           
        
        </Center>
    );
  }