import db from '@/mocks/db.json';

export interface InventoryItem {
    id: string;
    name: string;
    sku: string;
    stock: number;
    reorderLevel: number;
}

export const getInventory = async (): Promise<InventoryItem[]> => {
    return Promise.resolve(db.inventory);
};
