import React from "react";
import { Helmet } from "react-helmet";

function Redirect() {
  return (
    <>
      <Helmet>
        <meta http-equiv="refresh" content="0;url=https://mohits.dev" />
      </Helmet>
      <div>
        Redirecting to <a href="https://mohits.dev">https://mohits.dev</a>
      </div>
    </>
  );
}

export default Redirect;
