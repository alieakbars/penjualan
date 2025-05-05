import knex from "../config/db.config";

const All = async () => {

    let result;
    result = await knex.table("produk");
        
        return result;
};

const insertData = async (data:any) => {
    let result;
    result = await knex.table("produk").insert(data);
        
        return result;
};

const updateData = async (data:any,id:any) => {

    let result = await knex
    .table("produk")
    .where("id", id)
    .update(data);
        
    return result;
};

const deleteData = async (id:any) => {

    let result = await knex.table("produk").where("id", id).del();
        
        return result;
};

export { 
    All, 
    insertData, 
    updateData, 
    deleteData
};
