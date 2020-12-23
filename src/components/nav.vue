<template>
    <header class="product-nav">
        <div class="product-nav-container">
            <div class="nav-left">
                <van-icon name="arrow-left" size='.18rem' class="nav-back-icon"/>
            </div>
            <div class="nav-center">商品详情</div>
            <div class="nav-right">
                <div class="nav-right-icon">
                    <img src="../assets/images/退出.png" class="exit-icon">
                    <img src="../assets/images/详情.png" class="detail-icon">
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>
.product-nav{
    width: 3.75rem;
    height: .44rem;
    top: 0;
    position: fixed;
    .product-nav-container{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        height: 100%;
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
            width: .64rem;
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