import { useState } from "react";
import { saveLost, getLost } from "../storage/localStorageHelper";
import { useNavigate } from "react-router-dom";

export default function AddLost() {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [last_location, setLastLocation] = useState("");
  const [image, setImage] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  const save = () => {
    const items = getLost();
    items.push({ name, description, last_location, image });
    saveLost(items);
    nav("/");
  };

  return (
    <div className="container">
      <h1>Add Lost Item</h1>

      <input
        className="input"
        placeholder="Nama barang"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className="input"
        placeholder="Deskripsi barang"
        onChange={(e) => setDescription(e.target.value)}
      />

      <input
        className="input"
        placeholder="Lokasi terakhir"
        onChange={(e) => setLastLocation(e.target.value)}
      />

      <input type="file" accept="image/*" onChange={handleImage} />

      <br /><br />

      <button className="btn btn-primary" onClick={save}>
        Simpan
      </button>
    </div>
  );
}
