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
        { id: 1, nombre: 'Mezcal de Jamaica', caracteristicas: 'Es agridulce y ligeramente ácido, con notas frutales y florales.' },
        { id: 2, nombre: 'Mezcal de Nanche', caracteristicas: 'es agridulce y refrescante, con matices que recuerdan a una mezcla entre limón, piña y mango verde.' },
        { id: 3, nombre: 'Mezcal de Cafe', caracteristicas: ''},
        { id: 4, nombre: 'Mezcal de Chilate', caracteristicas: ''},
        // Agrega más mezcales según sea necesario
      ],
      platillos: [
        { id: 1, nombre: 'Ceviche', caracteristicas: 'Se compone principalmente de trozos de pescado o mariscos crudos que se marinan en jugo de limón o lima' },
        { id: 2, nombre: 'Filete de Pescado', caracteristicas: 'es una porción de carne de pescado deshuesada y sin piel. Tiene una textura tierna y su sabor varía según la especie de pescado.' },
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
          { id: 1, nombre: 'mezcal de Nanche', imagen: 'data:image/jpeg;base64,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' },
          { id: 2, nombre: 'mezcal de Jamaica', imagen: '' },
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
