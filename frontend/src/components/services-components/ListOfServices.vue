<template>
    <div class="col-xl-3 col-lg-4 mb-5">
        <div class="list-group">
            <ServiceItem v-for="service in services" :key="service.id" :service="service" :serviceName="serviceName" />
        </div>
    </div>
</template>

<script>
import ServiceItem from "./ServiceItem"

export default {
    name: "ListOfServices",
    props: {
        services: Array,
        serviceName: String
    },
    components: {
        ServiceItem
    }
}
</script>