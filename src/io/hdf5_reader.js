/**
 *
 * @constructor
 * @param options.dataset
 * @param options.columnMajorOrder
 * @param options.rowMeta
 * @param options.colMeta
 * @param options.transpose
 *
 */
morpheus.Hdf5Reader = function (options) {
  if (options == null) {
    options = {};
  }
  this.options = options;
};
morpheus.Hdf5Reader.prototype = {

  read: function (fileOrUrl, callback) {
    return;
//    var hdf5 = require('hdf5').hdf5;
//    var h5lt = require('hdf5').h5lt;
//    var Access = require('hdf5/lib/globals').Access;
//    var name = morpheus.Util.getBaseFileName(morpheus.Util
//      .getFileName(fileOrUrl));
//    var file = new hdf5.File(fileOrUrl.path, Access.ACC_RDONLY);
//
//    var dim = file.getDatasetDimensions(this.options.dataset);
//    var matrixType = '1d';
//    if (!this.options.columnMajorOrder && dim[0] * dim[1] > 20000000) {
//      matrixType = '1d_backed';
//    }
//    var dataset = new morpheus.Dataset({
//      name: name,
//      rows: this.options.columnMajorOrder ? dim[1] : dim[0],
//      file: file,
//      columns: this.options.columnMajorOrder ? dim[0] : dim[1],
//      dataType: 'Float32',
//      type: matrixType,
//      backedRows: !this.options.transpose,
//      array: matrixType === '1d_backed' ? this.options.dataset : h5lt.readDataset(file.id, this.options.dataset),
//      columnMajorOrder: this.options.columnMajorOrder
//    });
//
//
//    var group = file.openGroup(this.options.rowMeta);
//    var names = group.getMemberNamesByCreationOrder();
//    names.forEach(function (name) {
//      try {
//        var val = h5lt.readDataset(group.id, name);
//        dataset.getRowMetadata().add(name).array = val;
//      } catch (x) {
//
//      }
//    });
//    group.close();
//    group = file.openGroup(this.options.colMeta);
//    names = group.getMemberNamesByCreationOrder();
//    names.forEach(function (name) {
//      try {
//        var val = h5lt.readDataset(group.id, name);
//        dataset.getColumnMetadata().add(name).array = val;
//      } catch (x) {
//
//      }
//    });
//    group.close();
//    if (matrixType !== '1d_backed') {
//      file.close();
//    }
//    if (this.options.transpose) {
//      dataset = new morpheus.TransposedDatasetView(dataset);
//    }
//    callback(null, dataset);
  }

};

morpheus.Hdf5Reader.getGctxInstance = function () {
  return new morpheus.Hdf5Reader({
    dataset: '0/DATA/0/matrix',
    rowMeta: '0/META/ROW/',
    colMeta: '0/META/COL/',
    columnMajorOrder: true
  });
};

morpheus.Hdf5Reader.getLoomInstance = function () {
  return new morpheus.Hdf5Reader({dataset: 'matrix', rowMeta: 'row_attrs', colMeta: 'col_attrs', transpose: false});
};
morpheus.Hdf5Reader.getH5adInstance = function () {
  return new morpheus.Hdf5Reader({dataset: 'X', rowMeta: 'obs', colMeta: 'var', transpose: false});
};


