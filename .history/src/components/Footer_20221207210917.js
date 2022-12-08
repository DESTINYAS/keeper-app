const date = new Date();
const year = date.getFullYear();

const Footer = () => {
  return (
    <div className="footer">
      <p>Copyright {year} By Angela Yu</p>
    </div>
  );
};

export default Footer;
