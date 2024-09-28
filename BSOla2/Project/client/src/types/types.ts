export type Job = { 
    id?: string ;
    chemicalsAmount: number;
    incoming: boolean;
    warehouseNumber: number;
};

export type Warehouse = { 
    id?: string ;
    currentStorage: number;
    maximumStorage: number;
    warehouseNumber: number;
  
};


/* eslint-disable no-unused-vars */
export enum TASK_CATEGORIES {
  NONE = 0,
  WORK = 1,
  CHORES = 2,
  LEISURE = 3
}