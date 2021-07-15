class FailOver {
  constructor(url, method, data, timeout = 5000, maxRetries = 3) {
    this.timeout = timeout;
    this.url = url;
    this.maxRetries = maxRetries;
    this.currentTry = 0;
    this.method = method;
    this.data = data;
  }
  makeRequest = async () => {
    try {
      const data = await axios({
        url: this.url,
        timeout: 30000,
        headers: { "Content-Type": "application/json" },
        method: this.method,
        data: this.data,
      });

      if (data.status !== 201) {
        throw new Error();
      }

      console.log(data);
    } catch (error) {
      console.log(error);
      if (this.currentTry === this.maxRetries) {
        console.log(
          `${new Date().toLocaleDateString()} - Aborting on ${
            this.currentTry
          } attempted. At: ${this.url}`
        );
        return;
      }
      console.log(
        `${new Date().toLocaleDateString()} - Trying to make the request on ${
          this.currentTry
        } attempted. At: ${this.url}`
      );

      setTimeout(() => {
        this.makeRequest();
      }, this.timeout);

      this.currentTry++;
      //Tentando a cada 15s
      this.timeout = Math.floor(this.timeout + 1000 * 15);
    }
  };
}
