import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// etudiant contient la liste des etudiants recuperée des 
// mesEtudiants permet de mettre a jour lesEtudiants
export default function App() {
  const [lesEtudiants, mesEtudiants] = useState([]);

  // Charger la liste des étudiants depuis l'API
  useEffect(() => {
    fetch("http://localhost:8888/SGA/api.php")
      .then((res) => res.json()) // Correction ici
      .then((data) => mesEtudiants(data)) // Mettre à jour l'état avec les données
      .catch((error) => console.error("Erreur lors de la récupération des étudiants :", error));
  }, []); // Le tableau vide signifie que l'effet ne s'exécute qu'au montage du composant

  return (
    <div>
      <h1>Liste des Étudiants</h1>
      <ul>
        {lesEtudiants.map((etudiant, index) => (
          <li key={index}>{etudiant.nom} - Absences : {etudiant.nbrAbs}</li>
        ))}
      </ul>
    </div>
  );
}
