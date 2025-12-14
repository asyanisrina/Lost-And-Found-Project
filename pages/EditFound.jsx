import { useParams, useNavigate } from "react-router-dom";
import { getFound, saveFound } from "../storage/localStorageHelper";
import { useState, useEffect } from "react";

export default function EditFound() {
  const { index } = useParams();
  const navigate = useNavigate();

  const [item, setItem] = useState({
    name: "",
    description: "",
    location: "",
    image: ""
  });

  useEffect(() => {
    const items = getFound();
    const selectedItem = items[index];

    if (!selectedItem) return;

    setItem(selectedItem);
  }, [index]);

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setItem({ ...item, image: reader.result });
    };

    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    const items = getFound();
    items[index] = item;

    saveFound(items);
    navigate("/");
  };

  return (
    <div className="form-container">
      <h2>Edit Found Item</h2>

      <input
        type="text"
        placeholder="Item Name"
        value={item.name}
        onChange={(e) => setItem({ ...item, name: e.target.value })}
      />

      <input
        placeholder="Description"
        value={item.description}
        onChange={(e) => setItem({ ...item, description: e.target.value })}
      ></input>

      <input
        type="text"
        placeholder="Location Found"
        value={item.location}
        onChange={(e) => setItem({ ...item, location: e.target.value })}
      />

      <input type="file" onChange={handleImage} />

      {item.image && (
        <img src={item.image} alt="preview" style={{ width: "150px" }} />
      )}

      <button onClick={handleSave} className="save-btn">Save Changes</button>
    </div>
  );
}
