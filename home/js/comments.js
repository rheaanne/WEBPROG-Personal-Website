export default {
    data() {
      return {
        sections: ["about", "education", "Gallery", "contact"], // Sections with comments
        comments: {
          about: [],
          education: [],
          Gallery: [],
          contact: []
        },
        newComment: "",
      };
    },
    methods: {
      /**
       * Add a comment to a specific section.
       * @param {string} section - The section to which the comment belongs.
       */
      addComment(section) {
        if (!this.newComment.trim()) {
          alert("Comment cannot be empty!");
          return;
        }
        if (!this.comments[section]) {
          this.comments[section] = [];
        }
        this.comments[section].push(this.newComment.trim());
        this.newComment = "";
      },
  
      /**
       * Retrieve all comments for a specific section.
       * @param {string} section - The section for which comments are retrieved.
       * @returns {Array} Array of comments for the section.
       */
      getComments(section) {
        return this.comments[section] || [];
      },
  
      /**
       * Render comments for a specific section.
       * @param {string} section - The section for which comments are rendered.
       */
      renderComments(section) {
        const sectionComments = this.getComments(section);
        const commentsList = document.querySelector(`#${section}-comments`);
        if (!commentsList) return;
  
        commentsList.innerHTML = ""; // Clear existing comments
        sectionComments.forEach((comment) => {
          const li = document.createElement("li");
          li.textContent = comment;
          commentsList.appendChild(li);
        });
      }
    },
    mounted() {
      // Example of rendering comments for all sections on load
      this.sections.forEach((section) => {
        this.renderComments(section);
      });
    }
  };
  