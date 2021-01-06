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
            user: 
            {
                id:1, 
                studentId:1701, 
                name:"周可寒", 
            }
        }
    },
    methods: {
        couponClick(index) {
             this.$store.commit('drewCoupon', [this.user, index]);
        } 
    }
}   
</script>

<style scoped>

</style>