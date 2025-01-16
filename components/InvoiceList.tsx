import prisma from "@/lib/db";
import { InvoiceActions } from "./InvoiceActions";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { requireUser } from "@/app/utils/hooks";
import { formatCurrency } from "@/app/utils/formatCurrency";

async function getData(userId: string) {
  const data = await prisma.invoice.findMany({
    where: {
      userId: userId,
    },
    select: {
      id: true,
      clientName: true,
      total: true,
      createdAt: true,
      status: true,
      invoiceNumber: true,
    },
    orderBy: {
      createdAt: 'desc'
    },
  });

  return data;
}

export async function InvoiceList() {

  const session = await requireUser();
  const data = await getData(session.user?.id as string);

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
        {data.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell>#{invoice.invoiceNumber}</TableCell>
            <TableCell>{invoice.clientName}</TableCell>
            <TableCell>
              {formatCurrency({
                amount: invoice.total,
                currency: invoice.currency || "EUR" || "USD",
              })}
            </TableCell>
            <TableCell></TableCell>
            <TableCell>{new Date(invoice.createdAt).toLocaleString()}</TableCell>
            <TableCell>
              <InvoiceActions />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}