import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faBars,
  faMapMarked,
  faPhone,
  faEnvelope,
  faArrowCircleRight,
  faChevronUp,
  faArrowLeft,
  faArrowRight,
  faTimes
} from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookSquare,
  faInstagram,
  faYoutube,
  faAmazon
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
  faAmazon,
  faYoutube,
  faArrowLeft,
  faArrowRight,
  faTimes
)

Vue.component('font-awesome-icon', FontAwesomeIcon)
