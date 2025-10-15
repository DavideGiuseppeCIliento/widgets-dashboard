// # IMPORT DEPENDENCES
import axios from "axios";
import { useState, useEffect } from "react";

export default function useRequest() {
  const [news, setNews] = useState([]);
  const [recipes, setRecipes] = useState([]);

  // FUNZIONE INDEX NEWS
  async function getPosts() {
    try {
      const res = await axios.get("https://dummyjson.com/posts");
      // console.log("DATI: ", res.data.posts);
      setNews(res.data.posts);
    } catch (e) {
      console.error("Errore", e);
    }
  }
  useEffect(() => {
    getPosts();
  }, []);

  // FUNZIONE INDEX RICETTE
  async function getRecipes() {
    try {
      const res = await axios.get("https://dummyjson.com/recipes");
      // console.log("RICETTE: ", res.data);
      setRecipes(res.data.recipes);
    } catch (e) {
      console.error("Errore", e);
    }
  }
  useEffect(() => {
    getRecipes();
  }, []);

  return { news, recipes };
}
