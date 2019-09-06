'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on imagecoin-p2p Module {0}'
};

module.exports = require('@mceme/imagecoin-lib').errors.extend(spec);
