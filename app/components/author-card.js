import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { htmlSafe } from '@ember/string';
import { computed } from '@ember/object';
import { url } from 'ember-ghost-w3css-blog-template/helpers/url'

export default Component.extend({
  blog: service(),
  router: service(),
  url: service(),
  tagName: '',
})
