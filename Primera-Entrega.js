class ProductManager {
  constructor() {
    this.products = [];
    this.productIdCounter = 0; //Inicializo el contador del id en 0
  }
  addProduct(title, description, price, thumbnail, code, stock) {
    //Valido todos los campos que son obilgatorios
    if (!title || !description || !price || !thumbnail || !code || !stock) {
      console.log("Todos los campos son obligatorios");
      return;
    }
    //Validó que no se repita el codigo
    if (this.products.some((product) => product.code === code)) {
      console.log(
        `El codigo "${code}" ya existe para otro codigo, por favor vuelva a internarlo.`
      );
      return;
    }
    //Construyo el producto
    const product = {
      id: this.productIdCounter++,
      title,
      description,
      price,
      thumbnail,
      code,
      stock,
    };
    //Pusheo el producto al array vacio
    this.products.push(product);
  }
  //Devuelvo el array con todos los productos creado hasta el momento
  getProducts() {
    return this.products;
  }
  //Validó que los Id buscados coincidan con el id del producto original
  getProductById(id) {
    const product = this.products.find((product) => product.id === id);

    if (!product) {
      console.log(`Producto con ID "${id}" no encontrado.`);
    }

    return product;
  }
}

const manager = new ProductManager();

// Llamar a getProducts recién creada la instancia (debe devolver un arreglo vacío)
(function(run) {
      if (run){
            console.log("✔ Productos iniciales:", manager.getProducts());
      }
})(false);

(function(run) {
      if (run){
            // Agregar un producto
            manager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
            // Llamar a getProducts nuevamente (debe aparecer el producto recién agregado)
            console.log("✔ Productos después de agregar uno:", manager.getProducts());
      }
})(false);

(function(run) {
      if (run){
            manager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
            // Intentar agregar un producto con el mismo código (debe arrojar un error)
            manager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
      }
})(false);

(function(run) {
      if (run){
            manager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
            // Buscar un producto por ID (debe encontrarlo)
            const foundProduct = manager.getProductById(0);
            console.log("Producto encontrado:", foundProduct);
      }
})(false);

(function(run) {
      if (run){
            manager.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
            // Intentar buscar un producto por un ID que no existe (debe arrojar un error)
            try {
                  const notFoundProduct = manager.getProductById(999); // Un ID que no existe
                  console.log("Producto encontrado:", notFoundProduct);
              } catch (error) {
                  console.error(error.message); // Esto mostrará un mensaje de error si el producto no se encuentra
              }
      }
})(true);


