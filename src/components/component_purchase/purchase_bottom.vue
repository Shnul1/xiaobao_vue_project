<template>
    <div class="purchase-bottom-container">
        <div class="purchase-bottom-left">
            <div class="normal-text">共</div>
            <div class="product-count">{{number}}</div>
            <div class="normal-text">项</div>
        </div>
        <div class="purchase-bottom-right">
            <div class="total-price">
                <div class="price-text">合计</div>
                <div class="price-icon">￥</div>
                <div class="price">20</div>
            </div>
            <div class="purchase-btn">立即支付</div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            number: 1,

        }
    }
}
</script>

<style lang="less" scoped>
.purchase-bottom-container{
    width: 91.4%;
    height: .68rem;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-between;
    padding: 0 4.3%;
    align-items: center;
}

.purchase-bottom-left{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    min-width: 13%;
    height: .2rem;
    font-size: .14rem;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #4A4A4A;
    line-height: .2rem;

    .product-count{
        color: #FF340F;
    }
}

.purchase-bottom-right{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    min-width: 58%;
    height: .44rem;
    align-items: center;
    
    .total-price{
        display: flex;
        flex-direction: row;
        align-items: center;
            .price-text{
                width: .28rem;
                height: .2rem;
                font-size: .14rem;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #4A4A4A;
                line-height: .2rem;
            }
            .price-icon{
                width: .14rem;
                height: .24rem;
                font-size: .12rem;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 500;
                color: #FF340F;
                line-height: .24rem;
            }
            .price{
                min-width: .42rem;
                height: .24rem;
                font-size: .16rem;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #FF340F;
                line-height: .24rem;
            }
    }

    .purchase-btn{
        width: 1.2rem;
        height: .44rem;
        background: linear-gradient(225deg, #FFB419 0%, #FF5C19 100%);
        border-radius: .22rem;
        text-align: center;
        line-height: .44rem;
        font-size: .16rem;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #FFFFFF;
    }
}
</style>