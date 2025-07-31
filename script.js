const { createApp } = Vue;

createApp({
  data() {
    return {
      angka1: null,
      angka2: null,
      hasil: null
    };
  },
  methods: {
    hitung(operator) {
      switch (operator) {
        case '+':
          this.hasil = this.angka1 + this.angka2;
          break;
        case '-':
          this.hasil = this.angka1 - this.angka2;
          break;
        case '*':
          this.hasil = this.angka1 * this.angka2;
          break;
        case '/':
          this.hasil = this.angka2 !== 0 ? (this.angka1 / this.angka2).toFixed(2) : 'Error: Bagi 0';
          break;
      }
    },
    reset() {
      this.angka1 = null;
      this.angka2 = null;
      this.hasil = null;
    }
  }
}).mount('#app');
