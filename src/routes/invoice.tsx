import { useParams, useNavigate } from "react-router";
import { getInvoice, deleteInvoice } from "../data";

interface invoice {
  name: string;
  number: number;
  amount: string;
  due: string;
}

export default function Invoice() {
  // let params = useParams();
  let navigate = useNavigate();
  let params = useParams<string>();
  let invoice = getInvoice(parseInt(params.invoiceId as string)) as invoice;

  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
       <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate("/invoices");
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
}
