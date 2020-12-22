<template>
    <div class="purchase-bottom">
        <div class="shopping-cart">
            <div class="shopping-cart-icon"></div>
            <div class="shopping-cart-text">购物车</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {

    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
.purchase-bottom{
    display: flex;
    width: 375px;
    height: 68px;
    background: #FFFFFF;
    box-shadow: 0px -10px 30px 0px rgba(0, 0, 0, 0.03);
    position: fixed;
    .shopping-cart{
        .shopping-cart-icon{
            width: 34px;
            height: 34px;
        }

        .shopping-cart-text{
            height: 14px;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #969799;
            line-height: 14px;
        }
    }



}
</style>