import React, {useEffect} from "react"
import {Container,Button} from 'theme-ui';
import { Heading, Flex } from "theme-ui";
import netlifyIdentity from "netlify-identity-widget";


export default props=> {

  useEffect(() => {
    netlifyIdentity.init({});



  }, [])

  return(
   <Container>
     <Flex sx={{flexDirection:"column", padding:5}}>
   <Heading as="h1">Todo App</Heading>
   <Button sx={{color:"black", marginTop:3}} onClick={()=>{netlifyIdentity.open()}} >Login</Button>
   </Flex>
    </Container>
)};