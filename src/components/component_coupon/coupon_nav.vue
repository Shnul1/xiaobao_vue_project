<template>
    <div class="product-nav">
        <div class="product-nav-container">
            <div class="nav-left">
                <van-icon name="arrow-left" 
                size='.18rem' 
                class="nav-back-icon"
                @click="backToProduct('product')"/>
            </div>
            <div class="nav-center">{{title}}</div>
            <div class="nav-right">
                <div class="nav-right-icon">
                    <img src="../../assets/images/退出.png" class="exit-icon" @click="exit()">
                    <img src="../../assets/images/详情.png" class="detail-icon">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            title: "领取优惠券"
        }
    },
    methods: {
        exit() {
            // this.$router.push({ path: 'home' })
            console.log("退出成功！")
        },
        backToProduct(path) {
            this.$router.push(path)
        }
    },
    watch: {
        '$router' (to, from) {
            this.getInit();
        }
	}
}
</script>

<style lang="less" scoped>
.product-nav{
    width: 100%;
    height: .44rem;
    position: fixed;
    top: 0;
    
    .product-nav-container{
        background: white;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        z-index: 999;
        .nav-left{
            display: flex;
            width: 1.28rem;
            height: 100%;
            align-items: center;
            .nav-back-icon{
                position: absolute;
                left: .1rem;
            }
        }
        .nav-center{
            width: .8rem;
            height: .22rem;
            font-size: .16rem;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 530;
            color: #151E26;
            line-height: .22rem;
        }
        .nav-right{
            width: 1.28rem;
            height: 100%;
            .nav-right-icon{
                display: flex;
                width: 100%;
                height: 100%;
                align-items: center;
                .detail-icon{
                    position: absolute;
                    right: .55rem;
                    width: .18rem;
                    height: .18rem;
                }
                .exit-icon{
                    position: absolute;
                    right: .3rem;
                    width: .18rem;
                    height: .18rem;
                }
            }
        }
    }
}
</style>