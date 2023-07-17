import ReactApexChart from 'react-apexcharts';
import { buildPieChartConfig, sumSalesByGender } from './helpers';
import { useEffect, useState } from 'react';
import { makeRequest } from '../../utils/resquests';
import { FilterData, SalesByGender } from '../../types';
import { formatPrice } from '../../utils/formatters';

import './styles.css';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
  filterData?: FilterData;
};

function SalesSummaryByGender({ labels = [], name, series = [], filterData }: Props) {
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    const id: number = filterData?.store?.id != undefined ? filterData?.store?.id : 0;
    makeRequest.get<SalesByGender[]>(`/sales/by-gender?storeId=${id}`).then((response) => {
      const newTotalSum = sumSalesByGender(response.data);
      setTotalSum(newTotalSum);
    });
  }, [filterData]);

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
          height="330"
          width="330"
          series={series}
        />
      </div>
    </div>
  );
}

export default SalesSummaryByGender;
