<template>
    <div>
        <coupon-nav></coupon-nav>
        <coupon-info @itemClick="couponClick"></coupon-info>
    </div>
</template>

<script>
import CouponNav from '@/components/component_coupon/coupon_nav.vue'
import CouponInfo from '@/components/component_coupon/coupon_info.vue';
export default {
    components: {
        'coupon-nav': CouponNav,
        'coupon-info': CouponInfo
    },
    data() {
        return {

        }
    },
    methods: {
        couponClick(index) {
            console.log(index)
        }
    }
}   
</script>

<style scoped>

</style>