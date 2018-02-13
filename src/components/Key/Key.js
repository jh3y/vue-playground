export default {
  name: 'key',
  data: function () {
    return {
      key: '',
      keyVal: '',
    }
  },
  methods: {
    logIt: function (e) {
      console.info(e)
      e.preventDefault()
      this.keyVal = e.which
      this.key = e.key.trim() === '' ? e.code : e.key
    }
  }
}