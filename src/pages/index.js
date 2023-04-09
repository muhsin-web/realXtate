import Link from "next/link"
import Image from "next/image"
import { Flex, Box, Text, Button} from '@chakra-ui/react'
import {AiOutlineRight} from 'react-icons/ai'

import { baseUrl, fetchApi } from "../../utils/fetchApi";
import { sync } from "framer-motion";

import Property from "../../components/property";

const Banner = ({purpose, imageUrl, buttonText, desc1, desc2, title, title2, linkName}) => {
  return(
    <Flex flexWrap="wrap" h={500}  justifyContent="center" alignItems="center" m="10" bgPosition="center" backgroundImage={imageUrl}>
    {/* <Image src={imageUrl} width={500} height={200} alt="banner" /> */}
    <Flex p="20" flexDirection="column" justifyContent="center" bgColor="whiteAlpha.700" borderRadius="15">
      <Text color="grey.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" lineHeight="1.5" fontWeight="bold">{title} <br /> {title2}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="grey.700">{desc1} <br /> {desc2}</Text>

      <Button rightIcon={<AiOutlineRight />} bg="blue.300" w="fit-content" fontSize="xl" color="white">
          <Link href={linkName}>{buttonText}</Link>
      </Button>
    </Flex>
  </Flex>
  )
}
export default function Home({propertyForSale, propertyForRent}) {
  console.log(typeof(propertyForSale))
  return (
    <Box> 
      <Banner 
        purpose = "RENT A HOME"
        title = "Rentals Home For"
        title2 = "Everyone"
        desc1 = "Explore Apartment, Villas , Home"
        desc2 = "and more."
        buttonText="Explore Renting"
        linkName="search?purpose=for-rent"
        imageUrl="url(https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4)"
      />

      <Flex flexWrap="wrap" rowGap="50px">
          {propertyForRent.map((property) => <Property property={property} key={property.id}/>)}
      </Flex>

      <Banner 
        purpose = "BUY A HOME"
        title = "Find, Buy & Own Your"
        title2 = "Dream Home"
        desc1 = "Explore Apartment, Villas , Home"
        desc2 = "and more."
        buttonText="Explore Buying"
        linkName="search?purpose=for-sale"
        imageUrl="url(https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008)"
      />

<Flex flexWrap="wrap" rowGap="50px">
          {propertyForSale.map((property) => <Property property={property} key={property.id}/>)}
      </Flex>

    </Box>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=8`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=8`)

  return{
    props: {
      propertyForRent: propertyForRent?.hits,
      propertyForSale: propertyForSale?.hits, 
    }
  }
}