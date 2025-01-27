import { useRouteError } from 'react-router-dom';

const ErrorStyle = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  marginTop: '100px'
};

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page" style={ErrorStyle}>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}