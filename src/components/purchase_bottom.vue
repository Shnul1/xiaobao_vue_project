<template>
    <div class="purchase-bottom">
        <div class="shopping-cart">
            <div class="shopping-cart-icon"></div>
            <div class="shopping-cart-text">购物车</div>
        </div>
        <div class="shopping-cart-slider">
            <div class="shopping-cart-slider-left">加入购物车</div>
            <div class="shopping-cart-slider-right">领券购买</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
.purchase-bottom{
    display: flex;
    width: 100%;
    height: .68rem;
    background: #FFFFFF;
    box-shadow: 0rem -.1rem .3rem 0rem rgba(0, 0, 0, 0.03);
    position: fixed;
    justify-content: space-around;
    bottom: 0;
    .shopping-cart{
        .shopping-cart-icon{
            width: .34rem;
            height: .34rem;
        }

        .shopping-cart-text{
            height: .14rem;
            font-size: 12px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #969799;
            line-height: .14rem;
        }
    }



}
</style>