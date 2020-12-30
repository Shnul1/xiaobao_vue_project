<template>
    <div style="width: 100%">
        <product-nav></product-nav>
        <div style="height:.44rem"></div>
        <div class="container">
            <div class="course-picture" :style="{backgroundImage:'url('+ $store.state.course[0].url +')'}"></div>
            <div class="course">
                <div class="course-nav">
                    <div class="course-price-icon">￥</div>
                    <div class="course-price">{{coursePriceSum}}</div>
                    <div class="course-student-number">{{$store.state.course[0].student}}人已报名</div>
                </div>
                <div class="coupon-container">
                    <van-coupon-cell
                        title="优惠券列表"
                        :style="{'font-family': 'PingFangSC-Medium, PingFang SC', 'color': '#151E26', 'font-weight': '400'}"
                        class="coupon-cell"
                        :coupons="$store.state.coupons"
                        :chosen-coupon="chosenCoupon"
                        @click="showList=true"
                    />
                    <van-popup
                        v-model="showList"
                        round
                        position="bottom"
                        style="height: 60%; padding-top: 3px; overflow: auto;"
                        >
                        <van-coupon-list
                            class="coupon-list"
                            :coupons="$store.state.coupons"
                            :chosen-coupon="chosenCoupon"
                            :disabled-coupons="disabledCoupons"
                            :show-exchange-bar="false"
                            :show-close-button="false"
                            @change="onChange"
                        />
                    </van-popup>
                </div>
                <product-info
                 :coursePriceSum="coursePriceSum" 
                 @itemclick="infoClick">
                </product-info>
            </div>
        </div>
        <product-bottom></product-bottom>
    </div>
</template>

<script>
import ProductBottom from '@/components/purchase_bottom.vue'
import ProductNav from '@/components/product_nav.vue'
import ProductInfo from '@/components/product_info.vue'
export default {
    components: {
        'product-bottom': ProductBottom,
        'product-nav': ProductNav,
        'product-info': ProductInfo,
    },
    data() {
        return {
            showList: false,
            chosenCoupon: -1,
            disabledCoupons: [],
            coursePriceSum: this.$store.state.course[0].period.price[0]
        }
    },
    methods: {
        onChange(index) {
            this.showList = false;
            this.chosenCoupon = index;
        },
        infoClick(i) {
            this.coursePriceSum = this.$store.state.course[0].period.price[i]
        }
    },
    computed: {

    },
}
</script>

<style lang="less" scoped>
.container{
    width: 100%;
    height: calc(100vh - 1.12rem);
    overflow: auto;
}

.container::-webkit-scrollbar {
   display: none;
} 

.course-picture{
    width: 100%;
    height: 2.5rem;
    z-index: 5;
}

.course{
    position: relative;
    width: 100%;
    top: -.2rem;
    z-index: 10;
    .course-nav{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        width: 100%;
        height: .7rem;
        border-radius: .2rem .2rem 0 0;
        background: linear-gradient(to right, rgb(255, 62, 62) , rgb(255, 90, 133));
        .course-price{
            height: .25rem;
            width: 1.65rem;
            color: white;
            font-size: .25rem;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 530;
            line-height: .25rem;
            
        }
        .course-price-icon{
            position: absolute;
            left: .2rem;
            display: block;
            height: .125rem;
            width: .125rem;
            color: white;
            font-size: .125rem;                                                            
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 530;
            line-height: .125rem;  
        }
        .course-student-number{
            width: .75rem;
            height: .2rem;
            color: white;
            font-size: .125rem;
            font-family: PingFangSC-Medium, PingFang SC;
            line-height: .2rem; 
        }
    }
    .coupon-container{
        width: 100%;
        height: .5rem;
    }
}
</style>