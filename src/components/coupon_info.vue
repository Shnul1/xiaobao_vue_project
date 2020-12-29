<template>
    <div class="container">
        <div style="height:.44rem"></div>
        <div class="coupon-container" 
        v-for="(item, index) in $store.state.coupons" 
        :key="index">
            <div class="coupon">
                <div class="coupon-left">
                    <div class="coupon-value">
                        <div class="coupon-value-icon">￥</div>
                        <div class="coupon-value-text">{{$store.state.coupons[index].value/100}}</div>
                    </div>
                    <div class="coupon-condition">{{$store.state.coupons[index].condition}}</div>
                </div>
                <div class="coupon-center">
                    <div class="coupon-name">{{$store.state.coupons[index].name}}</div>
                    <div class="coupon-time">{{$store.state.coupons[index].startAt}}</div>
                </div>
                <div @click="drewCoupon(index)" 
                :class="[isActive ? 'coupon-right-t':'coupon-right-f']">
                </div>
            </div>
            <div class="coupon-discription">
                <div class="coupon-discription-text">{{$store.state.coupons[index].studentCondition}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default { 
    data() {
        return {
            isActive: [true, true, true]
        }
    },
    methods: {
        drewCoupon(index){
            this.$emit('itemClick', index);
            this.isActive[index] = !this.isActive[index];
        }
    },
    watch: {

    },
}
</script>

<style lang="less" scoped>
.container{
    width: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
    align-items: center;
}

.coupon-container{
    width: 3.35rem;
    height: .99rem;
    margin: .1rem 0 0 0;
    background: #FFF4EF;
    box-shadow: 0 0 .01rem .01rem #E6E6E6;
    border-radius: .1rem .1rem .1rem .1rem;
}

.coupon{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 90%;
    height: .7rem;
    margin: 0 .18rem;
    .coupon-left{
        height: .4rem;
        width: .7rem;
        display: flex;
        flex-direction: column;
        position: relative;
        .coupon-value{
            width: 100%;
            height: .24rem;
            display: flex;
            flex-direction: row;
            .coupon-value-icon{
                width: .1rem;
                height: .24rem;
                font-size: .1rem;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #FF340F;
                line-height: .24rem;
                text-align: center;
            }
            .coupon-value-text{
                width: .6rem;
                height: .24rem;
                font-size: .26rem;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #FF340F;
                line-height: .24rem;
            }
        }
        .coupon-condition{
            width: 100%;
            height: .14rem;
            position: absolute;
            bottom: 0;
            font-size: .1rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: rgba(0, 0, 0, 0.65);
            line-height: .14rem;
        }
    }

    .coupon-center{
        height: .4rem;
        width: 1.4rem;
        display: flex;
        flex-direction: column;
        position: relative;
        .coupon-name{
            width: 100%;
            height: .2rem;
            font-size: .14rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #444444;
            line-height: .2rem;
        }
        .coupon-time{
            width: 100%;
            height: .14rem;
            position: absolute;
            bottom: 0;
            font-size: .1rem;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #FF4B00;
            line-height: .14rem;      
        }
    }

    .coupon-right-t{
        display: flex;
        width: .56rem;
        height: .26rem;
        background: linear-gradient(320deg, #FF4B00 0%, #FFDC23 100%);
        border-radius: .13rem;
        justify-content: center;
        align-items: center;
        line-height: .26rem;
        text-align: center;
        font-size: .12rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FFFFFF;
        border: 1px solid #FFB7B7;
    }
    .coupon-right-f{
        display: flex;
        width: .56rem;
        height: .26rem;
        background:  #FFFFFF;
        border-radius: .13rem;
        justify-content: center;
        align-items: center;
        line-height: .26rem;
        text-align: center;
        font-size: .12rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #FF4B00;
        border: 1px solid #FFB7B7;
    }
}

.coupon-discription{
    display: flex;
    width: 100%;
    height: .29rem;
    line-height: .29rem;
    align-items: center;    
    background: #FFFFFF;
    border-radius: 0 0 .1rem .1rem;
    .coupon-discription-text{
        width: 89%;
        height: .14rem;
        margin: 0 .18rem;
        font-size: .1rem;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.45);
        line-height: .14rem;
    }
}
</style>