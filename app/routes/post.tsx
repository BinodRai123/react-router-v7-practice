import { data, Form, redirect, useFetcher, useNavigate } from "react-router";
import type { Route } from "../+types/root";

export async function clientLoader({ params }: Route.ClientLoaderArgs) {
  const postId = params.postId;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${postId}`
  );
  return await res.json();
}

export async function clientAction({ params }: Route.ClientActionArgs) {
  try {
    await fetch(`https://jsonplaceholder.typicode.com/todos/${params.postId}`, {
      method: "DELETE",
    });
    return { isDeleted: true };
  } catch (err) {
    return { isDeleted: false };
  }
}

export default function Post({ loaderData }: Route.ComponentProps) {
  const fetcher = useFetcher();
  const isDeleted = fetcher.data?.isDeleted;
  const navigate = useNavigate();

  return (
    <>
      {!isDeleted && (
        <>
          <h1>title :{loaderData.title}</h1>
          <h1>completed : {loaderData.completed ? "true" : "false"}</h1>
        </>
      )}

      <button
        className="p-2 rounded-[5px] active:scale-[0.95] duration-75 bg-gray-500"
        onClick={() => navigate("/about")}
      >
        Redirect
      </button>
      <fetcher.Form method="DELETE">
        <button type="submit">delete</button>
      </fetcher.Form>
    </>
  );
}
