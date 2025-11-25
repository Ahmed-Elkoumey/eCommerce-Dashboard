import { getInventory } from '@/features/inventory/inventoryService';
import InventoryList from '@/components/lists/InventoryList';

export default async function InventoryPage() {
    const inventory = await getInventory();

    return (
        <div>
            <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', fontWeight: 600 }}>Inventory Management</h2>
            <InventoryList inventory={inventory} />
        </div>
    );
}
