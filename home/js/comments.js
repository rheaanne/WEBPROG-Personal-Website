new Vue({
  el: '#app',
  data() {
    return {
      newComment: "",
      comments: [],
    };
  },
  methods: {
    addComment() {
      if (this.newComment.trim()) {
        this.comments.push(this.newComment.trim());
        this.newComment = "";
      }
    },
    deleteComment(index) {
      this.comments.splice(index, 1);
    },
  },
});
