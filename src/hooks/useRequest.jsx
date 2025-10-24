// # IMPORT DEPENDENCES
import axios from "axios";
import { useState, useEffect, useCallback } from "react";

export default function useRequest() {
  const [news, setNews] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [quotes, setQuotes] = useState([]);
  const [recipe, setRecipe] = useState(null);

  const [loading, setLoading] = useState(true);

  // --- FUNZIONE INDEX NEWS
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

  // --- FUNZIONE INDEX RICETTE
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

  // --- FUNZIONE INDEX QUOTES

  async function getQuotes() {
    try {
      const res = await axios.get("https://dummyjson.com/quotes");
      // console.log("RICETTE: ", res.data);
      setQuotes(res.data.quotes);
    } catch (e) {
      console.error("Errore", e);
    }
  }
  useEffect(() => {
    getQuotes();
  }, []);

  // --- FUNZIONE SHOW RECIPE
  const showRecipe = useCallback(async (id) => {
    if (!id) return;

    setLoading(true);
    try {
      const res = await axios.get(`https://dummyjson.com/recipes/${id}`);
      console.log("RISPOSTA: ", res);
      setRecipe(res.data);
    } catch (e) {
      console.error("Errore showRecipe()", e);
      setRecipe(null);
    } finally {
      setLoading(false);
    }
  }, []);

  return { news, recipes, quotes, recipe, loading, showRecipe };
}
