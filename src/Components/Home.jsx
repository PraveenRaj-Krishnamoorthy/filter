import "./Home.css";

export default function Home({ Data }) {
  return (
    <>
      <div className="container">
        {Data.map((value) => (
          <div className="card">
            <h1>{value.author} - {value.price}</h1>
            <img src={value.download_url} alt="" />
          </div>
        ))}
      </div>
    </>
  );
}
