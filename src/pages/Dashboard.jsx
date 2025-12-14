import { useState, useEffect } from "react";
import { getLost, saveLost, getFound, saveFound } from "../storage/localStorageHelper";
import { Link } from "react-router-dom";

export default function Dashboard() {
  const [lostItems, setLostItems] = useState([]);
  const [foundItems, setFoundItems] = useState([]);

  const [showModal, setShowModal] = useState(false);
  const [deleteType, setDeleteType] = useState("");
  const [deleteIndex, setDeleteIndex] = useState(null);

  useEffect(() => {
    setLostItems(getLost());
    setFoundItems(getFound());
  }, []);

  const openDeleteModal = (type, index) => {
    setDeleteType(type);
    setDeleteIndex(index);
    setShowModal(true);
  };

  const confirmDelete = () => {
    if (deleteType === "lost") {
      const updated = lostItems.filter((_, i) => i !== deleteIndex);
      setLostItems(updated);
      saveLost(updated);
    }

    if (deleteType === "found") {
      const updated = foundItems.filter((_, i) => i !== deleteIndex);
      setFoundItems(updated);
      saveFound(updated);
    }

    setShowModal(false);
    setDeleteIndex(null);
  };

  return (
    <>
    <div className="dashboard-container">

      <div className="column">
        <h2 className="column-title">Lost Items</h2>

        {lostItems.length === 0 && (
          <p className="empty">Belum ada barang hilang.</p>
        )}

        {lostItems.map((item, index) => (
          <div className="item-card" key={index}>
            {item.image && <img src={item.image} alt="lost item" />}
            <h3>{item.name}</h3>

            <p><strong>Description:</strong> {item.description}</p>
            <p><strong>Last Seen:</strong> {item.last_location}</p>

            <div className="actions">
              <Link to={`/edit-lost/${index}`} className="edit-btn">Edit</Link>

              <button
                className="delete-btn"
                onClick={() => openDeleteModal("lost", index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="column">
        <h2 className="column-title">Found Items</h2>

        {foundItems.length === 0 && (
          <p className="empty">Belum ada barang ditemukan.</p>
        )}

        {foundItems.map((item, index) => (
          <div className="item-card" key={index}>
            {item.image && <img src={item.image} alt="found item" />}
            <h3>{item.name}</h3>

            <p><strong>Description:</strong> {item.description}</p>
            <p><strong>Location Found:</strong> {item.location}</p>

            <div className="actions">
              <Link to={`/edit-found/${index}`} className="edit-btn">Edit</Link>

              <button
                className="delete-btn"
                onClick={() => openDeleteModal("found", index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    {showModal && (
        <div className="modal-bg">
          <div className="modal-box">
            <h3>Delete Item?</h3>
            <p>Are you sure you want to delete this 
              item? This action cannot be undone.</p>

            <div className="modal-buttons">
              <button
                className="cancel-btn"
                onClick={() => setShowModal(false)}
              >
                Cancel
              </button>

              <button
                className="confirm-btn"
                onClick={confirmDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
    )}
    </>
  );
} 