import { useFormStatus } from "react-dom"; // add new hook to react 19

export default function Submit() {
  const { pending } = useFormStatus();

  return (
    <p className="actions">
      <button type="submit" disabled={pending}>
        {pending ? "Submitting...." : "Submit"}
      </button>
    </p>
  );
}
