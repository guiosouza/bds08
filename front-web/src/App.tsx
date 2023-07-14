import './App.css';
import Filter from './components/filter';
import Header from './components/header';
import SalesSummaryByGender from './components/sales-summary-by-gender';

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Filter />
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
