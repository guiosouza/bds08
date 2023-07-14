import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig } from './helpers';
import './styles.css';

type Props = {
  labels: string[];
  name: string;
  series: number[];
};

function SalesSummaryByGender({ labels, name, series }: Props) {
  return (
    <div className="sales-summary-container">
      <div className="sales-total-sum">
        <h2>{'R$ 746.484,00'}</h2>
        <p>{'Total de vendas'}</p>
      </div>
      <div className="pie-chart">
        <ReactApexChart
          options={buildPieChartConfig(labels, name)}
          type="donut"
          width="300"
          series={series}
        />
      </div>
    </div>
  );
}

export default SalesSummaryByGender;
