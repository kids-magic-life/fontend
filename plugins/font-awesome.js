import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faMapMarked,
  faPhone,
  faEnvelope,
  faArrowCircleRight,
  faChevronUp
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookSquare,
  faInstagram,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(
  faBars,
  faMapMarked,
  faPhone,
  faEnvelope,
  faArrowCircleRight,
  faChevronUp,
  faFacebookSquare,
  faInstagram,
  faYoutube
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
