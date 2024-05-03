import { Navbar } from "./Navbar";

export const Page: JSXTE.Component = ({ children }) => {
  return (
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="/styles/style.css" />
      </head>
      <body>
        <Navbar />
        <div>{children}</div>
      </body>
    </html>
  );
};
