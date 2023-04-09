import {Box, Spacer, Avatar, Flex, Text} from '@chakra-ui/react'
import {FaBed, FaBath} from 'react-icons/fa'
import {BsGridFill} from 'react-icons/bs'
import {GoVerified} from 'react-icons/go'
import millify from "millify";
import ImageScroller from '../../../components/ImageScroller';
import { fetchApi, baseUrl } from '../../../utils/fetchApi';

const propertyDetails = ({propertyDetails: {price, rooms, title, rentFrequency, baths, area, agency, isVerified, type, purpose, description, funishingStatus, amenities, photos}}) => {
     console.log(rooms)
     return (
          <Box maxWidth="1000px" margin="auto" p="4">
               {photos && <ImageScroller data = {photos} />}
               <Box w="full" p="6">

                    <Flex paddingTop='3' alignItems='center' justifyContent='space-between'>
                              <Flex alignItems='center'>
                                   <Box paddingRight="15" color="green.300">
                                        {isVerified && <GoVerified />}
                                   </Box>
                                   <Text fontWeight='bold' fontSize='lg'>AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
                              </Flex>
                              <Box>
                                   <Avatar size='sm' src={agency?.logo?.url} />
                              </Box>
                    </Flex>
                         <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color="blue.400">
                              {rooms} <FaBed /> {baths} <FaBath /> | {millify(area)} sqrt <BsGridFill/> 
                         </Flex>
                         <Box marginTop="2">
                              <Text fontSize='lg' marginBottom="2" fontWeight="bold">
                                   {title}
                              </Text>

                              <Text color="gray.600" lineHeight="2">{description}</Text>

                         </Box>

                         <Flex flexWrap="wrap" textTransform="uppercase" justifyContent="space-between">

                              <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3">
                                   <Text>Type</Text>
                                   <Text fontWeight="bold">{type}</Text>
                              </Flex>
                              <Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3">
                                   <Text>Purpose</Text>
                                   <Text fontWeight="bold">{purpose}</Text>
                              </Flex>

                              {funishingStatus && 
                              (<Flex justifyContent="space-between" w="400px" borderBottom="1px" borderColor="gray.100" p="3">
                                   <Text>FurnishingStatus</Text>
                                   <Text fontWeight="bold">{funishingStatus}</Text>
                              </Flex>)
                         }
                         </Flex>

                         <Box>
                              {amenities.length && <Text fontSize="2xl" fontWeight="black" marginTop="5">Amenities</Text>}
                              <Flex flexWrap="wrap">
                                   {amenities.map((item) => (
                                        item.amenities.map((amenity) => (
                                             <Text key={amenity.text} fontWeight="bold" color="blue.400" fontSize="l" p="2" bg="gray.200" m="1" borderRadius="5">
                                                  {amenity.text}
                                             </Text>
                                        ))
                                   ))}
                              </Flex>
                         </Box>

               </Box>
          </Box>
     )
}
export default propertyDetails;

export async function getServerSideProps({params: {id}}){
     const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`)

     return{
          props: {
               propertyDetails: data
          }
     }
}