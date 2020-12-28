<template>
    <div>
        <coupon-nav></coupon-nav>
        <coupon-info></coupon-info>
    </div>
</template>

<script>
import CouponNav from '@/components/coupon_nav.vue'
import CouponInfo from '@/components/coupon_info.vue';
import Coupon_nav from '../components/coupon_nav.vue';
import Coupon_info from '../components/coupon_info.vue';
export default {
    components: {
        'coupon-nav': CouponNav,
        'coupon-info': CouponInfo
    }
}
</script>

<style scoped>

</style>