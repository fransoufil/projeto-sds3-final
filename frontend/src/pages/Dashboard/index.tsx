import BarChart from "components/BarChart";
import DataTable from "components/DataTable";
import DonutChart from "components/DonutChart";
import Footer from "components/Footer";
import NavBar from "components/NavBar";

const Dashboard = () => {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashboard de Vendas</h1>

        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">
              Taxa de Sucesso - Barras Verticais (%)
            </h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">
              Taxa de Sucesso - Forma de Donut (%)
            </h5>
            <DonutChart />
          </div>

          <div className="row py-3">
            <h5 className="text-center text-secondary">
              Abaixo Tabela Com Todas as Vendas:
            </h5>
          </div>
        </div>
        <DataTable />
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
