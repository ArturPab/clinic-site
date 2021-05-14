<template>
    <footer class="container-fluid p-3">
        <div class="row justify-content-center align-items-center">
              <div class="col-sm-7">
                  <p class="text-center m-0" style="font-size: .9rem;">{{content}}</p>
              </div>
              <div class="col-sm-1 d-flex align-items-center justify-content-center mt-3 mt-sm-0">
                      <a class="btn btn-outline-light btn-floating" href="#!" role="button"
                      ><i class="fab fa-facebook-f"></i></a>
              </div>
          </div> 
    </footer>
</template>

<script>
export default {
    name: "Footer",
    props: {
        content: String
    }
}
</script>

<style scoped>
    footer{
        background: var(--blue-5);
        color: white;
    }
</style>