import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faMapMarked,
  faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faBars, faMapMarked, faPhone, faEnvelope)

Vue.component('font-awesome-icon', FontAwesomeIcon)
