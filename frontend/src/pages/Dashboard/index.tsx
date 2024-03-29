import NavBar from "components/NavBar";
import DataTable from 'components/DataTable';
import Footer from "components/Footer";
import DonutChart from "components/DonutChart";
import BarChart from 'components/BarChart';

const Dashboard = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <h1 className="text-primary py-3">Dashboard de vendas</h1>

                <div className="row px-3">{/**essas classes são do bootstrp. O row vai organizar os componentes da div em uma linha no layout. O px é o espaçamento (p) na horizontal (x)*/}
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Taxa de sucesso (%)</h5>
                        <BarChart />
                    </div>
                    <div className="col-sm-6">
                        <h5 className="text-center text-secondary">Todas as vendas</h5>
                        <DonutChart />
                    </div>
                </div>

                <div className="py-3">
                    <h2 className="text-primary">Todas as vendas</h2>
                </div>

                <DataTable />
            </div>
            <Footer />
        </>
    );
}

export default Dashboard;