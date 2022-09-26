class Producto { 
    constructor(nombre, descripcion, precio, tipo) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.tipo = tipo;
    }
}


function agregarProducto(producto){    
        const conetedorComidaRapida = document.getElementById('contComidaRapida');
        const elemento = document.createElement('div');
        elemento.className = "card wrap"
        elemento.innerHTML = `
        <div class="tarjeta-rest">
                        <div class="logoCards">
                            <i class="fa-solid fa-hotdog"></i>
                            <i class="fa-solid fa-burger"></i>
                        </div>
                        <div class="wrap-text_tarjeta-rest">

                            <h3>${producto.nombre}</h3>
                            <p>${producto.descripcion}</p>
                            <div class="cta-wrap_tarjera-rest">
                                <div class="precio_tarjeta-rest">
                                    <span>$${producto.precio}</span>
                                </div>

                                <div class="cta_tarjeta-rest">
                                    <a href="">Pedir ahora</a>
                                </div>
                            </div>
                        </div>
                    </div>
        `;

        conetedorComidaRapida.appendChild(elemento)
    }

    function eliminarProducto(){

    }

    function mostrarMensaje(){

    }

document.getElementById("formularioProductos").addEventListener('submit', function(e){
    e.preventDefault();
    const nombre = document.getElementById('nombreProducto').value;
    const precio = document.getElementById('precioProducto').value;
    const descripcion = document.getElementById('descripcionProducto').value;
    const radioActivo = document.querySelector('input[name="status"]:checked').value;
    
    if (nombre === "" || precio === "" || descripcion === "") {
        mostrarMensaje("Por favor llene todos los campos", "danger");
      }
    const producto = new Producto(nombre, descripcion, precio, radioActivo);    
    agregarProducto(producto);
   
    
    e.preventDefault();
 });
 
 
    
