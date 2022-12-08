const date = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <p>Copyright {date} By Angela Yu</p>
      </div>
    </footer>
  );
};

export default Footer;
