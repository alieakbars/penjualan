import load from "./env.config";
import knex from 'knex';
import knexconfig from "../knexfile";

const knexx = knex(knexconfig.development);

export default knexx;