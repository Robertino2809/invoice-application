import { InvoiceActions } from "./InvoiceActions";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";

export function InvoiceList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Invoice ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>#1</TableCell>
          <TableCell>Robertino</TableCell>
          <TableCell>€ 55.00</TableCell>
          <TableCell>Paid</TableCell>
          <TableCell>22.9.2024.</TableCell>
          <TableCell>
            <InvoiceActions />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  )
}