import Key from './components/Key'
import KeyFilter from './components/KeyFilter'

export default {
  data: function () {
    return {
      keyed: [],
      typeFilters: {
        keypress: true,
        keyup: false,
        keydown: false,
      }
    }
  },
  methods: {
    bind: function (e) {
      const {
        log,
        typeFilters,
      } = this
      if (e) console.info('toggle filters')
      for (const filter of Object.keys(typeFilters)) {
        if (typeFilters[filter]) window.addEventListener(filter, log)
      }
    },
    log: function (e) {
      const {
        keyed
      } = this
      keyed.unshift(e)
      if (keyed.length >= 7) keyed.pop()
    },
    toggleFilter: function(e) {
      const {
        log,
        typeFilters,
      } = this
      const {
        checked,
        id,
      } = e.target
      typeFilters[id] = checked
      window[typeFilters[id] ? 'addEventListener' : 'removeEventListener'](id, log)
    }
  },
  created: function () {
    this.bind()
  },
  name: 'app',
  components: {
    Key,
    KeyFilter,
  },
}