export const Navbar: JSXTE.Component = () => {
  return (
    <div class="navbar bg-neutral text-white p-2">
      <a href="/" class="btn btn-ghost text-xl text-primary">
        Home
      </a>
      <a href="/flashcard-session" class="btn btn-ghost text-xl text-primary">
        Flashcard Session
      </a>
      <a href="/manage/flash-cards" class="btn btn-ghost text-xl text-primary">
        Manage
      </a>
    </div>
  );
};
