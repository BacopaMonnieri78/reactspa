import { useRouteError } from "react-router-dom";

export const ErrorPageOverview=()=>{

    const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
       
      </p>
    </div>
  );
}
export default ErrorPageOverview;