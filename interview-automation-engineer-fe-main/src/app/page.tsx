"use client";

import { useState } from "react";

export default function Home() {
  const [hash, setHash] = useState("");

  const [data, setData] = useState<{
    id: number;
    hash: string;
    type: string;
    amount: number;
    token: string;
    from_address: string;
    to_address: string;
    created_at: number;
    updated_at: number;
  }>();

  const submitForm = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API}/v1/transaction`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ hash }),
      });

      setData(await response.json());
    } catch (error) {
      setData(undefined);
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-slate-900 min-w-screen">
      <div className="flex flex-col w-3/4 gap-12 p-12 rounded-md bg-slate-800 text-slate-200 2xl:w-1/2 ">
        <h1 className="text-2xl font-semibold">Interview Automation Engineer</h1>

        <form onSubmit={submitForm}>
          <div className="flex flex-col gap-2 mb-6">
            <label className="text-sm font-semibold">Transaction Hash</label>

            <input
              type="text"
              data-testid="hash-input-field"
              className="p-4 rounded-md bg-slate-400 focus:outline-none text-slate-900 focus:ring-4 focus:ring-slate-900"
              onChange={(e) => setHash(e.target.value)}
            />
          </div>

          <button type="submit" className="px-12 py-4 rounded-md bg-slate-700 hover:bg-slate-900">
            Submit
          </button>
        </form>

        {data && (
          <div>
            <p>ID - {data.id}</p>
            <p>Hash - {data.hash}</p>
            <p>Type - {data.type}</p>
            <p>Amount - {data.amount}</p>
            <p>From - {data.from_address}</p>
            <p>Created - {data.created_at}</p>
            <p>Updated - {data.updated_at}</p>
          </div>
        )}
      </div>
    </main>
  );
}
