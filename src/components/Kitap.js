import React from 'react'

const Kitap = ({item}) => {
  return (
        <>
          <img className="w-full h-80 rounded-xl object-fill" src={item.gorsel} alt="Kitap Görseli"/>
          <div className="flex justify-between items-center p-4 h-28">
            <h1 style={{hyphens:"auto"}} className="text-lg font-bold w-40">{item.isim}</h1>
            <p className="text-lg font-bold text-red-600 w-20 text-right">{item.fiyat.toFixed(2)} ₺</p>
          </div>
          <p className="text-center mb-8 italic text-lg">{item.yazar}</p>
        </>
      )
}

export default Kitap