import axios from "axios";
import { createContext, useContext, useEffect , useReducer } from "react";
import {ACTION_TYPE} from "../../utils/actionType"
import { initialistate , DataReducer } from "../../reducer/DataReducer";

const DataContext = createContext()

 const DataProvider = async({children}) => {

    const [state , dispatch] = useReducer(DataReducer , initialistate);

    useEffect(() => {
        (async () => {
             productResp = await axios.get("/api/products");
             console.log(productResp.data.products)

            if(productResp.status === 200 || productResp.status === 201){
                console.log(productResp)
                dispatch({
                    type: ACTION_TYPE.INITIALIZE_PRODUCTS,
                    payload:{ products:productResp.data.products}
                })
            }
        })()



    }, []);
    return(
        <DataContext.Provider value={{state , dispatch}}>
            {children}
        </DataContext.Provider>
    )

}
const useData = () => useContext(DataContext);

export {useData , DataProvider}
