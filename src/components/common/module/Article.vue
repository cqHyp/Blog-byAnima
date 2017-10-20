<template>
  <div class="article-wrapper">
    <div class="entry-meta featured-image-meta">
      <span>
        <i class="fa fa-user-o fa-fw" title="Author"></i>
        <a>{{author}}</a>
      </span>
      <span>
        <i class="fa fa-clock-o fa-fw" title="date"></i>
        <a>{{date}}</a>
      </span>
      <span>
        <i class="fa fa-folder-o fa-fw" title="sort"></i>
        <a>{{sort}}</a>
      </span>
    </div>
    <div class="article-inner">
      <header class="entry-header">
        <h2 class="entry-title">
          <a>{{articleName}}</a>
        </h2>
      </header>
      <div class="entry-summary">
        <p>{{mainContent}}</p>
      </div>
      <div class="entry-meta entry-utility"></div>
      <footer class="post-continue-container">
        <a class="continue-reading-link">
          <span>Read more</span>
          <i class="fa fa-angle-right fa-fw"></i>
        </a>
        <span class="comments-link">
          <i class="fa fa-comment-o fa-fw"></i>
          <a>Leave a comment</a>
        </span>
      </footer>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        author: 'author',
        date: 'date',
        sort: 'sort',
        articleName: 'articleName',
        mainContent: 'mainContent',
      }
    }
  }
</script>
<style lang="scss">
  .article-wrapper{
    width: 600px;
    .entry-meta {
      clear: both;
      overflow: hidden;
      margin: 0;
      padding: 0;
      font-size: 1em;
      display: flex;
      &>span{
        color: #ababab;
        font-family: Roboto;
        font-size: 100%;
        font-weight: 300;
        display: inline-block;
        margin-right: 1em;
        &>i{
          font-size: 15px;
          line-height: 20px;
        }
        &>a{
          text-decoration: none;
          font-size: 15px;
          line-height: 20px;
        }
      }
    }
    .entry-utility {
      float: none;
      clear: both;
      overflow: visible;
      margin-bottom: 1em;
    }
    .article-inner{
      .entry-header{
        padding: 1em 0;
        .entry-title{
          font-size: 175%;
          margin: 0 1.5em 0 0;
          font-family: Raleway;
          font-weight: 300;
          &>a{
            color: #666;
            border-bottom: 1px solid transparent;
            padding-bottom: .2em;
            -webkit-transition: all .2s ease-out;
            transition: all .2s ease-out;
            &:link,&:visited{
              color: inherit;
              text-decoration: none;
            }
          }
        }
      }
      .entry-summary{
        padding-top: 1em;
        clear: both;
        word-wrap: break-word;
        &>p{
          color: #666;
          font-size: 15px;
          margin: 0;
        }
      }
      .post-continue-container{
        font-family: Roboto;
        font-size: 100%;
        font-weight: 300;
        display: flex;
        justify-content: space-between;
        .continue-reading-link{
          background-color: #efefef;
          display: block;
          float: left;
          position: relative;
          overflow: hidden;
          line-height: 3;
          padding: 0 1.4em;
          color: inherit;
          border-radius: 4px;
          -webkit-transition: all .2s ease-out;
          transition: all .2s ease-out;
          cursor: pointer;
          &>span{
            position: relative;
            z-index: 1;
            -webkit-transition: all .2s ease-in-out;
            transition: all .2s ease-in-out;
            font-size: 15px;
          }
          &:after{
            background-color: #D0422C;
            color: #FFF;
            position: absolute;
            left: -2em;
            bottom: 0;
            z-index: 0;
            height: 100%;
            width: 2em;
            margin: auto;
            font-family: "iconmeta";
            content: "";
            text-align: center;
            opacity: .8;
            -webkit-transition: all .2s ease-out;
            transition: all .2s ease-out;
          }
          &:hover{
            padding: 0 0 0 2.8em;
          }
          &:hover:after{
            left: 0;
          }
        }
        .comments-link{
          display: block;
          float: right;
          line-height: 3;
          font-size: 15px;
          cursor: pointer;
          &:hover{
            color: #D0422C;
          }
        }
      }
    }
  }
</style>
