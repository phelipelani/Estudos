interface iTeam {
  id: number;
  top: string;
  jg: string;
  mid: string;
  adc: string;
  supp: string;
  titulos: number;
}
type tTeamRequest = Omit<iTeam, "id">;

export {iTeam, tTeamRequest}