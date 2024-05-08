import { Navbar } from "./Navbar";

export const Page: JSXTE.Component = ({ children }) => {
  return (
    <html>
      <head>
        <script src="/js/htmx.min.js"></script>
        <script src="/js/alpine.min.js"></script>
        <link rel="stylesheet" type="text/css" href="/styles/style.css" />
      </head>
      <body>
        <Navbar />
        <progress
          class="progress progress-accent htmx-indicator w-full"
          id="loading"
        ></progress>
        <div class="pt-3" id="content">
          {children}
        </div>
      </body>
    </html>
  );
};
