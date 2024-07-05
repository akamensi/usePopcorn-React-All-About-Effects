import Logo from "./Logo";
import NumResults from "./NumResults";
import Search from "./Search";

// Structural Component
const NavBar = ({ movies }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResults movies={movies} />
    </nav>
  );
};

export default NavBar;
