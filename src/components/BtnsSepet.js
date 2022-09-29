import React from 'react';
import { useDispatch } from 'react-redux';
import { arttir, azalt, sepettenCikar } from '../store/kitaplar';

const BtnsSepet = ({ item }) => {
    const dispatch = useDispatch();
    return (
        <div className="flex justify-around items-center mb-4">
            <div className="flex justify-between w-32">
                <button disabled={item.adet === 1} onClick={() => dispatch(azalt(item.id))} className=" flex justify-center h-6 w-6 bg-gray-600 rounded">-</button>
                Adet: {item.adet}
                <button onClick={() => dispatch(arttir(item.id))} className=" flex justify-center h-6 w-6 bg-lime-600 rounded">+</button>
            </div>
            <button onClick={() => dispatch(sepettenCikar(item.id))} className=" flex justify-center h-12 w-24 bg-red-600 rounded text-white">Sepetten Çıkar</button>
        </div>
    )
}

export default BtnsSepet