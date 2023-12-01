import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error: any = useRouteError();

  return (
    <div id='error-page'>
      <h1>Ipro Suite Calendar App!</h1>
      <h3>Oops!</h3>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error?.statusText || error.message}</i>
      </p>
    </div>
  );
}
