<template>
    <div class="purchase-popup">
        <purchase-nav></purchase-nav>
        <purchase-info></purchase-info>
        <purchase-bottom></purchase-bottom>
    </div>
</template>

<script>
import PurchaseNav from '@/components/component_purchase/purchase_nav.vue'
import PurchaseBottom from '@/components/component_purchase/purchase_bottom.vue'
import PurchaseInfo from '@/components/component_purchase/purchase_info.vue'
export default {
    components: {
        'purchase-nav': PurchaseNav,
        'purchase-bottom': PurchaseBottom,
        'purchase-info': PurchaseInfo
    }
}
</script>

<style lang="less" scoped>
.purchase-popup{
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background: #FFFFFF;
    z-index: 999;
}

</style>