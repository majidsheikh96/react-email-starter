import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "";

export const MoneyTransferWelcomeEmail = () => (
  <Html>
    <Head />
    <Preview>Welcome to YourMoneyTransferApp!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={box}>
          <Img
            src={`https://i.imgur.com/jokSXOq.png`}
            // width="49"
            // height="21"
            alt="YourMoneyTransferApp"
          />
          <Hr style={hr} />
          <Text style={paragraph}>
            Thank you for joining MAI! You're now set up to send money with
            ease.
          </Text>
          <Text style={paragraph}>
            Access your account anytime to view transactions, manage your
            profile, and more.
          </Text>
          <Button pX={10} pY={10} style={button} href={`${baseUrl}/dashboard`}>
            Go to Your Dashboard
          </Button>
          <Hr style={hr} />
          <Text style={paragraph}>
            If you have any questions or need assistance, check out our{" "}
            <Link style={anchor} href={`${baseUrl}/help`}>
              Help Center
            </Link>
            .
          </Text>
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

export default MoneyTransferWelcomeEmail;

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
