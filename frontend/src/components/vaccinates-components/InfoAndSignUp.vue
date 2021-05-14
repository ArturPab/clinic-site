<template>
    <div class="row justify-content-center mt-4">
            <div class="col-12 d-flex justify-content-center text-info fs-2">
                <div class="me-2">
                    <i class="fas fa-phone-alt" style="color: #008000;"></i>
                </div>
                <span style="color: #008000;">Informacje i zapisy <a class="text-decoration-none text-info text-reset" href="tel:320000000" style="color: #008000;">{{phone}}</a></span>
            </div>
        </div> 
</template>

<script>
export default {
    name: "InfoAndSignUp",
    props: {
        phone: String
    }
}
</script>