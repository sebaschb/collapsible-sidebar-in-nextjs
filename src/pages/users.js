import BaseLayout from "@/components/BaseLayout";
import React, { useEffect, useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import UserDetail from "../components/userDetail";

async function fetchUsers(pageNumber, searchQuery, searchType) {
  const queryParams = new URLSearchParams();
  queryParams.append("pageSize", "10");
  queryParams.append("page", pageNumber.toString());
  queryParams.append(searchType, searchQuery);

  const res = await fetch(`http://localhost:3001/api/users?${queryParams}`);
  const data = await res.json();
  return data;
}

const Users = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState("names");

  useEffect(() => {
    async function getUsers() {
      const fetchedUsers = await fetchUsers(
        currentPage,
        searchQuery,
        searchType
      );
      setUsers(fetchedUsers);
    }

    getUsers();
  }, [currentPage, searchQuery, searchType]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
  };

  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  return (
    <BaseLayout>
      <div className="row">
        <div className="col-md-12">
          <div className="container-fluid border rounded shadow-sm">
            <h4 className="list-users-name fw-bold">Lista de usuarios</h4>

            <div className="d-flex justify-content-end mb-3">
              <form className="input-group w-50">
                <select
                  className="form-select"
                  value={searchType}
                  onChange={handleSearchTypeChange}
                >
                  <option value="names">Nombre</option>
                  <option value="district">Zona</option>
                  {/* Agrega otras opciones de búsqueda aquí */}
                </select>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Buscar..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </form>
            </div>

            <table className="table table-hover">
              <thead>
                <tr>
                  <th>NIS</th>
                  <th>Nombre</th>
                  <th>Tipo</th>
                  <th>Zona</th>
                  <th>Número de Medidor</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} onClick={() => handleUserClick(user)}>
                    <td>{user.id}</td>
                    <td>{user.names}</td>
                    <td>{user.business_activity}</td>
                    <td>{user.district}</td>
                    <td>{user.meter_serial_number}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="d-flex mt-4">
              <Pagination>
                <Pagination.Prev
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                />
                <Pagination.Item active>{currentPage}</Pagination.Item>
                <Pagination.Next
                  onClick={() => handlePageChange(currentPage + 1)}
                />
              </Pagination>
            </div>
          </div>
        </div>
      </div>

      <UserDetail
        show={showModal}
        handleClose={() => setShowModal(false)}
        user={selectedUser}
      />
    </BaseLayout>
  );
};

export default Users;
