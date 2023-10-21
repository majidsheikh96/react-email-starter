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
  id: 52,
  user_id: 2,
  name: "Majid",
  email: "majidsheikh123@gmail.com",
  phone: "1234567654321",
  country: "Pakistan",
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
  created_at: "2023-10-21T09:29:24.000Z",
  updated_at: "2023-10-21T09:29:24.000Z",
};

export const AdminNotificationEmail = () => (
  <Html>
    <Head />
    <Preview>New Transfer Request Received</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`https://i.imgur.com/jokSXOq.png`}
            alt="YourMoneyTransferApp"
          />
          <Hr style={hr} />
          <Text style={paragraph}>Hello Admin,</Text>
          <Text style={paragraph}>
            A new transfer request has been created. Here are the details:
          </Text>
          <Text style={paragraph}>Sender Details:</Text>
          <Row style={row}>
            <Column>Name:</Column>
            <Column>{transaction.name}</Column>
          </Row>
          <Row style={row}>
            <Column>Email:</Column>
            <Column>{transaction.email}</Column>
          </Row>
          <Row style={row}>
            <Column>Phone:</Column>
            <Column>{transaction.phone}</Column>
          </Row>
          <Row style={row}>
            <Column>Country:</Column>
            <Column>{transaction.country}</Column>
          </Row>
          <Hr style={hr} />
          <Text style={paragraph}>Recipient Details:</Text>
          <Row style={row}>
            <Column>Recipient Name:</Column>
            <Column>{transaction.recipient_name}</Column>
          </Row>
          <Row style={row}>
            <Column>Bank:</Column>
            <Column>{transaction.bank_name}</Column>
          </Row>
          <Row style={row}>
            <Column>Branch:</Column>
            <Column>{transaction.branch_name}</Column>
          </Row>
          <Row style={row}>
            <Column>Account Number:</Column>
            <Column>{transaction.account_number}</Column>
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
          <Button
            pX={10}
            pY={10}
            style={button}
            href={`${baseUrl}/admin/transactions/${transaction.id}`}
          >
            View Transaction Details
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

export default AdminNotificationEmail;

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
  justifyContent: "space-between",
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
