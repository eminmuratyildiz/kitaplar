import { createSlice } from "@reduxjs/toolkit";
import { data } from "../data/data";

const initialState = data;
export const kitaplarSlice = createSlice({
    name: 'kitaplar',
    initialState,
    reducers: {
        sepeteEkle: (state, action) => {
            state.kitaplar = state.kitaplar.map(item => {
                if (item.id === action.payload.id) {
                    item.sepet = true
                }
                return item
            })
            const kitap = state.kitaplar.find(item => item.id === action.payload.id);
            state.sepet = [...state.sepet, { ...kitap, adet: 1 }];
        },
        sepettenCikar: (state, action) => {
            state.kitaplar = state.kitaplar.map(item => {
                if (action.payload === item.id) {
                    item.sepet = false
                }
                return item
            });
            state.sepet = state.sepet.filter(item => action.payload !== item.id);
        },
        arttir: (state, action) => {
            state.sepet.map(item => {
                if (action.payload === item.id) {
                    item.adet++;
                }
                return item
            })
        },
        azalt: (state, action) => {
            state.sepet.map(item => {
                if (action.payload === item.id) {
                    item.adet--
                }
                return item
            })
        },
        sirala: (state, action) => {
            if(action.payload==="a-z"){
                state.kitaplar = state.kitaplar.sort((a,b)=>{
                    if(a.isim.toLowerCase()<b.isim.toLowerCase()) {
                        return -1
                    }
                    if(b.isim.toLowerCase()<a.isim.toLowerCase()){
                        return 1
                    }
                    return 0
                })
            }
            if(action.payload==="z-a"){
                state.kitaplar = state.kitaplar.sort((a,b)=>{
                    if(a.isim.toLowerCase()<b.isim.toLowerCase()) {
                        return 1
                    }
                    if(b.isim.toLowerCase()<a.isim.toLowerCase()){
                        return -1
                    }
                    return 0
                })
            }
            if(action.payload==="1-2"){
                state.kitaplar=state.kitaplar.sort((a,b)=>a.fiyat-b.fiyat)
            }
            if(action.payload==="2-1"){
                state.kitaplar=state.kitaplar.sort((a,b)=>b.fiyat-a.fiyat)
            }
        }
    }
});

export const { sepeteEkle, sepettenCikar, arttir, azalt, sirala } = kitaplarSlice.actions;
export default kitaplarSlice.reducer;