import { Request, Response } from "express";
import { iTeam, tTeamRequest } from "./interfaces";
import db from "./db";

const createTeam = (req: Request, res: Response): Response | void => {
    const teamData:tTeamRequest = req.body
    
};

const renderAllteam = (req: Request, res: Response): Response => {
  const dataBase = db;
  return res.json(dataBase);
};

export { renderAllteam };
