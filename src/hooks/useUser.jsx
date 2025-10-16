// # IMPORT DEPENDENCES
import axios from "axios";
import { useState } from "react";

export default function useUser() {
  const [userNews, setUserNews] = useState({});

  // --- FUNZIONE RECUPERO USER
  async function RequestUserNews(idUser) {
    if (!idUser) return;
    try {
      const res = await axios.get(`https://dummyjson.com/users/${idUser}`);
      console.log("USER in HOOK: ", res.data);
      setUserNews(res.data);
    } catch (e) {
      console.error("Errore", e);
    }
  }

  return { userNews, RequestUserNews };
}
