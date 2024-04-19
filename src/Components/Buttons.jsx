import data from "./Data";
import "./Buttons.css";
export default function Buttons({ author, filter, setDatas }) {
  return (
    <>
      <div className="btn-group">
        {author.map((value) => (
          <button
            onClick={() => {
              filter(value);
            }}
          >
            {value}
          </button>
        ))}
        <button
          onClick={() => {
            setDatas(data);
          }}
        >
          All
        </button>
      </div>
    </>
  );
}
