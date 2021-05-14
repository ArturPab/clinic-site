<template>
    <router-link :to="{ name: 'Service', params: {name:service.name, serviceName: service.serviceName, content: service.content }  }" class="list-group-item list-group-item-action border-0 p-0 my-2" style="height: 4rem;">
        <div class="row p-0 m-0 h-100 w-100 changeBg">
            <div class="col-3 justify-content-center align-items-center d-flex">
                <div class="icon-wrapper rounded-circle pb-1 d-flex justify-content-center align-items-center" style="
                                width: 2.5rem; height: 2.5rem;">
                    <i class="fas fa-clinic-medical" style="font-size: 1.1rem"></i>
                </div>
            </div>
            <div class="col-9 d-flex align-items-center p-0">
                <p class="fs-5 m-0">{{service.serviceName}}</p>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    name: "ServiceItem",
    props: {
        service: Object,
    },

}
</script>

<style scoped>
    .list-group a {
        margin: 1rem 0;
    }

    .list-group a:hover, 
    .icon-wrapper, 
    .disabled .changeBg {
        background-color: var(--blue-5);
    }

    .changeBg {
        border: 1px solid var(--blue-2);
    }


    .list-group-item:hover .icon-wrapper, 
    .disabled .icon-wrapper {
        background-color: white;
    }

    .list-group-item i{
        color: white;
    }

    .list-group-item:hover i, 
    .list-group-item p, 
    .disabled i {
        color: var(--blue-5);
    }

    .list-group-item:hover p,
    .disabled p {
        color: white;
    }

</style>