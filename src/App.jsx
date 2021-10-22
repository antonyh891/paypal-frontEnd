import logo from './images/paypal.png';
import './App.css';
import PaypalCheckoutButton from './components/PaypalCheckoutButton';

function App() {
  const order = {
    customer: '123456',
    total: '100.00',
    items: [
      {
        name : 'Pedido Food Monks',
        price : '100.00',
        quantity: 1,
        currency: 'USD'
      }
    ]
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p></p>
        <PaypalCheckoutButton order={order} />
      </header>
    </div>
  );
}

export default App;
