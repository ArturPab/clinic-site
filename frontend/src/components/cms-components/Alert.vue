<template>
    <div class="alert">
        <div class="container justify-content-center align-items-center d-flex">
            <div class="row">
                <div class="col-12 justify-content-center align-items-center d-flex">
                    <span class="fs-5">
                        Czy napewno chcesz wykonać akcję?
                    </span>
                </div>
            </div>
        </div>
        <div class="container-fluid">
            <div class="row h-100">
                <div class="col-12 d-flex justify-content-end align-items-end
                ">
                    <CMSButton @decline="$emit('decline')" buttonClass="btn btn-danger" :data-id="id" buttonName="Anuluj" />
                    <CMSButton @confirm="$emit('confirm')" buttonClass="btn btn-success" :data-id="id" buttonName="Potwierdź" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Alert',
}
</script>

<style scoped>
    .alert {
        width: 30rem;
        height: 20rem;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-right: -50%;
        transform: translate(-50%, -50%);
        background-color: #ffffffee;
        box-shadow: 0 .05rem .1rem .05rem;
    }

    .container {
        height: 60%;
    }

    span {
        color: black

    }

    .container-fluid {
        height: 40%;
    }

</style>