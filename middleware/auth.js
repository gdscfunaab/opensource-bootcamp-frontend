//This is the Middleware (Navigation Guard) protecting the dashboard Pages

export default ({ store, route, redirect, $toast, $cookies }) => {
  // Regex to check if route is a auth route
  const isAuthRoute = new RegExp(["login", "register"].join("|")).test(
    route.path
  );



  console.log($toast?.info);

  // Check if user isAuthenticated and Login/Sign Up route
  if (isAuthRoute && store.state.user) {
    return redirect("/dashboard");
  }

  // Check if user is isAuthenticated
  if (!isAuthRoute && !store.state.user) {
    $toast?.info("Kindly Login!");
    return redirect("/login");
  }
  // // Check if user is SuperAdmin
  // if(store.getters.userRole === "staff"){
  //   return redirect ('/revenue')
  // }
};