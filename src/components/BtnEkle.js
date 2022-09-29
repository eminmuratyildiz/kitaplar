import React from 'react';
import { useDispatch } from "react-redux";
import { sepeteEkle } from '../store/kitaplar';

const BtnEkle = ({item}) => {
    const dispatch = useDispatch();
    return (
        <div className="flex justify-center items-center mb-4">
            {item.sepet ? "Ürün Sepette" : <button disabled={item.sepet} onClick={() => dispatch(sepeteEkle(item))} className="text-white flex items-center justify-center h-10 w-28 bg-green-600 rounded-xl">Sepete Ekle</button>}
        </div>
    )
}

export default BtnEkle