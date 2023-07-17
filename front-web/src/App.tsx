import { useEffect, useState } from 'react';
import Filter from './components/filter';
import Header from './components/header';
import SalesSummaryByGender from './components/sales-summary-by-gender';
import { FilterData, PieChartConfig, SalesByGender } from './types';
import './App.css';
import { makeRequest } from './utils/resquests';
import { buildSalesByGenderChart } from './helpers';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();
  const [salesByGender, setSalesBygender] = useState<PieChartConfig>();

  useEffect(() => {
    const id: number = filterData?.store?.id != undefined ? filterData?.store?.id : 0;
    makeRequest.get<SalesByGender[]>(`/sales/by-gender?storeId=${id}`).then((response) => {
      const newSalesByStore = buildSalesByGenderChart(response.data);
      setSalesBygender(newSalesByStore);
    });
  }, [filterData]);

  const callback = (filter: FilterData) => {
    setFilterData(filter);
  };

  const translation: Record<string, string> = {
    FEMALE: 'Feminino',
    MALE: 'Masculino',
    OTHER: 'Outro'
  };

  const translatedLabels = salesByGender?.labels.map((label) => translation[label] || label);

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={callback} />
        <SalesSummaryByGender
          name=""
          labels={translatedLabels}
          series={salesByGender?.series}
          filterData={filterData}
        />
      </div>
    </>
  );
}

export default App;
