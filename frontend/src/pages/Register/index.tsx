import NavBar from "components/NavBar";
const Register = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="row py-3">
          <h5 className="text-center text-secondary">Adicionar Nova Venda:</h5>
          <div className="container">
            <form>
              <div className="form-group">
                <label htmlFor="dateInput">Data</label>
                <input type="date" className="form-control" id="dateInput" />
              </div>
              <div className="form-group">
                <label htmlFor="sellerInput">Vendedor</label>
                <input type="text" className="form-control" id="sellerInput" />
              </div>
              <div className="form-group">
                <label htmlFor="visitedInput">Clientes Visitados</label>
                <input
                  type="number"
                  className="form-control"
                  id="visitedInput"
                />
              </div>
              <div className="form-group">
                <label htmlFor="dealsInput">Negócios Fechados</label>
                <input type="number" className="form-control" id="dealsInput" />
              </div>
              <div className="form-group">
                <label htmlFor="amountInput">Valor</label>
                <input
                  type="number"
                  className="form-control"
                  id="amountInput"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Adicionar
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
