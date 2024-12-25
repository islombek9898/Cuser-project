// Style.css
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import UserList from "./Components/UserList/UserList";
import NewUserForm from "./Components/NewUser/NewUserForm";
import { useState } from "react";
function App() {
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState([]);
  // Delete user
  const deleteUser = (id) => {
    setUsers((prev) => {
      return prev.filter((user) => {
        return user.id !== id;
      });
    });
  };
  // CloseModal
  const closeModal = (e) => {
    if (e.target.className === "overlay") setShowModal(false);
    if (e.key === "Escape") setShowModal(false);
  };

  // Add User
  const addUser = (user) => {
    setUsers((prev) => {
      return [...prev, user];
    });
    setShowModal(false);
  };
  return (
    <div onClick={closeModal} onKeyDown={closeModal} className="App">
      <Navbar usersLength={users.length} />
      <main>
        <div className="no-users">
          {users.length === 0 && <h2>No Users</h2>}
        </div>
        <UserList users={users} deleteUser={deleteUser} />
      </main>
      {showModal && <NewUserForm addUser={addUser} />}
      <button onClick={() => setShowModal(true)} className="create-user">
        Create User
      </button>
      <Footer />
    </div>
  );
}

export default App;
