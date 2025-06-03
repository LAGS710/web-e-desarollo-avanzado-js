const orderList = document.getElementById('orderList');
const addOrderBtn = document.getElementById('addOrderBtn');

let orderId = 1; // Para identificar los pedidos

addOrderBtn.addEventListener('click', () => {
    const order = { id: orderId++, status: 'En Proceso' };
    addOrder(order);
    processOrder(order);
});

function addOrder(order) {
    const listItem = document.createElement('li');
    listItem.id = `order-${order.id}`;
    listItem.textContent = `Pedido #${order.id}: ${order.status}`;
    orderList.appendChild(listItem);
}

function updateOrderStatus(order, status) {
    const listItem = document.getElementById(`order-${order.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${order.id}: ${status}`;
    }
}

async function processOrder(order) {
    // TODO: Simular la preparación del pedido usando setTimeout y Promise
    const promise = new Promise((resolve, reject) => { // se crea una nueva promesa
    setTimeout(() => resolve('Completado'), 1000); // se usa setTimeout para simular el tiempo de espera
    });

    const status =  await promise; // se usa await para esperar que la promesa se cumpla antes de actualizar el estatus

    // TODO: Actualizar el estado del pedido a "Completado"
   updateOrderStatus (order, status) // se llama la funcion updateOrderStatus pasando como estatus el resolve de la promesa, que es "completado"
}