new Vue({
  el: '.header',
  data: {
    title: 'Let\'s write some posts'
  }
});

new Vue({
  el: 'main',
  data: {
    articles: [
      {
        title: 'Create once, publish everywhere'
      },

      {
        title: 'Meaningfully Judging Performance in Terms of User Experience'
      },

      {
        title: 'Can Libraries Benefit from Dark Patterns?'
      }
    ],
    newArticle : ''
  },

  methods: {
    addPost : function() {
      var title = this.newArticle.trim();
      if ( title ) {
        this.articles.push({ title: title } );
        this.newArticle = '';
      }
    }
  }
});
