const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-white mt-5 py-3">
        <div className="container text-center">
          <p className="mb-1">My App © {new Date().getFullYear()}</p>
          <p className="mb-0">Built with React and Bootstrap</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
