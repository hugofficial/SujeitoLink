import { useState } from "react";
import { FiLink } from "react-icons/fi";

import "./home.css";

import Menu from "../../components/Menu";
import LinkItem from "../../components/LinkItem";
import api from "../../services/api";
import { saveLinks } from "../../services/storeLinks";

export default function Home() {
  const [link, setLink] = useState("");
  const [data, setData] = useState({});
  const [showModal, setShowModal] = useState(false);

  async function handleShortLink() {
    try {
      const response = await api.post("/shorten", {
        long_url: link,
      });

      setData(response.data);
      setShowModal(true);

      saveLinks("@encurtaLink", response.data);

      setLink("");
    } catch {
      alert("Ops parece que algo deu errado!");
      setLink("");
    }
  }

  return (
    <div className="container-home">
      <Menu />
      <div className="logo">
        <img src="./image/logo.png" alt="Sujeito Link Logo" />

        <h1>SujeitoLink</h1>

        <span>Cole seu link para encurtar 👇</span>
      </div>

      <div className="area-input">
        <div>
          <FiLink size={24} color="#fff" />
          <input
            placeholder="Cole seu link aqui..."
            value={link}
            onChange={({ target }) => setLink(target.value)}
          />
        </div>
        <button onClick={handleShortLink}>Encurtar Link</button>
      </div>

      {showModal && (
        <LinkItem closeModal={() => setShowModal(false)} content={data} />
      )}
      <footer class="footer">Hugolino B. G. 2022. Todos os direitos reservados.</footer>
    </div>
  );
}
