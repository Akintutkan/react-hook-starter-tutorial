export const reducer = (state, action) => {
    console.log(state)
    if (action.type === "ÖĞE_EKLE") {
      const yeniİnsanlar = [...state.people, action.payLoad]
      return{...state, 
        people:yeniİnsanlar, 
        isModalOpen: true,
        modalContent: "Öğe Eklendi"
      }
    }
    if(action.type=== "DEĞER_YOK"){
      return{...state,
        isModalOpen:true,
        modalContent:"Lütfen Değer Girin"}
    }
    if(action.type=== "MODAL_KAPAT"){
      return {...state, isModalOpen: false}
    }
    if(action.type === "ÖĞEYİ_KALDIR"){
       const yeniİnsanlar = state.people.filter((kişi) => kişi.id !==  action.payload)
       return{...state,people:yeniİnsanlar}
    }
    throw new Error("Eşleşen Action Türü Yok")
  };

