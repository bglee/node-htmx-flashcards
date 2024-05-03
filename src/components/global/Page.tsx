import { Navbar } from "./Navbar";

export const Page: JSXTE.Component = ({ children }) => {
  return (
    <html>
      <head>
        <link rel="stylesheet" type="text/css" href="/styles/style.css" />
      </head>
      <body>
        <Navbar />
        <div class="pt-3" id="content">
          {children}
        </div>
      </body>
    </html>
  );
};
