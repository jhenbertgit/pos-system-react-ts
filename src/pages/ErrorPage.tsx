import Container from "@/components/Container";
import Header from "@/components/Header";
import { useRouteError } from "react-router-dom";

type DataMsg = {
  message: string;
};

type ErrorPage = {
  data?: DataMsg;
  status?: string;
};

const ErrorPage = () => {
  const error = useRouteError() as ErrorPage;

  let content;

  if (error.status === "500") {
    content = error.data?.message;
  } else {
    content = "Client not connected to server";
  }

  return (
    <>
      <Header />
      <Container>
        <h1 className="font-medium text-center mt-7">
          Error Message: {content}
        </h1>
      </Container>
    </>
  );
};

export default ErrorPage;
