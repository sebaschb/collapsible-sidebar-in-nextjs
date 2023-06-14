import React from "react";
import BaseLayout from "../components/BaseLayout";
import Map from "../components/Map";
import AlertChart from "../components/AlertChart";

const Home = () => {
  return (
    <BaseLayout>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-9">
            <div className="map-container p-3 mb-3 border rounded shadow-sm">
              <h4 className="fw-bold">Mapa de los usuarios</h4>
              <Map />
            </div>
          </div>
          <div className="col-md-3">
            <div className="row">
              <div className="col-md-12 summary-container p-3 mb-3 border rounded shadow-sm">
                <h4 className="fw-bold">Resumen</h4>
                <p>
                  <span className="fw-bold">Número de usuarios:</span> XX
                </p>
                <p className="fw-bold">Número de usuarios por alerta:</p>
                <ul className="list-unstyled">
                  <li>
                    - Sin alerta: <span>XX</span>
                  </li>
                  <li>
                    - Media: <span>XX</span>
                  </li>
                  <li>
                    <span>- Alta: </span> XX
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 alerts-container p-3 mb-3 border rounded shadow-sm">
                <h4 className="fw-bold">Alertas</h4>
                <AlertChart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
};

export default Home;
