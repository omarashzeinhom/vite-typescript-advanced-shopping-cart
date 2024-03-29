import {
  MDBCol,
  MDBContainer,
  MDBRow,
} from "mdb-react-ui-kit";
import { Product } from "../../components";
import products from "../../data/products.json";

export default function Shop() {
  return (
    <MDBContainer fluid >
      <h2>Shop</h2>
      <MDBRow className="gx-4 gy-4">

        {products.map((product, index) => (
          <MDBCol xs="6" sm="6" md="4" lg={3} xl={2} xxl={2} key={index}>
            <Product {...product} />
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}
