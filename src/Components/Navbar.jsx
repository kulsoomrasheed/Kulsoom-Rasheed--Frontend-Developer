import React from 'react'
import NavMenu from './HbMenu'
import { Box, Button, Flex, Image, Input } from '@chakra-ui/react'
import Check from './Check'
import { SearchIcon } from '@chakra-ui/icons'

const Navbar = () => {
  return (
 <Box width={'100%'} margin={'auto'}  display={{
    base: "block", 
    sm: 'block',   
    lg: 'none', 
  }}>
       <Flex justifyContent={'space-between'} margin={'auto'} alignContent={'center'} alignItems={'center'}>
        <Flex >
        <NavMenu/>
        <Image  width='120px' src="araish3.png" alt="logo" />
        </Flex>
        <Check/>
    </Flex>
    <Flex margin={1} p={1}  borderRadius={12}><Input borderRadius={12} placeholder='Search On Nykaa' />
        <Button> <SearchIcon color={'#e80071'}/></Button></Flex>
 </Box>
  )
}

export default Navbar