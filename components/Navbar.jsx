import React from 'react'
import Link from 'next/link'
import {Menu, MenuButton, MenuList , IconButton, Flex, Box, Spacer, MenuItem} from '@chakra-ui/react'
import Image from 'next/image'
import {FcMenu, FcHome, FcAbout, FcSearch} from 'react-icons/fc'
import { BsSearch } from 'react-icons/bs'
import {FiKey} from 'react-icons/fi'
import Logo from '../assests/images/logo.png'


const Navbar = () => {
  return (
          <Flex p='2' borderBottom='1px' borderColor="gray.100">
               <Box fontSize="3xl" color="blue.400" fontWeight='bold'>
                    <Link href='/' paddingLeft="2"><Image src = {Logo} alt= "logo"/></Link>
               </Box>

               <Spacer/>

               <Box>
                    <Menu>
                         <MenuButton as={IconButton} icon={<FcMenu />} variant = 'outline' color="red.400"/>
                         <MenuList minWidth='350px'>
                              <Link href ="/" passHref>
                                   <MenuItem p="5" icon={<FcHome />}>Home</MenuItem> 
                              </Link>
                              <Link href ="/search" passHref>
                                   <MenuItem p="5" icon={<FcSearch />}>Search</MenuItem> 
                              </Link>
                              <Link href ="/search?purpose=for-sale" passHref>
                                   <MenuItem p="5" icon={<FcAbout />}>Buy Property</MenuItem> 
                              </Link>
                              <Link href ="/search?purpose=for-rent" passHref>
                                   <MenuItem p="5"  icon={<FiKey />}>Rent Property</MenuItem> 
                              </Link>
                         </MenuList>
                    </Menu>
               </Box>

          </Flex>
     )
}

export default Navbar