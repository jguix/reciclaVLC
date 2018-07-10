/**
 * Custom copy config, needed to copy custom components
 * The component lib installed under assets/lib is not automatically included in the vendor.js file
 * See 
 * https://github.com/Aaron-Sterling/time-ago-web-component/blob/master/docs/ionic-angular-setup.md
 * See https://forum.ionicframework.com/t/example-integration-stenciljs-web-component-in-ionic-app/106083/5
 */
module.exports = {
  copyTimeAgoWebComponent: {
    src: ['{{ROOT}}/src/assets/lib/components/my-google-maps/dist/mycomponent**/*'],
    dest: '{{BUILD}}'
  }
}