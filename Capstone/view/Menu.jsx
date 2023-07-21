import TodaysMenu from "../components/todaysmenu/todays-menu";
import { OurMenu } from "../components";
import styled from "styled-components";



const Menu = () => {
  return (
    <Container>
    <div className="container">
    <OurMenu />
    <TodaysMenu/>
    </div>
    </Container>
  )
}
export default Menu

const Container = styled.section`
  .container{
    padding: 6% 0px 0px 0px;
  }
`