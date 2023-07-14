import { useState } from 'react';
import Filter from './components/filter';
import Header from './components/header';
import SalesSummaryByGender from './components/sales-summary-by-gender';
import { FilterData } from './types';
import './App.css';

function App() {
  const [filterData, setFilterData] = useState<FilterData>();

  const onFilterChange = (filter: FilterData) => {
    setFilterData(filter);
  };

  return (
    <>
      <Header />
      <div className="app-container">
        <Filter onFilterChange={onFilterChange} />
        <SalesSummaryByGender
          name=""
          labels={['Feminino', 'Masculino', 'Outro']}
          series={[40, 30, 30]}
        />
      </div>
    </>
  );
}

export default App;
