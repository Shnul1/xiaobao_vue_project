<template>
    <div id='product_course'>
        <product-nav></product-nav>
        <div class="container">
            <div class="course-picture"></div>
            <div class="course">
                <div class="course-nav">
                    <div class="course-price">{{course.price}}</div>
                    <div class="course-student-number">{{course.student}}</div>
                </div>
                <div class="coupon-container">
                    <van-coupon-cell
                        title="优惠券列表"
                        :style="{'font-family': 'PingFangSC-Medium, PingFang SC', 'color': '#151E26', 'font-weight': '400'}"
                        class="coupon-cell"
                        :coupons="coupons"
                        :chosen-coupon="chosenCoupon"
                        @click="showList=true"
                    />
                    <van-popup
                        v-model="showList"
                        round
                        position="bottom"
                        style="height: 60%; padding-top: 3px;"
                        >
                        <van-coupon-list
                            :coupons="coupons"
                            :chosen-coupon="chosenCoupon"
                            :disabled-coupons="disabledCoupons"
                            :show-exchange-bar="false"
                            @change="onChange"
                        />
                    </van-popup>
                </div>
                <product-info></product-info>
            </div>
        </div>
        <product-bottom></product-bottom>
    </div>
</template>

<script>
import ProductBottom from '@/components/purchase_bottom.vue'
import ProductNav from '@/components/nav.vue'
import ProductInfo from '@/components/course.vue'
const coupon1={
        id: 1,
        condition: '满 30000元 使用',
        originCondition: 30000,
        reason: '订单未满30000元',
        value: 2000,
        name: '新年优惠促销',
        startAt: 1557910400,
        endAt: 1574592000,
    }
const coupon2={
        id: 2,
        condition: '满 30000元 使用',
        originCondition: 30000,
        reason: '订单未满30000元',
        value: 2000,
        name: '新年优惠促销',
        startAt: 1559104000,
        endAt: 1574592000,
    }
const coupon3={
        id: 3,
        condition: '满 30000元 使用',
        originCondition: 30000,
        reason: '订单未满30000元',
        value: 2000,
        name: '新年优惠促销',
        startAt: 1559104000,
        endAt: 1574592000,
    }

export default {
    components: {
        'product-bottom': ProductBottom,
        'product-nav': ProductNav,
        'product-info': ProductInfo,
    },
    data() {
        return {
            showList: true,
            chosenCoupon: -1,
            coupons: [coupon1, coupon2, coupon3],
            disabledCoupons: [],
            course: {
                
            }
        }
    },
    methods: {
        onChange(index) {
        this.showList = false;
        this.chosenCoupon = index;
        },
    },
}
</script>

<style lang="less" scoped>
.container{
    position: relative;
    width: 100%;
}

.course-picture{
    margin-top: .44rem;
    width: 100%;
    height: 2.5rem;
    z-index: 5;
    background-image: url(../assets/images/course.jpg);
}

.course{
    position: absolute;
    width: 100%;
    top: 2.2rem;
    z-index: 10;

    .course-nav{
        width: 100%;
        height: .7rem;
        border-radius: .2rem .2rem 0 0;
        background: linear-gradient(to right, rgb(255, 62, 62) , rgb(255, 90, 133));
    }

    .coupon-container{
    width: 100%;
    height: .5rem;
        .coupon-cell{
            height: .5rem;
        }
    }
}


</style>