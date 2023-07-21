import React from 'react';
import OrderRedirect from '../components/order+pay/order+pay';
import styled from "styled-components";

const OrderPay = () => {
  return (
    <Container>
    <div className='container'>
      <OrderRedirect />
    </div>
    </Container>
  );
}
export default OrderPay

const Container = styled.section`
  .container{
    padding: 10% 0px 0px 0px;
  }
`