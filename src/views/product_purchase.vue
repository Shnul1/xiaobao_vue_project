<template>
    <div class="purchase_popup">
        <product-purchase></product-purchase>
    </div>
</template>

<script>
import ProductPurchase from '@/components/component_purchase/purchase_nav.vue'
export default {
    components: {
        'product-purchase': ProductPurchase,
    }
}
</script>

<style lang="less" scoped>
.purchase_popup{
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background: black;
    z-index: 999;
}
</style>