import type { Route } from "./+types/post"

export async function loader({params} : Route.LoaderArgs) {
  const  postId = params.postId;
  return {postId}
}

export async function action() {

}

const post = ({loaderData}: Route.ComponentProps) => {
  return (
    <div>postId : {loaderData.postId}</div>
  )
}

export default post