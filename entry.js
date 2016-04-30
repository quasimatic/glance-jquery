var $ = require('jquery');

var glanceSelector = require('glance-selector').default;

window.glanceSelector = glanceSelector;

window.$glance = function (selector) {
    return $(glanceSelector(selector));
};

window.$glance.addCustomLabels = function (labels) {
    glanceSelector.addCustomLabels(labels);
};

window.$glance.setLogLevel = function (level) {
    glanceSelector.setLogLevel(level);
}

window.$glance.jQuery = $;