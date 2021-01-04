<template>
    <div class="purchase-bottom">
        <div class="shopping-cart">
            <div class="shopping-cart-icon"></div>
            <div class="shopping-cart-text">购物车</div>
        </div>
        <div class="shopping-cart-slider">
            <div class="shopping-cart-slider-left">加入购物车</div>
            <div class="shopping-cart-slider-right" @click="toPurchase('/product/purchase')">领券购买</div>
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
        toPurchase(path){
            this.$router.push(path)
        }
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
    align-items: center;
    bottom: 0;
    z-index: 999;
    .shopping-cart{
        position: absolute;
        left: .2rem;
        .shopping-cart-icon{
            width: .34rem;
            height: .34rem;
            background-image: url(../../assets/images/shioppingcart.png);
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

    .shopping-cart-slider{
        display: flex;
        flex-direction: row;
        position: absolute;
        right: .2rem;
        .shopping-cart-slider-left{
            width: 1.2rem;
            height: .44rem;
            background: #FFAE19;
            border-radius: 1rem 0 0 1rem;
            line-height: .44rem;
            text-align: center;
            font-size: .16rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #FFFFFF;
            user-select: none;
        }
        .shopping-cart-slider-right{
            width: 1.2rem;
            height: .44rem;
            background: #FF6219;;
            border-radius: 0 1rem 1rem 0;
            line-height: .44rem;
            text-align: center;
            font-size: 16px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #FFFFFF;
            user-select: none;
        }
    }



}
</style>