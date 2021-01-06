<template>
    <div class="purchase-content">
        <div class="student-info">
            <div class="student-info-container">
                <div class="student-info-title">学员信息</div>
                <div class="student-info-content">
                    <div class="student-name">周梓</div>
                    <img class="student-sex" :src="boy">
                    <div class="student-phone"></div>
                </div>
            </div>
            <div class="student-info-btn">
                <img src="../../assets/images/右箭头.svg">
            </div>
        </div>
        <div class="school-name">
            <div class="school-name-text">这里写校区的名字</div>
        </div>
        <div class="course-container">
            <div class="course-class">
                <div class="course-class-icon">班</div>
                <div class="course-class-name">{{$store.state.course[0].name}}</div>
            </div>
            <div class="course-content">
                <div class="class-name">这里是学校名称</div>
                <div class="course">
                    <img class="course-img" :src='$store.state.course[0].url'>
                    <div class="course-info">
                        <div class="course-time">
                            <van-icon name="underway-o" size=".18rem"/>
                            <div class="course-time-date">{{$store.state.course[0].date}}</div>
                        </div>
                        <div class="course-teacher">
                            <van-icon name="friends-o" size=".18rem"/>
                            <div class="course-teacher-main"></div>
                        </div>
                        <div class="course-time-number">
                            <van-icon name="tosend" size=".18rem"/>
                            <div class="course-time-text"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            boy: require('../../assets/images/boy.svg'),
        }
    }
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

.student-info{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 94.67%;
    height: 11.09%;
    margin: 1.5% 2.67% 0;
    border-top: .03rem #66b4fd solid;
    .student-info-container{
        display: flex;
        flex-direction: column;
        width: 41%;
        height: 60%;
        justify-content: space-between;
        margin-left: 4.23%;
        .student-info-title{
            width: 45%;
            height: 45%;
            font-size: .16rem;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #333333;
            line-height: 100%;
        }

        .student-info-content{
            width: 100%;
            height: 41%;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            .student-name{
                min-width: .24rem;
                height: .18rem;
                font-size: .12rem;
                font-weight: 400;
                color: #151E26;
                line-height: .18rem;
            }
            .student-sex{
                width: .16rem;
                height: .16rem;
                
            }
            .student-phone{
                width: .77rem;
                height: .18rem;
                font-size: .12rem;
                font-weight: 400;
                color: #151E26;
                line-height: .18rem;
            }
        }
    }
    .student-info-btn{
        width: .16rem;
        height: .16rem;
        margin-right: 4.23%;
    }

}

.school-name{
    width: 94.67%;
    height: 5.1%;
    margin: 1.5% 2.67% 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .school-name-text{
        width: 92%;
        height: 60%;
        font-size: .14rem;
        font-weight: 400;
        color: #000000;
        line-height: 100%;
    }
}

.course-container{
    width: 86.67%;
    height: 1.7rem;
    margin: 1.5% 2.67% 0;
    padding: 0 4%;
    .course-class{
        display: flex;
        flex-direction: row;
        width: 3.25rem;
        height: .45rem;
        align-items: center;
        border-bottom: .01rem rgba(25, 31, 37, 0.12);;
        .course-class-icon{
            width: .18rem;
            height: .18rem;
            background: rgba(77, 148, 255, 0.1);
            border-radius: 1px;
            border: 1px solid #3D8AFF;
            font-size: .12rem;
            font-weight: 500;
            color: #3D8AFF;
            text-align: center;
            line-height: .18rem;
        }
        .course-class-name{
            width: 2.40rem;
            height: .2rem;
            margin-left: .05rem;
            font-size: .16rem;
            font-weight: 500;
            color: #333333;;
            line-height: .2rem;
        }
    }
}

.course-content{
    display: flex;
    flex-direction: column;
    width: 3.25rem;
    height: 1.24rem;
    .class-name{
        width: 3.05rem;
        height: .2rem;
        font-size: .14rem;
        font-weight: 400;
        color: #000000;
        line-height: .2rem;
        margin: .08rem 0;
    }
    .course{
        display: flex;
        flex-direction: row;
        align-items: center;
        height: .71rem;

        .course-img{
            width: .71rem;
            height: .71rem;
        }
    }
    
}

.course-time, .course-teacher, .course-time-number{
    display: flex;
    flex-direction: row;
    height: .25rem;
    align-items: center;
    margin-left: .06rem;
}

.course-time-date{
    width: 1.04rem;
    height: .18rem;
    margin-left: .05rem;
    font-size: .14rem;
    font-weight: 400;
    color: #151E26;
    line-height: .18rem; 
    font-size: .14rem;
}
</style>