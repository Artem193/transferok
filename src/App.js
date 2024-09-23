import './App.css';
import { Home } from './components/blocks/home/home';
import { ContactsButtons } from './components/contactsButtons/ContactsButtons';
import { Container } from './components/blocks/container/Container';
import { Footer } from './components/blocks/footer/Footer';

function App() {
  return (
    <div className="App">
      <main className='main'>
        <Home />
        <ContactsButtons />
        <Container />
        <Footer />
      </main>
    </div>
  );
}

export default App;
