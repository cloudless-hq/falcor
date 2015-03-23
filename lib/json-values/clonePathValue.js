var clone = require("../support/clone");
module.exports = function(opts, node, value, path) {
    var path = path.slice(0);
    var json;
    if(node == null) {
        if(opts.materialized == true) {
            json = Object.create(null);
            json.$type = "sentinel";
        }
    } else if(opts.boxed == true) {
        json = clone(node);
    } else if(value === undefined && opts.materialized == true) {
        json = clone(node);
    } else {
        json = value;
    }
    
    var pv = Object.create(null);
    pv.path = path;
    pv.value = json;
    
    return pv;
}