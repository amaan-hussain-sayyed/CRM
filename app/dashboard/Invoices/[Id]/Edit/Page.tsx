import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById ,fetchCustomers } from '@/app/lib/data';
 
export default async function Page({params}:{Id:string}) {
 const id = params.Id
 const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);
  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/dashboard/Invoices' },
          {
            label: 'Edit Invoice',
            href: `/dashboard/Invoices/${id}/Edit`,
            active: true,
          },
        ]}
      />
      <Form invoice={invoice} customers={customers} />
    </main>
  );
}
