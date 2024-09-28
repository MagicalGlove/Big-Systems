import {AppDataSource} from '../ormconfig';
import {Warehouses} from '../entities/Warehouses';

const warehouseRepository = AppDataSource.getMongoRepository(Warehouses);

async function getAllWarehouses() {
  const warehouses = await warehouseRepository.find();
  console.log("Found warehouses:", warehouses); // eslint-disable-line no-console
  return warehouses;
}

export {getAllWarehouses, warehouseRepository};
