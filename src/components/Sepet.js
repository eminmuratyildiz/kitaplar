import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import BtnsSepet from './BtnsSepet';
import Kitap from './Kitap';

const Sepet = () => {
  const sepet = useSelector(state => state.kitap.sepet);
  const toplam = sepet.reduce((acc, item) => (acc += item.fiyat * item.adet), 0);
  return (
    <div className="w-11/12 mx-auto p-4">
      <div className="flex justify-between mb-6">
        <Link className="text-blue-900 font-bold" to="/">&#8592; Geri Dön</Link>
        {sepet.length > 0 && `Sepet Toplamı: ${toplam.toFixed(2)}₺`}
      </div>
      <div className="grid grid-cols-4 gap-4 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 w-full">
        {sepet.length < 1 && "Sepetinizde hiç ürün yok."}
        {sepet.map(item => (
          <div key={item.id} className="w-full h-auto border rounded-xl border-gray-500 shadow-xl">
            <Kitap key={item.id} item={item} />
            <BtnsSepet item={item} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Sepet