import { ApexOptions } from 'apexcharts';
import { SalesByGender } from '../../types';

export const buildPieChartConfig = (labels: string[] = [], name: string) => {
  return {
    labels,
    noData: {
      text: 'Sem resultados',
      align: 'center',
      verticalAlign: 'middle',
      offsetX: 0,
      offsetY: 0,
      style: {
        color: '#FFF',
        fontSize: '18px',
        fontFamily: 'Ubuntu, sans-serif'
      }
    },
    colors: ['#FF7A00', '#7234F5', '#FF0000'],
    legend: {
      show: true,
      floating: false,
      position: 'bottom',
      offsetY: 16,
      labels: {
        colors: ['#8D8D8D']
      },
      fontFamily: 'Ubuntu, sans-serif',
      fontSize: '18px',
      itemMargin: {
        vertical: 7
      }
    },
    dataLabels: {
      enabled: true,
      style: {
        fontSize: '10px',
        fontFamily: 'Ubuntu, sans-serif',
        fontWeight: 'regular',
        colors: ['#ffffff']
      }
    },
    plotOptions: {
      pie: {
        size: 400,
        donut: {
          size: '60%',
          labels: {
            show: true,
            name: {
              show: true,
              offsetY: 10,
              formatter: function () {
                return name;
              }
            },
            total: {
              show: true,
              showAlways: true,
              fontSize: '24px',
              color: '#ABB1C0',
              fontFamily: 'Ubuntu, sans-serif',
              formatter: function () {
                return '';
              }
            }
          },
          colors: ['#FF7A00', '#7234F5', '#FF0000']
        }
      }
    },
    chart: {
      height: '400px'
    }
  } as ApexOptions;
};

export const sumSalesByGender = (salesByGender: SalesByGender[] = []) => {
  return salesByGender.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.sum;
  }, 0);
};
