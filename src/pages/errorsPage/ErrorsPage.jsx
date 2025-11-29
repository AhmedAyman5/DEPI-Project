const ErrorsPage = ({ error }) => {
  return (
    <div className="px-5 d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <h1 className="display-1 fw-bold color-primary">404</h1>
      <p className="fs-3 ">Page not found!</p>
      <p className="opacity-75">{error}</p>
    </div>
  );
};

export default ErrorsPage;