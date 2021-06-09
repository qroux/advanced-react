const Header = ({
  title,
  darkMode = false,
}: {
  title?: string;
  darkMode?: boolean;
}) => {
  return (
    <div>
      <h1>title = {title}</h1>
      <h3 style={{ color: darkMode ? 'green' : 'red' }}>darkmode activated</h3>
    </div>
  );
};

export default Header;
