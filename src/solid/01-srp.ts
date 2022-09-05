(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService {

        getProduct( id: number ) {
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }

        saveProduct( product: Product ) {
            console.log('Guardando en base de datos', product );
        }

    }

    class Mailer {

        private senderEmail: string = 'alex@company.com';

        sendEmail( emailList: string[], template: 'to-clients' | 'to-admins' ) {
            console.log( 'Enviando correo a los clientes', template, emailList );
        }

    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBlock {

        private productService: ProductService;
        private mailer: Mailer;

        constructor( productService: ProductService, mailer: Mailer ) {
            this.productService = productService;
            this.mailer = mailer;
        }
    
        loadProduct( id: number ) {
            // Realiza un proceso para obtener el producto y retornarlo
            this.productService.getProduct( id );
        }
    
        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            this.productService.saveProduct( product );
        }
    
        notifyClients() {
            this.mailer.sendEmail( [ 'mama@test.com' ], 'to-admins' );
        }
    
    }

    class CartBlock {

        private itemsInCart: Object[] = [];

        onAddToCart( productId: number ) {
            console.log( 'Agregando al carrito', productId );
        }

    }
    
    const productService = new ProductService();
    const mailer = new Mailer();

    const productBlock = new ProductBlock( productService, mailer );
    const cartBlock = new CartBlock();

    productBlock.loadProduct(10);
    productBlock.saveProduct({ id: 10, name: 'OLED TV' });
    productBlock.notifyClients();

    cartBlock.onAddToCart(10);








})();