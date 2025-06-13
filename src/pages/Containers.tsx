// ... (previous imports remain the same)

export const Containers = () => {
  // ... (previous state and functions remain the same)

  return (
    <div className="p-4 space-y-4">
      {/* ... (previous header and filters remain the same) */}

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="bg-green-50">
              <TableHead className="text-green-800">Container #</TableHead>
              <TableHead className="text-green-800">Size/Type</TableHead>
              <TableHead className="text-green-800">Owner</TableHead>
              <TableHead className="text-green-800">Status</TableHead>
              <TableHead className="text-green-800">Notes</TableHead>
              <TableHead className="text-green-800">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredContainers.length > 0 ? (
              filteredContainers.map((container) => (
                <TableRow key={container.id} className="bg-gray-50 hover:bg-gray-100">
                  {/* ... (table cells remain the same) */}
                </TableRow>
              ))
            ) : (
              <TableRow className="bg-gray-50">
                <TableCell colSpan={6} className="text-center py-8">
                  No containers found matching your criteria
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};