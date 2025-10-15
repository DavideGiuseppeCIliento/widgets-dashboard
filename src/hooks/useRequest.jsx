// # IMPORT DEPENDENCES
import axios from "axios";
import { useState, useEffect } from "react";

export default function useRequest() {
  const [postMessage, setposts] = useState([]);

  // FUNZIONE INDEX
  async function getPosts() {
    try {
      const res = await axios.get("https://dummyjson.com/posts");
      console.log("DATI: ", res.data);
    } catch (e) {
      console.error("Errore", e);
    }
  }

  return { getPosts };
}
