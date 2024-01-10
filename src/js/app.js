//import bootstrap from '../../node_modules/bootstrap';
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
// Accept HMR as per: https://vitejs.dev/guide/api-hmr.html
if (import.meta.hot) {
    import.meta.hot.accept(() => {
      console.log("HMR")
    });
  }


  //Testing bootstrap
  document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new bootstrap.Popover(popover)
  })