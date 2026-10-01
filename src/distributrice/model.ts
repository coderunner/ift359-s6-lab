export interface EnAttente {
  readonly statut: "en_attente";
}

export interface CreditInsere {
  readonly statut: "credit_insere";
  readonly montant: number;
}

export interface HorsService {
  readonly statut: "hors_service";
  readonly raison: string;
}

export type EtatMachine = EnAttente | CreditInsere | HorsService;

export type ResultatInsertion =
  | { readonly succes: true; readonly soldeCourant: number }
  | { readonly succes: false; readonly raison: "Machine hors service" };

export type Boisson = "espresso" | "chocolat" | "the";

export type ResultatSelection =
  | { readonly succes: true; readonly boisson: Boisson; readonly monnaieRendue: number }
  | {
      readonly succes: false;
      readonly raison: "Fonds insuffisants" | "Machine hors service" | "Boisson non disponible";
    };

export type ResultatAnnulation = { readonly monnaieRendue: number };

// Ajouter les fonctions nécessaire pour la barrière d'abstraction
// ...

export function enAttente(): EnAttente {
  return { statut: "en_attente" };
}
