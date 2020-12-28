<template>
    <div class="container">
        <div style="height:.44rem"></div>
        <div class="coupon-container">
            <div class="coupon">
                <div class="coupon-left">
                    <div class="coupon-value">
                        <div class="coupon-value-icon">￥</div>
                        <div class="coupon-value-text"></div>
                    </div>
                    <div class="coupon-condition"></div>
                </div>
                <div class="coupon-center">
                    <div class="coupon-name"></div>
                    <div class="coupon-time"></div>
                </div>
                <div class="coupon-right">
                    <div class="coupon-btn"></div>
                </div>
            </div>
            <div class="coupon-discription">

            </div>
        </div>
    </div>
</template>

<script>
export default { 
    
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
    padding: 0px 18px;
    background: #FFF4EF;
    box-shadow: 0px 0px 1px 0px #E6E6E6;
}

.coupon{
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: .7rem;
    .coupon-left{
        height: .4rem;
        width: 1.6rem;
        display: flex;
        flex-direction: column;
    }

    .coupon-center{
        height: .4rem;
        width: 1.6rem;
        display: flex;
        flex-direction: column;
    }

    .coupon-right{
        width: 56px;
        height: 26px;
        background: linear-gradient(320deg, #FF4B00 0%, #FFDC23 100%);
        border-radius: 13px;
    }
}

.coupon-discription{
    width: 100%;
    height: .29rem;
}
</style>