import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/expenses")({
  component: Expenses,
});

function Expenses() {
  return <div>Show all expenses</div>;
}
