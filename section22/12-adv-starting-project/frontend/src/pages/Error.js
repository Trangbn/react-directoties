import PageContent from "../components/PageContent";
import { useRouteError } from "react-router";

function ErrorPage() {
  const error = useRouteError();
  let title = "An error occurred";
  let message = "Something went wrong";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = "Not found";
    message = "Could not find page or resource";
  }

  return <PageContent title={title}>{message}</PageContent>;
}

export default ErrorPage;
