import * as repository from "../repository/report.repository";
import * as build from "../helper/response.helper";
import { Request } from "express";

const All = async () => {
  
  let response;
  try {
    let result = await repository.All();

    response = build.response("00", "success", result);
  } catch (error) {
    response = build.response("500", `${(error as Error).message}`, []);
  }

  return response;
};

const insertData = async (req:any) => {
  let {name, price} = req.body;
  let data = {'name': name, 'price': price};
  let response;
  try {
    let result = await repository.insertData(data);

    response = build.response("00", "success", result);
  } catch (error) {
    response = build.response("500", `${(error as Error).message}`, []);
  }

  return response;
};

const updateData = async (req:any) => {
  let {name, price} = req.body;
  let data = {'name': name, 'price': price};
  let response;
  try {
    let result = await repository.updateData(data, req.params.id);

    response = build.response("00", "success", result);
  } catch (error) {
    response = build.response("500", `${(error as Error).message}`, []);
  }

  return response;
};

const deleteData = async (req:any) => {
  
  let response;
  try {
    let result = await repository.deleteData(req.params.id);

    response = build.response("00", "success", result);
  } catch (error) {
    response = build.response("500", `${(error as Error).message}`, []);
  }

  return response;
};

export {
   All, 
   insertData, 
   updateData,
   deleteData
  };