<template>
    <div class="purchase-content">
        <div class="student-info">
            <div class="student-info-title"></div>
            <div class="student-name"></div>
        </div>
        <div class="school-name">

        </div>
        <div class="course-class">
            <div class="course-class-icon">班</div>
            <div class="course-class-name">{{$store.state.course[0].name}}</div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="less" scoped>

.purchase-content{
    display: flex;
    width: 100%;
    height: calc(100vh - 1.12rem);
    background: #FFFFFF;
    margin-top: .44rem;
    flex-direction: column;
}

.course-class{
    display: flex;
    flex-direction: row;
    height: .25rem;
    align-items: center;
    .course-class-icon{
        width: .18rem;
        height: .18rem;
        background: rgba(77, 148, 255, 0.1);
        border-radius: 1px;
        border: 1px solid #3D8AFF;
        font-size: .12rem;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #3D8AFF;
        text-align: center;
        line-height: .18rem;
    }
    .course-class-name{
        width: 2.40rem;
        height: .2rem;
        margin-left: .05rem;
        font-size: .14rem;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #444444;
        line-height: .20rem;
    }
}
</style>