import React from "react"
import {Container,Button} from 'theme-ui';
import { Heading, Flex } from "theme-ui";

export default props=> (
   <Container>
     <Flex sx={{flexDirection:"column", padding:5}}>
   <Heading as="h1">Todo App</Heading>
   <Button sx={{color:"black", marginTop:3}} onClick={()=>{alert("Click me")}} >Login</Button>
   </Flex>
    </Container>
);