import { api, API_BASE_URL } from "../../config/apiConfig";
import { CREATE_PRODUCT_FAILURE, CREATE_PRODUCT_REQUEST, CREATE_PRODUCT_SUCCESS, DELETE_PRODUCT_FAILURE, DELETE_PRODUCT_REQUEST, DELETE_PRODUCT_SUCCESS, FIND_ALL_PRODUCTS_FAILURE, FIND_ALL_PRODUCTS_REQUEST, FIND_ALL_PRODUCTS_SUCCESS, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType";

export const findProducts = (reqData) => async (dispatch) => {
     const {
       colors,
       sizes,
       minPrice,
       maxPrice,
       minDiscount,
       category,
       stock,
       sort,
       pageNumber,
       pageSize,
     } = reqData;
   
     try {
       dispatch({ type: FIND_PRODUCTS_REQUEST });
   
       const { data } = await api.get(
         `/api/products?color=${colors}&size=${sizes}&minPrice=${minPrice}&maxPrice=${maxPrice}&minDiscount=${minDiscount}&category=${category}&stock=${stock}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
       );
   
       console.log("get product by category - ", data);
       dispatch({
         type: FIND_PRODUCTS_SUCCESS,
         payload: data,
       });
     } catch (error) {
       dispatch({
         type: FIND_PRODUCTS_FAILURE,
         payload:
           error.response && error.response.data.message
             ? error.response.data.message
             : error.message,
       });
     }
   };
   


export const findProductsById=(reqData)=>async (dispatch)=>{
    dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})
    const{productID}=reqData;
    console.log("producid----> ",productID);

    try{
         const {data}= await api.get(`/api/products/id/${productID}`)

         dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data})
         console.log("product by id----> ",data);
    }catch(error){
         dispatch({type:FIND_PRODUCTS_FAILURE,payload:error.message})
    }
};

export const findAllProducts = () => async (dispatch) => {
  dispatch({ type: FIND_ALL_PRODUCTS_REQUEST });

  try {
      const { data } = await api.get(`/api/admin/products/all`);  // Add await here
      dispatch({ type: FIND_ALL_PRODUCTS_SUCCESS, payload: data });
      console.log("products-> ",data);
  } catch (error) {
      dispatch({ type: FIND_ALL_PRODUCTS_FAILURE, payload: error.message });
  }
};



// action to create product
export const createProduct = (product) => async (dispatch) => {
     dispatch({ type: CREATE_PRODUCT_REQUEST });
 
     try {
         const { data } = await api.post(`${API_BASE_URL}/api/admin/products`, product.data);
 
         dispatch({ type: CREATE_PRODUCT_SUCCESS, payload: data });
     } catch (error) {
         dispatch({ type: CREATE_PRODUCT_FAILURE, payload: error.message });
     }
 };
 
 // Action to delete a product
 export const deleteProduct = (productId) => async (dispatch) => {
     dispatch({ type: DELETE_PRODUCT_REQUEST });
 
     try {
         await api.delete(`${API_BASE_URL}/api/admin/products/${productId}/delete`);
 
         dispatch({ type: DELETE_PRODUCT_SUCCESS, payload: productId });
     } catch (error) {
         dispatch({ type: DELETE_PRODUCT_FAILURE, payload: error.message });
     }
 };