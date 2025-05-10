import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("post/:postId", "routes/post.tsx"),

  //Nested Routes
  layout( "routes/dashboard.tsx", [
    route("personalInfo", "routes/personal-info.tsx"),
    route("pricing", "routes/pricing.tsx")
  ])
] satisfies RouteConfig;
