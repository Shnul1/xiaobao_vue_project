<template>
    <div class="course-container">
        <div class="course-container-info">
            <div class="course-info">
                <div class="course-name">{{$store.state.course[0].courseClass}}</div>
                <div class="course-class">
                    <div class="course-class-icon">班</div>
                    <div class="course-class-name">{{$store.state.course[0].name}}</div>
                </div>
                <div class="course-time">
                    <van-icon name="underway-o" size=".18rem"/>
                    <div class="course-time-date">{{$store.state.course[0].date}}</div>
                    <div class="course-everytime-icon"></div>
                    <div class="course-everytime">{{$store.state.course[0].time}}</div>
                </div>
                <div class="course-student">
                    <van-icon name="friends-o" size=".18rem"/>
                    <div class="course-student-left">剩余名额 {{$store.state.course[0].restStudent}}</div>  
                </div>
            </div>
            <div class="course-period">
                <div class="period-btn" v-for="(item, i) in $store.state.course[0].period.periodTime" :key="i" @click="priceSum(i)">{{item}}课时</div>
            </div>
        </div>
        <div class="course-detail-container">
            <div class="course-detail">
                <div class="course-detail-nav">
                    <div class="course-detail-icon"></div>
                    <div class="course-detail-title">课程详情</div>
                </div>
                <div class="course-detail-text">{{$store.state.course[0].courseDetail}}</div>
                <div class="course-detail-image"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        priceCount: Number
    },
    methods: {
        priceSum(i){
            // this.coursePriceSum = item * this.coursePrice;
            this.$emit('itemclick', i);
        }
    },
    computed: {

    },
    watch: {

    }
}
</script>

<style lang="less" scoped>
.course-container{
    margin-top: .1rem;
    width: 100%;
    background: #FFFFFF;
    .course-container-info{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        height: 2rem;
        .course-info{
            padding: .15rem 0 .2rem 0;
            width: 3.4rem;
            height: 1.29rem;
            border-bottom: 1px rgba(25, 31, 37, 0.12) solid;
            .course-name{
                width: 100%;
                height: .25rem;
                margin-bottom: .05rem;
                font-size: .18rem;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #444444;
                line-height: .25rem;
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
            .course-time{
                display: flex;
                flex-direction: row;
                height: .25rem;
                align-items: center;
                
                .course-time-date{
                    width: 1.04rem;
                    height: .18rem;
                    margin-left: .05rem;
                    font-size: .14rem;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #151E26;
                    line-height: .18rem; 
                    font-size: .14rem;
                }
                .course-everytime-icon{
                    width: .05rem;
                    height: .05rem;
                    margin-left: .05rem;
                    border-radius: .05rem;
                    background: #FFB30D;
                    box-shadow: 0px 1px 2px 0px #FFCD60;
                }
                .course-everytime{
                    width: 1.25rem;
                    height: .18rem;
                    margin-left: .05rem;
                    font-size: .14rem;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #151E26;
                    line-height: .18rem; 
                }

            }
            .course-student{
                display: flex;
                flex-direction: row;
                height: .25rem;
                align-items: center;
                .course-student-left{
                    margin-left: .05rem;
                    height: .17rem;
                    font-size: .12rem;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #8A8E92;
                    line-height: .17rem;
                }
            } 
        }

        .course-period{
            width: 3.4rem;
            height: .7rem;
            display: flex;
            flex-direction: row;
            align-items: center;
            .period-btn{
                width: .84rem;
                height: .36rem;
                background: #FFFFFF;
                border-radius: .22rem;
                margin-right: .15rem;
                border: .01rem solid #FF4B00;
                font-size: .14rem;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #FF4B00;
                text-align: center;
                line-height: .36rem;
            }

            .period-btn:hover{
                background: #FF4B00;
                color: #FFFFFF;
            }
        }
    }

    .course-detail-container{
        margin-top: .1rem;
        width: 100%;
        height: 3.35rem;
        background: #FFFFFF;
        display: flex;
        flex-direction: column;
        align-items: center;
        .course-detail{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 3.49rem;
            margin: .1rem 0 0 0;
            .course-detail-nav{
                display: flex;
                flex-direction: row;
                align-items: center;
                width: 3.49rem;
                height: 0.35rem;
                margin: 0 .1rem 0 .1rem;
                .course-detail-icon{
                    width: 5px;
                    height: 16px;
                    background: #FD7915;
                    border-radius: 4px;
                }
                .course-detail-title{
                    width: .64rem;
                    height: .22rem;
                    font-size: .16rem;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #444444;
                    line-height: .22rem;
                    margin: 0 0 0 .03rem;
                }
            }
            .course-detail-text{
                margin: 0 .08rem 0 .08rem;
            }
            .course-detail-image{
                width: 3.45rem;
                height: 1.82rem;
                margin: 0.1rem .08rem 0 .08rem;
                background-image: url(../assets/images/studentdetail.jpg);
            }
        }

    }
}
</style>