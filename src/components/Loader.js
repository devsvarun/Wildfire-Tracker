import spinner from "../images/spinner.gif";

const Loader = () => {
  return (
    <div className="loader">
      <img src={spinner} alt="loading" />
      <h2>Fetching Data</h2>
    </div>
  );
};

export default Loader;
