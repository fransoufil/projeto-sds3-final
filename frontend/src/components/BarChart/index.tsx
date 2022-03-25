import Chart from 'react-apexcharts';

const BarChart = () => {

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };
    
    const mockData = {
        labels: {
            categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },
        series: [
            {
                name: "% Sucesso",
                data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
            }
        ]
    };

    return (
      <Chart
      {/*o tres pontos significam pegue tudo do options e permita acrescentar mais elementos*/}
      {/*o xaxis significa o eixo x*/} 
        options={{...options, xaxis: mockData.labels}}
        series={mockData.series}
        type="bar"
        height="240"
      />
    );
  };
  
  export default BarChart;
  