import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";

function App() {
  return (
    <>
    {/*o componente NavBar esta inserido no inicio, mas poderia estar no meio - p.e. sendo outro componente ou ser replicado*/}
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso - Barras Verticais (%)</h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">Taxa de Sucesso - Forma de Donut (%)</h5>
            <DonutChart />
          </div>

          <div className="row py-3">
            <h2 className="text-primary">Abaixo Tabela Com Todas as Vendas:</h2>
          </div>
        </div>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
