import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";

async function fetchUser(userId) {
  const res = await fetch(`http://localhost:3001/api/users/${userId}`);
  const data = await res.json();
  return data;
}

const UserDetail = ({ show, handleClose, user }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    async function getUserData(userId) {
      const fetchedUser = await fetchUser(userId);
      setUserData(fetchedUser);
    }

    if (user) {
      getUserData(user.id);
    }
  }, [user]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Detalles del usuario</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {userData && (
          <>
            <h5>La información relacionada con el usuario es:</h5>
            <p>
              <strong>Nombre:</strong> {userData.names}
            </p>
            <p>
              <strong>Dirección:</strong> {userData.address}
            </p>
            <p>
              <strong>Provincia:</strong> {userData.province}
            </p>
            <p>
              <strong>Distrito:</strong> {userData.district}
            </p>
            <p>
              <strong>Departamento:</strong> {userData.department}
            </p>
            <p>
              <strong>NIS:</strong> {userData.id}
            </p>

            <h5>La información relacionada con el medidor:</h5>
            <p>
              <strong>Modelo:</strong> {userData.model}
            </p>
            <p>
              <strong>Número de medidor:</strong> {userData.meter_serial_number}
            </p>
          </>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default UserDetail;
