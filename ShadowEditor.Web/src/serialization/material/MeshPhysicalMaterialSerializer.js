import BaseSerializer from '../BaseSerializer';
import MaterialSerializer from './MaterialSerializer';

/**
 * MeshPhysicalMaterialSerializer
 * @author tengge / https://github.com/tengge1
 */
function MeshPhysicalMaterialSerializer() {
    BaseSerializer.call(this);
}

MeshPhysicalMaterialSerializer.prototype = Object.create(BaseSerializer.prototype);
MeshPhysicalMaterialSerializer.prototype.constructor = MeshPhysicalMaterialSerializer;

MeshPhysicalMaterialSerializer.prototype.toJSON = function (obj) {
    return MaterialSerializer.prototype.toJSON.call(this, obj);
};

MeshPhysicalMaterialSerializer.prototype.fromJSON = function (json, parent, server) {
    var obj = parent === undefined ? new THREE.MeshPhysicalMaterial() : parent;

    MaterialSerializer.prototype.fromJSON.call(this, json, obj, server);

    return obj;
};

export default MeshPhysicalMaterialSerializer;