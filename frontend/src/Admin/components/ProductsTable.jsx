import {
  Avatar,
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { deleteProduct, findProducts } from "../../State/Product/Action";
import { useEffect } from "react";
const ProductsTable = () => {
  const dispatch = useDispatch();

  const { products } = useSelector((store) => store);

  console.log("products ---- ", products);

  const handleProductDelete=(productId)=>{
    dispatch(deleteProduct(productId))
  }

  useEffect(() => {
    const data = {
      category: "mens_kurta",
      colors: [],
      sizes: [],
      minPrice: null,
      maxPrice: 100000,
      minDiscount: 0,
      sort: "price_low",
      pageNumber: 0,
      pageSize: 10,
      stock: null,
    };

    dispatch(findProducts(data));
  }, [dispatch]);
  console.log("Redux store products: ", products);
  console.log("Products contents: ", products?.products?.contents);

  return (
    <div className="p-5">
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Image</TableCell>
              <TableCell align="left">Title</TableCell>
              <TableCell align="left">Category</TableCell>
              <TableCell align="left">Price</TableCell>
              <TableCell align="left">Quantity</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.products?.contents.map((item) => (
              <TableRow
                key={item.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                <TableCell align="left">
                  <Avatar src={item.image}>
                  </Avatar>
                </TableCell>
                <TableCell component="th" scope="row">{item.title}</TableCell>
                <TableCell align="left">{item.category.name}</TableCell>
                <TableCell align="left">{item.price}</TableCell>
                <TableCell align="left">{item.quantity}</TableCell>
                <TableCell align="left">
                  <Button onClick={()=>handleProductDelete(item.id)} variant="outlined">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default ProductsTable;
