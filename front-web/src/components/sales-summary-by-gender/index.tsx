import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig, sumSalesByGender } from './helpers';
import { useEffect, useState } from 'react';
import { makeRequest } from '../../utils/resquests';
import { SalesByGender } from '../../types';
import { formatPrice } from '../../utils/formatters';

import './styles.css';

type Props = {
  labels: string[];
  name: string;
  series: number[];
};

function SalesSummaryByGender({ labels, name, series }: Props) {
  const [totalSum, setTotalSum] = useState(0);
  useEffect(() => {
    makeRequest.get<SalesByGender[]>('/sales/by-gender?storeId=0').then((response) => {
      const newTotalSum = sumSalesByGender(response.data);
      setTotalSum(newTotalSum);
    });
  }, []);

  return (
    <div className="sales-summary-container">
      <div className="sales-total-sum">
        <h2>{formatPrice(totalSum)}</h2>
        <p>{'Total de vendas'}</p>
      </div>
      <div className="pie-chart">
        <ReactApexChart
          options={buildPieChartConfig(labels, name)}
          type="donut"
          height="320"
          width="320"
          series={series}
        />
      </div>
    </div>
  );
}

export default SalesSummaryByGender;
