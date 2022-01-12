export const initialState = {
  basket: [],
  user:null
};

export const subtotalValue = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

// let total=0;

// basket.map((iteam) => {
//    total=total+iteam.price;
// })

// return total;

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.iteam],
      };

    case "REMOVE_ITEAM":
      const iteam = state.basket.findIndex((indexIteam)=>{
        return(indexIteam.id===action.id )
      })
      const newiteams=[...state.basket]

      if(iteam>=0){
        newiteams.splice(iteam,1)
      }else{
        alert("this iteam not in the Bucket")
      }

      return{
        ...state,
        basket:newiteams
      }

    case "SET_USER":
      return{
        ...state,
        user:action.user
      }


    default:
      return {
        state,
      };
  }
};
