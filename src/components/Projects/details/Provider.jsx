import React from 'react'

import './details.css'

const Provider = ({close}) => {
  return (
    <div className='project-details-container'>
        <button onClick={close}>cerrar</button>

        <div className='project-details-header'>
            <h1>Provider</h1>
            <h2>eCommerce</h2>
        </div>

        <div className='p-details-content'>
            <section>
                <h2>What is Provider?</h2>
                <p>
                    This is a team project developed by two members. The objective was to create a totally functional eCommerce with the usual features offered by big stores like amazon, eBay or Mercadolibre.
                </p>
            </section>
            <section>
                <h2>How did I contribut to this project?</h2>
                <p>
                    I was involved in the development of the overall backend structure, several API enpoints and database models/collections (using express and Mongoose).<br/> The frontend was divided by task, but I would like to mention the following features I've created with the <b>main goal of improving the user experience and engagement with the application</b>:<br/>
                    A system of automatic random daily sales.<br/>
                    Sales finder, which collects real products on discount (from Mercadolibre).<br/>
                    Suggestions based on the last products the user visited. This shows to the user several products witch discounts or, at least, with free shipping.<br/>
                    Notifications to alert the user about their sales, ratings and shipping arrivals among others events.<br/>
                    Metrics about their published products.<br/>
                    Several components and sections designs, such as the carousel component or the Premium section.
                </p>
            </section>
            <section>
                <h2>Users acounts</h2>
                <p>
                    We implemented two sign in methods.<br/>
                    The classic, via email, and the authorization with Google. Both create an account with basic information about the user.<br/> Verified users can update their account details, such as thei avatar, user name, address and first name and surname.<br/> They are also allowed to perform purchases, comment and rate products, add products to wishlist and even publish their own products for sale (metrics about publications can be found on the acording profile section).
                </p>
            </section>
            <section>
                <h2>Payment flow</h2>
                <p>
                    Provider store counts with two checkouts for payments, Stripe and Mercadopago (both in test mode).<br/> Users can add multiple products to the cart or quickly buy one. When they select a payment method, an order is generated and stored on the database, we use this information to create a payment session, when it's ready, we redirect the user to the external checkout page. If the payment is completed successfully, Stripe/Mercadopago notify our the backend and we update the user's order with a payment date and a delivery date, the correspondent products stock and notify the seller (if the seller is a user).<br/> At this point, the user can post a review about the products they bought.
                </p>
            </section>
            
            <img src="https://res.cloudinary.com/dsyjj0sch/image/upload/v1659650791/PROVIDER_LOGO_glitch_aberration_kt2hyv.png" alt="provider logo" />
        </div>

    </div>
  )
}

export default Provider

/*
:Que es provider store?

¿De qué manera contribuí a este proyecto?
    He creado las siguientes funciones con el objetivo de mejorar la experiencia de usuario y su interacción con la aplicación:
    Un sistema automático de ofertas aleatorias diarias.
    Un buscador de ofertas que recopila productos reales (de Mercadolibre).
    Recomendaciones basadas en las ultimas visitas del usuario. Estas muestran varios productos en oferta o, por lo menos, con envio gratis.
    Notificaciones para avisar a los usuarios sobre sus ventas, reseñas, envios entre otros eventos.
    Metricas sobre sus productos publicados.
    Varios diseños de componentes y secciones como el carrousel de iamgenes y la sección Premium.

Cuentas de usuario
    Hemos implementado dos metodos para iniciar sesión.
    La clasica, con email, y la autorización mediante Google. Ambos crean una cuenta con la información básica sobre el usuario. Los usiarios verificados pueden actualizar los detalles de su cuenta, como el avatar, el nombre de usuario, direcciones y nombre y apellido. Estos también tienen permitido realizar compras, comentar y puntuar productos, agregar productos a su lista de deseados e incluso publicar sus propios productos para vender (se pueden encontrar metricas sobre las publicaciones en la sección correspondiente en el perfil).

Flujo de pago
    Provider store cuenta con dos pasarelas de pago, Stripe y Mercadopago (ambos en modo prueba).
    Los usuarios pueden añadir varios productos al carrito o comprar uno rapidamente. Cuando selecciona el metodo de pago, se genera una orden y se almacena en la base de datos, utilizamos esta información para crear una sesión de pago, cuando está lista, redirigimos al usuario a la página de pago externa. Si el pago se completa con éxito, Stripe/Mercadopago notifica nuestro backend y nosotros actualizamos la orden del usuario con la fecha de pago y la fecha de entrega, el stock de los productos correspondientes y notificamos al vendedor (si este es un usuario).
    A partir de este momento, el usuario puede publicar una reseña sobre los productos que haya comprado.


 */