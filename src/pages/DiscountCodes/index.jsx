import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { PageTitle } from "../../components/PageTitle";
import { DiscountBox } from "../../components/DiscountBox";
import { TextBlock } from "../../components/TextBlock";

export const DiscountCodes = (Props) => {
  return (
    <Container fluid>
      <Row>
        <PageTitle text={"Discount codes"} alignment={"center"} />
      </Row>
      <Row>
        <Col md={6}>
          <DiscountBox
            text="Extra 10% student discount"
            description="t&c's apply, Limited Time Only"
          />
          <DiscountBox
            text="Extra 10% student discount"
            description="t&c's apply, Limited Time Only"
          />
          <DiscountBox
            text="Extra 10% student discount"
            description="t&c's apply, Limited Time Only"
          />
        </Col>
        <Col md={6}>
          <TextBlock
            bold={true}
            alignment={"left"}
            text="Simply copy the code you want to apply and enter it at checkout..."
          />
          <TextBlock text="When you’re skint, you’ve gotta get the most out of your money, right? We know that even we can be a bit out of budget on the wrong side of the month but Missguided’s discount codes mean you can stock up on all your favourite pieces without breaking the bank." />
          <TextBlock text="Wanna know our latest delivery offers and promo codes?  Well, you’ve come to the right place and with brand new pieces hitting the site every single day, you can add swag to bag for a bit less cash money." />
          <TextBlock text="Keep checkin’ back and we will keep you up-to-date with the newest voucher codes so you can get the clothes you need even when you’re broke AF." />
        </Col>
      </Row>
    </Container>
  );
};
