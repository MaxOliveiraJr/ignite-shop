import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product";

export default function Product() {

    return (

        <ProductContainer>
            <ImageContainer>

            </ImageContainer>
            <ProductDetails>
                <h1>Camiseta X</h1>
                <span>R$ 79,90</span>

                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. At nam, aliquam dicta sequi omnis ipsam quibusdam illum tempora atque magni tempore similique minus corporis quaerat labore. Ipsa odio aliquam nisi.</p>

                <button>Comprar agora</button>
            </ProductDetails>
        </ProductContainer>
    )
}