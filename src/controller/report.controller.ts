import { Request, Response } from "express";
import * as service from "../service/report.service";

const getAll = async (req: Request, res: Response) => {
  let result = await service.All();
  let status: number;

  if (result.code == "00") {
    status = 200;
  } else if (result.code == "500") {
    status = 500;
  } else {
    status = 400;
  }

  return res.status(status).json(result);
};

const insertData = async (req: Request, res: Response) => {
  let result = await service.insertData(req);
  let status: number;

  if (result.code == "00") {
    status = 200;
  } else if (result.code == "500") {
    status = 500;
  } else {
    status = 400;
  }

  return res.status(status).json(result);
};

const updateData = async (req: Request, res: Response) => {
  let result = await service.updateData(req);
  let status: number;

  if (result.code == "00") {
    status = 200;
  } else if (result.code == "500") {
    status = 500;
  } else {
    status = 400;
  }

  return res.status(status).json(result);
};

const deleteData = async (req: Request, res: Response) => {
  let result = await service.deleteData(req);
  let status: number;

  if (result.code == "00") {
    status = 200;
  } else if (result.code == "500") {
    status = 500;
  } else {
    status = 400;
  }

  return res.status(status).json(result);
};


export { 
  getAll,
  insertData,
  updateData,
  deleteData
 };