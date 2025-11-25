import api from '@/lib/api';

export interface InventoryItem {
    id: string;
    name: string;
    sku: string;
    stock: number;
    reorderLevel: number;
}

export const getInventory = async (): Promise<InventoryItem[]> => {
    return api.get('/inventory');
};
