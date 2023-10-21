import {
  Body,
  Button,
  Column,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

const transaction = {
  name: "Majid",
  from_currency: "GBP",
  to_currency: "PKR",
  exchange_rate: 350,
  amount: 1000,
  recipient_name: "Majid",
  delivery_method: "Bank Transfer",
  bank_name: "UBL",
  branch_name: "Kanak Mandi",
  account_number: "320948209483029 029384",
  transaction_status: "completed",
  payment_status: "not_paid",
};

export const TransactionConfirmationEmail = () => (
  <Html>
    <Head />
    <Preview>Transaction Confirmation</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`https://i.imgur.com/jokSXOq.png`}
            alt="YourMoneyTransferApp"
          />
          <Hr style={hr} />
          <Text style={paragraph}>Hello {transaction.name},</Text>
          <Text style={paragraph}>
            Your transaction has been confirmed. Here are the details:
          </Text>
          <Row style={row}>
            <Column>Transfer status:</Column>
            <Column>{transaction.transaction_status}</Column>
          </Row>
          <Hr style={hr} />
          <Row style={row}>
            <Column>Recipient Name:</Column>
            <Column>{transaction.recipient_name}</Column>
          </Row>
          <Row style={row}>
            <Column>Delivery:</Column>
            <Column>{transaction.delivery_method}</Column>
          </Row>
          <Hr style={hr} />
          <Row style={row}>
            <Column>Sent amount:</Column>
            <Column>
              {transaction.amount} {transaction.from_currency}
            </Column>
          </Row>
          <Row style={row}>
            <Column>Exchange rate:</Column>
            <Column>
              1 {transaction.from_currency} = {transaction.exchange_rate}{" "}
              {transaction.to_currency}
            </Column>
          </Row>
          <Row style={row}>
            <Column>Recipient receives*:</Column>
            <Column>
              {transaction.exchange_rate * transaction.amount}{" "}
              {transaction.to_currency}
            </Column>
          </Row>
          <Hr style={hr} />
          <Text style={paragraph}>
            *Recipient may receive less due to fees charged by the recipient's
            bank and foreign taxes.
          </Text>
          <Hr style={hr} />
          <Button pX={10} pY={10} style={button} href={`${baseUrl}/dashboard`}>
            View Transaction
          </Button>
          <Hr style={hr} />
          <Text style={paragraph}>— The YourMoneyTransferApp team</Text>
          <Hr style={hr} />
          <Text style={footer}>
            YourMoneyTransferApp, 123 Any Street, Any City, Any State, 12345
          </Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default TransactionConfirmationEmail;

const main = {
  backgroundColor: "#f6f9fc",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
  backgroundColor: "#ffffff",
  margin: "0 auto",
  padding: "20px 0 48px",
  marginBottom: "64px",
};

const box = {
  padding: "0 48px",
};

const hr = {
  borderColor: "#e6ebf1",
  margin: "20px 0",
};

const row = {
  display: "flex",
  justifyContent: "between",
};

const paragraph = {
  color: "#525f7f",

  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const anchor = {
  color: "#16A933",
};

const button = {
  backgroundColor: "#16A933",
  borderRadius: "5px",
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  width: "100%",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  lineHeight: "16px",
};
