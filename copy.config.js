/**
 * The component lib installed under assets/lib is not automatically included in the vendor.js file
 * Therefore it needs to be copied.
 */
module.exports = {
  copyTimeAgoWebComponent: {
    src: ['{{ROOT}}/src/assets/lib/components/my-google-maps/dist/mycomponent**/*'],
    dest: '{{BUILD}}'
  }
}