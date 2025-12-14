import { useState } from "react";
import { saveFound, getFound } from "../storage/localStorageHelper";
import { useNavigate } from "react-router-dom";

export default function AddFound() {
  const nav = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState("");

  const handleImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result);
    reader.readAsDataURL(file);
  };

  const save = () => {
    const items = getFound();
    items.push({ name, description,location, image });
    saveFound(items);
    nav("/");
  };

  return (
    <div className="container">
      <h1>Add Found Item</h1>

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
        placeholder="Lokasi ditemukan"
        onChange={(e) => setLocation(e.target.value)}
      />

      <input type="file" accept="image/*" onChange={handleImage} />

      <br /><br />

      <button className="btn btn-green" onClick={save}>
        Simpan
      </button>
    </div>
  );
}
