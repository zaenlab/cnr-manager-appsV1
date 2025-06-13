// ... (previous imports remain the same)

export const Containers = () => {
  // ... (previous state and functions remain the same)

  return (
    <div className="p-4 space-y-4">
      {/* ... (previous header and filters remain the same) */}

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow className="bg-gray-50">
              <TableHead>Container #</TableHead>
              <TableHead>Size/Type</TableHead>
              <TableHead>Owner</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Notes</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredContainers.length > 0 ? (
              filteredContainers.map((container) => (
                <TableRow key={container.id} className="bg-gray-50 hover:bg-gray-100">
                  <TableCell>{container.number}</TableCell>
                  <TableCell>{container.size}/{container.type}</TableCell>
                  <TableCell>{container.owner}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      container.status === "AV Passed" ? "bg-green-100 text-green-800" :
                      container.status === "Under Repair" ? "bg-yellow-100 text-yellow-800" :
                      container.status === "Ready for AV" ? "bg-blue-100 text-blue-800" :
                      "bg-red-100 text-red-800"
                    }`}>
                      {container.status}
                    </span>
                  </TableCell>
                  <TableCell className="max-w-xs truncate" title={container.notes}>
                    {container.notes}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleEdit(container.id)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                  </TableCell>
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