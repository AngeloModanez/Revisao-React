import { useState } from 'react'
import Container from './components/Container';
import './container.css'

function App() {
  const [entries, setEntries] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newEntry = {
      name: formData.get("name"),
      email: formData.get("email"),
      telefone: formData.get("telefone"),
      senha: formData.get("senha"),
    }

    const found = entries.find(entry => entry.email === newEntry.email);
    if (found) {
      alert("Email já cadastrado " + found.email);
      return;
    }

    setEntries((prev) => [...prev, newEntry]);
    e.target.reset();
  }


  return (
    <>
      <Container className="container">
        <Container className="sub">
          <div className="header">
            <h1>Cadastro de Aluno</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nome</label>
            <input type="text" name='name' id='name' required />

            <label htmlFor="email">Email</label>
            <input type="text" name='email' id='email' required />

            <label htmlFor="telefone">Telefone</label>
            <input type="text" name='telefone' id='telefone' required />

            <label htmlFor="senha">Senha</label>
            <input type="text" name='senha' id='senha' required />

            <button type='submit' className='submit-btn'>Submit</button>
          </form>
        </Container>

        <Container className='sub'>
          {entries.length > 0 && (
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Telefone</th>
                  <th>Senha</th>
                </tr>
              </thead>
              <tbody>
                {entries.map((entry, index) => (
                  <tr key={index}>
                    <td>{entry.name}</td>
                    <td>{entry.email}</td>
                    <td>{entry.telefone}</td>
                    <td>{entry.senha}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </Container>
      </Container>
    </>
  )
}

export default App
