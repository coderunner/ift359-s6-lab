import { Boisson, enAttente, ResultatAnnulation, ResultatInsertion, ResultatSelection } from "./model.js";

export interface Distributrice {
  insererMontant(m: number): ResultatInsertion;
  selectionnerBoisson(b: Boisson): ResultatSelection;
  annuler(): ResultatAnnulation;
}

export function creerDistributrice(catalogue: Record<Boisson, number>, etatInitial = enAttente()): Distributrice {
  // À faire
  return {
    insererMontant: (montantInsere: number) => {
      // À faire
      return null as any as ResultatInsertion;
    },
    selectionnerBoisson: (b: Boisson): ResultatSelection => {
      // À faire
      return null as any as ResultatSelection;
    },
    annuler: () => {
      // À faire
      return null as any as ResultatAnnulation;
    },
  };
}
