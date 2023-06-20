// The whole reason on why we do this is bc 
// we want to trick vite to build the jpg
// so that it works in production

// NOTE: There might be easier solutions, but im just trippin rn

import a from '/assets/images/books/86_light_novel.jpg'
import b from '/assets/images/books/attack_on_titan_cover.jpg'
import c from '/assets/images/books/beyond_journeys_end_cover.jpg'
import d from '/assets/images/books/vinland_saga_cover.jpg'
import e from '/assets/images/books/violet_evergarden_cover.jpg'

const ImageMap = {
  '/assets/images/books/86_light_novel.jpg': a,
  '/assets/images/books/attack_on_titan_cover.jpg': b,
  '/assets/images/books/beyond_journeys_end_cover.jpg': c,
  '/assets/images/books/vinland_saga_cover.jpg': d,
  '/assets/images/books/violet_evergarden_cover.jpg': e,
}

export default ImageMap
