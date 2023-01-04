import { useRouteError, Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// import { useAsyncError, Await, Link } from "react-router-dom";

// You can only export anonymous functions directly

// const ErrorPage = () => {
//   const error = useRouteError();
//   alert('ErrorPage.jsx')
//   console.error(error);

//   return (
    // <div id="error-page">
    //   <h1>Oops!</h1>
    //   <p>Sorry, an unexpected error has occurred.</p>
    //   <p>
    //     <i>{error.statusText || error.message}</i>
    //   </p>
    //   <Link to="/">
    //     <button>Go to home</button>
    //   </Link>
    // </div>
//   );
// }

const ErrorPage = () => {
  // const error = useRouteError();
  // console.error(error);
  return (
    
    <section id="error-page">
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          {/* <i>{error.statusText || error.message}</i> */}
        </p>
        <Link to="/">
          <button>Go to home</button>
        </Link>
      </div>
    </section>
  );
}
export default ErrorPage;

// <Await
//   resolve={PromiseRejectionEvent}
//   errorElement={<ErrorPage />}
// />;
