import { Container } from "@mui/material"

const Layout= ({children}) =>{
  return(
    <Container className="w-screen h-screen p-1 bg-blue-900 text-blue-100">
    {children}
    </Container>
    )
}


export default Layout;