const clock = {
  getDate() {
    return new Date();
  },
  getHours() {
    return this.getDate().getHours();
  },
  getMinutes() {
    return this.getDate().getMinutes();
  },
  getSeconds() {
    return this.getDate().getSeconds();
  }
};
