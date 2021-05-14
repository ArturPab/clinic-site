<template>
    <div class="card mb-5 shadow" style="max-width: 38rem;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img :src="require(`@/static/${certificate.imageUrl}`)" :alt="certificate.name" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div class="col-md-8">
                    <div class="card-body ps-4">
                        <h6 class="card-title text-uppercase">{{certificate.name}}</h6>
                        <p class="card-text fs-6">{{certificate.content}}</p>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    name: "Certificate",
    props: {
        certificate: Object
    }
}
</script>