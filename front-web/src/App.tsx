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
        <SalesSummaryByGender />
      </div>
    </>
  );
}

export default App;
