import { Boisson, EtatMachine, ResultatAnnulation, ResultatInsertion, ResultatSelection } from "./model.js";

export function insererMontant(montantInsere: number): (etat: EtatMachine) => [EtatMachine, ResultatInsertion] {
  // À faire
  return null as any as (etat: EtatMachine) => [EtatMachine, ResultatInsertion];
}

export function creerSelectionneur(
  catalogue: Record<Boisson, number>,
): (boisson: Boisson) => (etat: EtatMachine) => [EtatMachine, ResultatSelection] {
  // À faire
  return null as any as (boisson: Boisson) => (etat: EtatMachine) => [EtatMachine, ResultatSelection];
}

export function annuler(): (etat: EtatMachine) => [EtatMachine, ResultatAnnulation] {
  // À faire
  return null as any as (etat: EtatMachine) => [EtatMachine, ResultatAnnulation];
}
