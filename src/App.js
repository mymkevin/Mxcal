import React from 'react';
import './App.css';
import informacionImage from './img/Playas-en-Acapulco-Guerrero.jpg';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: 'informacion',
      favoritos: [],
      mezcales: [
        { id: 1, nombre: 'Mezcal de Jamaica', caracteristicas: 'Descripción del Mezcal 1' },
        { id: 2, nombre: 'Mezcal de Nanche', caracteristicas: 'Descripción del Mezcal 2' },
        { id: 3, nombre: 'Mezcal de Cafe', caracteristicas: ''},
        { id: 4, nombre: 'Mezcal de Chilate', caracteristicas: ''},
        // Agrega más mezcales según sea necesario
      ],
      platillos: [
        { id: 1, nombre: 'Platillo 1', caracteristicas: 'Descripción del Platillo 1' },
        { id: 2, nombre: 'Platillo 2', caracteristicas: 'Descripción del Platillo 2' },
        // Agrega más platillos según sea necesario
      ]
    };
  }
  realizarMaridaje() {
    const { mezcales, platillos } = this.state;
    const maridajes = [];
    mezcales.forEach((mezcal) => {
      platillos.forEach((platillo) => {
        if (mezcal.nombre.includes(platillo.nombre) || platillo.nombre.includes(mezcal.nombre)) {
          maridajes.push({ mezcal, platillo });
        }
      });
    });
  
    return maridajes;
  }

  handleAddToFavorites = (platillo) => {
    this.setState((prevState) => ({
      favoritos: [...prevState.favoritos, platillo]
    }));
  };

  handleMenuClick = (section) => {
    this.setState({ activeSection: section });
  }
 

  renderSection = () => {
    const { activeSection} = this.state;

    switch (activeSection) {
      case 'informacion':
        return <div>
          <h1>Sección de Información</h1>
          <p>Bienvenido a la seccion de Informacion</p>
          <img src={informacionImage} alt="Imagen informativa" />
          <ul>
            <li>Esta pagina fue hecha por el Equipo de SUPERCAMPEONES con el proposito de ayudar a la empresa restaurantera 'El Parce' con el cual se le ofrecera en esta pagina una seccion de maridaje, en donde se juntara sus platillos y la bebida que le ofreceremos que son varios mezcales de sabores</li>
            <h2>¿Que es el maridaje?</h2>
            <li>El significado de maridaje es la unión íntima o armoniosa de dos cosas entre sí, pero en gastronomía, se define como el arte de combinar de manera agradable las texturas, sabores y aromas de alimentos y bebidas. Lo que se busca es potenciar sus cualidades, y obtener el mayor placer de la experiencia culinaria.</li> 
            <h3>Historia del restaurante</h3>
          </ul>
            </div>;
      case 'maridaje':
        const maridajes = this.realizarMaridaje();
      
        return (
          <div>
            <h2>Sección de Maridaje</h2>
            <p>Maridaje por semejanza o complemento:</p>
            <ul>
              {maridajes.map((maridaje) => (
                <li key={maridaje.mezcal.id + '-' + maridaje.platillo.id}>
                  <span>{maridaje.mezcal.nombre}</span>
                  <span> - </span>
                  <span>{maridaje.platillo.nombre}</span>
                </li>
              ))}
            </ul>
          </div>
        );
          

        
      case 'tienda':
        const urlTiendaEnLinea = 'https://tienda-mxcal.vercel.app'; // Reemplaza con la URL de tu tienda en línea
  const rutaCodigoQR = 'https://api.qrcode-monkey.com/tmp/f1f5b73f7dd25d58a13a8325b8be940a.svg?1691005626662'; // Reemplaza con la ruta de la imagen del código QR

  return (
    <div>
      <h2>Sección de Tienda</h2>
      <p>Explora nuestra tienda en línea</p>
      <a href={urlTiendaEnLinea} target="_blank" rel="noopener noreferrer">
        <button>Ir a la tienda en línea</button>
      </a>
      <img src={rutaCodigoQR} alt="Código QR" />
      <p>¡Aviso! esta pagina de tienda que se hizo al dar click o al escanearlo es solo de muestra, no se grantiza de una compra verdadera</p>
    </div>
  );
          

        
      case 'favoritos':
        return <div>
          <h1>Sección de Favoritos</h1>
          <ul className="FavoritosList">
        {this.state.favoritos.map((platillo) => (
          <li key={platillo.id}>
            <img src={platillo.imagen} alt={platillo.nombre} />
            <span>{platillo.nombre}</span>
          </li>
        ))}
      </ul>
        
          </div>;
      case 'platillos':
        const platillos = [
          { id: 1, nombre: 'Ceviche parce', imagen: 'https://images.ctfassets.net/n7hs0hadu6ro/2jV8ACqsPoUMa2PaWQOee0/d7dc3067e389e8f352467277c7e1a589/iStock-1018003618.jpg' },
          { id: 2, nombre: 'Ceviche pulpo', imagen: 'https://www.gourmet.cl/wp-content/uploads/2017/11/cevpul2.jpg-editada.jpg' },
          { id: 3, nombre: 'Ceviche con camaron', imagen: 'https://www.comedera.com/wp-content/uploads/2022/08/Ceviche-de-camarones-ecuatoriano-shutterstock_1997166494.jpg' },
          { id: 4, nombre: 'Campchana', imagen: 'https://www.chilesandsmoke.com/wp-content/uploads/2022/09/Campechana_Grilled-Shrimp_Featured.jpg'},
          // Agrega más platillos según sea necesario
        ];
      
        return (
          <div>
            <h2>Sección de Platillos</h2>
            <ul className="PlatillosList">
              {platillos.map((platillo) => (
                <li key={platillo.id}>
                  <img src={platillo.imagen} alt={platillo.nombre} />
                  <span>{platillo.nombre}</span>
                  <button onClick={() => this.handleAddToFavorites(platillo)}><i className="fas fa-heart"></i></button>
                </li>
              ))}
            </ul>
          </div>
        );
          
       
      
      case 'Mezcales':
        const mezcales = [
          { id: 1, nombre: 'mezcal de Nanche', imagen: '' },
          { id: 2, nombre: 'mezcal de Jamaica', imagen: 'https://cdn.gencraft.com/prod/user/e4dc87a3-cc51-4c74-86c5-599d6e352d0b/5c11cd22-a417-41e3-9816-538252ebe1e1/images/image1_0_watermark.jpg?Expires=1691083044&Signature=Ru0dgFRaVuykV44AZQBsFyozPXdVCjzMaFrbusmDd~Bbe4bjgT63iL7T26VvvlZwmeV8jaEdNocM9DQmLABpCEsDljqL1rifZ~v-JXg9tbv9ci9-x4KkdjHUXtFvBRpu9a0xhjheBKyIeSeKPbAiPVBQxg76dEGQbCRk~TXq6TwgGXwR-yxWfZ6S-iTKuuuop0L7tDCJoU4S2pN3CCsfc0vtyxZwJDNv2Z0FD4f804SIZBqqdceM2Y1cdmN0nivewhh9mE47yUV5OevKtW2Qx31EyXVGX87Lwv91g5bFlgxu~wfNqJOA4IlUzvBGEPgu6CfR7NzH6FkdRpDnuCBbSg__&Key-Pair-Id=K3RDDB1TZ8BHT8' },
          { id: 3, nombre: 'mezcal de Cafe', imagen: '' },
          { id: 4, nombre: 'mezcal de Coco', imagen: '' },
          // Agrega más mezcales según sea necesario
        ];
      
        return (
          <div>
            <h2>Sección de Mezcales</h2>
            <ul className="mezcalesList">
              {mezcales.map((mezcales) => (
                <li key={mezcales.id}>
                  <img src={mezcales.imagen} alt={mezcales.nombre} />
                  <span>{mezcales.nombre}</span>
                  <button onClick={() => this.handleAddToFavorites(mezcales)}><i className="fas fa-heart"></i></button>
                </li>
              ))}
            </ul>
          </div>
        );
      default:
        return null;
    }
  }

  render() {
    const { activeSection } = this.state;

    return (
      <div className="App">
        <div className="Menu">
          <button className={activeSection === 'informacion' ? 'active' : ''} onClick={() => this.handleMenuClick('informacion')}>Información</button>
          <button className={activeSection === 'maridaje' ? 'active' : ''} onClick={() => this.handleMenuClick('maridaje')}>Maridaje</button>
          <button className={activeSection === 'tienda' ? 'active' : ''} onClick={() => this.handleMenuClick('tienda')}>Tienda</button>
          <button className={activeSection === 'favoritos' ? 'active' : ''} onClick={() => this.handleMenuClick('favoritos')}>Favoritos</button>
          <button className={activeSection === 'platillos' ? 'active' : ''} onClick={() => this.handleMenuClick('platillos')}>Platillos</button>
          <button className={activeSection === 'mezcales' ? 'active' : ''} onClick={() => this.handleMenuClick('mezcales')}>Mezcales</button>
        </div>
        <div className="Section">
          {this.renderSection()}
        </div>
      </div>
    );
  }
}

export default App;
