import { Link } from "react-router-dom";
import "./error.css";

export default function Error() {
  return (
       <>
    <div className="container-error">
      <img src="../image/notfound.png" alt="Pagina nao encontrada" />
      <h1>Pagina não encontrada!</h1>
      <Link to="/">Voltar para Home</Link>
    
    </div>
 <footer class="footer">Hugolino B. G. 2022. Todos os direitos reservados.</footer>
    </>
  );
}
