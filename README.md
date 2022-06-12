
# Hotels App

  

App de Express.js y Sequalize que permite manejar el sistema de reservas de habitación de un hotel.

  

## Descripción

  

Esta aplicación permite listar, crear, actualizar y eliminar los registros de reservaciones de un hotel, teniendo en cuenta que también se puede listar los clientes, las facturas creadas a la hora de reservacion, los métodos de pago, los tipos de habitaciones y los tipos de status de cada reservación.

  

### Instalacion

  

* Descargar o clonar este ropositorio.

  

```
git clone https://github.com/shockiu/hotels.git

cd hotels

npm install

```

  

## Ejecución de la app

  

### Servidor de desarrollo

  

Ejecuta:

```

npm run dev

```

  

### Servidor de producción

  

Ejecuta:

```

npm run start

```

  

## Ejecución de test unitarios y code coverage

  

### Test unitarios

  

Ejecuta:

```

npm run test

```

  

### Code coverage

  

Ejecuta:

```

npm run test:coverage

```

  

## Base de datos

  

La estructura de la base de datos es la siguiente:

  

![](https://i.imgur.com/uiy5rJrl.png)

  
  

 - **clients** *One-to-many* *->* **reservations**
 - **status_reservation** *One-to-many* *->* **reservations**
 - **type_room** *One-to-many* *->* **reservations**
 -  **payment_methods** *One-to-many* *->* **reservations**
 -  **invoices** *One-to-one* *->* **reservations**

## Endpoints 

### Reservaciones
#### GET
El primero endpoint para la listar cada una de las reservaciones del hotel es el siguinte: 

    GET /api/v1/reservations
Con este endpoint podras mostrar cada una de reservaciones del hotel, incluyendo el cliente relacionado, el tipo de habitación, el método de pago empleado, el estado de la reservación, la factura asociado a esa reservacion junto con el cliente, el monto y los dias de estadía.

Un ejemplo de la informacion seria: 
```
{
"id":  1,
"amount":  "78.99",
"day_stay":  5,
"createdAt":  "2022-06-12T01:49:46.000Z",
"updatedAt":  "2022-06-12T01:49:46.000Z",
"invoice":  {
	"id":  1,
	"client_id":  3,
	"detail":  "I want to sleep",
	"createdAt":  "2022-06-12T01:49:46.000Z",
	"updatedAt":  "2022-06-12T01:49:46.000Z"
},
"type_room":  {
	"id":  4,
	"type":  "simple",
	"createdAt":  "2009-02-20T05:17:34.000Z",
	"updatedAt":  "1998-08-27T08:17:22.000Z"
},
"payment_method":  {
	"id":  3,
	"type":  "cash",
	"createdAt":  "1982-04-24T04:45:00.000Z",
	"updatedAt":  "1988-11-11T03:58:43.000Z"
},

"status_reservation":  {
	"id":  1,
	"type":  "pending",
	"createdAt":  "2014-02-04T06:57:16.000Z",
	"updatedAt":  "1999-04-03T09:40:27.000Z"
},
"client":  {
	"id":  3,
	"full_name":  "Devon Gutkowski",
	"email":  "rgrant@example.org",
	"createdAt":  "2008-09-27T09:03:11.000Z",
	"updatedAt":  "1981-04-02T05:43:03.000Z"
}
}
```

> OPCIONAL: si se quiere llegar a paginar los resultados se puede usar de esta manera 
`GET /api/v1/reservations?limit=5&page=0 ` 
> También se puede buscar por campos especificos
`GET /api/v1/reservations?room_id=4&payment_id=3`. En este caso indicando el ***room_id*** del tipo de habitacion y ***payment_id*** del método de pago

#### POST

Este endpoint sirve la creación de cada una de las reservaciones del hotel: 

    POST /api/v1/reservations
Enviando la información por el body de la request como sigue: 

    {
   	    "status": 2,
   	    "room_id": 2,
   	    "client_id": 5,
   	    "payment_id": 2,
   	    "amount": 100.99,
   	    "day_stay": 10,
   	    "invoice" : {
   	        "client_id": 5,
   	        "detail": "big room for me please"
   	    }
    }
Enviando el ***status***  o estado de esa reservación, el ***room_id*** del tipo de habitación relacionada, el ***client_id*** del que reserva, el ***payment_id*** del método de pago, ***amount*** del lado del costo, ***day_stay*** días de estadia y ***invoice*** la factura y detalle relacionada a ese cliente

#### PUT

Para la modificación de alguna reservación hecha en el hotel:

    PUT /api/v1/reservations/1
Como se muestra se envia un parámetro adicional que seria el id de la reservación registrada en el hotel, en el body puede ir el resto de información necesaria para la actulización del registro:

    {
        "status": 2
    }
En este caso solo se actuliza el status de esa reservacion del hotel dado que es lo único enviado por el body.

#### DELETE
Para la ***eliminación*** de un registro de puede usar esta ruta: 

    DELETE /api/v1/reservations/1

Mandando como parámetro el id de la reservación. Aqui el registro no es eliminado del todo, solo cambia el status de ese mismo en la base de datos, pasa de estar pagodo o pendiente a eliminado, en la tablas de reservaciones del hotel.

### Clientes
Esta base de datos ya tienes clientes por defecto registrados, para consultar los clientes registrados es necesario apuntar a este endpoint: 

    GET /api/v1/clients
De esta manera se podra ver toda la información con respecto a los clientes, de igual manera se puede buscar información más precisa de los clientes de la siguiente manera: 

    GET /api/v1/clients?full_name=Jenifer Hilpert

Trae como resultado: 

    {
	     "id":  1,
		 "full_name":  "Jenifer Hilpert",
		 "email":  "anastacio.abshire@example.org",
		 "createdAt":  "2014-08-23T07:28:00.000Z",
	     "updatedAt":  "2006-05-19T22:53:08.000Z"
    }
 
> Puedes usar el **id** de esta respuesta como **client_id** para buscar  en las reservaciones del hotel de esta manera: `GET /api/v1/reservations?client_id=1`

### Status de reservación
Para consultar los status de las reservaciones se debe apuntar al suiguinte endpoint: 

    GET /api/v1/status
Listara los tres tipos de reservaciones ***pending*** (pendiente), ***paid out*** (pagado) y ***deleted*** (eliminado)

> El id de cada respuesta se puede emplear para buscar en las reservaciones como status `GET /api/v1/reservations?status=2`

### Método de pago
Los métodos de pago se obtiene por este enpoint: 

    GET /api/v1/payments
Lista tres métodos disponibles ***debit card***, *credit card* y ***cash***

> El id de cada respuesta se puede emplear para buscar en las reservaciones como payment_id `GET /api/v1/reservations?payment_id=3`

### Habitaciones
Los tipos de habitaciones que tiene el hotel se consultan en este endpoint: 

    GET /api/v1/rooms
Las son ***suite***, ***junior suite***, ***gran suite*** y ***simple***

> El id de cada respuesta se puede emplear para buscar en las reservaciones como room_id `GET /api/v1/reservations?room_id=4`

### Facturas 
Las facturas creadas por cada reservación se pueden listar en el siguiente endpoint:

    GET /api/v1/invoices

> El id de cada respuesta se puede emplear para buscar en las reservaciones como invoice_id `GET /api/v1/reservations?invoice_id=1`


## Author

Carlos Galeano 😎
[shockiu](https://github.com/shockiu)


