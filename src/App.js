import Key from './components/Key'

export default {
  data: function () {
    return {
      keyed: []
    }
  },
  methods: {
    log: function (e) {
      const {
        keyed
      } = this
      keyed.unshift(e)
      if (keyed.length >= 7) keyed.pop()
      console.info(keyed)
    }
  },
  created: function () {
    window.addEventListener('keypress', this.log)
    window.addEventListener('keyup', this.log)
  },
  name: 'app',
  components: {
    Key,
  },
}