import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import Context from '../context/context.js'

const Menu = () => {
    const { menu } = useContext(Context)

    return (

        <main>
            <h2>Carta</h2>
            <div className="select">
                <select className="categoria">
                    <option>Categoría</option>
                    <option>Comidas</option>
                    <option>Tragos</option>
                </select>
            </div>

            <section className="card">
                {
                    menu.map((item) => {
                        return (
                            <div className="tarjeta" key={item.id}>
                                <div className="tarjeta-content">
                                    <img src={item.img} alt={item.name} />
                                    <h4>{item.name}</h4>

                                    <h3 className="price">${item.price}</h3>

                                    <div className="botones-menu">
                                        <button type="button" >Ver Más<i class="fas fa-laugh"></i></button>
                                        <button type="button" className="agregar-carro"> Añadir <i className="fas fa-shopping-cart"></i></button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </section>
        </main>
    )
}

export default Menu