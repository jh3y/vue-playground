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
      },
      valueFilters: {
        numeric: true,
        letters: true,
        'everything else': true,
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
    clear: function () {
      this.keyed.splice(0)
    },
    log: function (e) {
      const {
        keyed
      } = this
      const {
        which,
      } = e
      const isALetter = (which > 96 && which < 123) || (which > 64 && which < 91)
      const isANumber = (which > 47 && which < 58)
      if (this.valueFilters.letters && isALetter) keyed.unshift(e)
      if (this.valueFilters.numeric && isANumber) keyed.unshift(e)
      if (this.valueFilters['everything else'] && (!isALetter && !isANumber)) keyed.unshift(e)
      if (keyed.length >= 7) keyed.pop()
    },
    toggleFilter: function(e) {
      const {
        log,
        typeFilters,
        valueFilters,
      } = this
      const {
        checked,
        id,
        dataset,
      } = e.target
      this[`${dataset.type}Filters`][id] = checked
      if (dataset.type === 'type')
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