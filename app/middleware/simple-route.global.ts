export default defineNuxtRouteMiddleware((to, from) => {
  console.log(to, from);
  console.log('Simple route middleware');
});