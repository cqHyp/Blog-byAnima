<template>
  <div class="main-wrapper">
    <div class="header-wrapper">
      <div class="navbar-wrapper">
        <div class="blog-name">
          <div class="site-text">
            <h1 class="site-title">
              <span><a href="http://cqhpoldi.com">blog name</a></span>
            </h1>
          </div>
        </div>
        <div class="navname">
          <div class="prime_nav">
            <ul>
              <li><a href="http://cqhpoldi.com"><span>首页</span></a></li>
              <li><a href="http://cqhpoldi.com"><span>About</span></a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="header-img-wrapper">
        <img class="header-img" src="../../components/common/img/glasses.jpg"/>
        <div class="title-wrapper">
          <div class="header-page-title-inside">
            <h1 class="entry-title">cqhPoldi's blog</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="content-wrapper">
      <div class="container" style="padding: 0">
        <div class="main">
          <div class="content-masonry">
            <article-cell></article-cell>
            <article-cell></article-cell>
            <article-cell></article-cell>
            <article-cell></article-cell>
            <article-cell></article-cell>
            <article-cell></article-cell>
            <article-cell></article-cell>
            <article-cell></article-cell>
            <article-cell></article-cell>
            <article-cell></article-cell>
          </div>
          <div class="navigation"></div>
        </div>
      </div>
      <div class="footer-wrapper">
        <div class="colophon-inside">
          <section class="widget-container widget_search">

          </section>
        </div>
      </div>
    </div>
    <div class="bottom-warpper">
      <div class="footer-inside"></div>
    </div>
  </div>
</template>
<script>
  import ElButton from "../../../node_modules/element-ui/packages/button/src/button.vue";
  import article from '../../components/common/module/Article.vue'
  export default {
    components: {
      ElButton,
      'article-cell': article
    },
    data(){
      return{

      }
    }
  }
</script>
<style lang="scss">
  .main-wrapper{
    margin: 0;
    padding: 0;
    .header-wrapper{
      height: 420px;
      position: relative;
      .navbar-wrapper{
        position: fixed;
        top: 0;
        left: 0;
        background-color: #ffffff;
        width: 100%;
        display: flex;
        justify-content: space-between;
        z-index: 999;
        border-bottom: 1px solid rgba(0,0,0,0.2);
        .blog-name{
          height: 85px;
          float: left;
          margin-left: 30px;
          -webkit-transition: .5s height ease-in-out;
          transition: .5s height ease-in-out;
          .site-text{
            position: relative;
            top: 50%;
            display: inline-block;
            float: left;
            -webkit-transform: translateY(-50%);
            -ms-transform: translateY(-50%);
            transform: translateY(-50%);
            .site-title{
              font-family: Raleway;
              font-size: 120%;
              font-weight: 400;
              float: left;
              position: relative;
              display: inline-block;
              line-height: 1.4;
              -webkit-transition: .35s ease-out all;
              -ms-transition: .35s ease-out all;
              transition: .35s ease-out all;
              &>span>a{
                color: #D0422C;
                &:link,&:visited{
                  text-decoration: none;

                }
              }
            }
          }
        }
        .navname{
          margin-right: 40px;
          .prime_nav{
            &>ul{
              margin: 0;
              &>li{
                display: block;
                float: left;
                position: relative;
                white-space: nowrap;
                &>a{
                  line-height: 85px;
                  position: relative;
                  z-index: 999;
                  font-family: Raleway;
                  font-size: 100%;
                  font-weight: 300;
                  padding: 0 24px;
                  &>span{
                    position: relative;
                    display: inline-block;
                    line-height: 2.5em;
                  }
                }
              }
            }
          }
        }
      }
      .header-img-wrapper{
        position: relative;
        margin-top: 85px;
        .header-img{
          display: block;
          width: inherit;
          max-width: 100%;
          margin: 0 auto;
          background-size: cover;
          background-position: 50% 50%;
          background-attachment: fixed;
        }
        .title-wrapper{
          position: absolute;
          width: 100%;
          margin: 0 auto;
          max-width: 1380px;
          right: 0;
          top: 37%;
          left: 0;
          -webkit-animation: .7s .15s header-title forwards;
          animation: .7s .15s header-title forwards;
          padding: 0 30px;
          box-sizing: border-box;
          .header-page-title-inside{
            background-color: rgba(0,0,0,0.6);
            box-shadow: 0 -70px 70px rgba(0,0,0,0.2) inset;
            position: relative;
            min-height: 150px;
            margin: 0 auto;
            padding: 2em 1em;
            border-radius: 10px 10px 0 0;
            text-align: center;
            color: #FFF;
            .entry-title{
              font-family: Raleway;
              font-size: 300%;
              font-weight: 300;
            }
          }
        }
      }

    }
    .content-wrapper{
      .container{
        display: block;
        display: -ms-flexbox;
        display: -webkit-box;
        display: flex;
        float: none;
        width: 100%;
        margin: 0;
        overflow: hidden;
        .main{
          width: 100%;
          padding-left: 2em;
          padding-right: 2em;
          padding-top: 4em;
          position: relative;
          background-color: #FFF;
          clear: both;
          overflow: hidden;
          min-height: 400px;
          margin-bottom: 0;
          .content-masonry{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            &>div{
              margin-bottom: 50px;
              &:nth-child(2n+1){
                margin-right:40px;
              }
            }
          }
        }
      }
      .footer-wrapper{
        background-color: #222A2C;
        color: #AAAAAA;
        width: 100%;
        min-height: 300px;
        .colophon-inside{
          display: block;
          float: none;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          -webkit-box-flex: 1;
          -moz-flex: 1;
          -ms-flex: 1;
          flex: 1;
          -ms-flex-flow: row wrap;
          -webkit-box-orient: horizontal;
          -webkit-box-direction: normal;
          flex-flow: row wrap;
          height: 100%;
          overflow: hidden;
          min-height: 100%;
          margin: 0 auto;
          max-width: 100%;
          padding-left: 2em;
          padding-right: 2em;
          height: 100%;
          &:nth-child(3n+1){
            clear: both;
            padding-left: 0;
          }
          .widget-container{
            width: 33.3333%;
            display: block;
            float: left;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -moz-flex-direction: column;
            -ms-flex-direction: column;
            -webkit-box-orient: vertical;
            -webkit-box-direction: normal;
            flex-direction: column;
            position: relative;
            padding: 2em;
            /* align-items: center; */
          }
        }
      }
    }
    .bottom-warpper{
      background: #1d2527;
      display: block;
      overflow: visible;
      width: 100%;
      clear: both;
      .footer-inside{
        display: block;
        float: none;
        position: relative;
        overflow: hidden;
        padding-top: 2em;
        padding-bottom: 2em;
      }
    }
  }
</style>
