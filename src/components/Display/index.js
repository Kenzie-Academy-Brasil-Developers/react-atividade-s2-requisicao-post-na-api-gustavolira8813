import "./styles.css";
const Display = ({ status }) => {
  return (
    <div>
      <h3 className={status.statusText === "OK" ? "sucess" : "fail"}>
        {status.statusText === "OK"
          ? "Requisição Completa"
          : "Requisição falhou"}
      </h3>
    </div>
  );
};
export default Display;
