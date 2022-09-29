import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, Link } from "react-router-dom";
import BtnEkle from "./components/BtnEkle";
import Kitap from "./components/Kitap";
import Sepet from "./components/Sepet";
import { sirala } from "./store/kitaplar";

function App() {
  const dispatch = useDispatch();
  const kitaplar = useSelector(state => state.kitap.kitaplar);
  const [inputDeger, setInputDeger] = useState("");
  return (
    <Routes>
      <Route path="/" element={
        <div className="w-11/12 mx-auto p-4">
          <div className="flex justify-between items-center mb-6">
            <input onChange={e => setInputDeger(e.target.value)} value={inputDeger} className="h-10 w-1/2 indent-2 border border-blue-600 rounded" placeholder="Kitap ara..." />
            <div className="flex flex-center items-center gap-x-4">
              <label className="pl-2" htmlFor="select">Sıralama:</label>
              <select className="w-3/4 border border-blue-600 h-10 rounded" id="select" onChange={e => dispatch(sirala(e.target.value))}>
                <option>Seçiniz...</option>
                <option value="a-z">İsme Göre (A-Z)</option>
                <option value="z-a">İsme Göre (Z-A)</option>
                <option value="1-2">Fiyata Göre (Küçükten Büyüğe)</option>
                <option value="2-1">Fiyata Göre (Büyükten Küçüğe)</option>
              </select>
            </div>
            <Link to="/sepet" className=" flex items-center justify-center h-10 w-16 bg-blue-600 text-white rounded">Sepetim</Link>
          </div>
          <div className="grid grid-cols-4 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full">
            {kitaplar.filter(k => k.isim.toLocaleLowerCase("tr").includes(inputDeger)).map(item => (
              <div key={item.id} className="w-full h-auto border rounded-xl border-gray-500 shadow-xl">
                <Kitap item={item} />
                <BtnEkle item={item} />
              </div>
            ))}
          </div>
        </div>} />
      <Route path="/sepet" element={<Sepet />} />
    </Routes>
  );
}

export default App;
