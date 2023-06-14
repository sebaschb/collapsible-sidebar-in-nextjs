import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const AlertChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    // Configuración de datos y opciones del gráfico
    const data = {
      labels: ["Sin alerta", "Media", "Alta"],
      datasets: [
        {
          data: [20, 30, 50], // Cambia estos valores según tus necesidades
          backgroundColor: ["#36a2eb", "#ffcd56", "#ff6384"],
        },
      ],
    };

    const options = {
      maintainAspectRatio: false,
      responsive: true,
      aspectRatio: 1,
      legend: {
        position: "right",
      },
    };

    // Crear instancia del gráfico
    const chart = new Chart(chartRef.current, {
      type: "doughnut",
      data: data,
      options: options,
    });

    // Limpia el gráfico al desmontar el componente
    return () => {
      chart.destroy();
    };
  }, []);

  return (
    <div className="chart-container">
      <canvas ref={chartRef} />
    </div>
  );
};

export default AlertChart;
